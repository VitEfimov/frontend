import { Course, CheatsheetItem, Question, PracticeExercise, PrincipleCategory } from '../types';
import { coursesData } from '../data/courses';
import { practiceData } from '../data/practice';
import { cheatsheetData } from '../data/cheatsheets';
import { quizData } from '../data/questions';

export const getCourses = async (): Promise<Course[]> => {
    return coursesData;
};

export const getCheatsheets = async (): Promise<CheatsheetItem[]> => {
    // Flatten cheatsheets from the nested dictionary into an array for the old model logic
    // or just return as is if changing the component logic. Here we flatten to support the single list UI.
    const allCheatsheets: CheatsheetItem[] = [];
    for (const [framework, items] of Object.entries((cheatsheetData as any))) {
        (items as any[]).forEach(item => {
            allCheatsheets.push({
                topic: item.topic,
                code: item.code,
                explanation: item.explanation || "", // Handle missing explanation
                framework: framework
            });
        });
    }
    return allCheatsheets;
};

export const getQuestions = async (): Promise<Question[]> => {
    // Structure of questions.js mapped directly to Question UI model
    return (quizData as any[]).map((q, idx) => ({
        id: q.id || idx + 1,
        framework: q.framework || 'General',
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex !== undefined ? q.correctIndex : 0,
        explanation: q.explanation || ''
    }));
};

export const getPracticeExercises = async (): Promise<PracticeExercise[]> => {
    return practiceData;
};

export const getPrinciples = async (): Promise<PrincipleCategory[]> => {
    // For Phase 1 we might not have Principle data yet
    return [];
};
