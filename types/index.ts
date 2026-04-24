export interface Section {
    title: string;
    content: string;
}

export interface Course {
    framework: string;
    sections: Section[];
}

export interface CheatsheetItem {
    topic: string;
    code: string;
    explanation: string;
    framework: string;
}

export interface Question {
    id: number;
    framework: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface ValidationRule {
    type: 'regex' | 'contains' | 'missing';
    value: string;
    message: string;
}

export interface PracticeExercise {
    id: number;
    framework: string;
    category?: string;
    title: string;
    instruction: string;
    initialCode: string;
    validationRules: ValidationRule[];
}

export interface SubPrinciple {
    name: string;
    definition: string;
    example?: string;
}

export interface Principle {
    name: string;
    type: string;
    definition?: string;
    example?: string;
    principles?: SubPrinciple[];
    note?: string;
}

export interface PrincipleCategory {
    category: string;
    principles: Principle[];
}
