"use client";

import { useEffect, useState } from 'react';
import { getQuestions } from '@/lib/api';
import { Question } from '@/types';
import { Trophy, CheckCircle, XCircle, ArrowRight, RotateCcw, Play, BookOpen } from 'lucide-react';

export default function QuizPage() {
    const [allQuestions, setAllQuestions] = useState<Question[]>([]);
    const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [questionCount, setQuestionCount] = useState<number>(20);
    const [started, setStarted] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        getQuestions().then(setAllQuestions).catch(console.error);
    }, []);

    const topics = Array.from(new Set(allQuestions.map(q => q.framework)));

    const handleStart = () => {
        if (!selectedTopic) return;

        // Filter questions by the selected topic
        const filtered = allQuestions.filter(q => q.framework === selectedTopic);

        // Optional: shuffle questions
        const shuffled = [...filtered].sort(() => Math.random() - 0.5);

        // Limit the number of questions
        const limited = shuffled.slice(0, questionCount);

        setQuizQuestions(limited);
        setStarted(true);
        setCurrentIndex(0);
        setScore({ correct: 0, total: 0 });
        setShowResult(false);
        setSelectedOption(null);
        setIsAnswered(false);
    };

    const handleOptionClick = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);
        if (index === quizQuestions[currentIndex].correctIndex) {
            setScore(s => ({ ...s, correct: s.correct + 1 }));
        }
        setScore(s => ({ ...s, total: s.total + 1 }));
    };

    const handleNext = () => {
        if (currentIndex + 1 < quizQuestions.length) {
            setCurrentIndex(c => c + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    const handleRestart = () => {
        setStarted(false); // Go back to topic selection
        setSelectedTopic(null);
        setCurrentIndex(0);
        setScore({ correct: 0, total: 0 });
        setShowResult(false);
        setSelectedOption(null);
        setIsAnswered(false);
    };

    if (allQuestions.length === 0) return <div className="p-8 text-center text-gray-500">Loading quiz data...</div>;

    if (!started) {
        return (
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[60vh] py-12">
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center w-full max-w-2xl text-center">
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                        <BookOpen size={40} />
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Test Your Knowledge</h1>
                    <p className="text-gray-500 text-lg mb-10 max-w-md">
                        Select a framework or language below to begin a localized quiz.
                    </p>

                    <div className="w-full grid grid-cols-2 gap-4 mb-10">
                        {topics.map(topic => (
                            <button
                                key={topic}
                                onClick={() => setSelectedTopic(topic)}
                                className={`p-4 rounded-xl border-2 text-lg font-semibold transition-all ${selectedTopic === topic
                                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                                        : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-gray-50'
                                    }`}
                            >
                                {topic}
                                <div className="text-xs font-normal text-gray-500 mt-1">
                                    {allQuestions.filter(q => q.framework === topic).length} Questions
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="w-full mb-8">
                        <label className="block text-sm font-semibold text-gray-700 mb-3 text-left">Number of Questions</label>
                        <div className="flex gap-3">
                            {[20, 50, 100].map(count => (
                                <button
                                    key={count}
                                    onClick={() => setQuestionCount(count)}
                                    className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${
                                        questionCount === count
                                            ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                                            : 'border-gray-200 bg-white text-gray-600 hover:border-blue-300'
                                    }`}
                                >
                                    {count}
                                </button>
                            ))}
                            <button
                                onClick={() => setQuestionCount(9999)}
                                className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${
                                    questionCount === 9999
                                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                                        : 'border-gray-200 bg-white text-gray-600 hover:border-blue-300'
                                }`}
                            >
                                All
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={handleStart}
                        disabled={!selectedTopic}
                        className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${selectedTopic
                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/20'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        <Play fill="currentColor" size={20} />
                        Start Quiz
                    </button>
                </div>
            </div>
        );
    }

    if (showResult) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[500px] bg-white rounded-xl shadow-sm border p-8 max-w-3xl mx-auto mt-8">
                <Trophy size={80} className="text-yellow-500 mb-6 drop-shadow-sm" />
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Quiz Session Finished!</h2>

                <div className="bg-gray-50 rounded-2xl p-8 mb-8 w-full max-w-md text-center border">
                    <div className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Final Score</div>
                    <div className="text-7xl font-black text-blue-600 mb-4 tracking-tighter">
                        {Math.round((score.correct / score.total) * 100)}%
                    </div>
                    <div className="text-gray-600 font-medium text-lg">
                        <span className="text-green-600 font-bold">{score.correct} Correct</span> out of {score.total} Total
                    </div>
                </div>

                <button
                    onClick={handleRestart}
                    className="flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition shadow-lg"
                >
                    <RotateCcw size={20} /> Back to Topics
                </button>
            </div>
        );
    }

    const currentQuestion = quizQuestions[currentIndex];

    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Knowledge Check</h1>
                <div className="flex items-center gap-3">
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                        {selectedTopic}
                    </div>
                    <div className="text-sm font-bold text-blue-800 bg-blue-100 px-4 py-2 rounded-full shadow-sm">
                        Q {currentIndex + 1} <span className="text-blue-400 mx-1">/</span> {quizQuestions.length}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all">
                <div className="mb-8">
                    {currentQuestion.question.includes('\n') ? (
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-gray-800 leading-relaxed">
                                {currentQuestion.question.split('\n')[0]}
                            </h2>
                            <pre className="bg-slate-900 text-slate-50 p-5 rounded-xl text-sm md:text-base font-mono overflow-x-auto whitespace-pre-wrap shadow-inner border border-slate-700">
                                {currentQuestion.question.substring(currentQuestion.question.indexOf('\n') + 1)}
                            </pre>
                        </div>
                    ) : (
                        <h2 className="text-2xl font-bold text-gray-800 leading-relaxed">
                            {currentQuestion.question}
                        </h2>
                    )}
                </div>

                <div className="grid gap-3">
                    {currentQuestion.options.map((option, idx) => {
                        let className = "w-full text-left p-5 rounded-xl border-2 transition-all font-medium text-lg relative flex items-center justify-between ";

                        if (isAnswered) {
                            if (idx === currentQuestion.correctIndex) {
                                className += "border-green-500 bg-green-50 text-green-800 shadow-sm";
                            } else if (idx === selectedOption) {
                                className += "border-red-500 bg-red-50 text-red-800 shadow-sm";
                            } else {
                                className += "border-gray-100 text-gray-400 opacity-60";
                            }
                        } else {
                            className += "border-gray-200 hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-sm text-gray-700 cursor-pointer";
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleOptionClick(idx)}
                                disabled={isAnswered}
                                className={className}
                            >
                                <span>{option}</span>
                                {isAnswered && idx === currentQuestion.correctIndex && <CheckCircle className="text-green-500" strokeWidth={3} />}
                                {isAnswered && idx === selectedOption && idx !== currentQuestion.correctIndex && <XCircle className="text-red-500" strokeWidth={3} />}
                            </button>
                        );
                    })}
                </div>

                {isAnswered && (
                    <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                            Explanation
                        </h4>
                        <div className="text-blue-800 leading-relaxed text-sm md:text-base">
                            {currentQuestion.explanation ? (
                                <p>{currentQuestion.explanation}</p>
                            ) : (
                                <div className="mt-1">
                                    <span className="text-blue-700">The correct answer is: </span>
                                    <div className="mt-2 font-mono bg-blue-100/50 p-3 rounded-lg border border-blue-200 shadow-sm inline-block max-w-full overflow-auto">
                                        {currentQuestion.options[currentQuestion.correctIndex]}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={handleNext}
                                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 hover:shadow-lg transition-all flex items-center gap-2"
                            >
                                {currentIndex + 1 === quizQuestions.length ? 'See Results' : 'Next Question'}
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
