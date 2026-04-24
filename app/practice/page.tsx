"use client";

import { useEffect, useState } from 'react';
import { getPracticeExercises } from '@/lib/api';
import { PracticeExercise } from '@/types';
import Editor from '@monaco-editor/react';
import { Play, CheckCircle, AlertTriangle, Code, ChevronRight, ChevronDown, Database } from 'lucide-react';
import SqlSchemaPanel from '@/components/SqlSchemaPanel';
import alasql from 'alasql';

export default function PracticePage() {
    const [exercises, setExercises] = useState<PracticeExercise[]>([]);
    const [selectedExercise, setSelectedExercise] = useState<PracticeExercise | null>(null);
    const [code, setCode] = useState('');
    const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string | JSX.Element } | null>(null);
    const [sqlResult, setSqlResult] = useState<any[] | null>(null);

    // Grouping state
    const [expandedFrameworks, setExpandedFrameworks] = useState<string[]>(['SQL', 'Java', 'JavaScript', 'Cypress', 'pytest']);
    const [expandedCategories, setExpandedCategories] = useState<string[]>([]);


    const toggleFramework = (framework: string) => {
        setExpandedFrameworks(prev =>
            prev.includes(framework) ? prev.filter(f => f !== framework) : [...prev, framework]
        );
    };

    const toggleCategory = (category: string) => {
        setExpandedCategories(prev =>
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
    };

    const groupedExercises = exercises.reduce((acc, ex) => {
        const fw = ex.framework;
        if (!acc[fw]) acc[fw] = {};
        const cat = ex.category || 'General';
        if (!acc[fw][cat]) acc[fw][cat] = [];
        acc[fw][cat].push(ex);
        return acc;
    }, {} as Record<string, Record<string, PracticeExercise[]>>);

    useEffect(() => {
        getPracticeExercises().then(data => {
            setExercises(data);
            if (data.length > 0) {
                setSelectedExercise(data[0]);
                setCode(data[0].initialCode);
            }
        }).catch(console.error);

        // Initialize AlaSQL Database
        try {
            alasql('CREATE TABLE IF NOT EXISTS users (user_id INT PRIMARY KEY, full_name VARCHAR(100), email VARCHAR(100), country VARCHAR(50), created_at STRING)');
            alasql('CREATE TABLE IF NOT EXISTS products (product_id INT PRIMARY KEY, product_name VARCHAR(100), category VARCHAR(50), price DECIMAL(10,2), stock INT, created_at STRING)');
            alasql('CREATE TABLE IF NOT EXISTS orders (order_id INT PRIMARY KEY, user_id INT, order_date STRING, status VARCHAR(30))');
            alasql('CREATE TABLE IF NOT EXISTS order_items (order_item_id INT PRIMARY KEY, order_id INT, product_id INT, quantity INT, unit_price DECIMAL(10,2))');
            alasql('CREATE TABLE IF NOT EXISTS payments (payment_id INT PRIMARY KEY, order_id INT, amount DECIMAL(10,2), payment_method VARCHAR(50), payment_status VARCHAR(30), payment_date STRING)');

            const userCount: number = (alasql('SELECT COUNT(*) as c FROM users') as any[])[0].c;
            if (userCount === 0) {
                alasql(`INSERT INTO users VALUES 
                    (1, 'John Smith', 'john@example.com', 'USA', '2023-01-10'),
                    (2, 'Maria Garcia', 'maria@example.com', 'Spain', '2023-02-15'),
                    (3, 'David Lee', 'david@example.com', 'USA', '2023-03-20'),
                    (4, 'Anna Ivanova', 'anna@example.com', 'Germany', '2023-04-01')`);
                alasql(`INSERT INTO products VALUES
                    (1, 'Laptop', 'Electronics', 1200.00, 10, '2023-01-01'),
                    (2, 'Phone', 'Electronics', 800.00, 20, '2023-01-01'),
                    (3, 'Headphones', 'Accessories', 150.00, 50, '2023-01-01'),
                    (4, 'Desk Chair', 'Furniture', 300.00, 15, '2023-01-01')`);
                alasql(`INSERT INTO orders VALUES
                    (1, 1, '2023-05-01', 'completed'),
                    (2, 2, '2023-05-03', 'completed'),
                    (3, 1, '2023-05-10', 'pending'),
                    (4, 3, '2023-06-01', 'completed')`);
                alasql(`INSERT INTO order_items VALUES
                    (1, 1, 1, 1, 1200.00), (2, 1, 3, 2, 150.00), (3, 2, 2, 1, 800.00),
                    (4, 3, 4, 1, 300.00), (5, 4, 1, 1, 1200.00), (6, 4, 2, 1, 800.00)`);
                alasql(`INSERT INTO payments VALUES
                    (1, 1, 1500.00, 'credit_card', 'success', '2023-05-01'),
                    (2, 2, 800.00, 'paypal', 'success', '2023-05-03'),
                    (3, 4, 2000.00, 'credit_card', 'failed', '2023-06-01')`);
            }
        } catch (e: any) {
            console.error("AlaSQL init error", e);
        }
    }, []);

    const handleExerciseSelect = (ex: PracticeExercise) => {
        setSelectedExercise(ex);
        setCode(ex.initialCode);
        setFeedback(null);
        setSqlResult(null);
    };

    const handleValidate = () => {
        if (!selectedExercise) return;
        setSqlResult(null);

        // SQL Live Execution
        if (selectedExercise.framework === 'SQL') {
            try {
                if (!code.toLowerCase().includes('select')) {
                    setFeedback({ type: 'error', message: 'Only SELECT queries are allowed for this exercise.' });
                    return;
                }
                const result = alasql(code);
                setSqlResult(result as any[]);
            } catch (err: any) {
                setFeedback({ type: 'error', message: `SQL Error: ${err.message}` });
                return;
            }
        }

        for (const rule of selectedExercise.validationRules) {
            if (rule.type === 'regex') {
                let pattern = rule.value;
                let flags = '';
                if (pattern.includes('(?i)')) {
                    pattern = pattern.replace(/\(\?i\)/g, '');
                    flags = 'i';
                }
                try {
                    const regex = new RegExp(pattern, flags);
                    if (!regex.test(code)) {
                        setFeedback({ type: 'error', message: rule.message });
                        return;
                    }
                } catch (e) {
                    console.error("Invalid regex:", pattern, e);
                }
            } else if (rule.type === 'contains') {
                if (!code.includes(rule.value)) {
                    setFeedback({ type: 'error', message: rule.message });
                    return;
                }
            }
        }

        setFeedback({ type: 'success', message: 'Correct! Great job. 🎉' });
    };

    const renderSqlResult = () => {
        if (!sqlResult) return null;
        if (sqlResult.length === 0) {
            return <div className="text-gray-500 italic text-sm mt-2 font-mono ml-3 border-l-2 pl-3">Query executed successfully (0 rows returned).</div>;
        }

        const keys = Object.keys(sqlResult[0]);
        return (
            <div className="mt-3 overflow-x-auto max-h-[150px] border border-gray-200 rounded text-xs bg-white text-gray-800 shadow-sm relative z-10 w-full mb-2">
                <table className="min-w-full text-left border-collapse">
                    <thead className="bg-gray-100 sticky top-0 border-b">
                        <tr>
                            {keys.map((key) => (
                                <th key={key} className="p-2 border-r last:border-0 font-bold text-gray-700 whitespace-nowrap">
                                    {key}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {sqlResult.map((row, i) => (
                            <tr key={i} className="hover:bg-blue-50">
                                {keys.map((key) => (
                                    <td key={key} className="p-2 border-r last:border-0 truncate max-w-[200px]">
                                        {String(row[key])}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="flex gap-6 h-[calc(100vh-100px)]">
            {/* List */}
            <div className="w-1/3 border-r pr-6 flex flex-col h-full bg-white rounded-xl shadow-sm border overflow-hidden pb-4">
                <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Code size={20} className="text-blue-600" /> Simulator
                    </h2>
                    <span className="text-xs font-semibold bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                        {exercises.length} Tasks
                    </span>
                </div>

                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                    {Object.entries(groupedExercises).map(([framework, categories]) => (
                        <div key={framework} className="mb-2">
                            <button
                                onClick={() => toggleFramework(framework)}
                                className="w-full flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-all font-bold text-slate-700 mb-2 shadow-sm group"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    {framework}
                                </div>
                                {expandedFrameworks.includes(framework) ? <ChevronDown size={18} className="text-slate-400 group-hover:text-blue-500" /> : <ChevronRight size={18} className="text-slate-400 group-hover:text-blue-500" />}
                            </button>

                            {expandedFrameworks.includes(framework) && (
                                <div className="pl-3 space-y-4 border-l-2 border-slate-100 ml-2 mt-2 pb-2">
                                    {Object.entries(categories).map(([category, items]) => (
                                        <div key={category} className="space-y-2">
                                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">
                                                {category} — {items.length} Tasks
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                {items.map((ex) => (
                                                    <button
                                                        key={ex.id}
                                                        onClick={() => handleExerciseSelect(ex)}
                                                        className={`text-left p-3 rounded-xl border-2 transition-all flex flex-col gap-1 relative ${selectedExercise?.id === ex.id
                                                            ? 'bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-100'
                                                            : 'bg-white hover:bg-slate-50 hover:border-slate-300 border-slate-100'
                                                            }`}
                                                    >
                                                        <div className="flex items-center justify-between w-full">
                                                            <div className="text-xs font-bold text-slate-800 leading-tight">{ex.title}</div>
                                                            {selectedExercise?.id === ex.id && <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-sm shadow-blue-200"></div>}
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Workspace */}
            <div className="flex-1 flex gap-4 overflow-hidden">
                <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                    {selectedExercise ? (
                        <>
                            {/* Header Box */}
                            <div className="bg-white p-6 rounded-xl border shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <h1 className="text-2xl font-bold">{selectedExercise.title}</h1>
                                    <span className="text-sm font-semibold px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                                        ID: {selectedExercise.id}
                                    </span>
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed">{selectedExercise.instruction}</p>
                            </div>

                            {/* Editor Box */}
                            <div className="flex-1 border-2 rounded-xl overflow-hidden shadow-sm bg-white flex flex-col border-gray-200">
                                <div className="bg-gray-800 text-gray-400 text-xs font-mono py-1 px-4 flex items-center justify-between border-b border-gray-700">
                                    <span>main.{selectedExercise.framework === 'Python' || selectedExercise.framework === 'pytest' ? 'py' : selectedExercise.framework === 'SQL' ? 'sql' : 'js'}</span>
                                    <span>Editor</span>
                                </div>
                                <div className="flex-1 p-2 bg-[#1e1e1e]">
                                    <Editor
                                        height="100%"
                                        theme="vs-dark"
                                        defaultLanguage={selectedExercise.framework === 'Python' || selectedExercise.framework === 'pytest' ? 'python' : selectedExercise.framework === 'SQL' ? 'sql' : 'javascript'}
                                        language={selectedExercise.framework === 'Python' || selectedExercise.framework === 'pytest' ? 'python' : selectedExercise.framework === 'SQL' ? 'sql' : 'javascript'}
                                        value={code}
                                        onChange={(val) => setCode(val || '')}
                                        options={{
                                            minimap: { enabled: false },
                                            fontSize: 16,
                                            scrollBeyondLastLine: false,
                                            padding: { top: 16 },
                                            roundedSelection: true,
                                        }}
                                    />
                                </div>

                                {/* Footer / Console Box */}
                                <div className="p-4 border-t-2 border-gray-200 bg-gray-50 flex flex-col justify-between items-start min-h-[80px]">
                                    <div className="flex w-full justify-between items-center">
                                        <div className="flex-1 pr-4">
                                            {feedback ? (
                                                <div className={`flex items-center gap-3 text-sm font-medium p-3 rounded-lg border ${feedback.type === 'success'
                                                    ? 'bg-green-50 text-green-800 border-green-200'
                                                    : 'bg-red-50 text-red-800 border-red-200'
                                                    }`}>
                                                    {feedback.type === 'success'
                                                        ? <CheckCircle size={20} className="text-green-600 shrink-0" />
                                                        : <AlertTriangle size={20} className="text-red-600 shrink-0" />
                                                    }
                                                    <span className="leading-tight">{feedback.message}</span>
                                                </div>
                                            ) : (
                                                <div className="text-gray-400 text-sm flex items-center gap-2 italic">
                                                    <ChevronRight size={16} /> Ready to execute...
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            onClick={handleValidate}
                                            className="px-8 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition flex items-center gap-2 hover:shadow-lg shrink-0"
                                        >
                                            <Play size={20} fill="currentColor" /> Validate Code
                                        </button>
                                    </div>
                                    {renderSqlResult()}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-gray-400 bg-white rounded-xl border border-dashed border-gray-300">
                            <Code size={48} className="mb-4 opacity-30" />
                            <p className="text-xl font-medium text-gray-500">Select an exercise to start practicing</p>
                        </div>
                    )}
                </div>

                {selectedExercise?.framework === 'SQL' && (
                    <SqlSchemaPanel />
                )}
            </div>
        </div>
    );
}
