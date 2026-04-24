"use client";

import { useEffect, useState } from 'react';
import { getCheatsheets, getPrinciples } from '@/lib/api';
import { CheatsheetItem, PrincipleCategory } from '@/types';
import Editor from '@monaco-editor/react';

export default function SyntaxPage() {
    const [cheatsheets, setCheatsheets] = useState<CheatsheetItem[]>([]);
    const [filter, setFilter] = useState<string>('All');

    useEffect(() => {
        Promise.all([getCheatsheets(), getPrinciples()])
            .then(([cheatsheetsData, principlesData]) => {
                const principleItems: CheatsheetItem[] = [];
                principlesData.forEach(cat => {
                    cat.principles.forEach(p => {
                        let code = p.definition || '';
                        if (p.example) code += `\n\nExample:\n${p.example}`;
                        if (p.principles) {
                            p.principles.forEach(sub => {
                                code += `\n\n${sub.name}: ${sub.definition}`;
                                if (sub.example) code += ` (${sub.example})`;
                            });
                        }

                        principleItems.push({
                            topic: p.name,
                            framework: cat.category, // Use category as framework for filtering
                            code: code,
                            explanation: p.note || p.type || ''
                        });
                    });
                });
                setCheatsheets([...cheatsheetsData, ...principleItems]);
            })
            .catch(console.error);
    }, []);

    const frameworks = ['All', ...Array.from(new Set(cheatsheets.map(c => c.framework)))];
    const filteredItems = filter === 'All'
        ? cheatsheets
        : cheatsheets.filter(c => c.framework === filter);

    const getLanguage = (framework: string) => {
        const lower = framework.toLowerCase();
        if (lower.includes('python') || lower.includes('pytest') || lower.includes('fastapi')) return 'python';
        if (lower.includes('java') || lower.includes('spring')) return 'java';
        if (lower.includes('sql')) return 'sql';
        return 'javascript';
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Syntax Cheatsheets</h1>

            {/* Filter */}
            <div className="flex gap-2 mb-8 flex-wrap">
                {frameworks.map(fw => (
                    <button
                        key={fw}
                        onClick={() => setFilter(fw)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${filter === fw
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border'
                            }`}
                    >
                        {fw}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid gap-8">
                {filteredItems.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-sm border overflow-hidden flex flex-col">
                        <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
                            <h3 className="font-semibold text-lg">{item.topic}</h3>
                            <span className="text-xs font-mono px-2 py-1 rounded bg-gray-200 text-gray-700">
                                {item.framework}
                            </span>
                        </div>
                        <div className="h-96 border-b">
                            <Editor
                                height="100%"
                                defaultLanguage={getLanguage(item.framework)}
                                value={item.code}
                                options={{
                                    readOnly: true,
                                    minimap: { enabled: false },
                                    scrollBeyondLastLine: false,
                                    fontSize: 14,
                                    lineNumbers: 'on',
                                    folding: true,
                                    wordWrap: 'on',
                                }}
                            />
                        </div>
                        {item.explanation && (
                            <div className="p-4 bg-blue-50/30 text-sm text-gray-600 italic">
                                <strong>Explanation:</strong> {item.explanation}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
