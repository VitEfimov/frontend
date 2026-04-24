"use client";

import { useEffect, useState } from 'react';
import { getCourses } from '@/lib/api';
import { Course } from '@/types';
import { ChevronRight, Book } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


export default function LearnPage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [selectedSection, setSelectedSection] = useState<string | null>(null);

    useEffect(() => {
        getCourses().then(setCourses).catch(console.error);
    }, []);

    return (
        <div className="flex gap-6 h-full">
            {/* Course List */}
            <div className="w-1/3 border-r pr-6">
                <h2 className="text-2xl font-bold mb-6">Courses</h2>
                <div className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-200px)] pr-2 scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300">
                    {courses.map((course) => (
                        <div key={course.framework}>
                            <button
                                onClick={() => {
                                    setSelectedCourse(course);
                                    if (course.sections.length > 0 && !selectedSection) {
                                        setSelectedSection(course.sections[0].title);
                                    }
                                }}
                                className={`w-full text-left p-4 rounded-lg border transition ${selectedCourse?.framework === course.framework
                                        ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
                                        : 'bg-white hover:bg-gray-50 border-gray-100'
                                    }`}
                            >
                                <div className="font-semibold text-lg">{course.framework}</div>
                                <div className="text-sm text-gray-500">{course.sections.length} Topics</div>
                            </button>

                            {/* Sections expansion */}
                            {selectedCourse?.framework === course.framework && (
                                <div className="ml-4 mt-2 flex flex-col gap-1 border-l-2 border-blue-100 pl-4 py-1">
                                    {course.sections.map((section) => (
                                        <button
                                            key={section.title}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedSection(section.title);
                                            }}
                                            className={`text-left p-2 text-sm rounded-md transition ${selectedSection === section.title
                                                    ? 'bg-blue-100 text-blue-800 font-medium'
                                                    : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            {section.title}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Viewer */}
            <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100 min-h-[500px] overflow-y-auto max-h-[calc(100vh-160px)] scrollbar-thin scrollbar-thumb-gray-200">
                {selectedCourse && selectedSection ? (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight border-b pb-6">{selectedSection}</h1>
                        <div className="prose prose-blue max-w-none 
                            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900
                            prose-p:text-gray-600 prose-p:leading-relaxed
                            prose-strong:text-gray-900 prose-strong:font-semibold
                            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                            prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-10
                            prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:shadow-xl
                            prose-li:text-gray-600
                            prose-hr:border-gray-100">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {selectedCourse.sections.find(s => s.title === selectedSection)?.content || ''}
                            </ReactMarkdown>
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400 py-32 bg-gray-50/50 rounded-lg border-2 border-dashed border-gray-100">
                        <Book size={80} className="mb-6 opacity-10 text-blue-500" />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">Ready to learn?</h3>
                        <p className="text-gray-500 max-w-xs text-center">Select a course and topic from the sidebar to dive into the details.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

