import Link from 'next/link';
import { BookOpen, Code, Terminal, Trophy } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen p-4 flex flex-col">
            <h1 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Terminal className="text-green-400" />
                Gravity QA
            </h1>
            <nav className="flex flex-col gap-2">
                <Link href="/learn" className="flex items-center gap-2 p-3 rounded hover:bg-gray-800 transition">
                    <BookOpen size={20} />
                    <span>Theory</span>
                </Link>
                <Link href="/syntax" className="flex items-center gap-2 p-3 rounded hover:bg-gray-800 transition">
                    <Code size={20} />
                    <span>Syntax</span>
                </Link>
                <Link href="/quiz" className="flex items-center gap-2 p-3 rounded hover:bg-gray-800 transition">
                    <Trophy size={20} />
                    <span>Quiz</span>
                </Link>
                <Link href="/practice" className="flex items-center gap-2 p-3 rounded hover:bg-gray-800 transition">
                    <Terminal size={20} />
                    <span>Practice</span>
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
