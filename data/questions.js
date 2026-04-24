export const quizData = [
    {
        "id": 1,
        "framework": "pytest",
        "question": "What fixture scope runs once per test session?",
        "options": [
            "function",
            "class",
            "module",
            "session"
        ],
        "correctIndex": 3,
        "explanation": "Session scope runs once for entire test session, useful for expensive setups like DB connections."
    },
    {
        "id": 2,
        "framework": "Cypress",
        "question": "Which command is used to make an assertion?",
        "options": [
            "cy.assert()",
            "cy.expect()",
            "cy.should()",
            "cy.verify()"
        ],
        "correctIndex": 2,
        "explanation": "cy.should() is the most common way to create an assertion in Cypress (Chai-based)."
    },
    {
        "id": 3,
        "framework": "Playwright",
        "question": "How do you handle multiple tabs in Playwright?",
        "options": [
            "SwitchTo().window()",
            "context.waitForEvent('page')",
            "browser.tabs[1]",
            "It handles automatically"
        ],
        "correctIndex": 1,
        "explanation": "You typically wait for a 'page' event on the browser context."
    },
    {
        "id": 4,
        "framework": "Python",
        "question": "What is the difference between list and tuple?",
        "options": [
            "Lists are mutable; tuples are immutable.",
            "Lists are immutable; tuples are mutable.",
            "Lists can only store strings.",
            "Tuples can only store integers."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 5,
        "framework": "Python",
        "question": "What does the 'pass' keyword do?",
        "options": [
            "It skips the current iteration of a loop.",
            "It terminates the program.",
            "It is a null operation; nothing happens when it executes.",
            "It passes control to the parent class."
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 6,
        "framework": "Python",
        "question": "What is a decorator?",
        "options": [
            "A function that takes a function and extends its behavior.",
            "A class that inherits from multiple parents.",
            "A variable that cannot be changed.",
            "A library for GUI development."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 7,
        "framework": "Python",
        "question": "What is the output of print(2 ** 3)?",
        "options": [
            "6",
            "8",
            "9",
            "5"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 8,
        "framework": "Python",
        "question": "Which keyword is used to handle exceptions?",
        "options": [
            "catch",
            "except",
            "handle",
            "try-catch"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 9,
        "framework": "Python",
        "question": "What is the purpose of 'self' in a class?",
        "options": [
            "It refers to the class itself.",
            "It refers to the instance of the class.",
            "It is a reserved keyword for global variables.",
            "It allows access to private methods only."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 10,
        "framework": "Python",
        "question": "What is a lambda function?",
        "options": [
            "A named function defined with 'def'.",
            "A small anonymous function defined with 'lambda'.",
            "A function that runs on a server.",
            "A function that loops indefinitely."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 11,
        "framework": "Python",
        "question": "What data type is the result of 10 / 2 in Python 3?",
        "options": [
            "int",
            "float",
            "decimal",
            "complex"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 12,
        "framework": "Python",
        "question": "How do you add an element to a list?",
        "options": [
            ".push()",
            ".add()",
            ".append()",
            ".insert_last()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 13,
        "framework": "Python",
        "question": "What is a generator?",
        "options": [
            "A function that returns a list.",
            "A function that yields values one at a time using 'yield'.",
            "A tool to generate random numbers.",
            "A compiler for Python code."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 14,
        "framework": "Python",
        "question": "What does the 'with' statement do?",
        "options": [
            "It simplifies exception handling and resource management (like file closing).",
            "It imports a module.",
            "It defines a new variable scope.",
            "It creates a loop."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 15,
        "framework": "Python",
        "question": "What is slicing?",
        "options": [
            "Cutting a string into individual characters.",
            "Accessing a range of elements in a sequence (e.g., list[1:4]).",
            "Deleting a variable.",
            "Compiling code into slices."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 16,
        "framework": "Python",
        "question": "What is the difference between 'is' and '=='?",
        "options": [
            "'is' compares identity (memory address); '==' compares value.",
            "'is' compares value; '==' compares identity.",
            "They are identical.",
            "'is' is only for strings."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 17,
        "framework": "Python",
        "question": "Which collection type is unordered and has unique elements?",
        "options": [
            "List",
            "Tuple",
            "Set",
            "Dictionary"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 18,
        "framework": "Python",
        "question": "What is __init__?",
        "options": [
            "A method to initialize a module.",
            "The constructor method for a class.",
            "A generic variable.",
            "A destructor method."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 19,
        "framework": "Python",
        "question": "What is the output of 'hello'[::-1]?",
        "options": [
            "olleh",
            "hello",
            "h",
            "Error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 20,
        "framework": "Python",
        "question": "What does *args do in a function definition?",
        "options": [
            "Allows passing a variable number of positional arguments.",
            "Allows passing a variable number of keyword arguments.",
            "Multiplies arguments.",
            "Imports all arguments."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 21,
        "framework": "Python",
        "question": "What does **kwargs do?",
        "options": [
            "Allows passing a variable number of keyword arguments (dictionary).",
            "Allows passing a variable number of lists.",
            "Squares the arguments.",
            "Defines a pointer."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 22,
        "framework": "Python",
        "question": "What is a set comprehension?",
        "options": [
            "A way to create sets using a concise syntax like {x for x in iterable}.",
            "A way to compress sets.",
            "A set of comprehensive rules.",
            "A function to merge sets."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 23,
        "framework": "Python",
        "question": "What is the difference between append() and extend()?",
        "options": [
            "append() adds an element to the end; extend() adds elements from an iterable.",
            "They are the same.",
            "extend() adds to the beginning.",
            "append() creates a new list."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 24,
        "framework": "Python",
        "question": "What is the Global Interpreter Lock (GIL)?",
        "options": [
            "A mutex that allows only one thread to hold control of the Python interpreter.",
            "A security feature.",
            "A database lock.",
            "A global variable."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 25,
        "framework": "Python",
        "question": "How do you create a dictionary?",
        "options": [
            "x = {}",
            "x = []",
            "x = ()",
            "x = set()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 26,
        "framework": "Python",
        "question": "What is the purpose of __str__?",
        "options": [
            "To return a string representation of the object for display.",
            "To convert string to int.",
            "To print automatically.",
            "To store strings."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 27,
        "framework": "Python",
        "question": "What is docstring?",
        "options": [
            "A string literal used to document a specific segment of code.",
            "A string containing a doctor's name.",
            "A document format.",
            "A variable type."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 28,
        "framework": "Python",
        "question": "What keyword is used to import a module as an alias?",
        "options": [
            "as",
            "like",
            "alias",
            "name"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 29,
        "framework": "Python",
        "question": "What is 'pip'?",
        "options": [
            "The standard package manager for Python.",
            "A Python function.",
            "A standard library module.",
            "A game."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 30,
        "framework": "Python",
        "question": "Which function checks the length of a list?",
        "options": [
            "size()",
            "count()",
            "len()",
            "length()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 31,
        "framework": "Python",
        "question": "What is the output of bool([])?",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 32,
        "framework": "Python",
        "question": "How do you handle a specific exception?",
        "options": [
            "except ValueError:",
            "catch ValueError",
            "handle ValueError",
            "try ValueError"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 33,
        "framework": "Python",
        "question": "What is a 'frozen set'?",
        "options": [
            "An immutable version of a set.",
            "A set with ice.",
            "A sorted set.",
            "A set that cannot be read."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 34,
        "framework": "Python",
        "question": "What is the correct way to declare a variable?",
        "options": [
            "x = 5",
            "int x = 5",
            "var x = 5",
            "declare x = 5"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 35,
        "framework": "Python",
        "question": "Which method removes a specific value from a list?",
        "options": [
            "remove()",
            "delete()",
            "pop()",
            "discard()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 36,
        "framework": "Python",
        "question": "What is the 'pass' statement used for?",
        "options": [
            "As a placeholder for future code.",
            "To pass an exam.",
            "To pass a variable.",
            "To stop the loop."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 37,
        "framework": "Python",
        "question": "What is the output of 'print(type(lambda:None))'?",
        "options": [
            "<class 'function'>",
            "<class 'lambda'>",
            "<class 'NoneType'>",
            "<class 'type'>"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 38,
        "framework": "Python",
        "question": "What does the 'enumerate' function do?",
        "options": [
            "Adds a counter to an iterable and returns it as an enumerate object.",
            "Sorts a list.",
            "Counts the number of items.",
            "Randomizes the list."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 39,
        "framework": "Python",
        "question": "What is the difference between shallow copy and deep copy?",
        "options": [
            "Shallow copy copies references; deep copy copies objects recursively.",
            "Shallow copy is slower.",
            "Deep copy is only for lists.",
            "There is no difference."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 40,
        "framework": "Python",
        "question": "What does '__name__ == \"__main__\"' mean?",
        "options": [
            "Code inside this block runs only when the script is executed directly.",
            "It imports the main module.",
            "It renames the file.",
            "It defines the main class."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 41,
        "framework": "Python",
        "question": "What is a context manager?",
        "options": [
            "An object that defines runtime context (e.g., with statement).",
            "A project manager.",
            "A database manager.",
            "A text editor."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 42,
        "framework": "Python",
        "question": "What is 'pickling'?",
        "options": [
            "The process of serializing a Python object structure.",
            "Preserving food.",
            "Compressing files.",
            "Encrypting data."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 43,
        "framework": "Python",
        "question": "What is the ternary operator syntax?",
        "options": [
            "x if condition else y",
            "condition ? x : y",
            "if condition then x else y",
            "x when condition else y"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 44,
        "framework": "Python",
        "question": "What does 'zip()' do?",
        "options": [
            "Aggregates elements from each of the iterables.",
            "Compresses files.",
            "Unzips files.",
            "Encrypts files."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 45,
        "framework": "Python",
        "question": "What is a 'descriptor'?",
        "options": [
            "An object attribute with binding behavior (e.g., getters/setters).",
            "A comment.",
            "A file description.",
            "A variable name."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 46,
        "framework": "Python",
        "question": "What is 'monkey patching'?",
        "options": [
            "Dynamic modifications of a class or module at runtime.",
            "Patching a roof.",
            "A specific library.",
            "Debugging code."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 47,
        "framework": "Python",
        "question": "What does 'any()' return?",
        "options": [
            "True if at least one element of the iterable is true.",
            "True only if all are true.",
            "The first element.",
            "Random element."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 48,
        "framework": "Python",
        "question": "What does 'all()' return?",
        "options": [
            "True if all elements of the iterable are true.",
            "True if one is true.",
            "False always.",
            "The last element."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 49,
        "framework": "Python",
        "question": "What is the use of 'help()'?",
        "options": [
            "Invokes the built-in help system.",
            "Calls 911.",
            "Asks for user input.",
            "Prints the code."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 50,
        "framework": "Python",
        "question": "What is the purpose of 'dir()'?",
        "options": [
            "Returns a list of valid attributes and methods for an object.",
            "Lists directories.",
            "Changes directory.",
            "Deletes a directory."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 51,
        "framework": "Python",
        "question": "What is the '__dict__' attribute?",
        "options": [
            "A dictionary or other mapping object used to store an object's (writable) attributes.",
            "A translation tool.",
            "A dictionary book.",
            "A definition list."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 52,
        "framework": "Python",
        "question": "Which module is used for regular expressions?",
        "options": [
            "regex",
            "re",
            "pyre",
            "reg"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 53,
        "framework": "Python",
        "question": "What is the 'yield' keyword used for?",
        "options": [
            "To return a generator.",
            "To stop a loop.",
            "To pause a thread.",
            "To yield traffic."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 54,
        "framework": "Java",
        "question": "What is the size of an int in Java?",
        "options": [
            "16-bit",
            "32-bit",
            "64-bit",
            "8-bit"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 55,
        "framework": "Java",
        "question": "Which keyword is used to inherit a class?",
        "options": [
            "implements",
            "inherits",
            "extends",
            "uses"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 56,
        "framework": "Java",
        "question": "What is the default value of a boolean variable?",
        "options": [
            "true",
            "false",
            "null",
            "0"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 57,
        "framework": "Java",
        "question": "What is the parent class of all classes in Java?",
        "options": [
            "Object",
            "Class",
            "Main",
            "System"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 58,
        "framework": "Java",
        "question": "Which of these is not a primitive type?",
        "options": [
            "int",
            "float",
            "String",
            "boolean"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 59,
        "framework": "Java",
        "question": "What is method overloading?",
        "options": [
            "Defining methods with the same name but different signatures.",
            "Overwriting a method in a child class.",
            "Running a method too many times.",
            "Hiding a method."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 60,
        "framework": "Java",
        "question": "What is the purpose of the 'final' keyword on a variable?",
        "options": [
            "It makes the variable visible globally.",
            "It prevents the variable's value from being changed.",
            "It allows the variable to be garbage collected.",
            "It makes the variable static."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 61,
        "framework": "Java",
        "question": "What does 'static' mean for a method?",
        "options": [
            "It belongs to the class, not instances of the class.",
            "It cannot be changed.",
            "It returns a static value.",
            "It is private."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 62,
        "framework": "Java",
        "question": "Which collection allows duplicate elements?",
        "options": [
            "Set",
            "List",
            "Map",
            "HashSet"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 63,
        "framework": "Java",
        "question": "What handles memory management in Java?",
        "options": [
            "The programmer",
            "The Garbage Collector (GC)",
            "The Compiler",
            "The Operating System"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 64,
        "framework": "Java",
        "question": "What is an interface?",
        "options": [
            "A class with all private methods.",
            "A contract specifying methods a class must implement.",
            "A graphical user interface.",
            "A type of variable."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 65,
        "framework": "Java",
        "question": "What is the difference between ArrayList and LinkedList?",
        "options": [
            "ArrayList is faster for retrieval; LinkedList is faster for insertion/deletion.",
            "LinkedList is faster for retrieval.",
            "They are the same.",
            "ArrayList is thread-safe."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 66,
        "framework": "Java",
        "question": "What is a checked exception?",
        "options": [
            "An exception that must be handled or declared at compile time.",
            "An exception that occurs only at runtime.",
            "An exception used for testing.",
            "A database error."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 67,
        "framework": "Java",
        "question": "Which keyword allows access from anywhere?",
        "options": [
            "private",
            "protected",
            "public",
            "package-private"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 68,
        "framework": "Java",
        "question": "What is the entry point of a Java program?",
        "options": [
            "start()",
            "main()",
            "init()",
            "run()"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 69,
        "framework": "Java",
        "question": "What is Polymorphism?",
        "options": [
            "The ability of an object to take on many forms.",
            "The ability to have multiple parents.",
            "The ability to hide data.",
            "The ability to clone objects."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 70,
        "framework": "Java",
        "question": "What is the difference between equals() and ==?",
        "options": [
            "equals() checks content equality; == checks reference equality.",
            "They are identical.",
            "== checks content; equals() checks reference.",
            "== is for strings only."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 71,
        "framework": "Java",
        "question": "What is the default value of an object reference?",
        "options": [
            "null",
            "0",
            "undefined",
            "false"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 72,
        "framework": "Java",
        "question": "Which keyword creates a subclass?",
        "options": [
            "extends",
            "implements",
            "inherits",
            "sub"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 73,
        "framework": "Java",
        "question": "What is an abstract class?",
        "options": [
            "A class that cannot be instantiated and may contain abstract methods.",
            "A class with no methods.",
            "A class that is final.",
            "A class without variables."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 74,
        "framework": "Java",
        "question": "What is a constructor?",
        "options": [
            "A special method called when an object is instantiated.",
            "A method to build the project.",
            "A static block.",
            "A variable initializer."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 75,
        "framework": "Java",
        "question": "What is the super keyword?",
        "options": [
            "It refers to the parent class object.",
            "It refers to the current object.",
            "It makes a class superior.",
            "It is a modifier."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 76,
        "framework": "Java",
        "question": "What is the purpose of 'break' in a loop?",
        "options": [
            "Terminates the loop immediately.",
            "Skips the current iteration.",
            "Pauses the loop.",
            "Restarts the loop."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 77,
        "framework": "Java",
        "question": "Which access modifier makes a member visible only within its own class?",
        "options": [
            "private",
            "public",
            "protected",
            "default"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 78,
        "framework": "Java",
        "question": "What is a Thread?",
        "options": [
            "A lightweight subprocess, the smallest unit of processing.",
            "A string used for sewing.",
            "A network connection.",
            "A database query."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 79,
        "framework": "Java",
        "question": "What is the correct syntax to print to console?",
        "options": [
            "System.out.println()",
            "console.log()",
            "print()",
            "echo()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 80,
        "framework": "Java",
        "question": "What is the 'finally' block?",
        "options": [
            "A block that always executes after try-catch, regardless of exception.",
            "A block that executes only if exception occurs.",
            "A block that executes only if no exception.",
            "The last method in a class."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 81,
        "framework": "Java",
        "question": "Can you override a static method?",
        "options": [
            "No, static methods are bound to the class, not the instance.",
            "Yes, always.",
            "Only if it is public.",
            "Only in the same package."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 82,
        "framework": "Java",
        "question": "What is a wrapper class?",
        "options": [
            "A class that wraps a primitive type into an object (e.g., Integer for int).",
            "A class for wrapping gifts.",
            "A security wrapper.",
            "A layout manager."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 83,
        "framework": "Java",
        "question": "What is the use of 'package' keyword?",
        "options": [
            "To group related classes and interfaces.",
            "To send a package.",
            "To compress files.",
            "To import libraries."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 84,
        "framework": "Java",
        "question": "What is a NullPointerException?",
        "options": [
            "An exception thrown when trying to access an object reference that is null.",
            "An error in the compiler.",
            "A pointer to zero.",
            "A math error."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 85,
        "framework": "Java",
        "question": "What is the 'default' access specifier?",
        "options": [
            "Package-private (accessible within the same package).",
            "Public.",
            "Private.",
            "Protected."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 86,
        "framework": "Java",
        "question": "Which loop is guaranteed to execute at least once?",
        "options": [
            "do-while",
            "while",
            "for",
            "foreach"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 87,
        "framework": "Java",
        "question": "What is the 'synchronized' keyword?",
        "options": [
            "It locks a method or block so only one thread can execute it at a time.",
            "It syncs time.",
            "It connects to the internet.",
            "It copies data."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 88,
        "framework": "Java",
        "question": "What is the difference between StringBuilder and StringBuffer?",
        "options": [
            "StringBuffer is thread-safe (synchronized); StringBuilder is not.",
            "StringBuilder is slower.",
            "They are the same.",
            "StringBuffer is deprecated."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 89,
        "framework": "Java",
        "question": "What is 'volatile'?",
        "options": [
            "Indicates that a variable's value will be modified by different threads.",
            "A variable that explodes.",
            "A temporary variable.",
            "A constant."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 90,
        "framework": "Java",
        "question": "What is the 'transient' keyword?",
        "options": [
            "Prevents a variable from being serialized.",
            "Makes a variable temporary.",
            "Makes a variable global.",
            "Deletes the variable."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 91,
        "framework": "Java",
        "question": "What is Serialization?",
        "options": [
            "Converting an object into a byte stream.",
            "Converting bytes to text.",
            "Printing numbers.",
            "Sorting a list."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 92,
        "framework": "Java",
        "question": "What is the Java String Pool?",
        "options": [
            "A storage area in the Java heap where string literals are stored.",
            "A swimming pool.",
            "A list of strings.",
            "A database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 93,
        "framework": "Java",
        "question": "What is a functional interface?",
        "options": [
            "An interface with exactly one abstract method.",
            "An interface with functions.",
            "A working interface.",
            "A graphical interface."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 94,
        "framework": "Java",
        "question": "What feature was added in Java 8?",
        "options": [
            "Lambdas and Streams.",
            "Classes.",
            "Loops.",
            "Arrays."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 95,
        "framework": "Java",
        "question": "What is 'Optional' in Java?",
        "options": [
            "A container object which may or may not contain a non-null value.",
            "A choice.",
            "A checkbox.",
            "A hidden feature."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 96,
        "framework": "Java",
        "question": "What is the difference between throw and throws?",
        "options": [
            "Throw is used to explicitly throw an exception; throws declares it.",
            "They are same.",
            "Throw is for methods; throws is for variables.",
            "Throws is faster."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 97,
        "framework": "Java",
        "question": "What is the 'finalize' method?",
        "options": [
            "Called by the garbage collector before an object is destroyed (deprecated).",
            "Finalizes the code.",
            "Compiles the code.",
            "Ends the program."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 98,
        "framework": "Java",
        "question": "What is the parent of Error and Exception?",
        "options": [
            "Throwable",
            "Object",
            "Main",
            "Class"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 99,
        "framework": "Java",
        "question": "What is a Marker Interface?",
        "options": [
            "An interface with no methods (e.g., Serializable).",
            "An interface for drawing.",
            "An interface for grading.",
            "A labeled interface."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 100,
        "framework": "Java",
        "question": "What is the 'classpath'?",
        "options": [
            "A parameter that tells the JVM where to look for user-defined classes and packages.",
            "A path to class.",
            "A road.",
            "A file system."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 101,
        "framework": "Java",
        "question": "Which class is used to read input from console?",
        "options": [
            "Scanner",
            "Reader",
            "Input",
            "Getter"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 102,
        "framework": "Java",
        "question": "What is an enum?",
        "options": [
            "A special Java type used to define collections of constants.",
            "A number.",
            "A math function.",
            "A list."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 103,
        "framework": "Java",
        "question": "What is the default value of an Object array?",
        "options": [
            "null",
            "0",
            "undefined",
            "empty"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 104,
        "framework": "JavaScript",
        "question": "Which keyword declares a variable with block scope?",
        "options": [
            "var",
            "let",
            "global",
            "int"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 105,
        "framework": "JavaScript",
        "question": "What is 'this' in JavaScript?",
        "options": [
            "It refers to the current function.",
            "It refers to the object executing the current function.",
            "It refers to the global window always.",
            "It is a variable for current time."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 106,
        "framework": "JavaScript",
        "question": "What produces 'NaN'?",
        "options": [
            "Dividing a number by zero.",
            "Subtracting a string from a number (e.g., 5 - 'text').",
            "Declaring a variable without assignment.",
            "Adding two strings."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 107,
        "framework": "JavaScript",
        "question": "What is the DOM?",
        "options": [
            "Document Object Model",
            "Data Object Mode",
            "Document Orientation Module",
            "Digital Ordinance Model"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 108,
        "framework": "JavaScript",
        "question": "How do you convert a string to an integer?",
        "options": [
            "Integer.parse()",
            "parseInt()",
            "parseInteger()",
            "toInt()"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 109,
        "framework": "JavaScript",
        "question": "What is an arrow function?",
        "options": [
            "A shorter syntax for writing function expressions.",
            "A function that points to another function.",
            "A function specifically for arrays.",
            "A recursive function."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 110,
        "framework": "JavaScript",
        "question": "What is the result of '2' + 2 in JavaScript?",
        "options": [
            "4",
            "'22'",
            "NaN",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 111,
        "framework": "JavaScript",
        "question": "Which method removes the last element from an array?",
        "options": [
            "pop()",
            "push()",
            "shift()",
            "remove()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 112,
        "framework": "JavaScript",
        "question": "What is JSON?",
        "options": [
            "JavaScript Object Notation",
            "Java Source Object Network",
            "JavaScript Online Node",
            "Java Standard Output Network"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 113,
        "framework": "JavaScript",
        "question": "What is callback hell?",
        "options": [
            "When callbacks are nested excessively, making code hard to read.",
            "When a function fails to return.",
            "When a loop never ends.",
            "A syntax error in callbacks."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 114,
        "framework": "JavaScript",
        "question": "What does the 'typeof' operator do?",
        "options": [
            "Checks if a variable is defined.",
            "Returns a string indicating the type of the operand.",
            "Changes the type of a variable.",
            "Compares two variables."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 115,
        "framework": "JavaScript",
        "question": "How do you define a constant in JavaScript?",
        "options": [
            "constant x = 1;",
            "final x = 1;",
            "const x = 1;",
            "let x = 1;"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 116,
        "framework": "JavaScript",
        "question": "What applies a function against an accumulator and each element in the array?",
        "options": [
            "map()",
            "filter()",
            "reduce()",
            "forEach()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 117,
        "framework": "JavaScript",
        "question": "What is event bubbling?",
        "options": [
            "Events propagating from the target element up to the parents.",
            "Events triggering multiple times.",
            "Creating an event listener.",
            "Stopping an event."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 118,
        "framework": "JavaScript",
        "question": "Which symbol is used for template literals?",
        "options": [
            "Single quote '",
            "Double quote \"",
            "Backtick `",
            "Hyphen -"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 119,
        "framework": "JavaScript",
        "question": "What is the difference between null and undefined?",
        "options": [
            "undefined means a variable is declared but not assigned; null is an assignment value.",
            "They are the same.",
            "null is undefined.",
            "undefined is an object."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 120,
        "framework": "JavaScript",
        "question": "What is Hoisting?",
        "options": [
            "Variable and function declarations are moved to the top of their scope before execution.",
            "Lifting an element in DOM.",
            "Increasing variable value.",
            "A type of loop."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 121,
        "framework": "JavaScript",
        "question": "What is the spread operator (...) used for?",
        "options": [
            "Expanding an iterable into individual elements.",
            "Calculating range.",
            "Spreading butter.",
            "Defining a function."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 122,
        "framework": "JavaScript",
        "question": "How do you declare a class in ES6?",
        "options": [
            "class MyClass {}",
            "function MyClass {}",
            "define MyClass",
            "struct MyClass"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 123,
        "framework": "JavaScript",
        "question": "What is the use of 'async/await'?",
        "options": [
            "To write asynchronous code in a synchronous-looking manner.",
            "To wait for user input.",
            "To pause the browser.",
            "To speed up code."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 124,
        "framework": "JavaScript",
        "question": "What represents 'Not-a-Number'?",
        "options": [
            "NaN",
            "null",
            "undefined",
            "false"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 125,
        "framework": "JavaScript",
        "question": "Which method joins array elements into a string?",
        "options": [
            "join()",
            "concat()",
            "merge()",
            "split()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 126,
        "framework": "JavaScript",
        "question": "What is LocalStorage?",
        "options": [
            "A web storage object for storing data with no expiration date.",
            "A session-only storage.",
            "A server database.",
            "A temporary cache."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 127,
        "framework": "JavaScript",
        "question": "What is the correct way to write an IF statement?",
        "options": [
            "if (i == 5)",
            "if i = 5 then",
            "if i == 5 then",
            "if (i == 5) then"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 128,
        "framework": "JavaScript",
        "question": "What event occurs when a user clicks an HTML element?",
        "options": [
            "onclick",
            "onchange",
            "onmouseover",
            "onmouseclick"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 129,
        "framework": "JavaScript",
        "question": "How do you round a number to the nearest integer?",
        "options": [
            "Math.round()",
            "Math.rnd()",
            "round()",
            "Math.floor()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 130,
        "framework": "JavaScript",
        "question": "What is the scope of a variable defined with 'var'?",
        "options": [
            "Function scope.",
            "Block scope.",
            "Global scope only.",
            "Class scope."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 131,
        "framework": "JavaScript",
        "question": "What does 'use strict' do?",
        "options": [
            "Enforces stricter parsing and error handling in JavaScript.",
            "Makes code run faster.",
            "Enables strict CSS.",
            "Disables all variables."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 132,
        "framework": "JavaScript",
        "question": "What is a callback function?",
        "options": [
            "A function passed into another function as an argument.",
            "A function that calls itself.",
            "A function that returns a value.",
            "A telephone function."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 133,
        "framework": "JavaScript",
        "question": "Which operator returns the remainder of a division?",
        "options": [
            "%",
            "/",
            "mod",
            "rem"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 134,
        "framework": "JavaScript",
        "question": "How do you find the max of x and y?",
        "options": [
            "Math.max(x, y)",
            "ceil(x, y)",
            "top(x, y)",
            "Math.high(x, y)"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 135,
        "framework": "JavaScript",
        "question": "What is 'destructuring'?",
        "options": [
            "Unpacking values from arrays or properties from objects into distinct variables.",
            "Destroying an object.",
            "Deleting a structure.",
            "Constructing a new array."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 136,
        "framework": "JavaScript",
        "question": "What does the filter() method do?",
        "options": [
            "Creates a new array with all elements that pass the test implemented by the provided function.",
            "Filters water.",
            "Removes all elements.",
            "Sorts the array."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 137,
        "framework": "JavaScript",
        "question": "What is an IIFE?",
        "options": [
            "Immediately Invoked Function Expression.",
            "Internal Internet File Exchange.",
            "International Interface.",
            "If If Else."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 138,
        "framework": "JavaScript",
        "question": "What is the Event Loop?",
        "options": [
            "A mechanism that handles asynchronous callbacks in JavaScript.",
            "A never-ending loop.",
            "A loop for events.",
            "A calendar."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 139,
        "framework": "JavaScript",
        "question": "What is the difference between let and var?",
        "options": [
            "Let is block scoped; var is function scoped.",
            "Var is block scoped.",
            "They are same.",
            "Let is global only."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 140,
        "framework": "JavaScript",
        "question": "What does bind() do?",
        "options": [
            "Creates a new function that, when called, has its 'this' keyword set to the provided value.",
            "Binds two strings.",
            "Glues code.",
            "Stops execution."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 141,
        "framework": "JavaScript",
        "question": "What is the purpose of 'export'?",
        "options": [
            "To allow a module to expose functions or variables to other modules.",
            "To save a file.",
            "To delete a file.",
            "To print data."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 142,
        "framework": "JavaScript",
        "question": "What is the difference between map() and forEach()?",
        "options": [
            "map() returns a new array; forEach() does not.",
            "forEach() is faster.",
            "map() deletes elements.",
            "forEach() returns a new array."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 143,
        "framework": "JavaScript",
        "question": "What is a 'falsy' value?",
        "options": [
            "A value that translates to false when evaluated in a Boolean context (e.g., 0, '', null).",
            "A lie.",
            "A negative number.",
            "A string."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 144,
        "framework": "JavaScript",
        "question": "What is Currying?",
        "options": [
            "Converting a function with multiple arguments into a sequence of functions with single arguments.",
            "Cooking curry.",
            "Mixing arrays.",
            "Sorting data."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 145,
        "framework": "JavaScript",
        "question": "What is the 'window' object?",
        "options": [
            "The global object in a browser environment.",
            "A glass window.",
            "A popup.",
            "A tab."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 146,
        "framework": "JavaScript",
        "question": "What is sessionStorage?",
        "options": [
            "Storage available only for the duration of the page session (tab).",
            "Permanent storage.",
            "Server storage.",
            "Cloud storage."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 147,
        "framework": "JavaScript",
        "question": "What does 'preventDefault()' do?",
        "options": [
            "Prevents the default action of an event (e.g., form submission).",
            "Stops the code.",
            "Prevents errors.",
            "Prevents login."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 148,
        "framework": "JavaScript",
        "question": "What is a 'module'?",
        "options": [
            "A self-contained unit of code that can be exported and imported.",
            "A model.",
            "A method.",
            "A mode."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 149,
        "framework": "JavaScript",
        "question": "What is 'strict mode'?",
        "options": [
            "A way to opt in to a restricted variant of JavaScript.",
            "A hard level.",
            "A password mode.",
            "A server setting."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 150,
        "framework": "JavaScript",
        "question": "What is a 'generator' function?",
        "options": [
            "A function that can be paused and resumed (syntax function*).",
            "A power generator.",
            "A random number maker.",
            "A loop."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 151,
        "framework": "JavaScript",
        "question": "What is Object.keys()?",
        "options": [
            "Returns an array of a given object's own enumerable property names.",
            "Opens an object.",
            "Locks an object.",
            "Creates keys."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 152,
        "framework": "JavaScript",
        "question": "What is the difference between explicit and implicit coercion?",
        "options": [
            "Explicit is done by code (String(123)); implicit is done by engine ('1'+2).",
            "Explicit is automatic.",
            "Implicit is faster.",
            "No difference."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 153,
        "framework": "SQL",
        "question": "Which statement is used to remove a table entirely?",
        "options": [
            "DELETE",
            "REMOVE",
            "DROP",
            "TRUNCATE"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 154,
        "framework": "SQL",
        "question": "What does GROUP BY do?",
        "options": [
            "Sorts the result set.",
            "Groups rows that have the same values in summary rows.",
            "Filters the result set.",
            "Joins two tables."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 155,
        "framework": "SQL",
        "question": "Which function returns the number of rows?",
        "options": [
            "SUM()",
            "TOTAL()",
            "COUNT()",
            "NUM()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 156,
        "framework": "SQL",
        "question": "What is a Foreign Key?",
        "options": [
            "A key used to encrypt data.",
            "A field that links to the Primary Key of another table.",
            "A key accessible from outside the database.",
            "A secondary unique key."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 157,
        "framework": "SQL",
        "question": "Which clause sorts the result?",
        "options": [
            "ORDER BY",
            "SORT BY",
            "GROUP BY",
            "ALIGN BY"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 158,
        "framework": "SQL",
        "question": "What does DISTINCT do?",
        "options": [
            "Selects only unique values.",
            "Selects distinct columns.",
            "Sorts the values.",
            "Limits the number of rows."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 159,
        "framework": "SQL",
        "question": "Which operator matches a pattern?",
        "options": [
            "EQUALS",
            "LIKE",
            "MATCH",
            "SAME"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 160,
        "framework": "SQL",
        "question": "What is the difference between DELETE and TRUNCATE?",
        "options": [
            "DELETE removes specific rows and can be rolled back; TRUNCATE empties the table and is faster.",
            "TRUNCATE deletes the table structure.",
            "DELETE is faster than TRUNCATE.",
            "There is no difference."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 161,
        "framework": "SQL",
        "question": "What does NULL mean?",
        "options": [
            "Zero",
            "Blank string",
            "Missing or unknown data",
            "Infinite"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 162,
        "framework": "SQL",
        "question": "Which join returns all records from the left table, and matched records from the right?",
        "options": [
            "INNER JOIN",
            "RIGHT JOIN",
            "LEFT JOIN",
            "FULL JOIN"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 163,
        "framework": "SQL",
        "question": "What is an Index?",
        "options": [
            "A data structure that improves the speed of data retrieval.",
            "A list of table names.",
            "A key used for backup.",
            "A unique constraint."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 164,
        "framework": "SQL",
        "question": "Which command modifies existing data?",
        "options": [
            "ALTER",
            "UPDATE",
            "CHANGE",
            "MODIFY"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 165,
        "framework": "SQL",
        "question": "What is a transaction?",
        "options": [
            "A unit of work that is treated as 'all or nothing'.",
            "A payment process.",
            "A single query.",
            "A connection to the database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 166,
        "framework": "SQL",
        "question": "What does the HAVING clause do?",
        "options": [
            "Filters records before grouping.",
            "Filters records after grouping (used with GROUP BY).",
            "Sorts the groups.",
            "Joins tables."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 167,
        "framework": "SQL",
        "question": "What is normalization?",
        "options": [
            "Organizing data to reduce redundancy and improve integrity.",
            "Making all text uppercase.",
            "Backing up data.",
            "Deleting old data."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 168,
        "framework": "SQL",
        "question": "What is a subquery?",
        "options": [
            "A query nested inside another query.",
            "A substitute query.",
            "A backup query.",
            "A database driver."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 169,
        "framework": "SQL",
        "question": "What is the difference between UNION and UNION ALL?",
        "options": [
            "UNION removes duplicates; UNION ALL includes duplicates.",
            "UNION is faster.",
            "UNION ALL removes duplicates.",
            "They are the same."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 170,
        "framework": "SQL",
        "question": "What is a trigger?",
        "options": [
            "A set of SQL statements that automatically runs when a specific event occurs.",
            "A button to run queries.",
            "A type of key.",
            "A stored procedure."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 171,
        "framework": "SQL",
        "question": "What is a stored procedure?",
        "options": [
            "A prepared SQL code that you can save and reuse.",
            "A temporary table.",
            "A backup file.",
            "A transaction log."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 172,
        "framework": "SQL",
        "question": "Which function calculates the average value?",
        "options": [
            "AVG()",
            "AVERAGE()",
            "MEAN()",
            "CALC_AVG()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 173,
        "framework": "SQL",
        "question": "What is the purpose of AS keyword?",
        "options": [
            "To give an alias to a table or column.",
            "To assign a value.",
            "To ask a question.",
            "To sort data."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 174,
        "framework": "SQL",
        "question": "What is a primary key?",
        "options": [
            "A column (or set of columns) that uniquely identifies each row.",
            "The first column in a table.",
            "A key for encryption.",
            "A password."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 175,
        "framework": "SQL",
        "question": "What constraint ensures a column cannot have NULL value?",
        "options": [
            "NOT NULL",
            "NO NULL",
            "REQUIRED",
            "MANDATORY"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 176,
        "framework": "SQL",
        "question": "What is the BETWEEN operator used for?",
        "options": [
            "To select values within a given range.",
            "To select values between two tables.",
            "To join tables.",
            "To average values."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 177,
        "framework": "SQL",
        "question": "What command inserts new data?",
        "options": [
            "INSERT INTO",
            "ADD NEW",
            "UPDATE",
            "CREATE ROW"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 178,
        "framework": "SQL",
        "question": "What is a View?",
        "options": [
            "A virtual table based on the result-set of an SQL statement.",
            "A picture of the database.",
            "A printed report.",
            "A backup."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 179,
        "framework": "SQL",
        "question": "Which operator is used to search for a specified pattern in a column?",
        "options": [
            "LIKE",
            "SEARCH",
            "FIND",
            "MATCH"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 180,
        "framework": "SQL",
        "question": "What is the wildcard character for 'any number of characters'?",
        "options": [
            "%",
            "*",
            "?",
            "#"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 181,
        "framework": "SQL",
        "question": "What does the IN operator do?",
        "options": [
            "Allows you to specify multiple values in a WHERE clause.",
            "Inserts data.",
            "Checks if inside a table.",
            "Joins tables."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 182,
        "framework": "SQL",
        "question": "How do you select all columns from a table?",
        "options": [
            "SELECT * FROM table",
            "SELECT ALL FROM table",
            "SELECT table",
            "GET * FROM table"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 183,
        "framework": "SQL",
        "question": "What is the MIN() function?",
        "options": [
            "Returns the smallest value of the selected column.",
            "Returns the minute.",
            "Returns the minimum number of rows.",
            "Returns the average."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 184,
        "framework": "SQL",
        "question": "What does COMMIT do?",
        "options": [
            "Saves the changes made in the transaction permanently.",
            "Deletes the changes.",
            "Starts a transaction.",
            "Cancels a transaction."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 185,
        "framework": "SQL",
        "question": "What does ROLLBACK do?",
        "options": [
            "Undoes transactions that have not been saved to the database.",
            "Repeats the transaction.",
            "Backs up the database.",
            "Scrolls the screen."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 186,
        "framework": "SQL",
        "question": "What is a Cross Join?",
        "options": [
            "Produces the Cartesian product of two tables (all combinations).",
            "Joins on ID.",
            "Filters rows.",
            "Sorts rows."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 187,
        "framework": "SQL",
        "question": "What is a Self Join?",
        "options": [
            "A regular join, but the table is joined with itself.",
            "Joining two different databases.",
            "Joining without keys.",
            "Joining automatically."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 188,
        "framework": "SQL",
        "question": "What are ACID properties?",
        "options": [
            "Atomicity, Consistency, Isolation, Durability.",
            "Auto, Consist, Iso, Duration.",
            "Apple, Carrot, Ice, Date.",
            "Action, Cause, Item, Data."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 189,
        "framework": "SQL",
        "question": "What is 1NF (First Normal Form)?",
        "options": [
            "Columns contain atomic values; no repeating groups.",
            "Tables are joined.",
            "Data is encrypted.",
            "Data is backed up."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 190,
        "framework": "SQL",
        "question": "What is 2NF?",
        "options": [
            "Must be in 1NF and have no partial dependency.",
            "Must be in 3NF.",
            "Must have two keys.",
            "Must be sorted."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 191,
        "framework": "SQL",
        "question": "What is 3NF?",
        "options": [
            "Must be in 2NF and have no transitive dependency.",
            "Must have 3 keys.",
            "Must have 3 tables.",
            "Must be indexed."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 192,
        "framework": "SQL",
        "question": "What is a Clustered Index?",
        "options": [
            "Sorts and stores the data rows in the table based on the key.",
            "An extra table.",
            "A backup.",
            "A random sort."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 193,
        "framework": "SQL",
        "question": "What is a Non-Clustered Index?",
        "options": [
            "A structure separate from the data rows that points to the data.",
            "The main data storage.",
            "A primary key.",
            "A view."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 194,
        "framework": "SQL",
        "question": "What does LIMIT do?",
        "options": [
            "Specifies the maximum number of records to return.",
            "Limits access.",
            "Limits speed.",
            "Stops the server."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 195,
        "framework": "SQL",
        "question": "What does OFFSET do?",
        "options": [
            "Skips the specified number of rows before returning.",
            "Offsets the time.",
            "Moves the table.",
            "Deletes rows."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 196,
        "framework": "SQL",
        "question": "What is the difference between CHAR and VARCHAR?",
        "options": [
            "CHAR is fixed length; VARCHAR is variable length.",
            "CHAR is numbers.",
            "VARCHAR is faster.",
            "They are same."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 197,
        "framework": "SQL",
        "question": "What is a composite key?",
        "options": [
            "A primary key composed of multiple columns.",
            "A key made of plastic.",
            "A foreign key.",
            "A secret key."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 198,
        "framework": "SQL",
        "question": "What does the ALL operator do?",
        "options": [
            "Compares a value to all values in another set.",
            "Selects all.",
            "Deletes all.",
            "Updates all."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 199,
        "framework": "SQL",
        "question": "What is Database Denormalization?",
        "options": [
            "Adding redundancy to improve read performance.",
            "Cleaning data.",
            "Deleting data.",
            "Sorting data."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 200,
        "framework": "SQL",
        "question": "What is a temporary table?",
        "options": [
            "A table that exists temporarily for a session.",
            "A draft.",
            "A notepad.",
            "A fake table."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 201,
        "framework": "SQL",
        "question": "What is SQL Injection?",
        "options": [
            "A code injection technique used to attack data-driven applications.",
            "A medical shot.",
            "A database install.",
            "A speed boost."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 202,
        "framework": "SQL",
        "question": "How do you select distinct counts?",
        "options": [
            "SELECT COUNT(DISTINCT column)",
            "SELECT DISTINCT COUNT",
            "SELECT UNIQUE",
            "COUNT UNIQUE"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 203,
        "framework": "Linux+Bash+Git",
        "question": "Which command lists running processes?",
        "options": [
            "ps",
            "ls",
            "run",
            "proc"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 204,
        "framework": "Linux+Bash+Git",
        "question": "What does 'cd ..' do?",
        "options": [
            "Goes to the root directory.",
            "Goes up one directory level.",
            "Deletes the current directory.",
            "Refreshes the directory."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 205,
        "framework": "Linux+Bash+Git",
        "question": "How do you create a new directory?",
        "options": [
            "mkfile",
            "touch",
            "mkdir",
            "newdir"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 206,
        "framework": "Linux+Bash+Git",
        "question": "Which command shows the manual for a command?",
        "options": [
            "help",
            "man",
            "info",
            "doc"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 207,
        "framework": "Linux+Bash+Git",
        "question": "What symbol pipes the output of one command to another?",
        "options": [
            ">",
            "|",
            "&",
            ">>"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 208,
        "framework": "Linux+Bash+Git",
        "question": "What does 'sudo' do?",
        "options": [
            "Runs a command with superuser (root) privileges.",
            "Suspends the computer.",
            "Sorts the output.",
            "Searches for a user."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 209,
        "framework": "Linux+Bash+Git",
        "question": "How do you initialize a git repository?",
        "options": [
            "git start",
            "git init",
            "git new",
            "git create"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 210,
        "framework": "Linux+Bash+Git",
        "question": "Which command checks the status of files in git?",
        "options": [
            "git check",
            "git status",
            "git log",
            "git info"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 211,
        "framework": "Linux+Bash+Git",
        "question": "What is a git branch?",
        "options": [
            "A separate version of the code that diverges from the main line.",
            "A remote server.",
            "A backup of the code.",
            "A specific commit hash."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 212,
        "framework": "Linux+Bash+Git",
        "question": "How do you clone a repository?",
        "options": [
            "git copy",
            "git clone",
            "git download",
            "git mirror"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 213,
        "framework": "Linux+Bash+Git",
        "question": "What does 'rm -rf' do?",
        "options": [
            "Forcefully removes a directory and its contents recursively.",
            "Renames a file.",
            "Reads a file.",
            "Restores a file."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 214,
        "framework": "Linux+Bash+Git",
        "question": "What is the home directory symbol?",
        "options": [
            ".",
            "/",
            "~",
            "*"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 215,
        "framework": "Linux+Bash+Git",
        "question": "How do you view the contents of a file?",
        "options": [
            "cat",
            "dog",
            "view",
            "open"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 216,
        "framework": "Linux+Bash+Git",
        "question": "What does 'git pull' do?",
        "options": [
            "Fetches and merges changes from the remote repository.",
            "Uploads changes to the remote.",
            "Creates a pull request.",
            "Deletes the local branch."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 217,
        "framework": "Linux+Bash+Git",
        "question": "Which command counts lines, words, and characters?",
        "options": [
            "count",
            "wc",
            "lc",
            "cw"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 218,
        "framework": "Linux+Bash+Git",
        "question": "What does 'mv' do?",
        "options": [
            "Moves or renames files/directories.",
            "Makes a version.",
            "Mounts a volume.",
            "Measures volume."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 219,
        "framework": "Linux+Bash+Git",
        "question": "Which command displays the first few lines of a file?",
        "options": [
            "head",
            "top",
            "start",
            "first"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 220,
        "framework": "Linux+Bash+Git",
        "question": "Which command displays the last few lines of a file?",
        "options": [
            "tail",
            "end",
            "bottom",
            "last"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 221,
        "framework": "Linux+Bash+Git",
        "question": "What command finds files in a directory hierarchy?",
        "options": [
            "find",
            "search",
            "locate",
            "query"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 222,
        "framework": "Linux+Bash+Git",
        "question": "How do you make a file executable?",
        "options": [
            "chmod +x filename",
            "chmod +e filename",
            "make exec filename",
            "run filename"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 223,
        "framework": "Linux+Bash+Git",
        "question": "What is 'ssh'?",
        "options": [
            "Secure Shell for secure remote login.",
            "Super Shell.",
            "Simple Shell.",
            "System Shell."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 224,
        "framework": "Linux+Bash+Git",
        "question": "What does 'echo' do?",
        "options": [
            "Prints text to the terminal.",
            "Repeats a command.",
            "Deletes a file.",
            "Creates a sound."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 225,
        "framework": "Linux+Bash+Git",
        "question": "Which command shows disk usage?",
        "options": [
            "df",
            "du",
            "disk",
            "usage"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 226,
        "framework": "Linux+Bash+Git",
        "question": "What is the purpose of '.gitignore'?",
        "options": [
            "Specifies intentionally untracked files to ignore.",
            "Ignores git commands.",
            "Stores passwords.",
            "Deletes files."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 227,
        "framework": "Linux+Bash+Git",
        "question": "How do you create a new branch in git?",
        "options": [
            "git branch <name>",
            "git new <name>",
            "git create <name>",
            "git make <name>"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 228,
        "framework": "Linux+Bash+Git",
        "question": "How do you switch to another branch?",
        "options": [
            "git checkout <name>",
            "git move <name>",
            "git goto <name>",
            "git switchto <name>"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 229,
        "framework": "Linux+Bash+Git",
        "question": "What is a merge conflict?",
        "options": [
            "When Git is unable to automatically resolve differences in code between two commits.",
            "When the network fails.",
            "When the disk is full.",
            "When two branches have the same name."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 230,
        "framework": "Linux+Bash+Git",
        "question": "What does 'git push' do?",
        "options": [
            "Uploads local repository content to a remote repository.",
            "Downloads from remote.",
            "Deletes remote.",
            "Merges branches."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 231,
        "framework": "Linux+Bash+Git",
        "question": "What is 'bash'?",
        "options": [
            "Bourne Again SHell, a command processor.",
            "A game.",
            "A text editor.",
            "A compiler."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 232,
        "framework": "Linux+Bash+Git",
        "question": "How do you kill a process by ID?",
        "options": [
            "kill <PID>",
            "stop <PID>",
            "end <PID>",
            "remove <PID>"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 233,
        "framework": "Linux+Bash+Git",
        "question": "What command sorts the contents of a text file?",
        "options": [
            "sort",
            "order",
            "arrange",
            "rank"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 234,
        "framework": "Linux+Bash+Git",
        "question": "What symbol redirects output to a file, overwriting it?",
        "options": [
            ">",
            ">>",
            "<",
            "<<"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 235,
        "framework": "Linux+Bash+Git",
        "question": "What symbol redirects output to a file, appending to it?",
        "options": [
            ">>",
            ">",
            "<",
            "+>"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 236,
        "framework": "Linux+Bash+Git",
        "question": "What does 'chmod 777' do?",
        "options": [
            "Gives read, write, and execute permission to everyone.",
            "Deletes the file.",
            "Locks the file.",
            "Hides the file."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 237,
        "framework": "Linux+Bash+Git",
        "question": "What does 'chown' do?",
        "options": [
            "Changes the owner and group of a file.",
            "Changes the name.",
            "Changes the size.",
            "Changes the date."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 238,
        "framework": "Linux+Bash+Git",
        "question": "What command creates a user?",
        "options": [
            "useradd",
            "newuser",
            "createuser",
            "adduser"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 239,
        "framework": "Linux+Bash+Git",
        "question": "What does 'tar' do?",
        "options": [
            "Archives multiple files into one.",
            "Deletes files.",
            "Plays music.",
            "Compiles code."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 240,
        "framework": "Linux+Bash+Git",
        "question": "What is 'grep -r'?",
        "options": [
            "Recursive search.",
            "Reverse search.",
            "Random search.",
            "Remove search."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 241,
        "framework": "Linux+Bash+Git",
        "question": "What does 'top' command show?",
        "options": [
            "Real-time view of running processes and system resource usage.",
            "The top of a file.",
            "The best user.",
            "The header."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 242,
        "framework": "Linux+Bash+Git",
        "question": "What is 'systemctl'?",
        "options": [
            "Command to introspect and control the state of the systemd system and service manager.",
            "System control panel.",
            "System clean.",
            "System call."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 243,
        "framework": "Linux+Bash+Git",
        "question": "What is an alias in Bash?",
        "options": [
            "A shortcut for a command.",
            "A fake name.",
            "A user.",
            "A file."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 244,
        "framework": "Linux+Bash+Git",
        "question": "What is an Environment Variable?",
        "options": [
            "A dynamic value that can affect the way running processes will behave.",
            "A weather variable.",
            "A local variable.",
            "A constant."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 245,
        "framework": "Linux+Bash+Git",
        "question": "What is 'git stash'?",
        "options": [
            "Temporarily shelves (stashes) changes so you can work on something else.",
            "Deletes changes.",
            "Commits changes.",
            "Pushes changes."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 246,
        "framework": "Linux+Bash+Git",
        "question": "What is 'git rebase'?",
        "options": [
            "Reapplies commits on top of another base tip.",
            "Resets the base.",
            "Removes the base.",
            "Reads the base."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 247,
        "framework": "Linux+Bash+Git",
        "question": "What is the difference between git merge and git rebase?",
        "options": [
            "Merge creates a new commit; rebase rewrites history.",
            "Merge deletes history.",
            "Rebase creates a new branch.",
            "They are same."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 248,
        "framework": "Linux+Bash+Git",
        "question": "What does 'git diff' do?",
        "options": [
            "Shows changes between commits, commit and working tree, etc.",
            "Shows different files.",
            "Shows history.",
            "Shows authors."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 249,
        "framework": "Linux+Bash+Git",
        "question": "What does 'git revert' do?",
        "options": [
            "Creates a new commit that undoes the changes of a previous commit.",
            "Deletes the commit.",
            "Erases history.",
            "Resets the head."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 250,
        "framework": "Linux+Bash+Git",
        "question": "What is 'git reset'?",
        "options": [
            "Resets current HEAD to the specified state.",
            "Restarts the computer.",
            "Resets the password.",
            "Deletes the repo."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 251,
        "framework": "Linux+Bash+Git",
        "question": "What symbol represents the standard output (stdout)?",
        "options": [
            "1",
            "2",
            "0",
            "out"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 252,
        "framework": "Linux+Bash+Git",
        "question": "What symbol represents standard error (stderr)?",
        "options": [
            "2",
            "1",
            "0",
            "err"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 253,
        "framework": "Spring Boot",
        "question": "Which annotation marks the main class?",
        "options": [
            "@SpringBootApplication",
            "@Main",
            "@Start",
            "@SpringApp"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 254,
        "framework": "Spring Boot",
        "question": "What is dependency injection?",
        "options": [
            "Manually creating objects.",
            "Providing the objects that an object needs (dependencies) from the outside.",
            "Importing libraries.",
            "Injecting SQL into the database."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 255,
        "framework": "Spring Boot",
        "question": "Which port does Spring Boot run on by default?",
        "options": [
            "80",
            "8080",
            "3000",
            "5000"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 256,
        "framework": "Spring Boot",
        "question": "What is the purpose of @RestController?",
        "options": [
            "To define a controller where every method returns a domain object instead of a view.",
            "To create a REST client.",
            "To stop the application.",
            "To handle database connections."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 257,
        "framework": "Spring Boot",
        "question": "How do you define a GET endpoint?",
        "options": [
            "@GetRequest",
            "@GetMapping",
            "@FetchMapping",
            "@ReadMapping"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 258,
        "framework": "Spring Boot",
        "question": "What file is used for configuration by default?",
        "options": [
            "config.xml",
            "application.properties",
            "settings.json",
            "web.xml"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 259,
        "framework": "Spring Boot",
        "question": "What is Spring Actuator?",
        "options": [
            "A tool to monitor and manage the application (health checks, metrics).",
            "A tool to generate code.",
            "A database connector.",
            "A security plugin."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 260,
        "framework": "Spring Boot",
        "question": "Which annotation injects a bean?",
        "options": [
            "@Inject",
            "@Autowire",
            "@Autowired",
            "@Bean"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 261,
        "framework": "Spring Boot",
        "question": "What is a Bean in Spring?",
        "options": [
            "A coffee object.",
            "An object that is instantiated, assembled, and managed by the Spring IoC container.",
            "A variable in a class.",
            "A static method."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 262,
        "framework": "Spring Boot",
        "question": "What is the default embedded server?",
        "options": [
            "Jetty",
            "Tomcat",
            "Undertow",
            "Netty"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 263,
        "framework": "Spring Boot",
        "question": "How do you specify a custom port?",
        "options": [
            "server.port in application.properties",
            "port.set in config",
            "Using command line --port",
            "It cannot be changed"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 264,
        "framework": "Spring Boot",
        "question": "What is @Service used for?",
        "options": [
            "To mark a class as a service layer component holding business logic.",
            "To serve static files.",
            "To define a web endpoint.",
            "To configure the database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 265,
        "framework": "Spring Boot",
        "question": "What is JPA?",
        "options": [
            "Java Persistence API",
            "Java Programming Adapter",
            "JSON Parse Action",
            "Java Public Access"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 266,
        "framework": "Spring Boot",
        "question": "Which annotation handles path variables?",
        "options": [
            "@PathParam",
            "@PathVariable",
            "@UrlVar",
            "@RouteParam"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 267,
        "framework": "Spring Boot",
        "question": "What is the purpose of @Repository?",
        "options": [
            "Indicates the class provides the mechanism for storage, retrieval, and search operation (DAO).",
            "Defines a repository on GitHub.",
            "Stores temporary files.",
            "Manages user sessions."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 268,
        "framework": "Spring Boot",
        "question": "What is the @Component annotation?",
        "options": [
            "Marks a Java class as a bean so the component-scanning mechanism can add it to the application context.",
            "Defines a database component.",
            "Marks a configuration file.",
            "Defines a test."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 269,
        "framework": "Spring Boot",
        "question": "What is 'application.yml'?",
        "options": [
            "An alternative to application.properties using YAML syntax.",
            "A script file.",
            "A log file.",
            "A Java class."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 270,
        "framework": "Spring Boot",
        "question": "What is the default scope of a Spring Bean?",
        "options": [
            "Singleton",
            "Prototype",
            "Request",
            "Session"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 271,
        "framework": "Spring Boot",
        "question": "Which annotation maps HTTP POST requests?",
        "options": [
            "@PostMapping",
            "@PostRequest",
            "@CreateMapping",
            "@SendMapping"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 272,
        "framework": "Spring Boot",
        "question": "What is Spring Data JPA?",
        "options": [
            "A part of Spring Data that makes it easy to implement JPA-based repositories.",
            "A database.",
            "A SQL parser.",
            "A data generator."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 273,
        "framework": "Spring Boot",
        "question": "What is @Value used for?",
        "options": [
            "Injecting values into fields from properties files.",
            "Calculating value.",
            "Formatting currency.",
            "Evaluating math."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 274,
        "framework": "Spring Boot",
        "question": "What is 'DevTools' in Spring Boot?",
        "options": [
            "A set of tools for easier development (e.g., auto-restart).",
            "A compiler.",
            "A deployment tool.",
            "A database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 275,
        "framework": "Spring Boot",
        "question": "What is the 'pom.xml'?",
        "options": [
            "Project Object Model file used by Maven to manage dependencies.",
            "A configuration for Gradle.",
            "A Java source file.",
            "A Python script."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 276,
        "framework": "Spring Boot",
        "question": "What is @Qualifier used for?",
        "options": [
            "To disambiguate which bean to inject when there are multiple of the same type.",
            "To check quality.",
            "To qualify a user.",
            "To run tests."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 277,
        "framework": "Spring Boot",
        "question": "What is @Configuration?",
        "options": [
            "Indicates that a class declares one or more @Bean methods.",
            "Configures the server.",
            "Sets up the database.",
            "Configures the user."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 278,
        "framework": "Spring Boot",
        "question": "What is the purpose of 'CommandLineRunner'?",
        "options": [
            "Interface used to run code after the application startup.",
            "Interface to run command line commands.",
            "A tool to build the app.",
            "A logger."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 279,
        "framework": "Spring Boot",
        "question": "What is @Lazy?",
        "options": [
            "Indicates that a bean is to be initialized lazily (on demand).",
            "A slow bean.",
            "A background process.",
            "A deprecated bean."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 280,
        "framework": "Spring Boot",
        "question": "How do you enable scheduling in Spring Boot?",
        "options": [
            "@EnableScheduling",
            "@StartScheduling",
            "@RunSchedule",
            "@Timer"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 281,
        "framework": "Spring Boot",
        "question": "What does @ResponseBody do?",
        "options": [
            "Indicates that the return value should be bound to the web response body.",
            "Returns a view.",
            "Returns a database row.",
            "Returns an error."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 282,
        "framework": "Spring Boot",
        "question": "What is H2?",
        "options": [
            "An in-memory relational database management system.",
            "A chemical formula.",
            "A web server.",
            "A cloud provider."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 283,
        "framework": "Spring Boot",
        "question": "What is @PreDestroy?",
        "options": [
            "A method to be called just before the bean is removed from the container.",
            "A method to destroy the database.",
            "A cleanup script.",
            "A shutdown hook."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 284,
        "framework": "Spring Boot",
        "question": "What is 'Thymeleaf'?",
        "options": [
            "A modern server-side Java template engine.",
            "A leaf node.",
            "A database.",
            "A CSS framework."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 285,
        "framework": "Spring Boot",
        "question": "Which annotation is used for transaction management?",
        "options": [
            "@Transactional",
            "@Transaction",
            "@DbTrans",
            "@Commit"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 286,
        "framework": "Spring Boot",
        "question": "What is a Spring Profile?",
        "options": [
            "A way to segregate parts of the application configuration and make it only available in certain environments.",
            "A user profile.",
            "A picture.",
            "A database setting."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 287,
        "framework": "Spring Boot",
        "question": "What is '@ControllerAdvice'?",
        "options": [
            "Global exception handling and data binding for controllers.",
            "Advice for controllers.",
            "A comment.",
            "A log."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 288,
        "framework": "Spring Boot",
        "question": "What is an Interceptor?",
        "options": [
            "Middleware that intercepts requests before they reach the controller.",
            "A policeman.",
            "A variable.",
            "A database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 289,
        "framework": "Spring Boot",
        "question": "What is the difference between @Controller and @RestController?",
        "options": [
            "@RestController includes @ResponseBody; @Controller does not.",
            "@Controller is faster.",
            "@RestController is deprecated.",
            "They are same."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 290,
        "framework": "Spring Boot",
        "question": "What is the ApplicationContext?",
        "options": [
            "The central interface to the Spring IoC container.",
            "The text of the app.",
            "The manual.",
            "The server."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 291,
        "framework": "Spring Boot",
        "question": "What is '@Primary'?",
        "options": [
            "Indicates that a bean should be given preference when multiple candidates are qualified.",
            "The first bean.",
            "The main class.",
            "The database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 292,
        "framework": "Spring Boot",
        "question": "What is Bean Scope 'Prototype'?",
        "options": [
            "A new instance is created every time the bean is requested.",
            "One instance per app.",
            "One instance per session.",
            "One instance per request."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 293,
        "framework": "Spring Boot",
        "question": "What does '@RequestHeader' do?",
        "options": [
            "Binds a method parameter to a request header.",
            "Requests a head.",
            "Headers the request.",
            "Reads the URL."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 294,
        "framework": "Spring Boot",
        "question": "What does '@RequestBody' do?",
        "options": [
            "Maps the HttpRequest body to a transfer or domain object.",
            "Reads the body.",
            "Requests a body.",
            "Validates the body."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 295,
        "framework": "Spring Boot",
        "question": "What is 'spring-boot-starter-web'?",
        "options": [
            "Starter for building web, including RESTful, applications using Spring MVC.",
            "Starter for database.",
            "Starter for security.",
            "Starter for testing."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 296,
        "framework": "Spring Boot",
        "question": "What is the default logging framework in Spring Boot?",
        "options": [
            "Logback",
            "Log4j",
            "Java Util Logging",
            "System.out"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 297,
        "framework": "Spring Boot",
        "question": "How do you disable a specific auto-configuration?",
        "options": [
            "Using @SpringBootApplication(exclude = ClassName.class)",
            "Delete the file.",
            "Using properties.",
            "Cannot be disabled."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 298,
        "framework": "Spring Boot",
        "question": "What is 'CommandLineRunner'?",
        "options": [
            "An interface used to run code once after the application is initialized.",
            "A command prompt.",
            "A runner.",
            "A script."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 299,
        "framework": "Spring Boot",
        "question": "What is @EnableWebSecurity?",
        "options": [
            "Enables Spring Security's web security support.",
            "Secures the web.",
            "Enables internet.",
            "Enables password."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 300,
        "framework": "Spring Boot",
        "question": "What is @MockBean?",
        "options": [
            "Annotation to add mocks to a Spring ApplicationContext.",
            "A funny bean.",
            "A fake database.",
            "A test."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 301,
        "framework": "Spring Boot",
        "question": "What is 'application.properties' precedence?",
        "options": [
            "Command line args > Java System properties > OS env variables > application.properties.",
            "Properties > Command line.",
            "They are equal.",
            "Random."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 302,
        "framework": "Django",
        "question": "Which command runs the development server?",
        "options": [
            "python manage.py runserver",
            "django run",
            "python start server",
            "python manage.py start"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 303,
        "framework": "Django",
        "question": "What is the default database in Django?",
        "options": [
            "MySQL",
            "PostgreSQL",
            "SQLite",
            "Oracle"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 304,
        "framework": "Django",
        "question": "What is MVT architecture?",
        "options": [
            "Model-View-Template",
            "Model-View-Controller",
            "Main-View-Text",
            "Model-Variable-Type"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 305,
        "framework": "Django",
        "question": "How do you create a superuser?",
        "options": [
            "python manage.py createsuperuser",
            "python manage.py admin",
            "django create user",
            "python admin.py create"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 306,
        "framework": "Django",
        "question": "Where do you register models to appear in the admin site?",
        "options": [
            "views.py",
            "admin.py",
            "models.py",
            "apps.py"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 307,
        "framework": "Django",
        "question": "What is a Context in Django?",
        "options": [
            "A dictionary mapping template variable names to Python objects.",
            "A database connection.",
            "The current user session.",
            "The URL configuration."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 308,
        "framework": "Django",
        "question": "Which function is used to render a template?",
        "options": [
            "show()",
            "display()",
            "render()",
            "return_template()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 309,
        "framework": "Django",
        "question": "What is the purpose of settings.py?",
        "options": [
            "Contains the project configuration.",
            "Contains the database schema.",
            "Contains the URL routes.",
            "Contains the HTML templates."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 310,
        "framework": "Django",
        "question": "How do you define a URL route?",
        "options": [
            "In urls.py using path() or re_path()",
            "In routes.py",
            "In views.py",
            "In settings.py"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 311,
        "framework": "Django",
        "question": "What is QuerySet?",
        "options": [
            "A collection of database queries to retrieve data.",
            "A set of questions.",
            "A configuration file.",
            "A type of view."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 312,
        "framework": "Django",
        "question": "What does 'makemigrations' do?",
        "options": [
            "Creates new migrations based on the changes detected in models.",
            "Applies changes to the database.",
            "Deletes the database.",
            "Starts the server."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 313,
        "framework": "Django",
        "question": "What is a standard way to manage dependencies in Python/Django?",
        "options": [
            "requirements.txt",
            "package.json",
            "pom.xml",
            "build.gradle"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 314,
        "framework": "Django",
        "question": "Which template tag displays a variable?",
        "options": [
            "{{ variable }}",
            "{% variable %}",
            "[[ variable ]]",
            "<variable>"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 315,
        "framework": "Django",
        "question": "What is middleware?",
        "options": [
            "A framework of hooks into Django's request/response processing.",
            "A database driver.",
            "A frontend library.",
            "A type of model."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 316,
        "framework": "Django",
        "question": "What is the Django Admin?",
        "options": [
            "An automatic admin interface to manage site content.",
            "A command line tool.",
            "A special user role.",
            "A third-party package."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 317,
        "framework": "Django",
        "question": "What is a 'slug' in Django?",
        "options": [
            "A short label for something, containing only letters, numbers, underscores or hyphens.",
            "A slow query.",
            "A bug.",
            "A database field for images."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 318,
        "framework": "Django",
        "question": "What is 'STATIC_URL'?",
        "options": [
            "The URL to use when referring to static files located in STATIC_ROOT.",
            "The URL of the database.",
            "The admin URL.",
            "The home page URL."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 319,
        "framework": "Django",
        "question": "What is a 'fixture'?",
        "options": [
            "A collection of data that can be loaded into a database.",
            "A fixed variable.",
            "A static image.",
            "A test case."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 320,
        "framework": "Django",
        "question": "Which command creates the database tables for the first time?",
        "options": [
            "migrate",
            "makemigrations",
            "initdb",
            "syncdb"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 321,
        "framework": "Django",
        "question": "What is 'DEBUG = True' used for?",
        "options": [
            "Enables detailed error pages and auto-reloading during development.",
            "Makes the site faster.",
            "Secures the site.",
            "Disables logging."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 322,
        "framework": "Django",
        "question": "What is 'CSRF' protection?",
        "options": [
            "Cross-Site Request Forgery protection.",
            "Cascading Style Sheet Resource File.",
            "Client Side Request Format.",
            "Code Source Refactoring."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 323,
        "framework": "Django",
        "question": "How do you access the current user in a view?",
        "options": [
            "request.user",
            "user.current",
            "auth.user",
            "session.user"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 324,
        "framework": "Django",
        "question": "What is 'shortcuts' in Django (e.g., render, redirect)?",
        "options": [
            "Helper functions to make common tasks easier.",
            "Keyboard shortcuts.",
            "Menu items.",
            "URL shorteners."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 325,
        "framework": "Django",
        "question": "What is the default template engine?",
        "options": [
            "Django Templates (DTL)",
            "Jinja2",
            "Mustache",
            "Handlebars"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 326,
        "framework": "Django",
        "question": "What is 'WSGI'?",
        "options": [
            "Web Server Gateway Interface, a standard for Python web application communication.",
            "Web Standard Graphic Interface.",
            "Windows Server Gateway.",
            "Wireless Signal."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 327,
        "framework": "Django",
        "question": "What is a 'ModelForm'?",
        "options": [
            "A helper class that creates a form from a model.",
            "A form for modeling.",
            "A database model.",
            "A view."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 328,
        "framework": "Django",
        "question": "How do you filter a QuerySet?",
        "options": [
            "Model.objects.filter()",
            "Model.objects.get()",
            "Model.search()",
            "Model.find()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 329,
        "framework": "Django",
        "question": "What is 'get_object_or_404'?",
        "options": [
            "Retrieves an object or raises a 404 error if not found.",
            "Gets an object or returns None.",
            "Gets an object or returns 404 integer.",
            "Gets the 404 page."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 330,
        "framework": "Django",
        "question": "What is 'collectstatic'?",
        "options": [
            "Collects static files into STATIC_ROOT for deployment.",
            "Deletes static files.",
            "Downloads static files.",
            "Compiles static files."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 331,
        "framework": "Django",
        "question": "What is 'admin.site.register' used for?",
        "options": [
            "To register a model with the admin interface.",
            "To register a new user.",
            "To register a domain.",
            "To register a view."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 332,
        "framework": "Django",
        "question": "What does the '__str__' method do in a Model?",
        "options": [
            "Returns a string representation of the model instance.",
            "Converts model to string.",
            "Saves the model.",
            "Validates the model."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 333,
        "framework": "Django",
        "question": "What is 'MEDIA_ROOT'?",
        "options": [
            "The absolute filesystem path to the directory that will hold user-uploaded files.",
            "The URL for media.",
            "The root of the drive.",
            "The music folder."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 334,
        "framework": "Django",
        "question": "What is 'AbstractUser'?",
        "options": [
            "A class to inherit from when you want to extend the default User model.",
            "A fake user.",
            "A user with no password.",
            "A deleted user."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 335,
        "framework": "Django",
        "question": "What is a Class-Based View (CBV)?",
        "options": [
            "A view implemented as a class providing structure and reusability.",
            "A classroom.",
            "A view of a class.",
            "A model."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 336,
        "framework": "Django",
        "question": "What are Signals in Django?",
        "options": [
            "A dispatcher mechanism to allow decoupled applications to get notified when actions occur.",
            "Traffic signals.",
            "WiFi signals.",
            "Errors."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 337,
        "framework": "Django",
        "question": "What is a 'Context Processor'?",
        "options": [
            "A function that runs before a template is rendered and adds variables to the context.",
            "A CPU.",
            "A text editor.",
            "A database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 338,
        "framework": "Django",
        "question": "What is Template Inheritance?",
        "options": [
            "Allows you to build a base 'skeleton' template that contains common site elements.",
            "Inheriting money.",
            "Copying files.",
            "Linking pages."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 339,
        "framework": "Django",
        "question": "What is 'reverse()'?",
        "options": [
            "A utility to generate URLs from view names.",
            "Reversing a string.",
            "Driving back.",
            "Undoing a deletion."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 340,
        "framework": "Django",
        "question": "What is 'F()' expression?",
        "options": [
            "Allows you to refer to model field values directly in the database query.",
            "A grade.",
            "A function.",
            "A variable."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 341,
        "framework": "Django",
        "question": "What is 'Q()' object?",
        "options": [
            "An object used to encapsulate a collection of keyword arguments for complex database lookups.",
            "A question.",
            "A queue.",
            "A query."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 342,
        "framework": "Django",
        "question": "What is 'select_related'?",
        "options": [
            "Performance booster using SQL JOIN to retrieve related objects in a single query.",
            "Selects family.",
            "Selects all.",
            "Slows down query."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 343,
        "framework": "Django",
        "question": "What is 'prefetch_related'?",
        "options": [
            "Performance booster that does a separate lookup for related objects (good for ManyToMany).",
            "Fetches before.",
            "Fetches later.",
            "Prefetches internet."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 344,
        "framework": "Django",
        "question": "What command creates an app?",
        "options": [
            "python manage.py startapp",
            "create app",
            "new app",
            "make app"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 345,
        "framework": "Django",
        "question": "What is '__init__.py'?",
        "options": [
            "A file that makes a directory a Python package.",
            "A startup script.",
            "A variable.",
            "A database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 346,
        "framework": "Django",
        "question": "What is the 'meta' class in models?",
        "options": [
            "A container for model options/metadata.",
            "A physics term.",
            "A Facebook class.",
            "A super class."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 347,
        "framework": "Django",
        "question": "What is a 'Mixin'?",
        "options": [
            "A class containing methods for use by other classes without having to be the parent class.",
            "A blender.",
            "A variable.",
            "A tool."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 348,
        "framework": "Django",
        "question": "What is 'loaddata'?",
        "options": [
            "Loads the contents of a fixture into the database.",
            "Loads a file.",
            "Loads a page.",
            "Loads internet."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 349,
        "framework": "Django",
        "question": "What is 'dumpdata'?",
        "options": [
            "Output the contents of the database to a fixture.",
            "Dumps trash.",
            "Deletes data.",
            "Prints data."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 350,
        "framework": "Django",
        "question": "What is 'session' framework?",
        "options": [
            "Allows you to store and retrieve arbitrary data on a per-site-visitor basis.",
            "A meeting.",
            "A time.",
            "A login."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 351,
        "framework": "Django",
        "question": "What is 'Whitenoise'?",
        "options": [
            "A library to simplify static file serving for Python web apps.",
            "A sound.",
            "A color.",
            "A database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 352,
        "framework": "Automation Testing",
        "question": "Which locator is generally preferred for stability?",
        "options": [
            "XPath",
            "ID",
            "Class Name",
            "Tag Name"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 353,
        "framework": "Automation Testing",
        "question": "What is a headless browser?",
        "options": [
            "A browser without a graphical user interface.",
            "A browser that is very slow.",
            "A browser used only for headers.",
            "A mobile browser."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 354,
        "framework": "Automation Testing",
        "question": "What is the Page Object Model (POM)?",
        "options": [
            "A design pattern creating an object repository for web UI elements.",
            "A tool for page speed.",
            "A database model.",
            "A type of assertion."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 355,
        "framework": "Automation Testing",
        "question": "What is Data-Driven Testing?",
        "options": [
            "Running the same test logic with multiple sets of data.",
            "Testing the database only.",
            "Testing without data.",
            "Manually entering data."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 356,
        "framework": "Automation Testing",
        "question": "Which tool is widely used for API testing?",
        "options": [
            "Selenium",
            "Postman",
            "Appium",
            "Jira"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 357,
        "framework": "Automation Testing",
        "question": "What is a flaky test?",
        "options": [
            "A test that fails and passes intermittently without code changes.",
            "A test that always fails.",
            "A test that tests flakes.",
            "A broken test."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 358,
        "framework": "Automation Testing",
        "question": "What does 'wait' do in automation?",
        "options": [
            "Pauses execution to allow elements to load.",
            "Stops the test permanently.",
            "Waits for user input.",
            "Slows down the internet."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 359,
        "framework": "Automation Testing",
        "question": "What is Cucumber used for?",
        "options": [
            "Behavior Driven Development (BDD) using Gherkin syntax.",
            "Unit testing Java code.",
            "Load testing.",
            "Managing databases."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 360,
        "framework": "Automation Testing",
        "question": "What is the Gherkin language?",
        "options": [
            "A structured language using Given-When-Then syntax.",
            "A programming language like Python.",
            "A database query language.",
            "A scripting tool."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 361,
        "framework": "Automation Testing",
        "question": "What is Mocking?",
        "options": [
            "Simulating the behavior of real objects/modules.",
            "Making fun of the code.",
            "Copying code.",
            "Deleting objects."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 362,
        "framework": "Automation Testing",
        "question": "What is CI/CD?",
        "options": [
            "Continuous Integration / Continuous Deployment",
            "Code Integration / Code Development",
            "Computer Interface / Computer Design",
            "Continuous Input / Continuous Data"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 363,
        "framework": "Automation Testing",
        "question": "Which of these is a load testing tool?",
        "options": [
            "JMeter",
            "JUnit",
            "Selenium",
            "TestNG"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 364,
        "framework": "Automation Testing",
        "question": "What is implicit wait?",
        "options": [
            "A global wait setting for looking up elements.",
            "A wait for a specific condition.",
            "A hardcoded sleep.",
            "A manual pause."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 365,
        "framework": "Automation Testing",
        "question": "What is cross-browser testing?",
        "options": [
            "Verifying the application works across different web browsers.",
            "Testing only on Chrome.",
            "Testing on mobile only.",
            "Testing the browser installation."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 366,
        "framework": "Automation Testing",
        "question": "What is the purpose of a TearDown method?",
        "options": [
            "To clean up after tests (close browser, delete data).",
            "To start the test.",
            "To write the report.",
            "To fail the test."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 367,
        "framework": "Automation Testing",
        "question": "What is an 'Element Not Visible' exception?",
        "options": [
            "Occurs when an element is present in DOM but not visible on page.",
            "Occurs when element is missing.",
            "Occurs when element is broken.",
            "Occurs when network fails."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 368,
        "framework": "Automation Testing",
        "question": "What is TestNG?",
        "options": [
            "A testing framework inspired by JUnit and NUnit.",
            "A tool for manual testing.",
            "A browser plugin.",
            "A coding language."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 369,
        "framework": "Automation Testing",
        "question": "What is a 'Soft Assert'?",
        "options": [
            "An assertion that allows the test to continue even if it fails.",
            "An assertion that stops the test.",
            "A quiet assertion.",
            "A manual check."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 370,
        "framework": "Automation Testing",
        "question": "What is 'Hard Assert'?",
        "options": [
            "An assertion that stops test execution immediately upon failure.",
            "A difficult test.",
            "A hardware check.",
            "A database check."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 371,
        "framework": "Automation Testing",
        "question": "What is the purpose of 'driver.get(url)'?",
        "options": [
            "Navigates the browser to the specified URL.",
            "Gets the URL text.",
            "Downloads the URL.",
            "Checks if URL exists."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 372,
        "framework": "Automation Testing",
        "question": "What is 'driver.quit()'?",
        "options": [
            "Closes all browser windows and ends the WebDriver session.",
            "Closes only the current window.",
            "Refreshes the page.",
            "Minimizes the browser."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 373,
        "framework": "Automation Testing",
        "question": "What is 'driver.close()'?",
        "options": [
            "Closes the current active window.",
            "Closes all windows.",
            "Stops the server.",
            "Exits the program."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 374,
        "framework": "Automation Testing",
        "question": "What is the 'ActionChains' class used for?",
        "options": [
            "To handle complex user gestures like drag and drop, hover, etc.",
            "To chain tests together.",
            "To link databases.",
            "To chain assertions."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 375,
        "framework": "Automation Testing",
        "question": "What is an 'Alert' in Selenium?",
        "options": [
            "A popup dialog box.",
            "A warning log.",
            "A notification email.",
            "A sound."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 376,
        "framework": "Automation Testing",
        "question": "How do you handle a dropdown?",
        "options": [
            "Using the Select class.",
            "Using the Dropdown class.",
            "Using the List class.",
            "Clicking coordinates."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 377,
        "framework": "Automation Testing",
        "question": "What is 'Maven'?",
        "options": [
            "A build automation tool used primarily for Java projects.",
            "A testing tool.",
            "A web browser.",
            "A database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 378,
        "framework": "Automation Testing",
        "question": "What is 'Jenkins'?",
        "options": [
            "A widely used open-source automation server for CI/CD.",
            "A programming language.",
            "A person.",
            "A browser."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 379,
        "framework": "Automation Testing",
        "question": "What is 'XPath'?",
        "options": [
            "A syntax for defining parts of an XML document, used to locate elements.",
            "A path to a file.",
            "A drawing tool.",
            "A math graph."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 380,
        "framework": "Automation Testing",
        "question": "What is 'CSS Selector'?",
        "options": [
            "A pattern to select elements in HTML documents.",
            "A style sheet.",
            "A color picker.",
            "A script."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 381,
        "framework": "Automation Testing",
        "question": "What is 'Parallel Execution'?",
        "options": [
            "Running multiple tests simultaneously.",
            "Running tests one by one.",
            "Running tests on parallel lines.",
            "Running tests on a server."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 382,
        "framework": "Automation Testing",
        "question": "What is 'Grid' in Selenium?",
        "options": [
            "A tool to run tests on different machines/browsers in parallel.",
            "A layout tool.",
            "A table.",
            "A network."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 383,
        "framework": "Automation Testing",
        "question": "What is 'DDT' (Data Driven Testing)?",
        "options": [
            "Separating test logic from test data.",
            "Testing the database.",
            "Daily Data Testing.",
            "Direct Data Transfer."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 384,
        "framework": "Automation Testing",
        "question": "What is 'POM' (Project Object Model) file?",
        "options": [
            "The XML file (pom.xml) in Maven that contains project configuration.",
            "The page object model design.",
            "A picture file.",
            "A project manager."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 385,
        "framework": "Automation Testing",
        "question": "What is a Fluent Wait?",
        "options": [
            "A wait that checks for a condition at regular intervals.",
            "A fast wait.",
            "A speaking wait.",
            "A liquid wait."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 386,
        "framework": "Automation Testing",
        "question": "What is 'driver.switchTo().frame()'?",
        "options": [
            "Switches the focus to a specific iframe/frame.",
            "Switches windows.",
            "Switches users.",
            "Switches off."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 387,
        "framework": "Automation Testing",
        "question": "What is 'driver.switchTo().alert()'?",
        "options": [
            "Switches focus to an alert popup.",
            "Alerts the user.",
            "Sounds an alarm.",
            "Stops the test."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 388,
        "framework": "Automation Testing",
        "question": "What is a Relative Locator (Selenium 4)?",
        "options": [
            "Locating elements based on their position relative to other elements (above, below).",
            "A cousin.",
            "A map.",
            "A GPS."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 389,
        "framework": "Automation Testing",
        "question": "What are TestNG Annotations?",
        "options": [
            "Tags like @Test, @BeforeMethod to control test execution.",
            "Comments.",
            "Notes.",
            "Variables."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 390,
        "framework": "Automation Testing",
        "question": "What is Selenium Hub?",
        "options": [
            "The central point where tests are loaded in a Grid.",
            "A wheel.",
            "A router.",
            "A website."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 391,
        "framework": "Automation Testing",
        "question": "What is a Selenium Node?",
        "options": [
            "A machine that executes the tests loaded by the Hub.",
            "A lump.",
            "A intersection.",
            "A code block."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 392,
        "framework": "Automation Testing",
        "question": "What is the Robot class?",
        "options": [
            "A Java class to generate native system input events.",
            "A physical robot.",
            "A toy.",
            "A script."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 393,
        "framework": "Automation Testing",
        "question": "How do you take a screenshot in Selenium?",
        "options": [
            "TakesScreenshot interface.",
            "Print Screen button.",
            "Camera.",
            "Screen.capture()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 394,
        "framework": "Automation Testing",
        "question": "What is Headless execution?",
        "options": [
            "Running the browser in the background without a UI.",
            "Running without thinking.",
            "Running fast.",
            "Running on server."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 395,
        "framework": "Automation Testing",
        "question": "What is the difference between @BeforeClass and @BeforeMethod?",
        "options": [
            "@BeforeClass runs once per class; @BeforeMethod runs before every test method.",
            "They are same.",
            "@BeforeClass is faster.",
            "@BeforeMethod is global."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 396,
        "framework": "Automation Testing",
        "question": "What is Appium?",
        "options": [
            "An open-source tool for automating mobile applications.",
            "A browser.",
            "A game.",
            "A phone."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 397,
        "framework": "Automation Testing",
        "question": "What is the 'Actions' class?",
        "options": [
            "Used for mouse and keyboard interactions.",
            "Used for movies.",
            "Used for database.",
            "Used for logging."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 398,
        "framework": "Automation Testing",
        "question": "What is 'driver.navigate().refresh()'?",
        "options": [
            "Refreshes the current page.",
            "Closes the page.",
            "Opens a new page.",
            "Goes back."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 399,
        "framework": "Automation Testing",
        "question": "What is StaleElementReferenceException?",
        "options": [
            "Thrown when the element is no longer attached to the DOM.",
            "Thrown when element is old.",
            "Thrown when element is broken.",
            "Thrown when slow."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 400,
        "framework": "Automation Testing",
        "question": "What is 'testng.xml'?",
        "options": [
            "Configuration file to define test suites and parameters in TestNG.",
            "A log file.",
            "A data file.",
            "A script."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 401,
        "framework": "Automation Testing",
        "question": "What is Cucumber Hooks?",
        "options": [
            "Blocks of code that run before or after scenarios (e.g., @Before, @After).",
            "Fishing hooks.",
            "Coat hooks.",
            "Variables."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 402,
        "framework": "Manual Testing",
        "question": "What is the difference between Severity and Priority?",
        "options": [
            "Severity is impact on the system; Priority is urgency to fix.",
            "Severity is urgency; Priority is impact.",
            "They are the same.",
            "Severity is for developers; Priority is for managers."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 403,
        "framework": "Manual Testing",
        "question": "What is Black Box Testing?",
        "options": [
            "Testing without knowing the internal code structure.",
            "Testing with full knowledge of code.",
            "Testing the hardware box.",
            "Testing at night."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 404,
        "framework": "Manual Testing",
        "question": "What is White Box Testing?",
        "options": [
            "Testing with knowledge of internal logic and code.",
            "Testing the UI only.",
            "Testing documentation.",
            "Testing blindly."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 405,
        "framework": "Manual Testing",
        "question": "What is UAT?",
        "options": [
            "User Acceptance Testing",
            "Unit Access Testing",
            "User Automated Testing",
            "Unified Application Testing"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 406,
        "framework": "Manual Testing",
        "question": "What is Smoke Testing?",
        "options": [
            "Preliminary testing to reveal simple failures severe enough to reject a release.",
            "Testing for fire hazards.",
            "Testing the final release thoroughly.",
            "Testing the database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 407,
        "framework": "Manual Testing",
        "question": "What is Sanity Testing?",
        "options": [
            "A subset of regression testing to verify a specific fix works.",
            "Testing if the developer is sane.",
            "Testing the entire system.",
            "Testing the documentation."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 408,
        "framework": "Manual Testing",
        "question": "What is the Software Testing Life Cycle (STLC)?",
        "options": [
            "The sequence of activities conducted to perform testing.",
            "The coding phase.",
            "The deployment phase.",
            "The maintenance phase."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 409,
        "framework": "Manual Testing",
        "question": "What is a test plan?",
        "options": [
            "A document describing the scope, approach, resources, and schedule of testing.",
            "A list of bugs.",
            "A code file.",
            "A meeting agenda."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 410,
        "framework": "Manual Testing",
        "question": "What is positive testing?",
        "options": [
            "Checking if the system does what it is supposed to do with valid input.",
            "Checking if the system fails gracefully.",
            "Testing with a happy attitude.",
            "Testing only successful builds."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 411,
        "framework": "Manual Testing",
        "question": "What is negative testing?",
        "options": [
            "Checking how the system handles invalid input or unexpected user behavior.",
            "Trying to break the system maliciously.",
            "Complaining about the software.",
            "Testing only failed builds."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 412,
        "framework": "Manual Testing",
        "question": "What is a defect density?",
        "options": [
            "The number of defects confirmed in a module during a specific period of operation/development.",
            "The weight of the bug report.",
            "The size of the code.",
            "The number of developers."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 413,
        "framework": "Manual Testing",
        "question": "What is RTM?",
        "options": [
            "Requirement Traceability Matrix",
            "Runtime Memory",
            "Real Time Monitoring",
            "Regression Test Manager"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 414,
        "framework": "Manual Testing",
        "question": "What is Ad-hoc testing?",
        "options": [
            "Testing performed without planning or documentation.",
            "Testing with a strict plan.",
            "Automated testing.",
            "Testing by the user."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 415,
        "framework": "Manual Testing",
        "question": "What is Boundary Value Analysis?",
        "options": [
            "Testing at the boundaries between partitions (e.g., min, max, min-1, max+1).",
            "Testing the middle values.",
            "Testing random values.",
            "Testing the user interface borders."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 416,
        "framework": "Manual Testing",
        "question": "What is the difference between Verification and Validation?",
        "options": [
            "Verification checks if we are building the product right; Validation checks if we are building the right product.",
            "Verification is manual; Validation is automated.",
            "They are synonyms.",
            "Validation is done by developers; Verification by testers."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 417,
        "framework": "Manual Testing",
        "question": "What is System Testing?",
        "options": [
            "Testing the complete and integrated software product.",
            "Testing a single unit.",
            "Testing the hardware.",
            "Testing the documentation."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 418,
        "framework": "Manual Testing",
        "question": "What is Acceptance Testing?",
        "options": [
            "Testing to verify if the system satisfies business requirements.",
            "Testing if the code compiles.",
            "Testing the network.",
            "Testing the installation."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 419,
        "framework": "Manual Testing",
        "question": "What is Non-Functional Testing?",
        "options": [
            "Testing aspects like performance, usability, reliability, etc.",
            "Testing functionality.",
            "Testing nothing.",
            "Testing broken code."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 420,
        "framework": "Manual Testing",
        "question": "What is Load Testing?",
        "options": [
            "Testing the system's behavior under expected load conditions.",
            "Testing with zero load.",
            "Testing the weight of hardware.",
            "Testing installation speed."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 421,
        "framework": "Manual Testing",
        "question": "What is Stress Testing?",
        "options": [
            "Testing beyond normal operational capacity to finding breaking points.",
            "Testing while stressed.",
            "Testing normal load.",
            "Testing only one user."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 422,
        "framework": "Manual Testing",
        "question": "What is Usability Testing?",
        "options": [
            "Testing how easy and user-friendly the application is.",
            "Testing if it works.",
            "Testing the code style.",
            "Testing the database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 423,
        "framework": "Manual Testing",
        "question": "What is Compatibility Testing?",
        "options": [
            "Testing the software on different hardware, OS, browsers, etc.",
            "Testing if developers get along.",
            "Testing internet speed.",
            "Testing power supply."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 424,
        "framework": "Manual Testing",
        "question": "What is a 'Hotfix'?",
        "options": [
            "A code fix applied directly to a live system to fix a critical bug.",
            "A hot drink.",
            "A major release.",
            "A planned update."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 425,
        "framework": "Manual Testing",
        "question": "What is the 'Waterfall' model?",
        "options": [
            "A linear sequential software development life cycle model.",
            "A fluid model.",
            "A circular model.",
            "A chaotic model."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 426,
        "framework": "Manual Testing",
        "question": "What is 'Agile' methodology?",
        "options": [
            "Iterative and incremental development with flexibility and collaboration.",
            "A slow process.",
            "A rigid process.",
            "A documentation-heavy process."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 427,
        "framework": "Manual Testing",
        "question": "What is a 'Scrum'?",
        "options": [
            "An agile framework for managing knowledge work.",
            "A rugby term.",
            "A type of meeting.",
            "A bug tracking tool."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 428,
        "framework": "Manual Testing",
        "question": "What is a 'Sprint'?",
        "options": [
            "A set period of time during which specific work has to be completed.",
            "A run.",
            "A fast test.",
            "A delay."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 429,
        "framework": "Manual Testing",
        "question": "What is 'Severity'?",
        "options": [
            "The extent to which a defect can affect the software.",
            "The priority.",
            "The speed of fix.",
            "The size of file."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 430,
        "framework": "Manual Testing",
        "question": "What is 'Priority'?",
        "options": [
            "How quickly a defect should be fixed.",
            "The impact on system.",
            "The person who fixed it.",
            "The difficulty."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 431,
        "framework": "Manual Testing",
        "question": "What is 'End-to-End' testing?",
        "options": [
            "Testing the flow of a system from start to finish.",
            "Testing the last feature.",
            "Testing the backend.",
            "Testing the frontend."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 432,
        "framework": "Manual Testing",
        "question": "What is 'Alpha Testing'?",
        "options": [
            "Testing done by developers or internal teams before releasing to external users.",
            "Testing by the end user.",
            "Testing by robots.",
            "The final test."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 433,
        "framework": "Manual Testing",
        "question": "What is 'Beta Testing'?",
        "options": [
            "Testing performed by real users in a real environment before final release.",
            "Testing by developers.",
            "Testing the alphabet.",
            "Testing in the lab."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 434,
        "framework": "Manual Testing",
        "question": "What is a 'Traceability Matrix'?",
        "options": [
            "A document that maps and traces user requirements with test cases.",
            "A movie.",
            "A drawing.",
            "A database schema."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 435,
        "framework": "Manual Testing",
        "question": "What is the Defect Life Cycle?",
        "options": [
            "The cycle a defect goes through from discovery to closure.",
            "The life of a bug.",
            "A biology term.",
            "A test plan."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 436,
        "framework": "Manual Testing",
        "question": "What is 'Retesting'?",
        "options": [
            "Testing a specific defect after it has been fixed.",
            "Testing everything.",
            "Testing again.",
            "Testing old code."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 437,
        "framework": "Manual Testing",
        "question": "What is Static Testing?",
        "options": [
            "Testing documents and code without execution (e.g., reviews).",
            "Testing electricity.",
            "Testing while standing still.",
            "Testing old computers."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 438,
        "framework": "Manual Testing",
        "question": "What is Dynamic Testing?",
        "options": [
            "Testing code by executing it.",
            "Testing while moving.",
            "Testing fast.",
            "Testing randomly."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 439,
        "framework": "Manual Testing",
        "question": "What is a Test Matrix?",
        "options": [
            "A spreadsheet mapping requirements to test cases.",
            "A movie.",
            "A math problem.",
            "A grid."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 440,
        "framework": "Manual Testing",
        "question": "What is a Walkthrough?",
        "options": [
            "A meeting where the author leads the team through the document/code.",
            "Walking around.",
            "A game guide.",
            "A casual test."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 441,
        "framework": "Manual Testing",
        "question": "What is an Inspection?",
        "options": [
            "A formal review process to find defects.",
            "Looking closely.",
            "A police check.",
            "A casual look."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 442,
        "framework": "Manual Testing",
        "question": "What are Entry Criteria?",
        "options": [
            "Conditions that must be met before testing can start.",
            "Tickets.",
            "Passwords.",
            "Doors."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 443,
        "framework": "Manual Testing",
        "question": "What are Exit Criteria?",
        "options": [
            "Conditions that must be met to stop testing.",
            "Emergency exits.",
            "Logging out.",
            "Failing."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 444,
        "framework": "Manual Testing",
        "question": "What is Monkey Testing?",
        "options": [
            "Testing by random inputs without knowledge of the system.",
            "Testing with animals.",
            "Testing trees.",
            "Testing climbing."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 445,
        "framework": "Manual Testing",
        "question": "What is a Test Harness?",
        "options": [
            "A collection of software and test data to test a program unit.",
            "A safety belt.",
            "A horse gear.",
            "A backpack."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 446,
        "framework": "Manual Testing",
        "question": "What is Security Testing?",
        "options": [
            "Testing to determine if the system protects data and maintains functionality.",
            "Testing locks.",
            "Testing guards.",
            "Testing alarms."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 447,
        "framework": "Manual Testing",
        "question": "What is Localization Testing?",
        "options": [
            "Testing how the software adapts to a specific culture/locale.",
            "Testing GPS.",
            "Testing maps.",
            "Testing location."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 448,
        "framework": "Manual Testing",
        "question": "What is Globalization Testing?",
        "options": [
            "Testing if the software can function in any culture/locale.",
            "Testing the world.",
            "Testing internet.",
            "Testing travel."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 449,
        "framework": "Manual Testing",
        "question": "What is 'Bug Triage'?",
        "options": [
            "A meeting to prioritize and assign defects.",
            "Killing bugs.",
            "Sorting trash.",
            "A medical term."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 450,
        "framework": "Manual Testing",
        "question": "What is the difference between Error, Defect, and Failure?",
        "options": [
            "Error is human mistake; Defect is bug in code; Failure is deviation in behavior.",
            "They are same.",
            "Failure is human mistake.",
            "Error is software bug."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 451,
        "framework": "Manual Testing",
        "question": "What is Test Closure?",
        "options": [
            "The final stage where reports are generated and testing is formally ended.",
            "Closing the door.",
            "Shutting down computer.",
            "Deleting tests."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 452,
        "framework": "Python",
        "question": "What is the use of 'super()' in Python?",
        "options": [
            "To call methods of the parent class in inheritance.",
            "To create a super user.",
            "To define a static method.",
            "To import all modules."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 453,
        "framework": "Python",
        "question": "What is a tuple's primary use case?",
        "options": [
            "To store a fixed collection of heterogeneous data (e.g., coordinates, database records).",
            "Storing dynamic lists.",
            "Fast searching.",
            "Storing only numbers."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 454,
        "framework": "Python",
        "question": "Which module is used for unit testing?",
        "options": [
            "pytest",
            "unittest",
            "testme",
            "pytest-unit"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 455,
        "framework": "Python",
        "question": "What is a method resolution order (MRO)?",
        "options": [
            "The order in which Python searches for inherited methods and attributes.",
            "The order of class declaration.",
            "The order of variable assignment.",
            "The order of module import."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 456,
        "framework": "Python",
        "question": "What is a 'type hint'?",
        "options": [
            "Syntax to suggest the expected type of a variable, function parameter, or return value.",
            "A type of comment.",
            "A mandatory type definition.",
            "A way to change variable type."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 457,
        "framework": "Python",
        "question": "How do you define a constant (conventionally) in Python?",
        "options": [
            "Using 'const' keyword.",
            "Defining variable names in ALL_CAPS.",
            "Defining variables in CamelCase.",
            "Using the 'final' keyword."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 458,
        "framework": "Python",
        "question": "What does the `pass` statement represent in a loop or function?",
        "options": [
            "A placeholder for code that hasn't been written yet.",
            "Skipping the loop iteration.",
            "Exiting the program.",
            "Raising an exception."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 459,
        "framework": "Python",
        "question": "What is the `__slots__` attribute used for?",
        "options": [
            "To explicitly declare data members, preventing the creation of `__dict__` and saving memory.",
            "To define slots in a list.",
            "To run code in a specific slot.",
            "To create private methods."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 460,
        "framework": "Python",
        "question": "How do you find the index of an element in a list?",
        "options": [
            "list.search(element)",
            "list.index(element)",
            "list.get_index(element)",
            "list.find(element)"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 461,
        "framework": "Python",
        "question": "What is a dict view object?",
        "options": [
            "A view into a dictionary's keys, values, or items that reflects changes dynamically.",
            "A copy of the dictionary.",
            "A static snapshot of data.",
            "A graphical interface."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 462,
        "framework": "Python",
        "question": "What is a 'descriptor' used for?",
        "options": [
            "Implementing managed attributes (get, set, delete) on classes.",
            "Creating constants.",
            "Defining functions.",
            "Handling exceptions."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 463,
        "framework": "Python",
        "question": "How do you remove duplicates from a list efficiently?",
        "options": [
            "Convert it to a set and back to a list.",
            "Use a 'for' loop and if condition.",
            "Use the `.remove_duplicates()` method.",
            "Sort the list first."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 464,
        "framework": "Python",
        "question": "Which protocol does the `len()` function use?",
        "options": [
            "The `__size__` magic method.",
            "The `__length__` magic method.",
            "The `__len__` magic method.",
            "The `.length()` method."
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 465,
        "framework": "Python",
        "question": "What is the `eval()` function used for?",
        "options": [
            "To execute a string as a Python expression.",
            "To evaluate variable types.",
            "To test code.",
            "To print output."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 466,
        "framework": "Python",
        "question": "What is 'pickling' and 'unpickling'?",
        "options": [
            "Serialization and deserialization of Python objects.",
            "Encrypting and decrypting data.",
            "Compressing and decompressing files.",
            "Compiling and decompiling code."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 467,
        "framework": "Java",
        "question": "What is the difference between Array and ArrayList?",
        "options": [
            "Array size is fixed; ArrayList size is dynamic.",
            "ArrayList can only store primitives.",
            "Array is always faster.",
            "ArrayList is deprecated."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 468,
        "framework": "Java",
        "question": "What is Encapsulation?",
        "options": [
            "Binding data and the methods that manipulate it into a single unit (class) and restricting access.",
            "Hiding objects.",
            "Creating variables.",
            "Inheriting classes."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 469,
        "framework": "Java",
        "question": "Which keyword is used to prevent method overriding?",
        "options": [
            "static",
            "final",
            "abstract",
            "private"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 470,
        "framework": "Java",
        "question": "What is the role of the default constructor?",
        "options": [
            "It is automatically provided if no other constructor is defined.",
            "It throws an exception.",
            "It must be explicitly defined.",
            "It prevents object creation."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 471,
        "framework": "Java",
        "question": "What is 'autoboxing'?",
        "options": [
            "Automatic conversion of primitive types to their corresponding wrapper class objects.",
            "Packing data.",
            "Automating code.",
            "Converting objects to primitives."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 472,
        "framework": "Java",
        "question": "What is the purpose of the 'break' statement in a switch case?",
        "options": [
            "To exit the switch block after a match is found.",
            "To continue to the next case.",
            "To skip the switch.",
            "To throw an error."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 473,
        "framework": "Java",
        "question": "What is the `Runnable` interface used for?",
        "options": [
            "Defining the task to be executed by a thread.",
            "Running the application.",
            "Defining the main method.",
            "Connecting to a database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 474,
        "framework": "Java",
        "question": "What does the 'super()' keyword do inside a constructor?",
        "options": [
            "Calls the constructor of the immediate parent class.",
            "Calls the current class constructor.",
            "Defines a super class.",
            "Creates a static block."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 475,
        "framework": "Java",
        "question": "What is a Heap in Java memory structure?",
        "options": [
            "The area where objects and arrays are allocated (shared memory).",
            "The area for method code.",
            "The area for local variables.",
            "The area for static data."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 476,
        "framework": "Java",
        "question": "What is the Stack in Java memory structure?",
        "options": [
            "The area where method calls and local variables are stored (per thread).",
            "The area for objects.",
            "The area for string pool.",
            "The area for constants."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 477,
        "framework": "Java",
        "question": "Which type of polymorphism is achieved through method overloading?",
        "options": [
            "Run-time polymorphism.",
            "Compile-time polymorphism.",
            "Dynamic polymorphism.",
            "Method polymorphism."
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 478,
        "framework": "Java",
        "question": "What is a 'try-with-resources' statement?",
        "options": [
            "A construct ensuring that each resource is closed at the end of the statement.",
            "A new type of loop.",
            "A way to open files.",
            "A method to define resources."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 479,
        "framework": "Java",
        "question": "What is the use of the `instanceof` operator?",
        "options": [
            "To check if an object is an instance of a particular class or interface.",
            "To create a new instance.",
            "To define a class.",
            "To import a class."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 480,
        "framework": "Java",
        "question": "What is the `System.gc()` method?",
        "options": [
            "A method that suggests the JVM run the garbage collector.",
            "A method that forces garbage collection immediately.",
            "A system command.",
            "A command to clear console."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 481,
        "framework": "Java",
        "question": "What is the primary benefit of using `interface` over `abstract class` for multiple implementation?",
        "options": [
            "A class can implement multiple interfaces but only extend one abstract class.",
            "Interfaces can have constructors.",
            "Abstract classes are faster.",
            "Interfaces can define variables."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 482,
        "framework": "JavaScript",
        "question": "Which object is at the top of the scope chain in a browser?",
        "options": [
            "document",
            "window",
            "global",
            "scope"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 483,
        "framework": "JavaScript",
        "question": "What is 'Type Coercion'?",
        "options": [
            "Automatic conversion of values from one data type to another.",
            "Manual type casting.",
            "Type checking.",
            "Type definition."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 484,
        "framework": "JavaScript",
        "question": "What is a 'Promise' state when the asynchronous operation has completed successfully?",
        "options": [
            "pending",
            "rejected",
            "fulfilled",
            "settled"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 485,
        "framework": "JavaScript",
        "question": "What does `await` do in an `async` function?",
        "options": [
            "Pauses the execution of the async function until the Promise resolves.",
            "Stops the program.",
            "Throws an error.",
            "Runs code synchronously."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 486,
        "framework": "JavaScript",
        "question": "What is the result of `typeof null` in JavaScript?",
        "options": [
            "null",
            "undefined",
            "object",
            "number"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 487,
        "framework": "JavaScript",
        "question": "What is the difference between `let` and `const`?",
        "options": [
            "`const` requires initialization and cannot be reassigned; `let` can be reassigned.",
            "`const` is global.",
            "`let` is faster.",
            "They are same."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 488,
        "framework": "JavaScript",
        "question": "What is a higher-order function?",
        "options": [
            "A function that takes one or more functions as arguments or returns a function.",
            "A function that runs faster.",
            "A function defined at the top.",
            "A recursive function."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 489,
        "framework": "JavaScript",
        "question": "Which array method executes a provided function once for each array element, but does not return a new array?",
        "options": [
            "map()",
            "filter()",
            "reduce()",
            "forEach()"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 490,
        "framework": "JavaScript",
        "question": "What is the concept of 'event delegation'?",
        "options": [
            "Attaching a single event listener to a parent element instead of multiple listeners to child elements.",
            "Delegating events to a server.",
            "Stopping an event.",
            "Creating an event."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 491,
        "framework": "JavaScript",
        "question": "What does the `call()` method do?",
        "options": [
            "Invokes a function with a specified `this` value and arguments provided individually.",
            "Invokes a function with arguments as an array.",
            "Binds a function.",
            "Calls a variable."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 492,
        "framework": "JavaScript",
        "question": "What does the `apply()` method do?",
        "options": [
            "Invokes a function with a specified `this` value and arguments provided as an array.",
            "Invokes a function with arguments individually.",
            "Binds a function.",
            "Applies CSS."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 493,
        "framework": "JavaScript",
        "question": "What are 'template literals' used for?",
        "options": [
            "String interpolation and multi-line strings.",
            "Creating HTML templates.",
            "Defining objects.",
            "Creating arrays."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 494,
        "framework": "JavaScript",
        "question": "How do you convert an object to a JSON string?",
        "options": [
            "JSON.stringify(object)",
            "JSON.parse(object)",
            "object.toJSON()",
            "String(object)"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 495,
        "framework": "JavaScript",
        "question": "Which ES6 feature simplifies the process of extracting values from arrays or objects?",
        "options": [
            "Spread operator",
            "Rest parameter",
            "Destructuring assignment",
            "Generators"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 496,
        "framework": "JavaScript",
        "question": "What is the purpose of `map` in array iteration?",
        "options": [
            "To transform each element and return a new array of the same length.",
            "To filter elements.",
            "To combine elements.",
            "To loop without return."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 497,
        "framework": "SQL",
        "question": "What is the primary purpose of a database transaction?",
        "options": [
            "To ensure data integrity through ACID properties.",
            "To sort data.",
            "To encrypt data.",
            "To optimize queries."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 498,
        "framework": "SQL",
        "question": "What is the difference between `WHERE` and `HAVING`?",
        "options": [
            "`WHERE` filters individual rows; `HAVING` filters aggregated groups.",
            "They are synonyms.",
            "`WHERE` is for text; `HAVING` is for numbers.",
            "`HAVING` is faster."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 499,
        "framework": "SQL",
        "question": "What is an `OUTER JOIN`?",
        "options": [
            "A join that includes all rows from one or both tables, even if there are no matching rows in the other table.",
            "A join that runs outside the database.",
            "A join on outer columns.",
            "A full match join."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 500,
        "framework": "SQL",
        "question": "What is the purpose of the `COALESCE()` function?",
        "options": [
            "To return the first non-null expression in its argument list.",
            "To combine columns.",
            "To check if a value is zero.",
            "To round numbers."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 501,
        "framework": "SQL",
        "question": "What is the difference between an Index and a Key?",
        "options": [
            "An Index improves performance; a Key enforces data integrity rules.",
            "Keys improve performance.",
            "Index is always unique.",
            "They are same."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 502,
        "framework": "SQL",
        "question": "What does `TRUNCATE TABLE` do?",
        "options": [
            "Removes all rows from a table quickly and cannot be rolled back (usually).",
            "Deletes the table structure.",
            "Deletes specific rows.",
            "Renames the table."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 503,
        "framework": "SQL",
        "question": "What is a 'Schema'?",
        "options": [
            "A blueprint or structure of the entire database, defining tables, views, and relationships.",
            "A database file.",
            "A query.",
            "A transaction."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 504,
        "framework": "SQL",
        "question": "What is the use of the `LIKE` operator with the wildcard `_` (underscore)?",
        "options": [
            "Matches any single character.",
            "Matches any sequence of characters.",
            "Matches only numbers.",
            "Matches only letters."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 505,
        "framework": "SQL",
        "question": "How do you specify the number of rows to skip and the number to return (pagination)?",
        "options": [
            "`OFFSET` then `LIMIT` (or `FETCH NEXT`).",
            "`SKIP` then `TAKE`.",
            "`PAGE` then `SIZE`.",
            "Use a `WHERE` clause."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 506,
        "framework": "SQL",
        "question": "What is an 'Alias' in SQL?",
        "options": [
            "A temporary name given to a table or column during the execution of a query.",
            "A permanent name.",
            "A user name.",
            "A password."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 507,
        "framework": "SQL",
        "question": "What are `DDL`, `DML`, and `DCL`?",
        "options": [
            "Data Definition Language, Data Manipulation Language, and Data Control Language.",
            "Data Development, Design, and Control.",
            "Database Definition, Manipulation, and Control.",
            "Date Definition, Modification, and Change."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 508,
        "framework": "SQL",
        "question": "What command is DDL (Data Definition Language)?",
        "options": [
            "CREATE, ALTER, DROP",
            "SELECT, INSERT, UPDATE",
            "GRANT, REVOKE",
            "COMMIT, ROLLBACK"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 509,
        "framework": "SQL",
        "question": "What command is DML (Data Manipulation Language)?",
        "options": [
            "SELECT, INSERT, UPDATE, DELETE",
            "CREATE, DROP",
            "GRANT, REVOKE",
            "COMMIT, ROLLBACK"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 510,
        "framework": "SQL",
        "question": "What is a 'Sequence'?",
        "options": [
            "A user-defined schema-bound object that generates a sequence of numeric values.",
            "A list of queries.",
            "A random number.",
            "A column type."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 511,
        "framework": "SQL",
        "question": "What is a database 'View'?",
        "options": [
            "A virtual table based on a query result, acting as a window to the data.",
            "A physical table.",
            "A backup file.",
            "A security key."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 512,
        "framework": "Linux+Bash+Git",
        "question": "What command is used to set or unset environment variables in Bash?",
        "options": [
            "setenv",
            "export",
            "variable",
            "envset"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 513,
        "framework": "Linux+Bash+Git",
        "question": "What does the `kill -9` command do?",
        "options": [
            "Forcefully terminates a process (SIGKILL), which cannot be ignored.",
            "Sends a friendly termination request.",
            "Pauses the process.",
            "Resumes the process."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 514,
        "framework": "Linux+Bash+Git",
        "question": "How do you change the owner of a file?",
        "options": [
            "chusr",
            "chown",
            "chgrp",
            "setowner"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 515,
        "framework": "Linux+Bash+Git",
        "question": "What does the `find` command do?",
        "options": [
            "Searches for files in a directory hierarchy.",
            "Finds and replaces text.",
            "Finds processes.",
            "Finds users."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 516,
        "framework": "Linux+Bash+Git",
        "question": "What is the difference between `git fetch` and `git pull`?",
        "options": [
            "`fetch` downloads changes; `pull` downloads and automatically merges them.",
            "`pull` only downloads.",
            "`fetch` only merges.",
            "They are identical."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 517,
        "framework": "Linux+Bash+Git",
        "question": "What is `git remote`?",
        "options": [
            "A command to manage connections to other repositories (e.g., origin).",
            "A remote server.",
            "A remote branch.",
            "A command to push."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 518,
        "framework": "Linux+Bash+Git",
        "question": "What does `git stash` do?",
        "options": [
            "Saves uncommitted local changes and cleans the working directory.",
            "Deletes local changes.",
            "Commits changes.",
            "Pushes changes."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 519,
        "framework": "Linux+Bash+Git",
        "question": "Which bash command is used for file-to-file comparison?",
        "options": [
            "compare",
            "diff",
            "match",
            "check"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 520,
        "framework": "Linux+Bash+Git",
        "question": "What does the `sed` utility do?",
        "options": [
            "Stream Editor: used for text substitution and filtering.",
            "File deletion.",
            "Directory listing.",
            "System monitoring."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 521,
        "framework": "Linux+Bash+Git",
        "question": "What does the `awk` utility do?",
        "options": [
            "A pattern scanning and processing language, often used for data extraction and reporting.",
            "File encryption.",
            "Process management.",
            "Network analysis."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 522,
        "framework": "Linux+Bash+Git",
        "question": "What does `|` (pipe) do in Bash?",
        "options": [
            "Directs the output of one command to be the input of another.",
            "Separates commands.",
            "Runs commands in the background.",
            "Redirects to a file."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 523,
        "framework": "Linux+Bash+Git",
        "question": "How do you search for a pattern inside compressed files in Linux?",
        "options": [
            "zgrep",
            "unzip",
            "compfind",
            "gzip -s"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 524,
        "framework": "Linux+Bash+Git",
        "question": "What command is used to display or modify the system date and time?",
        "options": [
            "time",
            "date",
            "clock",
            "sysdate"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 525,
        "framework": "Linux+Bash+Git",
        "question": "What is the purpose of `git reflog`?",
        "options": [
            "Shows a log of where your HEAD has been, useful for recovering lost commits.",
            "Shows remote log.",
            "Shows file log.",
            "Shows branch log."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 526,
        "framework": "Linux+Bash+Git",
        "question": "What is the function of the `which` command?",
        "options": [
            "Locates the executable file for a given command.",
            "Lists all files.",
            "Finds directories.",
            "Checks file permissions."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 527,
        "framework": "Spring Boot",
        "question": "What is the default strategy for dependency injection in Spring Boot?",
        "options": [
            "Setter Injection",
            "Constructor Injection",
            "Field Injection (via @Autowired)",
            "Interface Injection"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 528,
        "framework": "Spring Boot",
        "question": "What is the purpose of the `@Value` annotation?",
        "options": [
            "To inject property values from configuration files or environment variables.",
            "To define a value.",
            "To calculate a value.",
            "To check for null values."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 529,
        "framework": "Spring Boot",
        "question": "What is the difference between `@Component`, `@Service`, and `@Repository`?",
        "options": [
            "They are specialized stereotypes for different layers of the application.",
            "They have different default scopes.",
            "They have different proxy behaviors.",
            "Only `@Component` is a bean."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 530,
        "framework": "Spring Boot",
        "question": "What is a Spring 'Profile'?",
        "options": [
            "A mechanism to define environment-specific configurations.",
            "A user account.",
            "A performance metric.",
            "A security setting."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 531,
        "framework": "Spring Boot",
        "question": "How do you activate a specific profile from the command line?",
        "options": [
            "Using `--spring.profiles.active=dev`",
            "Using `activate-profile=dev`",
            "Using `-Dprofile=dev`",
            "Using `spring.profile=dev`"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 532,
        "framework": "Spring Boot",
        "question": "What is the function of `RestTemplate` (now deprecated for `WebClient`)?",
        "options": [
            "To consume RESTful web services.",
            "To create a RESTful service.",
            "To handle database calls.",
            "To manage security."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 533,
        "framework": "Spring Boot",
        "question": "What does the `@GetMapping` annotation implicitly include?",
        "options": [
            "Method `GET` and `@ResponseBody`.",
            "Method `POST` and `@ResponseBody`.",
            "Method `GET` and `@Controller`.",
            "Method `PUT` and `@Controller`."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 534,
        "framework": "Spring Boot",
        "question": "What is Spring Boot Actuator primarily used for?",
        "options": [
            "Monitoring, managing, and gathering metrics for a running application.",
            "Security.",
            "Database migration.",
            "Frontend development."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 535,
        "framework": "Spring Boot",
        "question": "What is the purpose of a Spring Interceptor?",
        "options": [
            "To process requests before and after controller handling (e.g., logging, authorization).",
            "To intercept network traffic.",
            "To handle exceptions only.",
            "To manage views."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 536,
        "framework": "Spring Boot",
        "question": "What is the difference between `Filter` and `Interceptor` in Spring?",
        "options": [
            "Filter is Servlet-level; Interceptor is Spring MVC-level.",
            "Filter is faster.",
            "Interceptor is for security only.",
            "Filter is only for logging."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 537,
        "framework": "Spring Boot",
        "question": "What is the purpose of the `server.servlet.context-path` property?",
        "options": [
            "To define the application's root context path (e.g., /api).",
            "To set the port.",
            "To set the server name.",
            "To define the database path."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 538,
        "framework": "Spring Boot",
        "question": "What is the default scope for beans in a Spring web application?",
        "options": [
            "Request",
            "Session",
            "Singleton",
            "Prototype"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 539,
        "framework": "Spring Boot",
        "question": "Which annotation is used for defining a bean explicitly in a configuration class?",
        "options": [
            "@Bean",
            "@Component",
            "@Autowired",
            "@Inject"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 540,
        "framework": "Spring Boot",
        "question": "What is the main role of the Spring IoC (Inversion of Control) Container?",
        "options": [
            "To manage the lifecycle and dependencies of Java objects (beans).",
            "To compile code.",
            "To handle HTTP requests.",
            "To manage database connections."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 541,
        "framework": "Spring Boot",
        "question": "How do you implement global exception handling in Spring MVC?",
        "options": [
            "Using `@ControllerAdvice` and `@ExceptionHandler`.",
            "Using a `try-catch` block in every controller.",
            "Using a custom `Filter`.",
            "Using XML configuration."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 542,
        "framework": "Django",
        "question": "What is a Model's `__unicode__` or `__str__` method used for?",
        "options": [
            "To provide a human-readable string representation of the object (used in admin).",
            "To serialize the object to string.",
            "To check object type.",
            "To print to console."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 543,
        "framework": "Django",
        "question": "What is the purpose of the `manage.py` file?",
        "options": [
            "A command-line utility for administering Django projects.",
            "The main application file.",
            "A database file.",
            "A configuration file."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 544,
        "framework": "Django",
        "question": "How do you retrieve a single object from the database, raising an exception if not found?",
        "options": [
            "`Model.objects.get()`",
            "`Model.objects.filter()`",
            "`Model.objects.first()`",
            "`Model.objects.find_one()`"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 545,
        "framework": "Django",
        "question": "What is a 'Session' in Django?",
        "options": [
            "A way to persist data on a per-site-visitor basis across requests.",
            "A meeting.",
            "A database connection.",
            "A single request."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 546,
        "framework": "Django",
        "question": "What is the difference between `STATIC_URL` and `STATIC_ROOT`?",
        "options": [
            "`STATIC_URL` is the web address; `STATIC_ROOT` is the filesystem location for collected static files.",
            "They are the same.",
            "`STATIC_ROOT` is the URL.",
            "STATIC_URL is only for media."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 547,
        "framework": "Django",
        "question": "What does `reverse()` (or `reverse_lazy()`) do?",
        "options": [
            "Looks up the URL path given the name of a view.",
            "Reverses a string.",
            "Reverses a list.",
            "Undoes a change."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 548,
        "framework": "Django",
        "question": "What is the purpose of Django 'forms'?",
        "options": [
            "To handle data input, validation, and conversion from user submissions.",
            "To define HTML structure.",
            "To style a page.",
            "To manage databases."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 549,
        "framework": "Django",
        "question": "What does `settings.TIME_ZONE` configure?",
        "options": [
            "The default time zone to use in the application.",
            "The time zone of the user.",
            "The server time.",
            "The database time."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 550,
        "framework": "Django",
        "question": "What is the function of `Middleware` in Django?",
        "options": [
            "A framework of hooks that allows processing the request/response during the request lifecycle.",
            "Handles exceptions only.",
            "Manages static files.",
            "Defines database models."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 551,
        "framework": "Django",
        "question": "What is a `TemplateTag`?",
        "options": [
            "A special marker in Django templates used to perform logic (e.g., loops, conditionals).",
            "An HTML tag.",
            "A CSS tag.",
            "A static file."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 552,
        "framework": "Django",
        "question": "What is the primary benefit of using Class-Based Views (CBVs)?",
        "options": [
            "Code reusability and inheritance from generic views.",
            "Faster execution.",
            "Easier debugging.",
            "Better security."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 553,
        "framework": "Django",
        "question": "What does `prefetch_related` solve?",
        "options": [
            "The 'N+1 query' problem for ManyToMany and reverse ForeignKey relationships.",
            "Database size.",
            "Model definition.",
            "Static file loading."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 554,
        "framework": "Django",
        "question": "What is a `signals` receiver?",
        "options": [
            "A function that is connected to a specific signal (e.g., pre_save) to execute code when that action occurs.",
            "A network device.",
            "A broadcast tower.",
            "A traffic signal."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 555,
        "framework": "Django",
        "question": "What is `DEFAULT_AUTO_FIELD` used for in modern Django versions?",
        "options": [
            "To specify the type of primary key field for models (e.g., BigAutoField).",
            "To set the default value.",
            "To create a foreign key.",
            "To auto-generate code."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 556,
        "framework": "Django",
        "question": "How do you prevent a field from appearing in the Django Admin form?",
        "options": [
            "Set the field's `editable` attribute to `False` in the model.",
            "Set the field's `hidden` attribute to `True`.",
            "Remove the field from `fields` tuple.",
            "Use CSS to hide it."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 557,
        "framework": "Automation Testing",
        "question": "What is a 'Test Fixture'?",
        "options": [
            "The setup steps required for a test to run and the cleanup after it finishes.",
            "A piece of hardware.",
            "A fixed variable.",
            "A lighting device."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 558,
        "framework": "Automation Testing",
        "question": "What is the difference between `assert` and `verify` in testing?",
        "options": [
            "`assert` stops execution on failure; `verify` continues execution.",
            "They are synonyms.",
            "`verify` is faster.",
            "`assert` is only for strings."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 559,
        "framework": "Automation Testing",
        "question": "What is the XPath axis `//`?",
        "options": [
            "Selects nodes in the document from the current node that match the selection no matter where they are.",
            "Selects only children.",
            "Selects the parent.",
            "Selects only the next node."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 560,
        "framework": "Automation Testing",
        "question": "What is the CSS selector `#`?",
        "options": [
            "Used to locate an element by its ID attribute.",
            "Used to locate by class name.",
            "Used to locate by tag name.",
            "Used to locate by XPath."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 561,
        "framework": "Automation Testing",
        "question": "What is the CSS selector `.`?",
        "options": [
            "Used to locate an element by its class attribute.",
            "Used to locate by ID.",
            "Used to locate by tag name.",
            "Used to locate by XPath."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 562,
        "framework": "Automation Testing",
        "question": "What is the purpose of `WebDriverWait` (Explicit Wait)?",
        "options": [
            "To wait for a specific condition to be met before proceeding.",
            "To wait a fixed amount of time.",
            "To wait for the entire page to load.",
            "To wait for user input."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 563,
        "framework": "Automation Testing",
        "question": "What is 'Page Factory'?",
        "options": [
            "A pattern/utility built into Selenium to implement the Page Object Model easily.",
            "A factory that builds pages.",
            "A testing database.",
            "A reporting tool."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 564,
        "framework": "Automation Testing",
        "question": "What is the primary function of Selenium Grid?",
        "options": [
            "To distribute test execution across multiple machines and environments.",
            "To test network speed.",
            "To design layouts.",
            "To manage test data."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 565,
        "framework": "Automation Testing",
        "question": "What is the benefit of Headless Browser testing?",
        "options": [
            "Faster execution and ability to run tests on servers without a GUI.",
            "More realistic user interaction.",
            "Easier debugging.",
            "Better security."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 566,
        "framework": "Automation Testing",
        "question": "How do you handle multiple browser tabs/windows in Selenium?",
        "options": [
            "Using `driver.getWindowHandles()` and `driver.switchTo().window(handle)`.",
            "Using `driver.switchTo().tab()`.",
            "Using `driver.open_new_window()`.",
            "It cannot be done."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 567,
        "framework": "Automation Testing",
        "question": "What is `JUnit`?",
        "options": [
            "A unit testing framework for the Java programming language.",
            "A browser.",
            "A database.",
            "A scripting language."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 568,
        "framework": "Automation Testing",
        "question": "What is the 'Cucumber' tool primarily based on?",
        "options": [
            "Behavior Driven Development (BDD).",
            "Test Driven Development (TDD).",
            "Agile.",
            "Waterfall."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 569,
        "framework": "Automation Testing",
        "question": "What is `Serenity BDD` (formerly Thucydides)?",
        "options": [
            "A reporting library that combines test automation and documentation.",
            "A network protocol.",
            "A database.",
            "A browser."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 570,
        "framework": "Automation Testing",
        "question": "What is a 'Custom Command' in Cypress/Playwright (similar to POM method)?",
        "options": [
            "A reusable set of actions defined once and called by test steps.",
            "A built-in command.",
            "A log entry.",
            "A variable."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 571,
        "framework": "Automation Testing",
        "question": "What is the main challenge of automating CAPTCHAs?",
        "options": [
            "They are designed to block automated scripts and require human interaction.",
            "They are too fast.",
            "They are too slow.",
            "They require a license."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 572,
        "framework": "Manual Testing",
        "question": "What is the most crucial attribute of a good test case?",
        "options": [
            "It should be atomic (test one thing) and easily repeatable.",
            "It must be automated.",
            "It should be very long.",
            "It must be written by the developer."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 573,
        "framework": "Manual Testing",
        "question": "What is a 'Test Scenario'?",
        "options": [
            "A high-level idea of what to test (e.g., 'Test User Login').",
            "A detailed test case.",
            "A list of bugs.",
            "A performance test."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 574,
        "framework": "Manual Testing",
        "question": "What is the difference between Alpha and Beta Testing?",
        "options": [
            "Alpha is internal testing; Beta is external testing by real users.",
            "Alpha is faster.",
            "Beta is done by developers.",
            "They are the same."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 575,
        "framework": "Manual Testing",
        "question": "What is 'Exploratory Testing'?",
        "options": [
            "Simultaneous learning, test design, and execution often using minimal documentation.",
            "Testing with a strict script.",
            "Automated testing.",
            "Performance testing."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 576,
        "framework": "Manual Testing",
        "question": "What is 'Risk-Based Testing'?",
        "options": [
            "Prioritizing testing efforts based on the likelihood and impact of potential failures.",
            "Testing dangerous features.",
            "Testing for security only.",
            "Testing random features."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 577,
        "framework": "Manual Testing",
        "question": "What is the 'Defect Triage' meeting's main outcome?",
        "options": [
            "To prioritize defects and determine which ones should be addressed in the current cycle.",
            "To delete old bugs.",
            "To write new test cases.",
            "To assign blame."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 578,
        "framework": "Manual Testing",
        "question": "What is a 'Test Strategy'?",
        "options": [
            "A high-level document defining the overall approach and goals of testing for a project.",
            "A detailed test plan.",
            "A list of test cases.",
            "A bug report."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 579,
        "framework": "Manual Testing",
        "question": "What is 'Regression Testing'?",
        "options": [
            "Re-testing existing functionality to ensure new code changes haven't broken anything previously working.",
            "Testing only new features.",
            "Testing slowly.",
            "Testing the database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 580,
        "framework": "Manual Testing",
        "question": "What is 'Ad-hoc Testing'?",
        "options": [
            "Informal, unscripted testing performed without planning or documentation.",
            "Formal testing.",
            "Automated testing.",
            "Performance testing."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 581,
        "framework": "Manual Testing",
        "question": "What is 'Boundary Value Analysis' (BVA)?",
        "options": [
            "Testing at the limits of an input range (min, max, min-1, max+1).",
            "Testing the center values.",
            "Testing random values.",
            "Testing the UI border."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 582,
        "framework": "Manual Testing",
        "question": "What is 'Equivalence Partitioning'?",
        "options": [
            "Dividing input data into partitions where all members of a partition are expected to behave the same.",
            "Dividing the team.",
            "Dividing the code.",
            "Dividing the database."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 583,
        "framework": "Manual Testing",
        "question": "What is the most severe defect status?",
        "options": [
            "Open",
            "Fixed",
            "Critical",
            "Closed"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 584,
        "framework": "Manual Testing",
        "question": "What is the purpose of a 'Checkpoint' during a test execution?",
        "options": [
            "A point at which the actual result is compared to the expected result.",
            "A pause in the test.",
            "A save point.",
            "A starting point."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 585,
        "framework": "Manual Testing",
        "question": "What is 'Usability Testing'?",
        "options": [
            "Focuses on how easy the application is to use, learn, and operate.",
            "Testing functionality.",
            "Testing performance.",
            "Testing security."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 586,
        "framework": "Manual Testing",
        "question": "In the Defect Life Cycle, what state follows 'Fixed'?",
        "options": [
            "New",
            "Verified",
            "Retest",
            "Closed"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 587,
        "framework": "Java",
        "question": "What is the output of the following code?\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x++ + ++x);\n    }\n}",
        "options": [
            "12",
            "11",
            "10",
            "Compilation error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 588,
        "framework": "Java",
        "question": "What is printed?\npublic class Test {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = a++ + a;\n        System.out.println(b);\n    }\n}",
        "options": [
            "20",
            "21",
            "19",
            "11"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 589,
        "framework": "Java",
        "question": "What is the result?\npublic class Test {\n    public static void main(String[] args) {\n        boolean b = false;\n        if(b = true) System.out.println(\"Yes\");\n    }\n}",
        "options": [
            "Yes",
            "No output",
            "Compilation error",
            "Runtime error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 590,
        "framework": "Java",
        "question": "What is printed?\npublic class Test {\n    public static void main(String[] args) {\n        String s = \"Java\";\n        String t = s;\n        s += \"8\";\n        System.out.println(t);\n    }\n}",
        "options": [
            "Java",
            "Java8",
            "8",
            "null"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 591,
        "framework": "Java",
        "question": "What does this print?\npublic class Test {\n    public static void main(String[] args) {\n        int x = 0;\n        for(int i=0;\n        i<5;\n        i++);\n        System.out.println(i);\n    }\n}",
        "options": [
            "5",
            "0",
            "Compilation error",
            "Runtime exception"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 592,
        "framework": "Java",
        "question": "What is the output?\npublic class Test {\n    static int i;\n    public static void main(String[] args) {\n        System.out.println(i);\n    }\n}",
        "options": [
            "0",
            "null",
            "Garbage",
            "Compilation error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 593,
        "framework": "Java",
        "question": "What is printed?\npublic class Test {\n    public static void main(String[] a) {\n        int x = 10;\n        System.out.println(--x - x--);\n    }\n}",
        "options": [
            "0",
            "1",
            "-1",
            "Compilation error"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 594,
        "framework": "Java",
        "question": "What happens?\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        if(x==5) System.out.println(\"A\");\n        else System.out.println(\"B\");\n    }\n}",
        "options": [
            "A",
            "B",
            "No output",
            "Compilation error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 595,
        "framework": "Java",
        "question": "What is the output?\npublic class Test {\n    public static void main(String[] args) {\n        String s = \"abc\";\n        System.out.println(s.charAt(3));\n    }\n}",
        "options": [
            "c",
            "IndexOutOfBoundsException",
            "Compilation error",
            "null"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 596,
        "framework": "Java",
        "question": "What is printed?\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        while(x>5) x--;\n        System.out.println(x);\n    }\n}",
        "options": [
            "5",
            "4",
            "0",
            "Infinite loop"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 597,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args) {\n        int x=10;\n        int y=--x + x-- + ++x;\n        System.out.println(y);\n    }\n}",
        "options": [
            "28",
            "29",
            "30",
            "Compilation error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 598,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args) {\n        String s1=\"Java\";\n        String s2=new String(\"Java\");\n        System.out.println(s1==s2);\n    }\n}",
        "options": [
            "true",
            "false",
            "Compilation error",
            "Runtime error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 599,
        "framework": "Java",
        "question": "\npublic class Test {\n    static int i;\n    public static void main(String[] args) {\n        System.out.println(i);\n    }\n}",
        "options": [
            "0",
            "null",
            "Compilation error",
            "Garbage"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 600,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args) {\n        int x=5;\n        if(x=10){\n            System.out.println(\"Hi\");\n        }\n    }\n}",
        "options": [
            "Hi",
            "No output",
            "Compilation error",
            "Runtime error"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 601,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args) {\n        boolean a=true,b=false;\n        System.out.println(a & b);\n    }\n}",
        "options": [
            "true",
            "false",
            "Compilation error",
            "Runtime error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 602,
        "framework": "Java",
        "question": "\ninterface A{\n}\nclass B implements A {\n}\nclass C extends B {\n}\npublic class Test{\n    public static void main(String[] args){\n        A a=new C();\n        B b=(B)a;\n        System.out.println(\"OK\");\n    }\n}",
        "options": [
            "OK",
            "Compilation error",
            "ClassCastException",
            "Runtime error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 603,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args) {\n        StringBuilder sb=new StringBuilder(\"A\");\n        sb.append(\"B\");\n        sb.insert(1,\"C\");\n        System.out.println(sb);\n    }\n}",
        "options": [
            "ABC",
            "ACB",
            "CAB",
            "Compilation error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 604,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args) {\n        char c='A';\n        c++;\n        System.out.println(c);\n    }\n}",
        "options": [
            "A",
            "B",
            "66",
            "Compilation error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 605,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args) {\n        int x=1;\n        while(x<3) x++;\n        System.out.println(x);\n    }\n}",
        "options": [
            "1",
            "2",
            "3",
            "Infinite loop"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 606,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args) {\n        int[][] arr={\n            {\n                1,2\n            }\n            ,{\n                3,4,5\n            }\n        }\n        ;\n        System.out.println(arr[1].length);\n    }\n}",
        "options": [
            "2",
            "3",
            "5",
            "Compilation error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 607,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args){\n        final int x=5;\n        switch(x){\n            case 5: System.out.println(\"Hi\");\n        }\n    }\n}",
        "options": [
            "Hi",
            "Compilation error",
            "No output",
            "Runtime exception"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 608,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args){\n        int x=0;\n        do{\n            x++;\n        }\n        while(x<0);\n        System.out.println(x);\n    }\n}",
        "options": [
            "0",
            "1",
            "2",
            "Infinite loop"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 609,
        "framework": "Java",
        "question": "\npublic class Test {\n    static void m(int...x){\n        System.out.println(x.length);\n    }\n    public static void main(String[] args){\n        m(1,2,3);\n    }\n}",
        "options": [
            "0",
            "1",
            "3",
            "Compilation error"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 610,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args){\n        String s=\"abc\";\n        s.toUpperCase();\n        System.out.println(s);\n    }\n}",
        "options": [
            "ABC",
            "abc",
            "Compilation error",
            "Runtime exception"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 611,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args){\n        int x=10;\n        if(x>5) if(x>8) System.out.println(\"A\");\n        else System.out.println(\"B\");\n    }\n}",
        "options": [
            "A",
            "B",
            "No output",
            "Compilation error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 612,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args){\n        byte b=10;\n        b+=20;\n        System.out.println(b);\n    }\n}",
        "options": [
            "10",
            "20",
            "30",
            "Compilation error"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 613,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args){\n        int x=7;\n        System.out.println(x>>1);\n    }\n}",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 614,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args){\n        int x=5;\n        x=x++ + ++x;\n        System.out.println(x);\n    }\n}",
        "options": [
            "11",
            "12",
            "13",
            "14"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 615,
        "framework": "Java",
        "question": "\nclass A{\n}\nclass B extends A{\n}\nclass C extends B{\n}\npublic class Test{\n    public static void main(String[] args){\n        A a=new B();\n        C c=(C)a;\n    }\n}",
        "options": [
            "Works fine",
            "Compilation error",
            "ClassCastException",
            "RuntimeException"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 616,
        "framework": "Java",
        "question": "\npublic class Test {\n    public static void main(String[] args){\n        System.out.println(\"Java\" instanceof String);\n    }\n}",
        "options": [
            "true",
            "false",
            "Compilation error",
            "RuntimeException"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 617,
        "framework": "Java",
        "question": "What is the output?\npublic class Test {\n    public static void main(String[] args){\n        int x = 0;\n        x = x++ + ++x + x;\n        System.out.println(x);\n    }\n}",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 618,
        "framework": "Java",
        "question": "What happens?\npublic class Test {\n    public static void main(String[] args){\n        String s = null;\n        System.out.println(s + \"Java\");\n    }\n}",
        "options": [
            "nullJava",
            "Java",
            "Compilation error",
            "NullPointerException"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 619,
        "framework": "Java",
        "question": "What is printed?\npublic class Test {\n    public static void main(String[] args){\n        int x = 10;\n        System.out.println(x == 10 ? x = 5 : x = 0);\n    }\n}",
        "options": [
            "5",
            "10",
            "0",
            "Compilation error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 620,
        "framework": "Java",
        "question": "What is the output?\npublic class Test {\n    public static void main(String[] args){\n        int x = 5;\n        int y = 10;\n        System.out.println(x > y ? x : y);\n    }\n}",
        "options": [
            "5",
            "10",
            "true",
            "false"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 621,
        "framework": "Java",
        "question": "What happens?\npublic class Test {\n    public static void main(String[] args){\n        String s = \"Java\";\n        switch(s){\n            case \"Java\": System.out.println(\"A\");\n        }\n    }\n}",
        "options": [
            "A",
            "Compilation error",
            "No output",
            "Runtime exception"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 622,
        "framework": "Java",
        "question": "What is printed?\npublic class Test {\n    public static void main(String[] args){\n        Integer i1 = 100;\n        Integer i2 = 100;\n        System.out.println(i1 == i2);\n    }\n}",
        "options": [
            "true",
            "false",
            "Compilation error",
            "Runtime error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 623,
        "framework": "Java",
        "question": "What is printed?\npublic class Test {\n    public static void main(String[] args){\n        Integer i1 = 200;\n        Integer i2 = 200;\n        System.out.println(i1 == i2);\n    }\n}",
        "options": [
            "true",
            "false",
            "Compilation error",
            "Runtime error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 624,
        "framework": "Java",
        "question": "What happens?\npublic class Test {\n    public static void main(String[] args){\n        StringBuilder sb = new StringBuilder(\"A\");\n        sb.reverse();\n        System.out.println(sb);\n    }\n}",
        "options": [
            "A",
            "Compilation error",
            "Runtime error",
            "Empty string"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 625,
        "framework": "Java",
        "question": "What is the output?\npublic class Test {\n    public static void main(String[] args){\n        System.out.println(10 + 20 + \"Java\" + 10 + 20);\n    }\n}",
        "options": [
            "30Java1020",
            "1020Java30",
            "Java3020",
            "Compilation error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 626,
        "framework": "Java",
        "question": "What is printed?\npublic class Test {\n    public static void main(String[] args){\n        int x = 1;\n        System.out.println(x << 2);\n    }\n}",
        "options": [
            "2",
            "3",
            "4",
            "8"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 627,
        "framework": "Java",
        "question": "What happens?\npublic class Test {\n    public static void main(String[] args){\n        String s = \"abc\";\n        s.concat(\"def\");\n        System.out.println(s);\n    }\n}",
        "options": [
            "abcdef",
            "abc",
            "defabc",
            "Compilation error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 628,
        "framework": "Java",
        "question": "Result?\npublic class Test {\n    public static void main(String[] args){\n        int x = 5;\n        System.out.println(x /= 2);\n    }\n}",
        "options": [
            "2",
            "2.5",
            "3",
            "Compilation error"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 629,
        "framework": "Java",
        "question": "What prints?\npublic class Test {\n    public static void main(String[] args){\n        char c = 'A';\n        System.out.println(c + 1);\n    }\n}",
        "options": [
            "A1",
            "66",
            "B",
            "Compilation error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 630,
        "framework": "Java",
        "question": "Result?\npublic class Test {\n    public static void main(String[] args){\n        int x = 5;\n        System.out.println(++x * x++);\n    }\n}",
        "options": [
            "25",
            "30",
            "36",
            "Compilation error"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 631,
        "framework": "Java",
        "question": "What happens?\npublic class Test {\n    public static void main(String[] args){\n        int x = 0;\n        while(x++ < 5);\n        System.out.println(x);\n    }\n}",
        "options": [
            "0",
            "5",
            "6",
            "Compilation error"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 632,
        "framework": "Java",
        "question": "What prints?\npublic class Test {\n    public static void main(String[] args){\n        int x = 1, y = 2;\n        System.out.println(x == y & x < y);\n    }\n}",
        "options": [
            "true",
            "false",
            "1",
            "Compilation error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 633,
        "framework": "Java",
        "question": "What is the output?\npublic class Test {\n    public static void main(String[] args){\n        int x = -1;\n        System.out.println(x >>> 1);\n    }\n}",
        "options": [
            "-1",
            "-2",
            "2147483647",
            "Compilation error"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 634,
        "framework": "Java",
        "question": "What happens?\npublic class Test {\n    public static void main(String[] args){\n        int[] arr = new int[2];\n        System.out.println(arr[0]);\n    }\n}",
        "options": [
            "0",
            "null",
            "Compilation error",
            "Runtime error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 635,
        "framework": "Java",
        "question": "What prints?\npublic class Test {\n    public static void main(String[] args){\n        String s = \"Java\";\n        System.out.println(s.substring(1,3));\n    }\n}",
        "options": [
            "av",
            "ava",
            "Ja",
            "Compilation error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 636,
        "framework": "Java",
        "question": "Output?\npublic class Test {\n    public static void main(String[] args){\n        int[] arr = {\n            1,2,3\n        }\n        ;\n        System.out.println(arr.length);\n    }\n}",
        "options": [
            "1",
            "2",
            "3",
            "Compilation error"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 637,
        "framework": "Java",
        "question": "What happens?\npublic class Test {\n    public static void main(String[] args){\n        final int x = 10;\n        switch(x){\n            case 10: System.out.println(\"OK\");\n        }\n    }\n}",
        "options": [
            "OK",
            "Compilation error",
            "No output",
            "Runtime error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 638,
        "framework": "Java",
        "question": "Output?\npublic class Test {\n    public static void main(String[] args){\n        int x = 2;\n        System.out.println(x * 3 / 2);\n    }\n}",
        "options": [
            "2",
            "3",
            "4",
            "1"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 639,
        "framework": "Java",
        "question": "What prints?\npublic class Test {\n    public static void main(String[] args){\n        boolean a = true;\n        boolean b = false;\n        System.out.println(a && b || a);\n    }\n}",
        "options": [
            "true",
            "false",
            "Compilation error",
            "Runtime error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 640,
        "framework": "Java",
        "question": "What is printed?\npublic class Test {\n    public static void main(String[] args){\n        char c = 65;\n        System.out.println(c);\n    }\n}",
        "options": [
            "65",
            "A",
            "a",
            "Compilation error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 641,
        "framework": "Java",
        "question": "Output?\npublic class Test {\n    public static void main(String[] args){\n        int x = 2;\n        int y = 3;\n        System.out.println(x ^ y);\n    }\n}",
        "options": [
            "1",
            "2",
            "3",
            "6"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 642,
        "framework": "Java",
        "question": "What prints?\npublic class Test {\n    public static void main(String[] args){\n        StringBuilder sb = new StringBuilder(\"Java\");\n        sb.delete(1,3);\n        System.out.println(sb);\n    }\n}",
        "options": [
            "Ja",
            "Jv",
            "Jaa",
            "Compilation error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 643,
        "framework": "Java",
        "question": "Result?\npublic class Test {\n    public static void main(String[] args){\n        int x = 5;\n        System.out.println(x % 2 == 1 ? \"odd\" : \"even\");\n    }\n}",
        "options": [
            "odd",
            "even",
            "5",
            "Compilation error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 644,
        "framework": "Java",
        "question": "What is printed?\npublic class Test {\n    public static void main(String[] args){\n        int x = 1;\n        for(int i=0;\n        i<3;\n        i++) x += i;\n        System.out.println(x);\n    }\n}",
        "options": [
            "3",
            "4",
            "5",
            "6"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 645,
        "framework": "Java",
        "question": "Output?\npublic class Test {\n    public static void main(String[] args){\n        String s = \"xyz\";\n        System.out.println(s.indexOf(\"y\"));\n    }\n}",
        "options": [
            "0",
            "1",
            "2",
            "-1"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 646,
        "framework": "Java",
        "question": "What prints?\npublic class Test {\n    public static void main(String[] args){\n        int[] a = {\n            1,2\n        }\n        ;\n        int[] b = a;\n        b[0] = 10;\n        System.out.println(a[0]);\n    }\n}",
        "options": [
            "1",
            "2",
            "10",
            "Compilation error"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 647,
        "framework": "Java",
        "question": "Result?\npublic class Test {\n    public static void main(String[] args){\n        int x = 0;\n        System.out.println(++x == x++);\n    }\n}",
        "options": [
            "true",
            "false",
            "Compilation error",
            "Runtime error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 648,
        "framework": "Java",
        "question": "What is printed?\npublic class Test {\n    public static void main(String[] args){\n        String s = \"hello\";\n        System.out.println(s.replace('l','x'));\n    }\n}",
        "options": [
            "hexxo",
            "hexo",
            "hello",
            "Compilation error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 649,
        "framework": "Java",
        "question": "Output?\npublic class Test {\n    public static void main(String[] args){\n        int x = 3;\n        System.out.println(x & 1);\n    }\n}",
        "options": [
            "0",
            "1",
            "3",
            "Compilation error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 650,
        "framework": "Java",
        "question": "What prints?\npublic class Test {\n    public static void main(String[] args){\n        short s = 1;\n        s += 1;\n        System.out.println(s);\n    }\n}",
        "options": [
            "1",
            "2",
            "3",
            "Compilation error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 651,
        "framework": "Java",
        "question": "Result?\npublic class Test {\n    public static void main(String[] args){\n        final String s = \"A\";\n        switch(s){\n            case \"A\": System.out.println(\"OK\");\n        }\n    }\n}",
        "options": [
            "OK",
            "No output",
            "Compilation error",
            "Runtime error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 652,
        "framework": "Java",
        "question": "What prints?\npublic class Test {\n    public static void main(String[] args){\n        double d = 9/2;\n        System.out.println(d);\n    }\n}",
        "options": [
            "4",
            "4.0",
            "4.5",
            "4.25"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 653,
        "framework": "Java",
        "question": "Result?\npublic class Test {\n    public static void main(String[] args){\n        int x = 3 * 2 + 1;\n        System.out.println(x);\n    }\n}",
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 654,
        "framework": "Java",
        "question": "Output?\npublic class Test {\n    public static void main(String[] args){\n        String s = \"abc\";\n        System.out.println(s.equals(\"ABC\"));\n    }\n}",
        "options": [
            "true",
            "false",
            "Compilation error",
            "Runtime error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 655,
        "framework": "Java",
        "question": "What prints?\npublic class Test {\n    public static void main(String[] args){\n        int x = 5;\n        for(int i=0;\n        i<3;\n        i++) x *= i;\n        System.out.println(x);\n    }\n}",
        "options": [
            "0",
            "5",
            "10",
            "15"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 656,
        "framework": "Java",
        "question": "What is printed?\npublic class Test {\n    public static void main(String[] args){\n        StringBuilder sb = new StringBuilder(\"xyz\");\n        sb.setCharAt(1,'A');\n        System.out.println(sb);\n    }\n}",
        "options": [
            "xAz",
            "xAA",
            "xyz",
            "Compilation error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 657,
        "framework": "Python",
        "question": "What is the output of the following code?\n\nx = [1,2,3]\ny = x\ny.append(4)\nprint(x)",
        "options": [
            "[1, 2, 3]",
            "[1, 2, 3, 4]",
            "[4, 1, 2, 3]",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 658,
        "framework": "Python",
        "question": "Which of the following statements about Python's 'global' keyword is correct?",
        "options": [
            "It declares a variable as global inside a function.",
            "It allows importing modules globally.",
            "It automatically makes all variables global.",
            "It is used to declare global constants."
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 659,
        "framework": "Python",
        "question": "What is the output?\n\nprint(type(lambda x: x))",
        "options": [
            "<class 'function'>",
            "<class 'lambda'>",
            "<class 'object'>",
            "<class 'method'>"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 660,
        "framework": "Python",
        "question": "Which of these is NOT a valid Python data type?",
        "options": [
            "list",
            "tuple",
            "char",
            "set"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 661,
        "framework": "Python",
        "question": "What is printed?\n\na = [1,2,3]\nprint(a[3])",
        "options": [
            "3",
            "Error",
            "None",
            "0"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 662,
        "framework": "Python",
        "question": "What is the output?\n\nprint(0.1 + 0.2 == 0.3)",
        "options": [
            "True",
            "False",
            "Error",
            "0.3"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 663,
        "framework": "Python",
        "question": "Which statement about Python lists is TRUE?",
        "options": [
            "Lists are immutable",
            "Lists can contain elements of different types",
            "Lists cannot contain other lists",
            "List elements must be numbers"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 664,
        "framework": "Python",
        "question": "What is the output?\n\nx = [1,2,3]\nprint(x * 2)",
        "options": [
            "[1, 2, 3, 1, 2, 3]",
            "[2, 4, 6]",
            "[1, 2, 3, 2]",
            "Error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 665,
        "framework": "Python",
        "question": "Which is correct about Python dictionaries?",
        "options": [
            "Keys must be immutable",
            "Keys can be lists",
            "Values must be integers",
            "Dictionaries are ordered in Python 3.5 and earlier"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 666,
        "framework": "Python",
        "question": "What is printed?\n\ndef func(a, b=[]):\n    b.append(a)\n    return b\n\nprint(func(1))\nprint(func(2))",
        "options": [
            "[1] [2]",
            "[1] [1, 2]",
            "[1] [1]",
            "[1, 2] [1, 2]"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 667,
        "framework": "Python",
        "question": "Which statement is TRUE about Python sets?",
        "options": [
            "Sets can contain duplicate elements",
            "Sets are unordered",
            "Sets allow indexing",
            "Sets are immutable"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 668,
        "framework": "Python",
        "question": "What is printed?\n\nprint(bool('False'))",
        "options": [
            "False",
            "True",
            "Error",
            "0"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 669,
        "framework": "Python",
        "question": "What does the 'nonlocal' keyword do?",
        "options": [
            "Declares a variable in the nearest enclosing scope",
            "Declares a global variable",
            "Declares a constant",
            "Creates a new local variable"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 670,
        "framework": "Python",
        "question": "What is the output?\n\nx = [1,2,3]\nprint(list(map(lambda a: a*2, x)))",
        "options": [
            "[1, 2, 3]",
            "[2, 4, 6]",
            "[1, 4, 9]",
            "[2, 3, 4]"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 671,
        "framework": "Python",
        "question": "Which of these statements about Python functions is FALSE?",
        "options": [
            "Functions can return multiple values",
            "Functions cannot be nested",
            "Functions can be assigned to variables",
            "Functions can be passed as arguments"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 672,
        "framework": "Python",
        "question": "Which of these is correct about Python\u2019s 'with' statement?",
        "options": [
            "It handles file opening and closing automatically",
            "It starts a thread",
            "It creates a class",
            "It deletes a variable automatically"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 673,
        "framework": "Python",
        "question": "What is printed?\n\nprint(type({}))",
        "options": [
            "<class 'dict'>",
            "<class 'set'>",
            "<class 'list'>",
            "<class 'object'>"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 674,
        "framework": "Python",
        "question": "Which of these is TRUE for Python strings?",
        "options": [
            "Strings are mutable",
            "Strings can be indexed",
            "Strings are unordered",
            "Strings cannot be sliced"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 675,
        "framework": "Python",
        "question": "Which statement is correct about Python\u2019s memory management?",
        "options": [
            "Python uses automatic garbage collection",
            "Programmers must free memory manually",
            "Python does not support garbage collection",
            "Memory is fixed and cannot grow dynamically"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 676,
        "framework": "Python",
        "question": "Which of these is NOT a valid Python loop?",
        "options": [
            "for",
            "while",
            "do-while",
            "nested for"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 677,
        "framework": "Python",
        "question": "What is printed?\n\nx = 5\ny = 2\nprint(x // y)",
        "options": [
            "2.5",
            "2",
            "3",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 678,
        "framework": "Python",
        "question": "What is the output?\n\nprint({1,2,3} & {2,3,4})",
        "options": [
            "{1,2,3,4}",
            "{2,3}",
            "{1,4}",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 679,
        "framework": "Python",
        "question": "Which of the following statements about Python modules is TRUE?",
        "options": [
            "Modules are Python files ending in .py",
            "Modules must be compiled before use",
            "Modules can contain only functions",
            "Modules cannot import other modules"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 680,
        "framework": "Python",
        "question": "Which of these keywords is used to define a class?",
        "options": [
            "class",
            "def",
            "struct",
            "object"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 681,
        "framework": "Python",
        "question": "What is printed?\n\nprint(0.1 + 0.2 == 0.3)",
        "options": [
            "True",
            "False",
            "Error",
            "0.3"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 682,
        "framework": "Python",
        "question": "Which of these is correct to catch multiple exceptions?",
        "options": [
            "except (TypeError, ValueError):",
            "except TypeError & ValueError:",
            "except TypeError | ValueError:",
            "except TypeError, ValueError:"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 683,
        "framework": "Python",
        "question": "Which of the following is TRUE about Python\u2019s 'is' operator?",
        "options": [
            "Checks object identity",
            "Checks equality of value",
            "Checks type of object",
            "Checks if variable is defined"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 684,
        "framework": "Python",
        "question": "Which statement about Python\u2019s 'try\u2026except\u2026else\u2026finally' is TRUE?",
        "options": [
            "'else' executes if no exception occurs",
            "'finally' executes only if exception occurs",
            "'else' executes if exception occurs",
            "Cannot use 'finally' with 'try\u2026except'"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 685,
        "framework": "Python",
        "question": "What is printed?\n\na = [1,2,3]\nprint(a[-1])",
        "options": [
            "1",
            "2",
            "3",
            "Error"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 686,
        "framework": "Python",
        "question": "Which of these is correct about Python functions?",
        "options": [
            "Functions can be recursive",
            "Functions cannot have default arguments",
            "Functions cannot return multiple values",
            "Functions cannot be assigned to variables"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 687,
        "framework": "Python",
        "question": "Which of the following statements about Python\u2019s 'range()' is TRUE?",
        "options": [
            "range(5) generates numbers 0 through 4",
            "range(5) generates numbers 1 through 5",
            "range(5) generates numbers 0 through 5",
            "range(5) generates 5 zeros"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 688,
        "framework": "Python",
        "question": "Which of these is TRUE about Python strings?",
        "options": [
            "Strings are mutable",
            "Strings support slicing",
            "Strings can contain other strings as objects",
            "Strings support arithmetic addition with numbers"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 689,
        "framework": "Python",
        "question": "What is printed?\n\nx = [1,2,3]\nprint(x[-2])",
        "options": [
            "1",
            "2",
            "3",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 690,
        "framework": "Python",
        "question": "Which of these statements about Python sets is TRUE?",
        "options": [
            "Sets are ordered collections",
            "Sets do not allow duplicates",
            "Sets allow indexing",
            "Sets are immutable"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 691,
        "framework": "Python",
        "question": "What is printed?\n\nprint(type([1,2,3]) is list)",
        "options": [
            "True",
            "False",
            "Error",
            "None"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 692,
        "framework": "Python",
        "question": "Which of the following statements about Python tuples is TRUE?",
        "options": [
            "Tuples are immutable",
            "Tuples are mutable",
            "Tuples cannot contain other tuples",
            "Tuples do not support indexing"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 693,
        "framework": "Python",
        "question": "What is printed?\n\nprint(list(range(2,10,3)))",
        "options": [
            "[2, 5, 8]",
            "[2, 3, 4, 5, 6, 7, 8, 9]",
            "[2, 5, 10]",
            "[2, 6, 9]"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 694,
        "framework": "Python",
        "question": "Which statement about Python\u2019s 'import' is TRUE?",
        "options": [
            "You can import specific functions using 'from module import func'",
            "You must always import all functions",
            "Python does not support importing functions",
            "You cannot alias imports"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 695,
        "framework": "Python",
        "question": "What is printed?\n\ndef f(x, y=2):\n    return x*y\n\nprint(f(3))",
        "options": [
            "5",
            "6",
            "Error",
            "3"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 696,
        "framework": "Python",
        "question": "Which of these is TRUE about Python Boolean values?",
        "options": [
            "True is equivalent to 1 and False to 0",
            "True is equivalent to 0 and False to 1",
            "Python does not support Booleans",
            "Booleans cannot be used in arithmetic operations"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 697,
        "framework": "Python",
        "question": "Which of the following statements about Python lists is TRUE?",
        "options": [
            "Lists can be nested",
            "Lists cannot contain other lists",
            "Lists are immutable",
            "Lists do not support iteration"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 698,
        "framework": "Python",
        "question": "What is printed?\n\nprint(type({1,2,3}))",
        "options": [
            "<class 'list'>",
            "<class 'set'>",
            "<class 'dict'>",
            "<class 'tuple'>"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 699,
        "framework": "Python",
        "question": "Which of these is TRUE about Python dictionaries?",
        "options": [
            "Dictionary keys must be immutable",
            "Dictionary keys must be numbers",
            "Dictionary values must be immutable",
            "Dictionary keys can be duplicated"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 700,
        "framework": "Python",
        "question": "What is printed?\n\nx = [1,2,3]\nx.extend([4,5])\nprint(x)",
        "options": [
            "[1,2,3,4,5]",
            "[[1,2,3],[4,5]]",
            "[1,2,3]",
            "[4,5]"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 701,
        "framework": "Python",
        "question": "Which is TRUE about Python\u2019s 'is' operator?",
        "options": [
            "Checks object identity",
            "Checks value equality",
            "Assigns a value",
            "Raises an error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 702,
        "framework": "Python",
        "question": "What is printed?\n\nx = 10\ny = 5\nx, y = y, x\nprint(x, y)",
        "options": [
            "10 5",
            "5 10",
            "10 10",
            "5 5"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 703,
        "framework": "Python",
        "question": "Which of these statements about Python\u2019s 'del' keyword is TRUE?",
        "options": [
            "Deletes variables or items from lists/dictionaries",
            "Deletes functions permanently from memory",
            "Deletes modules from sys.path",
            "Deletes objects only during garbage collection"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 704,
        "framework": "Python",
        "question": "What is printed?\n\nx = 3\nprint(x**3)",
        "options": [
            "6",
            "9",
            "27",
            "Error"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 705,
        "framework": "Python",
        "question": "Which of these is TRUE about Python file handling?",
        "options": [
            "'with' automatically closes the file",
            "Files must always be closed manually",
            "Python cannot read text files",
            "Files must be binary"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 706,
        "framework": "Python",
        "question": "What is printed?\n\nx = 'Python'\nprint(x[1:4])",
        "options": [
            "Pyt",
            "yth",
            "ytho",
            "yon"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 707,
        "framework": "JavaScript",
        "question": "What is the output of the following code?\n\nconsole.log(typeof null);",
        "options": [
            "'object'",
            "'null'",
            "'undefined'",
            "'number'"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 708,
        "framework": "JavaScript",
        "question": "Which of the following is TRUE about JavaScript variables declared with 'var'?",
        "options": [
            "They are function-scoped",
            "They are block-scoped",
            "They are immutable constants",
            "They cannot be redeclared"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 709,
        "framework": "JavaScript",
        "question": "Which of the following statements about 'let' is TRUE?",
        "options": [
            "'let' is block-scoped",
            "'let' is function-scoped",
            "'let' variables can be redeclared in the same scope",
            "'let' variables are hoisted and initialized with undefined"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 710,
        "framework": "JavaScript",
        "question": "What is printed?\n\nconsole.log(0.1 + 0.2 === 0.3);",
        "options": [
            "true",
            "false",
            "undefined",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 711,
        "framework": "JavaScript",
        "question": "Which statement about JavaScript functions is TRUE?",
        "options": [
            "Functions are first-class objects",
            "Functions cannot be passed as arguments",
            "Functions cannot return other functions",
            "Functions cannot be assigned to variables"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 712,
        "framework": "JavaScript",
        "question": "What does '===' operator do in JavaScript?",
        "options": [
            "Strict equality (value and type)",
            "Equality of values only",
            "Assigns a value",
            "Strict inequality"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 713,
        "framework": "JavaScript",
        "question": "What is printed?\n\nconsole.log([1,2,3] + [4,5]);",
        "options": [
            "1,2,34,5",
            "[1,2,3,4,5]",
            "Error",
            "NaN"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 714,
        "framework": "JavaScript",
        "question": "Which of the following is TRUE about JavaScript 'this'?",
        "options": [
            "'this' refers to the object calling the function",
            "'this' always refers to the global object",
            "'this' is a reserved word for constants",
            "'this' cannot be used in arrow functions"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 715,
        "framework": "JavaScript",
        "question": "Which method converts a JSON string to an object?",
        "options": [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.toObject()",
            "JSON.convert()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 716,
        "framework": "JavaScript",
        "question": "Which of the following creates a new array with only unique values?",
        "options": [
            "[...new Set(array)]",
            "array.unique()",
            "array.deduplicate()",
            "array.filterUnique()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 717,
        "framework": "JavaScript",
        "question": "Which statement about JavaScript arrow functions is TRUE?",
        "options": [
            "Arrow functions do not have their own 'this'",
            "Arrow functions are always hoisted",
            "Arrow functions cannot return values",
            "Arrow functions can be used as constructors"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 718,
        "framework": "JavaScript",
        "question": "What is the output?\n\nconsole.log(1 + '2' + 3);",
        "options": [
            "'123'",
            "6",
            "'33'",
            "Error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 719,
        "framework": "JavaScript",
        "question": "Which of these is TRUE about JavaScript closures?",
        "options": [
            "A closure gives access to an outer function's scope from an inner function",
            "Closures are automatically garbage collected immediately",
            "Closures can only be used with classes",
            "Closures are deprecated in ES6"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 720,
        "framework": "JavaScript",
        "question": "Which of the following statements about 'var', 'let', and 'const' is TRUE?",
        "options": [
            "'var' is function-scoped, 'let' and 'const' are block-scoped",
            "'let' is function-scoped, 'var' is block-scoped",
            "'const' can be reassigned",
            "All are global-scoped"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 721,
        "framework": "JavaScript",
        "question": "What is printed?\n\nconsole.log(typeof NaN);",
        "options": [
            "'number'",
            "'NaN'",
            "'undefined'",
            "'object'"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 722,
        "framework": "JavaScript",
        "question": "Which is TRUE about JavaScript arrays?",
        "options": [
            "Arrays can contain mixed types",
            "Arrays cannot contain objects",
            "Array length cannot be changed",
            "Arrays do not have map or filter methods"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 723,
        "framework": "JavaScript",
        "question": "What is printed?\n\nconsole.log([] == false);",
        "options": [
            "true",
            "false",
            "undefined",
            "Error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 724,
        "framework": "JavaScript",
        "question": "What is the output?\n\nconsole.log('5' - 2);",
        "options": [
            "3",
            "'3'",
            "NaN",
            "Error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 725,
        "framework": "JavaScript",
        "question": "Which of the following is TRUE about JavaScript objects?",
        "options": [
            "Object properties can be added and deleted at runtime",
            "Object keys must be numbers",
            "Objects cannot contain functions",
            "Objects are immutable by default"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 726,
        "framework": "JavaScript",
        "question": "Which of these statements about promises is TRUE?",
        "options": [
            "Promises represent asynchronous operations that may complete in the future",
            "Promises block the main thread",
            "Promises are synchronous by default",
            "Promises are only used for HTTP requests"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 727,
        "framework": "JavaScript",
        "question": "Which of these methods adds an element at the end of an array?",
        "options": [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 728,
        "framework": "JavaScript",
        "question": "Which of the following is TRUE about 'const' variables?",
        "options": [
            "'const' variables cannot be reassigned",
            "'const' variables are block-scoped but can be reassigned",
            "'const' variables are global-scoped",
            "'const' is deprecated"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 729,
        "framework": "JavaScript",
        "question": "What is printed?\n\nconsole.log([] === false);",
        "options": [
            "true",
            "false",
            "undefined",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 730,
        "framework": "JavaScript",
        "question": "Which of these is TRUE about JavaScript 'async/await'?",
        "options": [
            "'await' pauses the execution of the async function until the promise resolves",
            "'await' blocks the entire program",
            "'async' functions are synchronous",
            "You can use 'await' outside 'async' functions in all browsers"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 731,
        "framework": "JavaScript",
        "question": "What is printed?\n\nconsole.log(typeof undefined);",
        "options": [
            "'undefined'",
            "'null'",
            "'object'",
            "'void'"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 732,
        "framework": "JavaScript",
        "question": "Which is TRUE about JavaScript 'hoisting'?",
        "options": [
            "Function declarations and 'var' variables are hoisted",
            "Arrow functions are hoisted with initialization",
            "let and const are hoisted and initialized with undefined",
            "Hoisting only applies to constants"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 733,
        "framework": "JavaScript",
        "question": "Which of these is TRUE about JavaScript 'NaN'?",
        "options": [
            "NaN is not equal to itself",
            "NaN is equal to 0",
            "NaN is falsy but equal to false",
            "NaN is a type of string"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 734,
        "framework": "JavaScript",
        "question": "What is printed?\n\nconsole.log([1,2,3].slice(1,2));",
        "options": [
            "[2]",
            "[1,2]",
            "[2,3]",
            "[1,2,3]"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 735,
        "framework": "JavaScript",
        "question": "Which of the following is TRUE about JavaScript classes?",
        "options": [
            "Classes are syntactic sugar over prototypes",
            "Classes are completely independent of prototypes",
            "Classes cannot have constructors",
            "Classes cannot have static methods"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 736,
        "framework": "JavaScript",
        "question": "Which is TRUE about JavaScript event loop?",
        "options": [
            "It handles asynchronous callbacks",
            "It executes synchronous code asynchronously",
            "It blocks the main thread",
            "It only exists in Node.js"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 737,
        "framework": "JavaScript",
        "question": "What is printed?\n\nconsole.log([] + []);",
        "options": [
            "''",
            "'[]'",
            "0",
            "undefined"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 738,
        "framework": "JavaScript",
        "question": "Which of these is TRUE about JavaScript 'typeof NaN'?",
        "options": [
            "'number'",
            "'NaN'",
            "'undefined'",
            "'object'"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 739,
        "framework": "JavaScript",
        "question": "Which is TRUE about 'for...in' loops?",
        "options": [
            "Iterates over object keys",
            "Iterates over array values",
            "Iterates only over numbers",
            "Iterates asynchronously"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 740,
        "framework": "JavaScript",
        "question": "Which of the following statements about JavaScript modules is TRUE?",
        "options": [
            "ES6 modules can export multiple functions or objects",
            "Modules are not supported in modern browsers",
            "Modules cannot import other modules",
            "Modules must be compiled manually"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 741,
        "framework": "JavaScript",
        "question": "What is printed?\n\nconsole.log(null == undefined);",
        "options": [
            "true",
            "false",
            "Error",
            "undefined"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 742,
        "framework": "JavaScript",
        "question": "Which of the following is TRUE about JavaScript 'Symbol'?",
        "options": [
            "Symbol is a primitive data type",
            "Symbol can be converted to string automatically",
            "Symbol is mutable",
            "Symbol can be used as a number"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 743,
        "framework": "JavaScript",
        "question": "What is printed?\n\nconsole.log(typeof []);",
        "options": [
            "'object'",
            "'array'",
            "'list'",
            "'undefined'"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 744,
        "framework": "JavaScript",
        "question": "Which of these is TRUE about JavaScript WeakMap?",
        "options": [
            "Keys must be objects and are weakly referenced",
            "Keys can be primitives",
            "Values are weakly referenced",
            "WeakMap is immutable"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 745,
        "framework": "JavaScript",
        "question": "Which is TRUE about 'document.querySelector'?",
        "options": [
            "Returns the first element that matches a CSS selector",
            "Returns all elements matching a selector",
            "Cannot select by class",
            "Cannot select by ID"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 746,
        "framework": "JavaScript",
        "question": "Which of the following statements about JavaScript 'null' is TRUE?",
        "options": [
            "Represents intentional absence of any object value",
            "Represents undefined value",
            "Represents zero",
            "Represents NaN"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 747,
        "framework": "JavaScript",
        "question": "Which of the following is TRUE about JavaScript 'map' method?",
        "options": [
            "Returns a new array with the results of calling a function on every element",
            "Modifies the original array",
            "Removes elements from the array",
            "Executes only on objects"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 748,
        "framework": "JavaScript",
        "question": "What is printed?\n\nconsole.log(0 == '0');",
        "options": [
            "true",
            "false",
            "Error",
            "undefined"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 749,
        "framework": "JavaScript",
        "question": "Which statement about JavaScript 'splice' is TRUE?",
        "options": [
            "It can remove and insert elements in an array",
            "It returns a number",
            "It does not modify the original array",
            "It works only on strings"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 750,
        "framework": "JavaScript",
        "question": "Which is TRUE about 'Object.freeze'?",
        "options": [
            "Prevents modification of an object\u2019s properties",
            "Deletes the object",
            "Creates a new copy of the object",
            "Only works on arrays"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 751,
        "framework": "JavaScript",
        "question": "Which of these is TRUE about JavaScript 'setTimeout'?",
        "options": [
            "Schedules a function to run after a delay",
            "Blocks execution for the delay",
            "Runs function immediately",
            "Is synchronous"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 752,
        "framework": "JavaScript",
        "question": "What is printed?\n\nconsole.log(typeof function(){});",
        "options": [
            "'function'",
            "'object'",
            "'undefined'",
            "'method'"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 753,
        "framework": "JavaScript",
        "question": "Which of these is TRUE about JavaScript 'Promise.all'?",
        "options": [
            "Resolves when all promises resolve",
            "Resolves when the first promise resolves",
            "Rejects only if all promises fail",
            "Executes promises synchronously"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 754,
        "framework": "JavaScript",
        "question": "Which of the following is TRUE about 'JSON.stringify'?",
        "options": [
            "Converts a JavaScript object to a JSON string",
            "Converts a JSON string to an object",
            "Modifies the original object",
            "Parses JSON from a file"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 755,
        "framework": "JavaScript",
        "question": "Which statement is TRUE about JavaScript 'RegExp'?",
        "options": [
            "Used for pattern matching in strings",
            "Cannot be used to replace text",
            "Only works on arrays",
            "Is synchronous only"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 756,
        "framework": "JavaScript",
        "question": "What is printed?\n\nconsole.log([] == ![]);",
        "options": [
            "true",
            "false",
            "undefined",
            "Error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 757,
        "framework": "SQL",
        "question": "Which SQL statement is used to extract data from a database?",
        "options": [
            "SELECT",
            "GET",
            "EXTRACT",
            "OPEN"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 758,
        "framework": "SQL",
        "question": "Which clause is used to filter records in SQL?",
        "options": [
            "WHERE",
            "HAVING",
            "ORDER BY",
            "GROUP BY"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 759,
        "framework": "SQL",
        "question": "Which SQL keyword is used to sort the result-set?",
        "options": [
            "ORDER BY",
            "SORT BY",
            "GROUP BY",
            "FILTER BY"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 760,
        "framework": "SQL",
        "question": "Which function returns the total number of records?",
        "options": [
            "COUNT()",
            "SUM()",
            "TOTAL()",
            "NUMBER()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 761,
        "framework": "SQL",
        "question": "Which statement is used to delete all records in a table but keep the table structure?",
        "options": [
            "TRUNCATE",
            "DROP",
            "DELETE",
            "REMOVE"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 762,
        "framework": "SQL",
        "question": "Which SQL clause is used with aggregate functions to group rows?",
        "options": [
            "GROUP BY",
            "ORDER BY",
            "HAVING",
            "FILTER"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 763,
        "framework": "SQL",
        "question": "Which keyword is used to prevent duplicate rows in a result set?",
        "options": [
            "DISTINCT",
            "UNIQUE",
            "SINGLE",
            "EXACT"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 764,
        "framework": "SQL",
        "question": "Which SQL statement is used to update existing records?",
        "options": [
            "UPDATE",
            "MODIFY",
            "SET",
            "CHANGE"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 765,
        "framework": "SQL",
        "question": "Which of these is correct to retrieve the top 5 highest salaries in a table 'Employee'?",
        "options": [
            "SELECT * FROM Employee ORDER BY Salary DESC LIMIT 5;",
            "SELECT TOP 5 * FROM Employee;",
            "SELECT * FROM Employee ORDER BY Salary ASC LIMIT 5;",
            "SELECT * FROM Employee MAX(Salary) LIMIT 5;"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 766,
        "framework": "SQL",
        "question": "Which clause is used to filter groups after applying aggregate functions?",
        "options": [
            "HAVING",
            "WHERE",
            "GROUP BY",
            "ORDER BY"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 767,
        "framework": "SQL",
        "question": "Which join returns all records from both tables and matches where possible?",
        "options": [
            "FULL OUTER JOIN",
            "INNER JOIN",
            "LEFT JOIN",
            "RIGHT JOIN"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 768,
        "framework": "SQL",
        "question": "Which SQL function is used to find the largest value in a column?",
        "options": [
            "MAX()",
            "LARGEST()",
            "HIGH()",
            "TOP()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 769,
        "framework": "SQL",
        "question": "Which command removes a table and its structure from the database?",
        "options": [
            "DROP TABLE",
            "DELETE TABLE",
            "TRUNCATE TABLE",
            "REMOVE TABLE"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 770,
        "framework": "SQL",
        "question": "What does the SQL keyword 'NULL' represent?",
        "options": [
            "Missing or undefined value",
            "Zero",
            "Empty string",
            "False"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 771,
        "framework": "SQL",
        "question": "Which of the following is correct about PRIMARY KEY?",
        "options": [
            "Uniquely identifies each record and cannot contain NULL",
            "Can contain duplicate values",
            "Can contain NULL values",
            "Must be numeric"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 772,
        "framework": "SQL",
        "question": "Which of these is correct about FOREIGN KEY?",
        "options": [
            "References a primary key in another table",
            "Can have duplicate primary keys",
            "Is only used for indexing",
            "Cannot reference a primary key"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 773,
        "framework": "SQL",
        "question": "Which statement adds a new column to an existing table?",
        "options": [
            "ALTER TABLE table_name ADD column_name datatype;",
            "MODIFY TABLE table_name ADD column_name;",
            "UPDATE TABLE table_name ADD column_name;",
            "INSERT INTO table_name ADD column_name;"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 774,
        "framework": "SQL",
        "question": "Which of these statements is TRUE about indexes?",
        "options": [
            "They improve query performance",
            "They store duplicate records",
            "They replace primary keys",
            "They cannot be created on multiple columns"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 775,
        "framework": "SQL",
        "question": "Which of these is correct about UNIQUE constraint?",
        "options": [
            "Prevents duplicate values in a column",
            "Allows duplicate values",
            "Only works with numeric columns",
            "Only works with foreign keys"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 776,
        "framework": "SQL",
        "question": "Which of these statements about SQL views is TRUE?",
        "options": [
            "Views are virtual tables based on SQL queries",
            "Views store data physically",
            "Views cannot have joins",
            "Views are the same as tables"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 777,
        "framework": "SQL",
        "question": "Which of these commands is used to remove all records from a table but keep the structure?",
        "options": [
            "TRUNCATE",
            "DELETE",
            "DROP",
            "REMOVE"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 778,
        "framework": "SQL",
        "question": "Which aggregate function calculates the average of a column?",
        "options": [
            "AVG()",
            "SUM()",
            "MEAN()",
            "TOTAL()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 779,
        "framework": "SQL",
        "question": "Which statement is TRUE about INNER JOIN?",
        "options": [
            "Returns only matching records from both tables",
            "Returns all records from the left table",
            "Returns all records from the right table",
            "Returns all records from both tables"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 780,
        "framework": "SQL",
        "question": "Which clause is used to group rows with the same values?",
        "options": [
            "GROUP BY",
            "ORDER BY",
            "HAVING",
            "DISTINCT"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 781,
        "framework": "SQL",
        "question": "Which of the following is TRUE about SQL subqueries?",
        "options": [
            "Subqueries can be nested inside another query",
            "Subqueries cannot return multiple rows",
            "Subqueries replace the main query",
            "Subqueries can only select one column"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 782,
        "framework": "SQL",
        "question": "Which of these keywords is used to eliminate duplicate rows in a query result?",
        "options": [
            "DISTINCT",
            "UNIQUE",
            "SINGLE",
            "NONE"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 783,
        "framework": "SQL",
        "question": "Which of the following is correct about JOINs?",
        "options": [
            "JOIN combines rows from two or more tables based on a related column",
            "JOIN deletes rows from tables",
            "JOIN is used to update tables",
            "JOIN is used to create views only"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 784,
        "framework": "SQL",
        "question": "Which of these statements is TRUE about 'HAVING'?",
        "options": [
            "HAVING filters records after aggregation",
            "HAVING filters individual rows",
            "HAVING is used instead of WHERE always",
            "HAVING cannot use aggregate functions"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 785,
        "framework": "SQL",
        "question": "Which of the following commands is used to remove a table from a database?",
        "options": [
            "DROP TABLE",
            "DELETE TABLE",
            "REMOVE TABLE",
            "TRUNCATE TABLE"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 786,
        "framework": "SQL",
        "question": "Which of the following is TRUE about SQL transactions?",
        "options": [
            "A transaction is a sequence of one or more SQL statements executed as a single unit",
            "Transactions cannot be rolled back",
            "Transactions are executed partially",
            "Transactions are not supported in modern SQL"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 787,
        "framework": "SQL",
        "question": "Which SQL statement is used to add a new record to a table?",
        "options": [
            "INSERT INTO",
            "ADD",
            "CREATE RECORD",
            "UPDATE"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 788,
        "framework": "SQL",
        "question": "Which of these is TRUE about SQL constraints?",
        "options": [
            "Constraints enforce rules on table columns",
            "Constraints store data permanently",
            "Constraints are optional in queries",
            "Constraints cannot be applied on primary keys"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 789,
        "framework": "SQL",
        "question": "Which of these statements about SQL UNION is TRUE?",
        "options": [
            "Combines results of two queries and removes duplicates",
            "Combines queries but keeps all duplicates",
            "Only works with numeric columns",
            "Replaces one table with another"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 790,
        "framework": "SQL",
        "question": "Which of these is TRUE about SQL indexes?",
        "options": [
            "Indexes improve query performance but use extra storage",
            "Indexes slow down data retrieval",
            "Indexes replace primary keys",
            "Indexes cannot be created on multiple columns"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 791,
        "framework": "SQL",
        "question": "Which of the following is TRUE about SQL 'BETWEEN'?",
        "options": [
            "Filters values within a range inclusive",
            "Filters values outside a range",
            "Filters NULL values only",
            "Filters string values only"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 792,
        "framework": "SQL",
        "question": "Which of the following is TRUE about SQL 'LIKE'?",
        "options": [
            "Used for pattern matching with wildcards",
            "Used for exact numeric comparisons",
            "Cannot be combined with WHERE",
            "Matches NULL values only"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 793,
        "framework": "SQL",
        "question": "Which of the following is TRUE about SQL 'IN' operator?",
        "options": [
            "Checks if a value matches any value in a list or subquery",
            "Checks for NULL only",
            "Checks for duplicates",
            "Replaces the WHERE clause"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 794,
        "framework": "SQL",
        "question": "Which of the following is TRUE about SQL 'EXISTS'?",
        "options": [
            "Tests for existence of rows returned by a subquery",
            "Checks if a table exists",
            "Deletes a table",
            "Checks for NULL only"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 795,
        "framework": "SQL",
        "question": "Which of the following is TRUE about SQL 'INNER JOIN'?",
        "options": [
            "Returns only matching rows from both tables",
            "Returns all rows from both tables",
            "Returns only non-matching rows",
            "Deletes matching rows"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 796,
        "framework": "SQL",
        "question": "Which SQL keyword limits the number of rows returned?",
        "options": [
            "LIMIT",
            "TOP",
            "FETCH",
            "ALL"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 797,
        "framework": "SQL",
        "question": "Which is TRUE about SQL 'ALTER TABLE'?",
        "options": [
            "Can add, drop, or modify columns",
            "Deletes the table",
            "Cannot rename columns",
            "Cannot modify data type"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 798,
        "framework": "SQL",
        "question": "Which SQL command is used to save changes made by a transaction?",
        "options": [
            "COMMIT",
            "ROLLBACK",
            "SAVE",
            "APPLY"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 799,
        "framework": "SQL",
        "question": "Which SQL command reverts a transaction?",
        "options": [
            "ROLLBACK",
            "UNDO",
            "CANCEL",
            "DELETE"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 800,
        "framework": "SQL",
        "question": "Which of the following statements is TRUE about SQL 'UNION ALL'?",
        "options": [
            "Combines results of two queries and includes duplicates",
            "Removes duplicates",
            "Replaces one table with another",
            "Deletes duplicates"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 801,
        "framework": "SQL",
        "question": "Which of the following is TRUE about SQL 'CASE'?",
        "options": [
            "Used for conditional expressions in queries",
            "Replaces WHERE clause",
            "Deletes rows based on conditions",
            "Can only be used in stored procedures"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 802,
        "framework": "SQL",
        "question": "Which of the following is TRUE about SQL 'COALESCE'?",
        "options": [
            "Returns the first non-NULL value in a list",
            "Returns NULL if any value is NULL",
            "Returns zero if any value is NULL",
            "Replaces values permanently in table"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 803,
        "framework": "SQL",
        "question": "Which SQL clause is used to combine multiple conditions?",
        "options": [
            "AND / OR",
            "BETWEEN",
            "IN",
            "LIKE"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 804,
        "framework": "SQL",
        "question": "Which SQL keyword retrieves unique values from a column?",
        "options": [
            "DISTINCT",
            "UNIQUE",
            "ALL",
            "ONLY"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 805,
        "framework": "SQL",
        "question": "Which of the following is TRUE about SQL 'PRIMARY KEY'?",
        "options": [
            "Must contain unique and non-NULL values",
            "Can contain duplicate values",
            "Can be NULL",
            "Can be used for foreign keys only"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 806,
        "framework": "SQL",
        "question": "Which SQL clause is used to filter rows after GROUP BY?",
        "options": [
            "HAVING",
            "WHERE",
            "ORDER BY",
            "DISTINCT"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 807,
        "framework": "Spring Boot",
        "question": "Which annotation marks the main class of a Spring Boot application?",
        "options": [
            "@SpringBootApplication",
            "@EnableAutoConfiguration",
            "@Component",
            "@Configuration"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 808,
        "framework": "Spring Boot",
        "question": "Which of the following is TRUE about Spring Boot starters?",
        "options": [
            "Starters provide a set of dependencies for a feature",
            "Starters are runtime servers",
            "Starters replace Spring Framework",
            "Starters are used to deploy applications only"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 809,
        "framework": "Spring Boot",
        "question": "Which annotation is used to inject dependencies by type?",
        "options": [
            "@Autowired",
            "@Inject",
            "@Resource",
            "@Qualifier"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 810,
        "framework": "Spring Boot",
        "question": "Which of the following is TRUE about @RestController?",
        "options": [
            "It combines @Controller and @ResponseBody",
            "It is used only for scheduled tasks",
            "It is equivalent to @Component",
            "It can only handle GET requests"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 811,
        "framework": "Spring Boot",
        "question": "Which annotation is used to define a repository for Spring Data JPA?",
        "options": [
            "@Repository",
            "@Service",
            "@Component",
            "@Entity"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 812,
        "framework": "Spring Boot",
        "question": "Which of the following is TRUE about Spring Boot AutoConfiguration?",
        "options": [
            "Automatically configures beans based on classpath dependencies",
            "Replaces manual configuration entirely",
            "Automatically scans for database schemas",
            "Requires explicit XML configuration"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 813,
        "framework": "Spring Boot",
        "question": "Which annotation is used to bind external configuration properties to a class?",
        "options": [
            "@ConfigurationProperties",
            "@Value",
            "@PropertySource",
            "@Bean"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 814,
        "framework": "Spring Boot",
        "question": "Which of the following is TRUE about Spring Boot Actuator?",
        "options": [
            "Provides endpoints to monitor and manage the application",
            "Is used to deploy microservices",
            "Automatically logs exceptions",
            "Replaces Spring MVC"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 815,
        "framework": "Spring Boot",
        "question": "Which annotation is used to handle HTTP GET requests in Spring Boot?",
        "options": [
            "@GetMapping",
            "@PostMapping",
            "@RequestMapping",
            "@DeleteMapping"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 816,
        "framework": "Spring Boot",
        "question": "Which annotation allows mapping a URL parameter to a method argument?",
        "options": [
            "@RequestParam",
            "@PathVariable",
            "@RequestBody",
            "@QueryParam"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 817,
        "framework": "Spring Boot",
        "question": "Which annotation allows mapping path variables in a REST endpoint?",
        "options": [
            "@PathVariable",
            "@RequestParam",
            "@RequestBody",
            "@QueryParam"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 818,
        "framework": "Spring Boot",
        "question": "Which of the following is TRUE about @SpringBootTest?",
        "options": [
            "Used for integration testing with Spring context",
            "Used for unit tests without Spring context",
            "Automatically mocks all beans",
            "Replaces JUnit entirely"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 819,
        "framework": "Spring Boot",
        "question": "Which property file is loaded by default in Spring Boot?",
        "options": [
            "application.properties",
            "config.properties",
            "spring.properties",
            "boot.properties"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 820,
        "framework": "Spring Boot",
        "question": "Which annotation marks a service layer class in Spring Boot?",
        "options": [
            "@Service",
            "@Component",
            "@Repository",
            "@Controller"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 821,
        "framework": "Spring Boot",
        "question": "Which annotation marks a class as a JPA entity?",
        "options": [
            "@Entity",
            "@Table",
            "@Repository",
            "@Service"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 822,
        "framework": "Spring Boot",
        "question": "Which annotation is used to configure a bean in a Spring configuration class?",
        "options": [
            "@Bean",
            "@Component",
            "@Service",
            "@Repository"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 823,
        "framework": "Spring Boot",
        "question": "Which of the following is TRUE about Spring Boot Profiles?",
        "options": [
            "Profiles allow environment-specific configurations",
            "Profiles automatically change database schema",
            "Profiles can only be used with XML configuration",
            "Profiles are used to schedule tasks"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 824,
        "framework": "Spring Boot",
        "question": "Which annotation allows reading a single property value from a properties file?",
        "options": [
            "@Value",
            "@ConfigurationProperties",
            "@Autowired",
            "@Qualifier"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 825,
        "framework": "Spring Boot",
        "question": "Which of these is TRUE about Spring Boot DevTools?",
        "options": [
            "Provides automatic restart and live reload for development",
            "Is required for production deployment",
            "Replaces Spring Actuator",
            "Compiles Java code automatically in production"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 826,
        "framework": "Spring Boot",
        "question": "Which of the following annotations is used to create a scheduled task?",
        "options": [
            "@Scheduled",
            "@Async",
            "@Task",
            "@Timer"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 827,
        "framework": "Spring Boot",
        "question": "Which of the following is TRUE about Spring Boot embedded servers?",
        "options": [
            "Spring Boot can run with embedded Tomcat, Jetty, or Undertow",
            "Embedded servers are mandatory in production",
            "Embedded servers replace the operating system",
            "Spring Boot cannot run without XML configuration"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 828,
        "framework": "Spring Boot",
        "question": "Which annotation marks a configuration class in Spring Boot?",
        "options": [
            "@Configuration",
            "@Component",
            "@Service",
            "@Repository"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 829,
        "framework": "Spring Boot",
        "question": "Which annotation is used to create a REST endpoint that consumes JSON?",
        "options": [
            "@RequestBody",
            "@RequestParam",
            "@PathVariable",
            "@QueryParam"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 830,
        "framework": "Spring Boot",
        "question": "Which of the following is TRUE about Spring Boot CLI?",
        "options": [
            "Allows running Groovy scripts as Spring applications",
            "Compiles Java classes automatically",
            "Replaces Maven or Gradle entirely",
            "Deploys applications to cloud automatically"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 831,
        "framework": "Spring Boot",
        "question": "Which annotation is used for exception handling in Spring MVC?",
        "options": [
            "@ControllerAdvice",
            "@ExceptionHandler",
            "@RestController",
            "@Service"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 832,
        "framework": "Spring Boot",
        "question": "Which annotation allows qualifying beans when multiple candidates exist?",
        "options": [
            "@Qualifier",
            "@Autowired",
            "@Resource",
            "@Inject"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 833,
        "framework": "Spring Boot",
        "question": "Which annotation marks a field for dependency injection of a specific bean?",
        "options": [
            "@Autowired",
            "@Inject",
            "@Resource",
            "@Value"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 834,
        "framework": "Spring Boot",
        "question": "Which of these is TRUE about Spring Boot health checks?",
        "options": [
            "Provided by Actuator endpoints like /actuator/health",
            "Require XML configuration",
            "Replace database monitoring tools",
            "Only work with REST APIs"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 835,
        "framework": "Spring Boot",
        "question": "Which annotation is used to enable scheduling in Spring Boot?",
        "options": [
            "@EnableScheduling",
            "@Scheduled",
            "@EnableAsync",
            "@Async"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 836,
        "framework": "Spring Boot",
        "question": "Which annotation allows Spring Boot to scan components automatically?",
        "options": [
            "@ComponentScan",
            "@SpringBootApplication",
            "@Configuration",
            "@EnableAutoConfiguration"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 837,
        "framework": "Spring Boot",
        "question": "Which of the following is TRUE about Spring Boot properties binding?",
        "options": [
            "Properties can be bound to classes using @ConfigurationProperties",
            "Properties are read-only and cannot be bound",
            "Properties must be hard-coded in Java",
            "Properties are automatically converted to JSON"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 838,
        "framework": "Spring Boot",
        "question": "Which annotation defines a component that provides business logic?",
        "options": [
            "@Service",
            "@Controller",
            "@Repository",
            "@Component"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 839,
        "framework": "Spring Boot",
        "question": "Which of the following is TRUE about Spring Boot profiles?",
        "options": [
            "Profiles allow running different configurations for dev, test, prod environments",
            "Profiles are used only for database configuration",
            "Profiles are deprecated",
            "Profiles automatically deploy applications"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 840,
        "framework": "Spring Boot",
        "question": "Which annotation is used to create REST API documentation in Spring Boot with Swagger?",
        "options": [
            "@EnableSwagger2",
            "@SwaggerDoc",
            "@ApiDoc",
            "@OpenAPI"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 841,
        "framework": "Spring Boot",
        "question": "Which of the following is TRUE about Spring Boot DevTools?",
        "options": [
            "Enables automatic application restart and live reload",
            "Is mandatory in production",
            "Replaces JUnit testing",
            "Compiles code for deployment"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 842,
        "framework": "Spring Boot",
        "question": "Which annotation allows asynchronous execution of methods?",
        "options": [
            "@Async",
            "@Scheduled",
            "@EnableAsync",
            "@Threaded"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 843,
        "framework": "Spring Boot",
        "question": "Which annotation is used to configure Spring Boot application properties?",
        "options": [
            "@ConfigurationProperties",
            "@Value",
            "@PropertySource",
            "@EnableConfiguration"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 844,
        "framework": "Spring Boot",
        "question": "Which of these is TRUE about Spring Boot embedded Tomcat?",
        "options": [
            "Spring Boot can run web applications without external servers",
            "Embedded Tomcat must be installed separately",
            "Embedded Tomcat cannot serve REST endpoints",
            "Embedded Tomcat replaces the OS web server entirely"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 845,
        "framework": "Spring Boot",
        "question": "Which annotation is used to handle exceptions globally in Spring Boot?",
        "options": [
            "@ControllerAdvice",
            "@RestController",
            "@ExceptionHandler",
            "@Service"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 846,
        "framework": "Spring Boot",
        "question": "Which annotation allows mapping HTTP POST requests?",
        "options": [
            "@PostMapping",
            "@GetMapping",
            "@RequestMapping",
            "@PatchMapping"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 847,
        "framework": "Spring Boot",
        "question": "Which of the following is TRUE about Spring Boot logging?",
        "options": [
            "Uses default Logback configuration if no logging framework is provided",
            "Logging must be configured manually always",
            "Logging replaces exceptions",
            "Logging is not supported for REST APIs"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 848,
        "framework": "Spring Boot",
        "question": "Which annotation is used to create a REST endpoint returning JSON?",
        "options": [
            "@RestController",
            "@Controller",
            "@Service",
            "@Repository"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 849,
        "framework": "Spring Boot",
        "question": "Which of these annotations enables transaction management in Spring Boot?",
        "options": [
            "@EnableTransactionManagement",
            "@Transactional",
            "@Service",
            "@Repository"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 850,
        "framework": "Spring Boot",
        "question": "Which annotation is used to mark a class as a Spring MVC controller?",
        "options": [
            "@Controller",
            "@RestController",
            "@Service",
            "@Component"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 851,
        "framework": "Spring Boot",
        "question": "Which annotation enables asynchronous method execution in Spring Boot?",
        "options": [
            "@EnableAsync",
            "@Async",
            "@Scheduled",
            "@Service"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 852,
        "framework": "Spring Boot",
        "question": "Which of the following is TRUE about Spring Boot dependencies?",
        "options": [
            "Starters simplify dependency management for common functionalities",
            "Dependencies must be managed manually always",
            "Dependencies are not required for REST APIs",
            "Dependencies replace Java standard libraries"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 853,
        "framework": "Spring Boot",
        "question": "Which annotation allows mapping an entire request path to a method?",
        "options": [
            "@RequestMapping",
            "@GetMapping",
            "@PostMapping",
            "@PathVariable"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 854,
        "framework": "Spring Boot",
        "question": "Which annotation is used for field-based injection in Spring Boot?",
        "options": [
            "@Autowired",
            "@Inject",
            "@Resource",
            "@Value"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 855,
        "framework": "Spring Boot",
        "question": "Which annotation allows scheduling a method to run at fixed intervals?",
        "options": [
            "@Scheduled",
            "@Async",
            "@EnableAsync",
            "@Task"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 856,
        "framework": "Spring Boot",
        "question": "Which annotation allows component scanning in a package and sub-packages?",
        "options": [
            "@ComponentScan",
            "@Configuration",
            "@SpringBootApplication",
            "@EnableAutoConfiguration"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 857,
        "framework": "Python",
        "question": "What is Python?",
        "options": [
            "High-level, interpreted, dynamically typed language",
            "Low-level compiled language",
            "Assembly language",
            "Markup language"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 858,
        "framework": "Python",
        "question": "Which keyword is used to define a function?",
        "options": [
            "func",
            "define",
            "def",
            "function"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 859,
        "framework": "Python",
        "question": "Which of these is mutable?",
        "options": [
            "list",
            "tuple",
            "str",
            "int"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 860,
        "framework": "Python",
        "question": "How do you create a virtual environment?",
        "options": [
            "python -m venv env",
            "pip install env",
            "virtualenv create",
            "copy system Python folder"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 861,
        "framework": "Python",
        "question": "Which operator is exponentiation?",
        "options": [
            "^",
            "**",
            "%",
            "exp"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 862,
        "framework": "Python",
        "question": "How do you handle exceptions?",
        "options": [
            "try...catch",
            "try...except",
            "handle...catch",
            "try...finally only"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 863,
        "framework": "Python",
        "question": "Which method adds an element to the end of a list?",
        "options": [
            "append()",
            "add()",
            "insert()",
            "extend()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 864,
        "framework": "Python",
        "question": "Which data type is unordered and mutable?",
        "options": [
            "set",
            "dict",
            "tuple",
            "list"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 865,
        "framework": "Python",
        "question": "Which method returns keys of a dictionary?",
        "options": [
            "keys()",
            "values()",
            "items()",
            "get()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 866,
        "framework": "Python",
        "question": "How do you open a file for reading?",
        "options": [
            "open('file','r')",
            "open('file','w')",
            "readfile('file')",
            "file.open('file','r')"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 867,
        "framework": "Python",
        "question": "Which method removes the last item of a list?",
        "options": [
            "pop()",
            "remove()",
            "del()",
            "clear()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 868,
        "framework": "Python",
        "question": "How do you iterate over a dictionary?",
        "options": [
            "for key in dict:",
            "for key in dict.keys():",
            "for key, value in dict.items():",
            "All of the above"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 869,
        "framework": "Python",
        "question": "Which function converts string to integer?",
        "options": [
            "int()",
            "str()",
            "float()",
            "convert()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 870,
        "framework": "Python",
        "question": "Which is used for anonymous functions?",
        "options": [
            "lambda",
            "def",
            "func",
            "anonymous"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 871,
        "framework": "Python",
        "question": "Which method sorts a list in-place?",
        "options": [
            "sort()",
            "sorted()",
            "order()",
            "arrange()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 872,
        "framework": "Python",
        "question": "Which operator checks identity?",
        "options": [
            "is",
            "==",
            "equals",
            "==="
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 873,
        "framework": "Python",
        "question": "Which keyword is used to create a generator?",
        "options": [
            "yield",
            "return",
            "generate",
            "func"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 874,
        "framework": "Python",
        "question": "Which keyword is used for inheritance?",
        "options": [
            "class Child(Parent):",
            "inherit Parent",
            "extends Parent",
            "implements Parent"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 875,
        "framework": "Python",
        "question": "Which module handles regular expressions?",
        "options": [
            "re",
            "regex",
            "pyregex",
            "regexp"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 876,
        "framework": "Python",
        "question": "Which method converts object to string?",
        "options": [
            "str()",
            "string()",
            "toString()",
            "format()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 877,
        "framework": "Python",
        "question": "Which built-in function gives length?",
        "options": [
            "len()",
            "length()",
            "size()",
            "count()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 878,
        "framework": "Python",
        "question": "Which statement imports a module?",
        "options": [
            "import math",
            "include math",
            "require math",
            "use math"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 879,
        "framework": "Python",
        "question": "Which method removes whitespace from start and end?",
        "options": [
            "strip()",
            "trim()",
            "clean()",
            "rstrip()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 880,
        "framework": "Python",
        "question": "Which keyword defines a class?",
        "options": [
            "class",
            "object",
            "def",
            "struct"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 881,
        "framework": "Python",
        "question": "Which of these is a Python boolean value?",
        "options": [
            "True",
            "true",
            "1",
            "Yes"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 882,
        "framework": "Python",
        "question": "Which method reads all lines from a file?",
        "options": [
            "readlines()",
            "read()",
            "readline()",
            "lines()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 883,
        "framework": "Python",
        "question": "Which module is used for math operations?",
        "options": [
            "math",
            "cmath",
            "numbers",
            "numpy"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 884,
        "framework": "Python",
        "question": "Which function returns an absolute value?",
        "options": [
            "abs()",
            "absolute()",
            "value()",
            "mod()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 885,
        "framework": "Python",
        "question": "Which method checks if string starts with substring?",
        "options": [
            "startswith()",
            "startswithWith()",
            "start()",
            "begins()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 886,
        "framework": "Python",
        "question": "Which is the correct comment syntax?",
        "options": [
            "# comment",
            "// comment",
            "/* comment */",
            "<!-- comment -->"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 887,
        "framework": "Python",
        "question": "Which operator performs floor division?",
        "options": [
            "//",
            "/",
            "%",
            "**"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 888,
        "framework": "Python",
        "question": "Which method returns index of item in list?",
        "options": [
            "index()",
            "find()",
            "locate()",
            "position()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 889,
        "framework": "Python",
        "question": "Which keyword stops a loop?",
        "options": [
            "break",
            "stop",
            "exit",
            "end"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 890,
        "framework": "Python",
        "question": "Which keyword skips to next iteration?",
        "options": [
            "continue",
            "skip",
            "next",
            "pass"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 891,
        "framework": "Python",
        "question": "Which keyword defines a constant in Python?",
        "options": [
            "No keyword, use uppercase naming",
            "const",
            "let",
            "define"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 892,
        "framework": "Python",
        "question": "Which method converts list to string?",
        "options": [
            "join()",
            "concat()",
            "str()",
            "listToStr()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 893,
        "framework": "Python",
        "question": "Which built-in function evaluates an expression?",
        "options": [
            "eval()",
            "exec()",
            "execute()",
            "run()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 894,
        "framework": "Python",
        "question": "Which operator is used for membership test?",
        "options": [
            "in",
            "has",
            "contains",
            "exists"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 895,
        "framework": "Python",
        "question": "Which built-in function returns type?",
        "options": [
            "type()",
            "class()",
            "typeof()",
            "instance()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 896,
        "framework": "Python",
        "question": "Which keyword defines an empty block?",
        "options": [
            "pass",
            "skip",
            "empty",
            "null"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 897,
        "framework": "Python",
        "question": "Which method reverses a list in-place?",
        "options": [
            "reverse()",
            "revert()",
            "flip()",
            "invert()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 898,
        "framework": "Python",
        "question": "Which method removes item by index?",
        "options": [
            "pop(index)",
            "remove(index)",
            "delete(index)",
            "discard(index)"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 899,
        "framework": "Python",
        "question": "Which method copies a list?",
        "options": [
            "copy()",
            "clone()",
            "duplicate()",
            "replicate()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 900,
        "framework": "Python",
        "question": "Which function returns max value in list?",
        "options": [
            "max()",
            "maximum()",
            "highest()",
            "top()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 901,
        "framework": "Python",
        "question": "Which function returns min value in list?",
        "options": [
            "min()",
            "minimum()",
            "lowest()",
            "bottom()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 902,
        "framework": "Python",
        "question": "Which keyword defines a generator?",
        "options": [
            "yield",
            "return",
            "generate",
            "func"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 903,
        "framework": "Python",
        "question": "Which method checks if list is empty?",
        "options": [
            "len(list)==0",
            "list.empty()",
            "isEmpty(list)",
            "list.length==0"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 904,
        "framework": "Python",
        "question": "Which module is used to create date objects?",
        "options": [
            "datetime",
            "time",
            "dateutil",
            "calendar"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 905,
        "framework": "Python",
        "question": "Which function rounds a number?",
        "options": [
            "round()",
            "ceil()",
            "floor()",
            "truncate()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 906,
        "framework": "Python",
        "question": "Which statement stops function execution?",
        "options": [
            "return",
            "break",
            "exit",
            "stop"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 907,
        "framework": "Python",
        "question": "Which function converts number to string?",
        "options": [
            "str()",
            "string()",
            "toString()",
            "convert()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 908,
        "framework": "Python",
        "question": "Which method checks if string is numeric?",
        "options": [
            "isnumeric()",
            "isnumber()",
            "isdigit()",
            "isnum()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 909,
        "framework": "Python",
        "question": "Which operator performs bitwise AND?",
        "options": [
            "&",
            "|",
            "^",
            "~"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 910,
        "framework": "Python",
        "question": "Which operator performs bitwise OR?",
        "options": [
            "|",
            "&",
            "^",
            "~"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 911,
        "framework": "Java",
        "question": "Which of these is a primitive data type?",
        "options": [
            "int",
            "String",
            "ArrayList",
            "Scanner"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 912,
        "framework": "Java",
        "question": "Which method is the entry point of a Java program?",
        "options": [
            "public static void main(String[] args)",
            "void main()",
            "start()",
            "run()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 913,
        "framework": "Java",
        "question": "Which exception is checked in Java?",
        "options": [
            "IOException",
            "ArithmeticException",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 914,
        "framework": "Java",
        "question": "Which of these is used to create a thread?",
        "options": [
            "Extending Thread class",
            "Implementing Runnable interface",
            "Both A and B",
            "None"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 915,
        "framework": "Java",
        "question": "Which keyword prevents inheritance?",
        "options": [
            "final",
            "static",
            "private",
            "protected"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 916,
        "framework": "Java",
        "question": "Which method is used to compare two strings?",
        "options": [
            "equals()",
            "==",
            "compareToString()",
            "match()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 917,
        "framework": "Java",
        "question": "Which of the following is true about interfaces?",
        "options": [
            "Interfaces can have default methods",
            "Interfaces can have constructors",
            "Interfaces cannot be implemented",
            "Interfaces can store data like a class"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 918,
        "framework": "Java",
        "question": "Which operator is used for logical AND?",
        "options": [
            "&&",
            "&",
            "and",
            "||"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 919,
        "framework": "Java",
        "question": "Which collection allows duplicates and maintains insertion order?",
        "options": [
            "ArrayList",
            "HashSet",
            "HashMap",
            "TreeSet"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 920,
        "framework": "Java",
        "question": "Which keyword is used to declare a constant?",
        "options": [
            "final",
            "static",
            "const",
            "constant"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 921,
        "framework": "Java",
        "question": "Which method returns the length of an array?",
        "options": [
            "array.length",
            "array.size()",
            "length(array)",
            "size(array)"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 922,
        "framework": "Java",
        "question": "Which method is used to start a thread?",
        "options": [
            "start()",
            "run()",
            "init()",
            "execute()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 923,
        "framework": "Java",
        "question": "Which of these is immutable?",
        "options": [
            "String",
            "StringBuilder",
            "ArrayList",
            "HashMap"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 924,
        "framework": "Java",
        "question": "Which access modifier allows access in the same package only?",
        "options": [
            "default/package-private",
            "private",
            "protected",
            "public"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 925,
        "framework": "Java",
        "question": "Which keyword is used to call parent class constructor?",
        "options": [
            "super",
            "this",
            "parent",
            "base"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 926,
        "framework": "Java",
        "question": "Which of these is used to stop a loop?",
        "options": [
            "break",
            "stop",
            "exit",
            "continue"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 927,
        "framework": "Java",
        "question": "Which keyword skips current iteration?",
        "options": [
            "continue",
            "break",
            "skip",
            "pass"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 928,
        "framework": "Java",
        "question": "Which of these converts string to integer?",
        "options": [
            "Integer.parseInt()",
            "Integer.toInt()",
            "parseInt()",
            "toInt()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 929,
        "framework": "Java",
        "question": "Which method checks if a string is empty?",
        "options": [
            "isEmpty()",
            "empty()",
            "length()==0",
            "equals('')"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 930,
        "framework": "Java",
        "question": "Which of these loops executes at least once?",
        "options": [
            "do-while",
            "while",
            "for",
            "foreach"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 931,
        "framework": "Java",
        "question": "Which exception is thrown by divide by zero?",
        "options": [
            "ArithmeticException",
            "IOException",
            "NullPointerException",
            "NumberFormatException"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 932,
        "framework": "Java",
        "question": "Which method joins two strings?",
        "options": [
            "concat()",
            "+ operator",
            "StringBuilder.append()",
            "All of the above"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 933,
        "framework": "Java",
        "question": "Which statement defines an array?",
        "options": [
            "int[] arr = new int[5];",
            "int arr[] = 5;",
            "array arr = new int[5];",
            "int arr = array(5);"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 934,
        "framework": "Java",
        "question": "Which method returns class name of an object?",
        "options": [
            "getClass().getName()",
            "className()",
            "getName()",
            "typeName()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 935,
        "framework": "Java",
        "question": "Which keyword is used for runtime polymorphism?",
        "options": [
            "extends",
            "implements",
            "overrides",
            "super"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 936,
        "framework": "Java",
        "question": "Which annotation indicates method override?",
        "options": [
            "@Override",
            "@Overload",
            "@Inherited",
            "@Annotation"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 937,
        "framework": "Java",
        "question": "Which class is parent of all exceptions?",
        "options": [
            "Throwable",
            "Exception",
            "Error",
            "RuntimeException"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 938,
        "framework": "Java",
        "question": "Which keyword is used to define an interface?",
        "options": [
            "interface",
            "class",
            "implements",
            "extends"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 939,
        "framework": "Java",
        "question": "Which collection stores key-value pairs?",
        "options": [
            "HashMap",
            "HashSet",
            "ArrayList",
            "LinkedList"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 940,
        "framework": "Java",
        "question": "Which class is used for thread synchronization?",
        "options": [
            "synchronized block",
            "Lock class",
            "Thread class",
            "Executor"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 941,
        "framework": "Java",
        "question": "Which method returns hash code of an object?",
        "options": [
            "hashCode()",
            "getHash()",
            "code()",
            "objectHash()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 942,
        "framework": "Java",
        "question": "Which operator performs modulo?",
        "options": [
            "%",
            "/",
            "*",
            "**"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 943,
        "framework": "Java",
        "question": "Which interface is implemented by lambda expressions?",
        "options": [
            "FunctionalInterface",
            "Serializable",
            "Runnable",
            "Comparator"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 944,
        "framework": "Java",
        "question": "Which statement converts integer to string?",
        "options": [
            "String.valueOf(123)",
            "Integer.toString(123)",
            "Both A and B",
            "None"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 945,
        "framework": "Java",
        "question": "Which keyword is used for constants in interface?",
        "options": [
            "public static final",
            "const",
            "static final",
            "final only"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 946,
        "framework": "Java",
        "question": "Which keyword allows a method to be abstract?",
        "options": [
            "abstract",
            "virtual",
            "interface",
            "override"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 947,
        "framework": "Java",
        "question": "Which class provides random number generation?",
        "options": [
            "Random",
            "Math",
            "ThreadLocalRandom",
            "Both A and C"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 948,
        "framework": "Java",
        "question": "Which statement defines a try-with-resources?",
        "options": [
            "try(Resource res = ...){ }",
            "try{ } finally{ }",
            "try{ } catch{ }",
            "try(){}"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 949,
        "framework": "Java",
        "question": "Which method compares two strings ignoring case?",
        "options": [
            "equalsIgnoreCase()",
            "compare()",
            "compareToIgnoreCase()",
            "equals()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 950,
        "framework": "Java",
        "question": "Which interface is used for iteration?",
        "options": [
            "Iterator",
            "Iterable",
            "Enumeration",
            "Collection"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 951,
        "framework": "Java",
        "question": "Which of these is true about final class?",
        "options": [
            "Cannot be extended",
            "Cannot have methods",
            "Cannot have variables",
            "Cannot be instantiated"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 952,
        "framework": "Java",
        "question": "Which of these is true about static methods?",
        "options": [
            "Belong to class, not object",
            "Cannot access static variables",
            "Can only be abstract",
            "Belong to object"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 953,
        "framework": "Java",
        "question": "Which method is used to stop a thread?",
        "options": [
            "interrupt()",
            "stop()",
            "destroy()",
            "kill()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 954,
        "framework": "Java",
        "question": "Which method converts string to char array?",
        "options": [
            "toCharArray()",
            "chars()",
            "stringToChar()",
            "convert()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 955,
        "framework": "Java",
        "question": "Which collection maintains insertion order?",
        "options": [
            "LinkedHashMap",
            "HashMap",
            "TreeMap",
            "HashSet"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 956,
        "framework": "Java",
        "question": "Which collection sorts elements naturally?",
        "options": [
            "TreeSet",
            "HashSet",
            "ArrayList",
            "LinkedList"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 957,
        "framework": "Java",
        "question": "Which statement converts string to double?",
        "options": [
            "Double.parseDouble('3.14')",
            "Double.valueOf('3.14')",
            "Both A and B",
            "None"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 958,
        "framework": "Java",
        "question": "Which operator is used for conditional evaluation?",
        "options": [
            "?:",
            "&&",
            "||",
            "=="
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 959,
        "framework": "Java",
        "question": "Which of these implements Map interface?",
        "options": [
            "HashMap",
            "HashSet",
            "ArrayList",
            "LinkedList"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 960,
        "framework": "JavaScript",
        "question": "Which of these declares a variable?",
        "options": [
            "let",
            "var",
            "const",
            "All of the above"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 961,
        "framework": "JavaScript",
        "question": "Which method converts JSON string to object?",
        "options": [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.object()",
            "JSON.toObject()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 962,
        "framework": "JavaScript",
        "question": "Which of these is a falsy value?",
        "options": [
            "0",
            "1",
            "'false'",
            "[]"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 963,
        "framework": "JavaScript",
        "question": "What does === operator check?",
        "options": [
            "Equality with type check",
            "Equality without type check",
            "Assignment",
            "Reference equality only"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 964,
        "framework": "JavaScript",
        "question": "Which method adds a new element at the end of an array?",
        "options": [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 965,
        "framework": "JavaScript",
        "question": "Which keyword defines a constant?",
        "options": [
            "const",
            "let",
            "var",
            "constant"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 966,
        "framework": "JavaScript",
        "question": "Which of these creates a new object?",
        "options": [
            "let obj = {}",
            "let obj = new Object()",
            "Both A and B",
            "None"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 967,
        "framework": "JavaScript",
        "question": "Which operator is used for string concatenation?",
        "options": [
            "+",
            "&",
            ".",
            "concat() only"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 968,
        "framework": "JavaScript",
        "question": "Which of these defines a function?",
        "options": [
            "function myFunc() {}",
            "let myFunc = function() {}",
            "const myFunc = () => {}",
            "All of the above"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 969,
        "framework": "JavaScript",
        "question": "Which method returns array length?",
        "options": [
            "array.length",
            "array.size()",
            "array.count",
            "array.len()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 970,
        "framework": "JavaScript",
        "question": "Which method removes the first element from an array?",
        "options": [
            "shift()",
            "unshift()",
            "pop()",
            "push()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 971,
        "framework": "JavaScript",
        "question": "Which keyword creates block-scoped variable?",
        "options": [
            "let",
            "var",
            "const",
            "Both A and C"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 972,
        "framework": "JavaScript",
        "question": "Which method adds element at the beginning of an array?",
        "options": [
            "unshift()",
            "shift()",
            "push()",
            "pop()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 973,
        "framework": "JavaScript",
        "question": "Which of these is used to check type?",
        "options": [
            "typeof",
            "instanceof",
            "type()",
            "getType()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 974,
        "framework": "JavaScript",
        "question": "Which method returns keys of an object?",
        "options": [
            "Object.keys()",
            "Object.values()",
            "Object.entries()",
            "keys()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 975,
        "framework": "JavaScript",
        "question": "Which method returns values of an object?",
        "options": [
            "Object.values()",
            "Object.keys()",
            "Object.entries()",
            "values()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 976,
        "framework": "JavaScript",
        "question": "Which method returns key-value pairs?",
        "options": [
            "Object.entries()",
            "Object.keys()",
            "Object.values()",
            "entries()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 977,
        "framework": "JavaScript",
        "question": "Which operator performs logical AND?",
        "options": [
            "&&",
            "&",
            "and",
            "||"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 978,
        "framework": "JavaScript",
        "question": "Which operator performs logical OR?",
        "options": [
            "||",
            "&&",
            "or",
            "|"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 979,
        "framework": "JavaScript",
        "question": "Which keyword stops loop iteration?",
        "options": [
            "break",
            "continue",
            "exit",
            "stop"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 980,
        "framework": "JavaScript",
        "question": "Which method returns substring?",
        "options": [
            "substring()",
            "substr()",
            "slice()",
            "All of the above"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 981,
        "framework": "JavaScript",
        "question": "Which method converts number to string?",
        "options": [
            "toString()",
            "String()",
            "pause",
            "wait"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 982,
        "framework": "JavaScript",
        "question": "Which method adds/removes elements in middle of array?",
        "options": [
            "splice()",
            "slice()",
            "push()",
            "pop()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 983,
        "framework": "JavaScript",
        "question": "Which method returns a portion of array?",
        "options": [
            "slice()",
            "splice()",
            "subarray()",
            "segment()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 984,
        "framework": "JavaScript",
        "question": "Which keyword is used for strict equality?",
        "options": [
            "===",
            "==",
            "is",
            "equals"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 985,
        "framework": "JavaScript",
        "question": "Which method checks if array includes element?",
        "options": [
            "includes()",
            "indexOf()",
            "find()",
            "contains()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 986,
        "framework": "JavaScript",
        "question": "Which method finds first element satisfying condition?",
        "options": [
            "find()",
            "filter()",
            "map()",
            "forEach()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 987,
        "framework": "JavaScript",
        "question": "Which method creates new array with elements passing test?",
        "options": [
            "filter()",
            "map()",
            "find()",
            "forEach()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 988,
        "framework": "JavaScript",
        "question": "Which method creates new array by transforming elements?",
        "options": [
            "map()",
            "filter()",
            "reduce()",
            "forEach()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 989,
        "framework": "JavaScript",
        "question": "Which method executes function on each array element?",
        "options": [
            "forEach()",
            "map()",
            "filter()",
            "reduce()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 990,
        "framework": "JavaScript",
        "question": "Which method reduces array to single value?",
        "options": [
            "reduce()",
            "map()",
            "filter()",
            "forEach()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 991,
        "framework": "JavaScript",
        "question": "Which method merges two arrays?",
        "options": [
            "concat()",
            "+ operator",
            "Both A and B",
            "merge()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 992,
        "framework": "JavaScript",
        "question": "Which keyword imports module?",
        "options": [
            "import",
            "require",
            "include",
            "use"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 993,
        "framework": "JavaScript",
        "question": "Which method returns current date?",
        "options": [
            "new Date()",
            "Date.now()",
            "Both A and B",
            "currentDate()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 994,
        "framework": "JavaScript",
        "question": "Which keyword deletes object property?",
        "options": [
            "delete",
            "remove",
            "undef",
            "destroy"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 995,
        "framework": "JavaScript",
        "question": "Which keyword defines default parameter?",
        "options": [
            "function fn(a=5) {}",
            "function fn(a:5) {}",
            "function fn(a default 5) {}",
            "function fn(default a=5) {}"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 996,
        "framework": "JavaScript",
        "question": "Which operator is used for nullish coalescing?",
        "options": [
            "??",
            "||",
            "&&",
            "??="
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 997,
        "framework": "JavaScript",
        "question": "Which operator is optional chaining?",
        "options": [
            "?.",
            ".",
            "->",
            "::"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 998,
        "framework": "JavaScript",
        "question": "Which method parses integer from string?",
        "options": [
            "parseInt()",
            "Number()",
            "parseFloat()",
            "All of the above"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 999,
        "framework": "JavaScript",
        "question": "Which method parses float from string?",
        "options": [
            "parseFloat()",
            "Number()",
            "parseInt()",
            "All of the above"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1000,
        "framework": "JavaScript",
        "question": "Which method converts array to string?",
        "options": [
            "join()",
            "toString()",
            "Both A and B",
            "stringify()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1001,
        "framework": "JavaScript",
        "question": "Which method splits string into array?",
        "options": [
            "split()",
            "slice()",
            "splice()",
            "divide()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1002,
        "framework": "JavaScript",
        "question": "Which method trims whitespace from string?",
        "options": [
            "trim()",
            "strip()",
            "remove()",
            "clean()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1003,
        "framework": "JavaScript",
        "question": "Which method replaces substring in string?",
        "options": [
            "replace()",
            "replaceAll()",
            "Both A and B",
            "set()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1004,
        "framework": "JavaScript",
        "question": "Which keyword declares generator function?",
        "options": [
            "function*",
            "generator",
            "func*",
            "gen"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1005,
        "framework": "Java",
        "question": "Which keyword prevents a class from being inherited?",
        "options": [
            "static",
            "final",
            "sealed",
            "protected"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1006,
        "framework": "Java",
        "question": "What does the 'static' keyword mean?",
        "options": [
            "Belongs to the class, not an instance",
            "Variable becomes immutable",
            "Method cannot be overridden",
            "Class becomes abstract"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1007,
        "framework": "Java",
        "question": "Which collection does NOT allow duplicates?",
        "options": [
            "ArrayList",
            "HashSet",
            "LinkedList",
            "TreeMap"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1008,
        "framework": "Java",
        "question": "Which class is the root of all Java objects?",
        "options": [
            "BaseClass",
            "Object",
            "Root",
            "Default"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1009,
        "framework": "Java",
        "question": "Which is a functional interface?",
        "options": [
            "Serializable",
            "List",
            "Runnable",
            "InputStream"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1010,
        "framework": "Java",
        "question": "Which Java version introduced var keyword?",
        "options": [
            "Java 6",
            "Java 8",
            "Java 10",
            "Java 17"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1011,
        "framework": "Java",
        "question": "Which keyword is used to create a subclass?",
        "options": [
            "implements",
            "extends",
            "inherits",
            "super"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1012,
        "framework": "Java",
        "question": "Which exception is unchecked?",
        "options": [
            "IOException",
            "SQLException",
            "NullPointerException",
            "ClassNotFoundException"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1013,
        "framework": "Java",
        "question": "What is method overloading?",
        "options": [
            "Same name, same parameters",
            "Same name, different parameters",
            "Different name, same parameters",
            "Different return types only"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1014,
        "framework": "Java",
        "question": "Which stream is used to read bytes?",
        "options": [
            "FileReader",
            "BufferedReader",
            "FileInputStream",
            "Scanner"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1015,
        "framework": "Java",
        "question": "Which class is used for synchronized lists?",
        "options": [
            "ArrayList",
            "LinkedList",
            "Vector",
            "Stack"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1016,
        "framework": "Java",
        "question": "What is a marker interface?",
        "options": [
            "Interface with exactly one method",
            "Interface with no methods",
            "Interface with only static methods",
            "Interface with default methods"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1017,
        "framework": "Java",
        "question": "Which file contains external libraries?",
        "options": [
            "pom.xml",
            "application.yaml",
            "manifest.txt",
            "settings.gradle"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1018,
        "framework": "Java",
        "question": "What is JVM responsible for?",
        "options": [
            "Interpreting Java bytecode",
            "Compiling Java source code",
            "Managing Maven dependencies",
            "Rendering UI windows"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1019,
        "framework": "Java",
        "question": "Which collection maintains insertion order?",
        "options": [
            "HashSet",
            "TreeSet",
            "LinkedHashSet",
            "PriorityQueue"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1020,
        "framework": "JavaScript",
        "question": "What is the result of typeof null?",
        "options": [
            "null",
            "object",
            "undefined",
            "string"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1021,
        "framework": "JavaScript",
        "question": "Which keyword creates block-scoped variables?",
        "options": [
            "var",
            "let",
            "global",
            "scope"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1022,
        "framework": "JavaScript",
        "question": "What does === check?",
        "options": [
            "Value only",
            "Type only",
            "Value and type",
            "Reference"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1023,
        "framework": "JavaScript",
        "question": "Which method returns a new array?",
        "options": [
            "push()",
            "pop()",
            "map()",
            "splice()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1024,
        "framework": "JavaScript",
        "question": "What is a Promise?",
        "options": [
            "Value that may be available later",
            "Immediate return value",
            "Blocking function",
            "Looping structure"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1025,
        "framework": "JavaScript",
        "question": "What does this refer to inside a method?",
        "options": [
            "Window",
            "Global object",
            "The object itself",
            "null"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1026,
        "framework": "JavaScript",
        "question": "Which operator spreads array elements?",
        "options": [
            "...",
            "<-",
            "::",
            "@@"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1027,
        "framework": "JavaScript",
        "question": "Arrow functions do NOT have their own:",
        "options": [
            "return value",
            "this",
            "parameters",
            "scope"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1028,
        "framework": "JavaScript",
        "question": "Which is NOT a JavaScript data type?",
        "options": [
            "symbol",
            "boolean",
            "class",
            "undefined"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1029,
        "framework": "JavaScript",
        "question": "What does async function always return?",
        "options": [
            "value",
            "promise",
            "callback",
            "string"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1030,
        "framework": "JavaScript",
        "question": "Which function parses JSON?",
        "options": [
            "JSON.decode()",
            "JSON.parse()",
            "stringify()",
            "evalJSON()"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1031,
        "framework": "JavaScript",
        "question": "Which method adds an element to the start of an array?",
        "options": [
            "push()",
            "unshift()",
            "shift()",
            "append()"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1032,
        "framework": "JavaScript",
        "question": "Which method is used to delay execution?",
        "options": [
            "wait()",
            "sleep()",
            "setTimeout()",
            "timeout()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1033,
        "framework": "JavaScript",
        "question": "Which comparison returns true? '5' == 5",
        "options": [
            "Always false",
            "True due to type coercion",
            "Throws error",
            "True only in strict mode"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1034,
        "framework": "JavaScript",
        "question": "Which keyword stops code execution?",
        "options": [
            "stop",
            "pause",
            "break",
            "halt"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1035,
        "framework": "Python",
        "question": "What is the main difference between list and tuple?",
        "options": [
            "List is immutable",
            "Tuple is immutable",
            "Tuple stores only numbers",
            "List stores only strings"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1036,
        "framework": "Python",
        "question": "Which keyword defines a generator?",
        "options": [
            "yield",
            "return",
            "generate",
            "async"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1037,
        "framework": "Python",
        "question": "Which type is unordered?",
        "options": [
            "list",
            "tuple",
            "set",
            "dict"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1038,
        "framework": "Python",
        "question": "How to create a virtual environment?",
        "options": [
            "pip install venv",
            "python -m venv env",
            "venv create in env",
            "mkvirtualenv env"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1039,
        "framework": "Python",
        "question": "What does @staticmethod do?",
        "options": [
            "Creates class method",
            "Creates static method without self",
            "Creates private method",
            "Creates async method"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1040,
        "framework": "Python",
        "question": "Which module handles JSON?",
        "options": [
            "json",
            "serialize",
            "pickle",
            "convert"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1041,
        "framework": "Python",
        "question": "What is PEP8?",
        "options": [
            "Python compiler",
            "Style guide",
            "Package manager",
            "Debugger"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1042,
        "framework": "Python",
        "question": "What is __init__?",
        "options": [
            "Destructor",
            "Constructor",
            "Package",
            "Operator"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1043,
        "framework": "Python",
        "question": "Which comparison is true?",
        "options": [
            "0 == False",
            "1 == False",
            "None == False",
            "\"\" == None"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1044,
        "framework": "Python",
        "question": "Which operator checks identity?",
        "options": [
            "==",
            "!=",
            "is",
            "<>"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1045,
        "framework": "Python",
        "question": "Which keyword creates a lambda function?",
        "options": [
            "function",
            "lambda",
            "arrow",
            "fn"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1046,
        "framework": "Python",
        "question": "What is Python's default recursion limit?",
        "options": [
            "100",
            "1000",
            "5000",
            "Unlimited"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1047,
        "framework": "Python",
        "question": "Which data structure uses key-value pairs?",
        "options": [
            "list",
            "tuple",
            "dict",
            "set"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1048,
        "framework": "Python",
        "question": "Which module is used for unit testing?",
        "options": [
            "pytest",
            "unittest",
            "testing",
            "assert"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1049,
        "framework": "Python",
        "question": "Which library is used for numerical computing?",
        "options": [
            "matplotlib",
            "numpy",
            "pandas",
            "requests"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1050,
        "framework": "SQL",
        "question": "Which command deletes a table?",
        "options": [
            "REMOVE TABLE",
            "DELETE TABLE",
            "DROP TABLE",
            "CUT TABLE"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1051,
        "framework": "SQL",
        "question": "Which keyword filters rows?",
        "options": [
            "WHERE",
            "GROUP BY",
            "ORDER BY",
            "HAVING"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1052,
        "framework": "SQL",
        "question": "INNER JOIN returns:",
        "options": [
            "All rows",
            "Matching rows only",
            "Non-matching rows",
            "Left rows only"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1053,
        "framework": "SQL",
        "question": "Which is an aggregate function?",
        "options": [
            "WHERE()",
            "SUM()",
            "SELECT()",
            "LIMIT()"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1054,
        "framework": "SQL",
        "question": "What is a PRIMARY KEY?",
        "options": [
            "Nullable and unique",
            "Unique + not null",
            "Random ID",
            "Foreign key"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1055,
        "framework": "SQL",
        "question": "Which statement updates data?",
        "options": [
            "INSERT",
            "UPDATE",
            "ALTER",
            "SELECT"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1056,
        "framework": "SQL",
        "question": "Which operator matches a pattern?",
        "options": [
            "LIKE",
            "MATCH",
            "SEARCH",
            "FIND"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1057,
        "framework": "SQL",
        "question": "Which clause groups rows?",
        "options": [
            "ORDER BY",
            "GROUP BY",
            "WHERE",
            "UNION"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1058,
        "framework": "SQL",
        "question": "Which command adds a new column?",
        "options": [
            "ALTER TABLE ADD",
            "INSERT COLUMN",
            "NEW COLUMN",
            "SET COLUMN"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1059,
        "framework": "SQL",
        "question": "Which join returns all rows from left + matches?",
        "options": [
            "LEFT JOIN",
            "INNER JOIN",
            "FULL JOIN",
            "CROSS JOIN"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1060,
        "framework": "SQL",
        "question": "What does DISTINCT do?",
        "options": [
            "Sorts results",
            "Filters rows",
            "Removes duplicates",
            "Deletes rows"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1061,
        "framework": "SQL",
        "question": "Which function counts rows?",
        "options": [
            "COUNT()",
            "ROWS()",
            "LEN()",
            "SUMROWS()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1062,
        "framework": "SQL",
        "question": "Which clause sorts results?",
        "options": [
            "HAVING",
            "ORDER BY",
            "WHERE",
            "GROUP BY"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1063,
        "framework": "SQL",
        "question": "What does FOREIGN KEY enforce?",
        "options": [
            "Unique constraint",
            "Not null constraint",
            "Referential integrity",
            "Primary key creation"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1064,
        "framework": "SQL",
        "question": "Which statement creates a table?",
        "options": [
            "MAKE TABLE",
            "INSERT TABLE",
            "CREATE TABLE",
            "NEW TABLE"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1065,
        "framework": "SpringBoot",
        "question": "What does @Autowired do?",
        "options": [
            "Creates a new object",
            "Automatically injects dependencies",
            "Cleans unused beans",
            "Starts the Spring context"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1066,
        "framework": "SpringBoot",
        "question": "Which annotation defines a REST controller?",
        "options": [
            "@Controller",
            "@RestController",
            "@Service",
            "@Configuration"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1067,
        "framework": "SpringBoot",
        "question": "Which file contains configuration?",
        "options": [
            "application.properties",
            "settings.gradle",
            "pom.xml",
            "environment.yaml"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1068,
        "framework": "SpringBoot",
        "question": "Which annotation maps GET requests?",
        "options": [
            "@PostMapping",
            "@GetMapping",
            "@PutMapping",
            "@RequestBody"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1069,
        "framework": "SpringBoot",
        "question": "Spring Boot is used for:",
        "options": [
            "Building microservices quickly",
            "Replacing Java",
            "Compiling code",
            "Managing UI logic"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1070,
        "framework": "SpringBoot",
        "question": "Which annotation creates a bean?",
        "options": [
            "@Generate",
            "@Bean",
            "@Factory",
            "@Init"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1071,
        "framework": "SpringBoot",
        "question": "Which embedded server is default?",
        "options": [
            "Tomcat",
            "Jetty",
            "Netty",
            "Undertow"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1072,
        "framework": "SpringBoot",
        "question": "Which annotation enables JPA repositories?",
        "options": [
            "@EnableJpaRepositories",
            "@Repository",
            "@Entity",
            "@Table"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1073,
        "framework": "SpringBoot",
        "question": "Which annotation maps a class to a database table?",
        "options": [
            "@Field",
            "@Table",
            "@Entity",
            "@Column"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1074,
        "framework": "SpringBoot",
        "question": "Which annotation enables scheduling?",
        "options": [
            "@EnableScheduling",
            "@Cron",
            "@Timed",
            "@Task"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1075,
        "framework": "SpringBoot",
        "question": "Which annotation is used inside a controller to return JSON?",
        "options": [
            "@ResponseBody",
            "@JSON",
            "@Body",
            "@Payload"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1076,
        "framework": "SpringBoot",
        "question": "What is Spring IOC?",
        "options": [
            "Object lifecycle management",
            "Compilation engine",
            "Logging utility",
            "Database query engine"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1077,
        "framework": "SpringBoot",
        "question": "Which annotation enables caching?",
        "options": [
            "@EnableCaching",
            "@Cache",
            "@Cacheable",
            "@Cached"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1078,
        "framework": "SpringBoot",
        "question": "Which annotation marks a class as a Spring-managed component?",
        "options": [
            "@Managed",
            "@Component",
            "@Spring",
            "@Initialize"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1079,
        "framework": "SpringBoot",
        "question": "Which dependency includes Spring Boot web server?",
        "options": [
            "spring-boot-starter-test",
            "spring-boot-starter-data-jpa",
            "spring-boot-starter-web",
            "spring-boot-starter-core"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1080,
        "framework": "Python",
        "question": "What is the output of `print(f'{2+2=}')` in Python 3.8+?",
        "options": [
            "4",
            "2+2=4",
            "2+2=",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1081,
        "framework": "Python",
        "question": "What is the result of `type(1,)`?",
        "options": [
            "<class 'int'>",
            "<class 'tuple'>",
            "<class 'list'>",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1082,
        "framework": "Python",
        "question": "Which method adds an element to a set?",
        "options": [
            "append()",
            "push()",
            "add()",
            "insert()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1083,
        "framework": "Python",
        "question": "What does the `global` keyword do?",
        "options": [
            "Imports global variables",
            "Allows modifying a global variable inside a function",
            "Makes a variable constant",
            "Exports variable to other modules"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1084,
        "framework": "Python",
        "question": "What is the output of `bool([])`?",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1085,
        "framework": "Python",
        "question": "Which of these is NOT a valid variable name?",
        "options": [
            "_myVar",
            "my_var",
            "2myVar",
            "myVar2"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1086,
        "framework": "Python",
        "question": "How do you start a class definition?",
        "options": [
            "class MyClass:",
            "def MyClass:",
            "struct MyClass:",
            "object MyClass:"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1087,
        "framework": "Python",
        "question": "What is the LEGB rule used for?",
        "options": [
            "List expansion",
            "Scope resolution (Local, Enclosing, Global, Built-in)",
            "Loop logic",
            "Exception handling"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1088,
        "framework": "Python",
        "question": "Which method is used to remove whitespace from the beginning and end of a string?",
        "options": [
            "strip()",
            "trim()",
            "clean()",
            "cut()"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1089,
        "framework": "Python",
        "question": "What is the result of `10 // 3`?",
        "options": [
            "3.33",
            "3",
            "3.0",
            "1"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1090,
        "framework": "Python",
        "question": "Which exception is raised when a key is not found in a dictionary?",
        "options": [
            "IndexError",
            "ValueError",
            "KeyError",
            "NotFoundException"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1091,
        "framework": "Python",
        "question": "What does `range(5)` generate in Python 3?",
        "options": [
            "A list [0, 1, 2, 3, 4]",
            "A list [1, 2, 3, 4, 5]",
            "An iterator/range object",
            "A generator function"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1092,
        "framework": "Python",
        "question": "How do you reverse a list `my_list` in place?",
        "options": [
            "my_list.reverse()",
            "reversed(my_list)",
            "my_list[::-1]",
            "sort(my_list, reverse=True)"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1093,
        "framework": "Python",
        "question": "What is the parent class of all exceptions?",
        "options": [
            "Exception",
            "BaseException",
            "Object",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1094,
        "framework": "Python",
        "question": "Which operator performs exponentiation?",
        "options": [
            "^",
            "**",
            "exp()",
            "pow"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1095,
        "framework": "Java",
        "question": "Which keyword is used to access members of a superclass?",
        "options": [
            "this",
            "parent",
            "super",
            "base"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1096,
        "framework": "Java",
        "question": "What is the default value of an `int` instance variable?",
        "options": [
            "null",
            "0",
            "1",
            "undefined"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1097,
        "framework": "Java",
        "question": "Which collection guarantees key uniqueness?",
        "options": [
            "ArrayList",
            "LinkedList",
            "HashMap (keys)",
            "Vector"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1098,
        "framework": "Java",
        "question": "What does the `final` keyword mean for a class?",
        "options": [
            "It cannot be instantiated",
            "It cannot be inherited/subclassed",
            "It cannot have methods",
            "It is static"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1099,
        "framework": "Java",
        "question": "Which method starts a thread execution?",
        "options": [
            "run()",
            "start()",
            "init()",
            "execute()"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1100,
        "framework": "Java",
        "question": "String is immutable in Java. What does this mean?",
        "options": [
            "String object value cannot be changed after creation",
            "String variables cannot be reassigned",
            "String takes less memory",
            "Strings are thread-unsafe"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1101,
        "framework": "Java",
        "question": "What is the size of a `char` in Java?",
        "options": [
            "8-bit",
            "16-bit",
            "32-bit",
            "64-bit"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1102,
        "framework": "Java",
        "question": "Which operator is used to check object type?",
        "options": [
            "typeof",
            "instanceof",
            "is",
            "type"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1103,
        "framework": "Java",
        "question": "What happens if you try to put a `null` key into a `TreeMap`?",
        "options": [
            "It works fine",
            "It throws NullPointerException",
            "It replaces the first key",
            "It creates a new root"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1104,
        "framework": "Java",
        "question": "Which access modifier gives the widest visibility?",
        "options": [
            "private",
            "protected",
            "default",
            "public"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 1105,
        "framework": "Java",
        "question": "What is the Diamond Problem related to?",
        "options": [
            "Multiple Inheritance of classes",
            "Database locking",
            "Thread synchronization",
            "Memory leaks"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1106,
        "framework": "Java",
        "question": "Which class is thread-safe?",
        "options": [
            "StringBuilder",
            "StringBuffer",
            "ArrayList",
            "HashMap"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1107,
        "framework": "Java",
        "question": "What is a Marker Interface?",
        "options": [
            "An interface with one method",
            "An interface with no methods",
            "An interface for GUI",
            "An interface for database"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1108,
        "framework": "Java",
        "question": "What does `System.out` refer to?",
        "options": [
            "The compiler",
            "The standard output stream (PrintStream)",
            "The error log",
            "The file system"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1109,
        "framework": "Java",
        "question": "Can an abstract class have constructors?",
        "options": [
            "No",
            "Yes",
            "Only private ones",
            "Only static ones"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1110,
        "framework": "JavaScript",
        "question": "What is the result of `typeof [1, 2]`?",
        "options": [
            "array",
            "object",
            "list",
            "undefined"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1111,
        "framework": "JavaScript",
        "question": "Which method converts a JSON string to a JavaScript object?",
        "options": [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.toObj()",
            "JSON.convert()"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1112,
        "framework": "JavaScript",
        "question": "What does `isNaN('Hello')` return?",
        "options": [
            "true",
            "false",
            "undefined",
            "error"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1113,
        "framework": "JavaScript",
        "question": "Which keyword defines a constant variable?",
        "options": [
            "var",
            "let",
            "const",
            "final"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1114,
        "framework": "JavaScript",
        "question": "What is the return value of `console.log('Hi')`?",
        "options": [
            "'Hi'",
            "true",
            "undefined",
            "null"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1115,
        "framework": "JavaScript",
        "question": "How do you check if a property exists in an object?",
        "options": [
            "obj.has(prop)",
            "'prop' in obj",
            "obj.contains(prop)",
            "exists(obj.prop)"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1116,
        "framework": "JavaScript",
        "question": "Which method removes the *first* element of an array?",
        "options": [
            "pop()",
            "shift()",
            "unshift()",
            "delete()"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1117,
        "framework": "JavaScript",
        "question": "What applies to 'closure'?",
        "options": [
            "A function inside another function having access to parent scope",
            "Closing a browser window",
            "Ending a loop",
            "An object with no properties"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1118,
        "framework": "JavaScript",
        "question": "What is `event.target`?",
        "options": [
            "The element that triggered the event",
            "The element the listener is attached to",
            "The type of event",
            "The root window"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1119,
        "framework": "JavaScript",
        "question": "What is the output of `3 + '3'`?",
        "options": [
            "6",
            "'33'",
            "NaN",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1120,
        "framework": "JavaScript",
        "question": "Which function executes code after a specified delay?",
        "options": [
            "setInterval",
            "setTimeout",
            "sleep",
            "wait"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1121,
        "framework": "JavaScript",
        "question": "What does the spread operator `...` do?",
        "options": [
            "Stops execution",
            "Expands an iterable into individual elements",
            "Joins elements",
            "Compares objects"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1122,
        "framework": "JavaScript",
        "question": "Which statement handles errors?",
        "options": [
            "if-else",
            "try-catch",
            "do-while",
            "switch-case"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1123,
        "framework": "JavaScript",
        "question": "How to select an element with id='demo'?",
        "options": [
            "document.querySelector('#demo')",
            "document.getElement('demo')",
            "document.find('#demo')",
            "window.demo"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1124,
        "framework": "JavaScript",
        "question": "What is the scope of a variable declared with `let` inside a loop?",
        "options": [
            "Global",
            "Function",
            "Block",
            "Module"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1125,
        "framework": "Python",
        "question": "What is the primary function of a Python metaclass?",
        "options": [
            "To define global variables",
            "To control the creation of a class",
            "To manage module imports",
            "To create instance attributes"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1126,
        "framework": "Python",
        "question": "What is the output of `list(map(lambda x: x * 2, [1, 2, 3]))`?",
        "options": [
            "Error",
            "[1, 2, 3]",
            "[2, 4, 6]",
            "[1, 4, 9]"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1127,
        "framework": "Python",
        "question": "What is the difference between `is` and `==`?",
        "options": [
            "`is` compares values, `==` compares identity",
            "`is` compares identity, `==` compares values",
            "They are identical for all object types",
            "`is` is only used for strings"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1128,
        "framework": "Python",
        "question": "Which method makes an instance of a class callable like a function?",
        "options": [
            "`__init__`",
            "`__call__`",
            "`__run__`",
            "`__main__`"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1129,
        "framework": "Python",
        "question": "Which of these is a correct dictionary comprehension?",
        "options": [
            "`{i: i*2 for i in range(3)}`",
            "`[i: i*2 for i in range(3)]`",
            "`{i, i*2 for i in range(3)}`",
            "`(i: i*2 for i in range(3))`"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1130,
        "framework": "Python",
        "question": "Which mode should you use to open a file for both reading and writing (overwriting the file)?",
        "options": [
            "'r+'",
            "'w+'",
            "'a+'",
            "'rb'"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1131,
        "framework": "Python",
        "question": "What is a Python decorator?",
        "options": [
            "A function that returns an iterable",
            "A function that takes another function and extends its behavior",
            "A special type of class method",
            "A syntax for creating private variables"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1132,
        "framework": "Python",
        "question": "What is the primary use of the `with` statement?",
        "options": [
            "To define a loop structure",
            "To ensure cleanup/resource management via context managers",
            "To handle exceptions only",
            "To declare scope for local variables"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1133,
        "framework": "Python",
        "question": "What does the GIL (Global Interpreter Lock) in CPython do?",
        "options": [
            "Allows true parallel execution of multiple threads on multi-core systems",
            "Prevents more than one native thread from executing Python bytecodes at once",
            "Manages external library access",
            "Manages garbage collection for all objects"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1134,
        "framework": "Python",
        "question": "The `enumerate()` function returns pairs of...",
        "options": [
            "(value, key)",
            "(index, value)",
            "(key, value)",
            "(value, index)"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1135,
        "framework": "Python",
        "question": "What does `sys.path` contain?",
        "options": [
            "A list of Python built-in functions",
            "A list of directories where the interpreter looks for modules",
            "The path to the current executable",
            "A dictionary of environment variables"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1136,
        "framework": "Python",
        "question": "What is the purpose of `__slots__` in a class definition?",
        "options": [
            "To make all attributes private",
            "To restrict the dynamic creation of new instance attributes",
            "To enforce type checking on attributes",
            "To define the class inheritance order"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1137,
        "framework": "Python",
        "question": "What is the result of `5 / 2` in Python 3?",
        "options": [
            "2",
            "2.5",
            "2.0",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1138,
        "framework": "Python",
        "question": "Which method returns a dynamic view of a dictionary's keys?",
        "options": [
            "`dict.keylist()`",
            "`dict.get_keys()`",
            "`dict.keys()`",
            "`dict.values()`"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1139,
        "framework": "Python",
        "question": "What is `collections.deque` optimized for?",
        "options": [
            "Fast random access",
            "Fast appends and pops from both ends",
            "Fast searching operations",
            "Storing unique elements"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1140,
        "framework": "Java",
        "question": "What is the difference between `throw` and `throws`?",
        "options": [
            "`throw` is for method signature, `throws` is for method body",
            "`throw` handles an exception, `throws` creates an exception",
            "`throw` throws a single exception, `throws` declares potential exceptions",
            "They are synonyms"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1141,
        "framework": "Java",
        "question": "What is the primary benefit of using Generics in Java?",
        "options": [
            "To enable multiple inheritance",
            "To provide compile-time type safety and remove casts",
            "To allow for dynamic typing at runtime",
            "To improve garbage collection performance"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1142,
        "framework": "Java",
        "question": "Which interface represents an unordered collection that does not allow duplicate elements?",
        "options": [
            "List",
            "Set",
            "Map",
            "Queue"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1143,
        "framework": "Java",
        "question": "Which keyword is used to declare a variable as a constant (value cannot be changed)?",
        "options": [
            "`static`",
            "`const`",
            "`final`",
            "`volatile`"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1144,
        "framework": "Java",
        "question": "When a subclass provides its own implementation of a method already defined in its superclass, what is this concept called?",
        "options": [
            "Method Overloading",
            "Method Hiding",
            "Method Overriding",
            "Method Shadowing"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1145,
        "framework": "Java",
        "question": "The ability of an object to take on many forms is known as:",
        "options": [
            "Encapsulation",
            "Inheritance",
            "Abstraction",
            "Polymorphism"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 1146,
        "framework": "Java",
        "question": "For objects in Java, what does the `==` operator check?",
        "options": [
            "If the two objects contain the same data",
            "If the two objects refer to the exact same memory location",
            "If the objects' classes are the same",
            "If the objects have the same hash code"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1147,
        "framework": "Java",
        "question": "What is the purpose of the `strictfp` keyword?",
        "options": [
            "To restrict method access",
            "To ensure consistent floating-point calculations across different platforms",
            "To force garbage collection",
            "To synchronize method access"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1148,
        "framework": "Java",
        "question": "Which access modifier is implicitly applied to interface methods?",
        "options": [
            "`private`",
            "`protected`",
            "`default`",
            "`public`"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 1149,
        "framework": "Java",
        "question": "What is a static block primarily used for?",
        "options": [
            "Initializing the object instance",
            "Defining private helper methods",
            "Initializing static members of the class",
            "Handling I/O operations"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1150,
        "framework": "Java",
        "question": "Can an interface have a constructor?",
        "options": [
            "Yes, but only private ones",
            "No, interfaces cannot be instantiated directly",
            "Yes, but only if all methods are static",
            "Yes, starting from Java 8"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1151,
        "framework": "Java",
        "question": "Which feature was introduced in Java 8 to provide functional programming capabilities?",
        "options": [
            "Generics",
            "Lambda expressions",
            "Annotations",
            "Enums"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1152,
        "framework": "Java",
        "question": "What is the primary role of the JVM (Java Virtual Machine)?",
        "options": [
            "To compile Java source code into bytecode",
            "To execute Java bytecode",
            "To manage system memory and disk space",
            "To create a user interface"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1153,
        "framework": "Java",
        "question": "Which class is the ultimate parent class for every class in Java?",
        "options": [
            "`System`",
            "`Main`",
            "`Class`",
            "`Object`"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 1154,
        "framework": "Java",
        "question": "What does the JIT (Just-In-Time) compiler do?",
        "options": [
            "Translates Java source code to C++",
            "Translates bytecode into native machine code at runtime",
            "Translates JavaScript to Java",
            "Compiles code right before a commit"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1155,
        "framework": "JavaScript",
        "question": "What is the main difference between `null` and `undefined`?",
        "options": [
            "`null` is a primitive type, `undefined` is an object",
            "`null` means a variable exists but has no value; `undefined` means a variable has not been assigned a value",
            "`null` is intentional absence of value; `undefined` means the variable hasn't been assigned a value yet",
            "They are identical in all contexts"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1156,
        "framework": "JavaScript",
        "question": "What is the result of `[] + {}`?",
        "options": [
            "`[object Object]`",
            "Error",
            "`0`",
            "`{}`"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1157,
        "framework": "JavaScript",
        "question": "What does `Object.freeze()` do to an object?",
        "options": [
            "Prevents only new properties from being added",
            "Prevents existing properties from being modified, added, or deleted",
            "Makes the object's properties read-only but allows deletion",
            "Prevents the object from being assigned to another variable"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1158,
        "framework": "JavaScript",
        "question": "Which method returns an array of a given object's own enumerable string property names?",
        "options": [
            "`Object.values()`",
            "`Object.entries()`",
            "`Object.keys()`",
            "`Object.getNames()`"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1159,
        "framework": "JavaScript",
        "question": "What are `async` and `await` used for?",
        "options": [
            "To enable synchronous network calls",
            "To work with Promises in a synchronous-looking way",
            "To define generator functions",
            "To replace all standard callback functions"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1160,
        "framework": "JavaScript",
        "question": "What is the storage limit and scope of `localStorage` in a browser?",
        "options": [
            "About 5MB, persisted until the tab is closed",
            "Unlimited, persisted until cleared by user/script",
            "About 5-10MB, persisted until cleared by user/script",
            "1KB, cleared when the browser is closed"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1161,
        "framework": "JavaScript",
        "question": "What is the primary function of `Array.prototype.reduce()`?",
        "options": [
            "To filter array elements based on a condition",
            "To transform array elements into a new array of the same size",
            "To execute a reducer function on each element to yield a single value",
            "To reverse the order of array elements"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1162,
        "framework": "JavaScript",
        "question": "What is the difference between `==` and `===`?",
        "options": [
            "`==` compares values and types; `===` compares values only",
            "`==` performs type coercion; `===` compares values and types without coercion",
            "`==` is for numbers; `===` is for objects",
            "They are identical when comparing strings"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1163,
        "framework": "JavaScript",
        "question": "Which data type maintains the insertion order of its keys and is generally better for key-value maps than a plain object?",
        "options": [
            "Array",
            "Set",
            "Map",
            "WeakSet"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1164,
        "framework": "JavaScript",
        "question": "Which method prevents the further propagation of the current event in the capturing and bubbling phases?",
        "options": [
            "`event.preventDefault()`",
            "`event.stopImmediatePropagation()`",
            "`event.stopPropagation()`",
            "`event.stopEvent()`"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1165,
        "framework": "JavaScript",
        "question": "What is the scope of a variable declared with `var`?",
        "options": [
            "Block scope",
            "Function scope",
            "Module scope",
            "Lexical scope"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1166,
        "framework": "JavaScript",
        "question": "What is the term for a tool that combines multiple JavaScript modules and assets into a single file for deployment?",
        "options": [
            "Transpiler",
            "Linter",
            "Module Bundler",
            "Package Manager"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1167,
        "framework": "JavaScript",
        "question": "Which method is the modern, standard way to create a shallow copy of an object (not an array)?",
        "options": [
            "`Object.assign({}, original)`",
            "The spread operator `{...original}`",
            "`Object.clone(original)`",
            "JSON parsing `JSON.parse(JSON.stringify(original))`"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1168,
        "framework": "JavaScript",
        "question": "What does the `in` operator do?",
        "options": [
            "Checks if an object is inside an array",
            "Checks if a property exists in an object or its prototype chain",
            "Checks if a variable is defined",
            "Checks if two objects have the same properties"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1169,
        "framework": "JavaScript",
        "question": "In non-strict mode, what does `(function(){return this}())` return when executed in a browser environment?",
        "options": [
            "`undefined`",
            "The `window` object",
            "An empty object `{}`",
            "Error"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1170,
        "framework": "SQL",
        "question": "Given the **Employees** table (`EmployeeID`, `Name`, `DeptID`, `Salary`), find the **Name** of all employees whose salary is **greater than the overall average salary** of all employees.",
        "options": [
            "SELECT Name FROM Employees WHERE Salary > AVG(Salary);",
            "SELECT Name FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);",
            "SELECT Name FROM Employees GROUP BY Name HAVING Salary > AVG(Salary);",
            "SELECT Name FROM Employees E JOIN (SELECT AVG(Salary) AS AvgSalary FROM Employees) AS T ON E.Salary > T.AvgSalary;"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1171,
        "framework": "SQL",
        "question": "Which DDL command correctly **adds a new column** named `Email` of type VARCHAR(100) to the **Employees** table?",
        "options": [
            "ADD COLUMN Employees (Email VARCHAR(100));",
            "CREATE TABLE Employees ADD Email VARCHAR(100);",
            "ALTER TABLE Employees ADD Email VARCHAR(100);",
            "UPDATE TABLE Employees SET Email VARCHAR(100);"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1172,
        "framework": "SQL",
        "question": "Given **Employees** and **Departments** (`DeptID`, `Location`), write a query to find the **average salary** of all employees who work in the **'NY'** location.",
        "options": [
            "SELECT AVG(Salary) FROM Employees E JOIN Departments D ON E.DeptID = D.DeptID WHERE D.Location = 'NY';",
            "SELECT AVG(Salary) FROM Employees WHERE Location = 'NY';",
            "SELECT AVG(Salary) FROM Employees WHERE DeptID IN (10, 30);",
            "SELECT SUM(Salary) / COUNT(*) FROM Employees HAVING Location = 'NY';"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1173,
        "framework": "SQL",
        "question": "Using the **Employees** table (`EmployeeID`, `Name`, `DeptID`, `Salary`), write a query to find **pairs of employees** (Name1, Name2) who have the **exact same salary**.",
        "options": [
            "SELECT E1.Name, E2.Name FROM Employees E1 JOIN Employees E2 ON E1.Salary = E2.Salary;",
            "SELECT E1.Name, E2.Name FROM Employees E1, Employees E2 WHERE E1.Salary = E2.Salary AND E1.EmployeeID <> E2.EmployeeID;",
            "SELECT Name, Salary FROM Employees WHERE COUNT(Salary) > 1 GROUP BY Salary;",
            "SELECT E1.Name, E2.Name FROM Employees E1 WHERE E1.Salary IN (SELECT Salary FROM Employees GROUP BY Salary HAVING COUNT(*) > 1);"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1174,
        "framework": "SQL",
        "question": "Which DCL statement grants the user 'Analyst' permission to **read data** from the **Employees** table?",
        "options": [
            "ALLOW READ ON Employees TO Analyst;",
            "GRANT SELECT ON Employees TO Analyst;",
            "GRANT ALL ON Employees TO Analyst;",
            "GRANT READ TABLE Employees TO Analyst;"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1175,
        "framework": "SQL",
        "question": "Given the **Employees** table (`DeptID`, `Salary`) and the requirement to list all employees ordered by **DeptID ascending** and then by **Salary descending** within each department, which query is correct?",
        "options": [
            "SELECT * FROM Employees ORDER BY Salary DESC, DeptID ASC;",
            "SELECT * FROM Employees SORT BY DeptID ASC, Salary DESC;",
            "SELECT * FROM Employees ORDER BY DeptID, Salary DESC;",
            "SELECT * FROM Employees ORDER BY DeptID DESC, Salary ASC;"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1176,
        "framework": "SQL",
        "question": "Which join type, when connecting **Employees** and **Departments**, will **exclude both** Grace (non-existent DeptID 50) AND the Finance department (DeptID 40, no employees)?",
        "options": [
            "LEFT JOIN",
            "RIGHT JOIN",
            "INNER JOIN",
            "FULL OUTER JOIN"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1177,
        "framework": "SQL",
        "question": "Given the **Employees** table (`Name`), which query finds all employees whose **Name contains the letter 'i'** (case-insensitive)?",
        "options": [
            "SELECT Name FROM Employees WHERE Name MATCHES '%i%';",
            "SELECT Name FROM Employees WHERE Name LIKE '%i%';",
            "SELECT Name FROM Employees WHERE Name CONTAINS 'i';",
            "SELECT Name FROM Employees WHERE INSTR(Name, 'i') > 0;"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1178,
        "framework": "SQL",
        "question": "Which DML statement correctly **deletes the 'Finance'** entry from the **Departments** table (`DeptName`)?",
        "options": [
            "REMOVE FROM Departments WHERE DeptName = 'Finance';",
            "DROP ROW FROM Departments WHERE DeptName = 'Finance';",
            "DELETE FROM Departments WHERE DeptName = 'Finance';",
            "TRUNCATE TABLE Departments WHERE DeptName = 'Finance';"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1179,
        "framework": "SQL",
        "question": "Which DDL statement would enforce **Data Integrity** by ensuring that every `DeptID` value inserted into the **Employees** table must already exist in the **Departments** table?",
        "options": [
            "CREATE INDEX DeptID ON Employees;",
            "ADD CONSTRAINT DeptID_FK CHECK (DeptID IN (SELECT DeptID FROM Departments));",
            "ALTER TABLE Employees ADD CONSTRAINT Dept_FK FOREIGN KEY (DeptID) REFERENCES Departments(DeptID);",
            "CREATE TRIGGER DeptID_Check BEFORE INSERT ON Employees..."
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1180,
        "framework": "SQL",
        "question": "Given the **Projects** table (`ProjectID`, `ProjectName`, `Budget`, `ManagerID`), write a query to **count the number of projects** assigned to each distinct `ManagerID`.",
        "options": [
            "SELECT ManagerID, SUM(ProjectID) FROM Projects GROUP BY ManagerID;",
            "SELECT ManagerID, COUNT(*) FROM Projects GROUP BY ManagerID;",
            "SELECT COUNT(ProjectName) FROM Projects;",
            "SELECT DISTINCT ManagerID, COUNT(ProjectID) FROM Projects;"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1181,
        "framework": "SQL",
        "question": "Which DDL command correctly **creates an index** named `idx_manager_name` on the `ManagerName` column in the **Managers** table?",
        "options": [
            "CREATE TABLE INDEX idx_manager_name ON Managers (ManagerName);",
            "CREATE INDEX idx_manager_name ON Managers (ManagerName);",
            "ALTER TABLE Managers ADD INDEX idx_manager_name (ManagerName);",
            "CREATE MANAGERNAME INDEX ON Managers;"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1182,
        "framework": "SQL",
        "question": "Given the **Projects** table, which DML query correctly **inserts a new project** named 'New Campaign' with a Budget of 45000 and ManagerID 5?",
        "options": [
            "INSERT INTO Projects VALUES (NULL, 'New Campaign', 45000, 5);",
            "INSERT INTO Projects (ProjectName, Budget, ManagerID) VALUES ('New Campaign', 45000, 5);",
            "ADD PROJECT ('New Campaign', 45000, 5);",
            "INSERT PROJECT ('New Campaign', 45000, 5) INTO Projects;"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1183,
        "framework": "SQL",
        "question": "Using the **Projects** table (`ProjectName`, `Budget`), find the names of projects that have a **Budget greater than 50,000**.",
        "options": [
            "SELECT ProjectName FROM Projects WHERE Budget > 50000 ORDER BY Budget;",
            "SELECT ProjectName FROM Projects HAVING Budget > 50000;",
            "SELECT ProjectName FROM Projects WHERE Budget > 50000;",
            "SELECT ProjectName FROM Projects WHERE Budget = 50000+;"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1184,
        "framework": "SQL",
        "question": "Which join type is required to list **ALL Managers** and their assigned `ProjectName`s, including **Managers who currently have no projects**?",
        "options": [
            "INNER JOIN Managers M ON P.ManagerID = M.ManagerID",
            "LEFT JOIN Managers M ON P.ManagerID = M.ManagerID",
            "RIGHT JOIN Projects P ON P.ManagerID = M.ManagerID",
            "FULL OUTER JOIN Projects P ON P.ManagerID = M.ManagerID"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1185,
        "framework": "SQL",
        "question": "Given the **Managers** and **Projects** tables, find the **Department** where the **minimum project budget is less than 10,000**.",
        "options": [
            "SELECT Department FROM Managers M JOIN Projects P ON M.ManagerID = P.ManagerID WHERE MIN(Budget) < 10000 GROUP BY Department;",
            "SELECT Department FROM Managers M JOIN Projects P ON M.ManagerID = P.ManagerID GROUP BY Department HAVING MIN(Budget) < 10000;",
            "SELECT Department FROM Projects P WHERE Budget < 10000 GROUP BY Department;",
            "SELECT DISTINCT Department FROM Managers WHERE ManagerID IN (SELECT ManagerID FROM Projects WHERE Budget < 10000);"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1186,
        "framework": "SQL",
        "question": "Which DML statement correctly **deletes all projects** managed by the **'Sales'** Department?",
        "options": [
            "DELETE FROM Projects WHERE ManagerID IN (SELECT ManagerID FROM Managers WHERE Department = 'Sales');",
            "DROP Projects WHERE Department = 'Sales';",
            "TRUNCATE TABLE Projects WHERE ManagerID = (SELECT ManagerID FROM Managers WHERE Department = 'Sales');",
            "DELETE Projects WHERE Department = 'Sales';"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1187,
        "framework": "SQL",
        "question": "Using the **Managers** table (`ManagerName`), find the names of all managers whose name **ends with 'son'**.",
        "options": [
            "SELECT ManagerName FROM Managers WHERE ManagerName LIKE 'son%';",
            "SELECT ManagerName FROM Managers WHERE ManagerName = '%son';",
            "SELECT ManagerName FROM Managers WHERE ManagerName LIKE '%son';",
            "SELECT ManagerName FROM Managers WHERE ManagerName ENDS WITH 'son';"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1188,
        "framework": "SQL",
        "question": "Which query correctly uses the **EXISTS** operator to find the **ManagerName** of managers who have **at least one assigned project**?",
        "options": [
            "SELECT ManagerName FROM Managers M WHERE EXISTS (SELECT ProjectID FROM Projects P WHERE P.ManagerID = M.ManagerID);",
            "SELECT ManagerName FROM Managers M WHERE P.ManagerID IN (SELECT ManagerID FROM Projects P);",
            "SELECT ManagerName FROM Managers WHERE EXISTS Projects;",
            "SELECT ManagerName FROM Managers WHERE EXISTS (SELECT * FROM Projects);"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1189,
        "framework": "SQL",
        "question": "Which DDL command is used to **change the data type** of the `Budget` column in the **Projects** table from DECIMAL to INTEGER?",
        "options": [
            "ALTER TABLE Projects MODIFY Budget INTEGER;",
            "UPDATE Projects SET Budget TYPE INTEGER;",
            "ALTER COLUMN Budget TYPE INTEGER ON Projects;",
            "CHANGE TABLE Projects BUDGET TO INTEGER;"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1190,
        "framework": "SQL",
        "question": "Which set operator combines all distinct `ProjectName`s from the **Projects** table and all distinct `ManagerName`s from the **Managers** table into a single result column?",
        "options": [
            "SELECT ProjectName FROM Projects INTERSECT SELECT ManagerName FROM Managers;",
            "SELECT ProjectName FROM Projects JOIN SELECT ManagerName FROM Managers;",
            "SELECT ProjectName FROM Projects UNION SELECT ManagerName FROM Managers;",
            "SELECT ProjectName FROM Projects MERGE SELECT ManagerName FROM Managers;"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1191,
        "framework": "SQL",
        "question": "Find the **ManagerName** of managers who currently have **NO assigned projects** (i.e., their `ManagerID` is not present in the `Projects` table).",
        "options": [
            "SELECT ManagerName FROM Managers M WHERE M.ManagerID = (SELECT ManagerID FROM Projects WHERE ProjectID IS NULL);",
            "SELECT ManagerName FROM Managers WHERE ManagerID NOT IN (SELECT ManagerID FROM Projects);",
            "SELECT ManagerName FROM Managers M WHERE NOT EXISTS (SELECT * FROM Projects P WHERE P.ManagerID = M.ManagerID AND P.ProjectID IS NOT NULL);",
            "SELECT ManagerName FROM Managers M LEFT JOIN Projects P ON M.ManagerID = P.ManagerID WHERE P.ManagerID IS NULL;"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1192,
        "framework": "SQL",
        "question": "Using **Managers** and **Projects**, calculate the **total budget** managed by each **Department**.",
        "options": [
            "SELECT Department, SUM(Budget) FROM Managers M, Projects P GROUP BY Department;",
            "SELECT Department, SUM(Budget) FROM Managers M JOIN Projects P ON M.ManagerID = P.ManagerID GROUP BY Department;",
            "SELECT Department, Budget FROM Managers GROUP BY Department;",
            "SELECT Department, SUM(Budget) FROM Projects P GROUP BY Department;"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1193,
        "framework": "SQL",
        "question": "Which query assigns a `BudgetCategory` of **'High'** if `Budget` is over 100,000, and **'Low'** otherwise, using the **Projects** table?",
        "options": [
            "SELECT ProjectName, IF(Budget > 100000, 'High', 'Low') AS BudgetCategory FROM Projects;",
            "SELECT ProjectName, CASE WHEN Budget > 100000 THEN 'High' ELSE 'Low' END AS BudgetCategory FROM Projects;",
            "SELECT ProjectName, BudgetCategory = 'High' WHERE Budget > 100000 FROM Projects;",
            "SELECT ProjectName, COND(Budget > 100000, 'High', 'Low') FROM Projects;"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1194,
        "framework": "SQL",
        "question": "Which DDL command correctly **removes the entire Managers table** from the database?",
        "options": [
            "DELETE TABLE Managers;",
            "TRUNCATE TABLE Managers;",
            "REMOVE TABLE Managers;",
            "DROP TABLE Managers;"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 1195,
        "framework": "SQL",
        "question": "Using **Projects** and **Managers**, find the `ProjectName` and the `ManagerName`. If the `ManagerID` in the Projects table is **NULL**, return the name **'Unassigned'** instead of NULL for the manager.",
        "options": [
            "SELECT P.ProjectName, ISNULL(M.ManagerName, 'Unassigned') FROM Projects P LEFT JOIN Managers M ON P.ManagerID = M.ManagerID;",
            "SELECT P.ProjectName, COALESCE(M.ManagerName, 'Unassigned') FROM Projects P LEFT JOIN Managers M ON P.ManagerID = M.ManagerID;",
            "SELECT P.ProjectName, NVL(M.ManagerName, 'Unassigned') FROM Projects P JOIN Managers M ON P.ManagerID = M.ManagerID;",
            "SELECT P.ProjectName, CASE WHEN M.ManagerName IS NULL THEN 'Unassigned' ELSE M.ManagerName END FROM Projects P INNER JOIN Managers M ON P.ManagerID = M.ManagerID;"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1196,
        "framework": "SQL",
        "question": "Using **Managers** and **Projects**, find projects managed by the **'HR' Department** OR projects with a **Budget under 20,000**.",
        "options": [
            "SELECT P.ProjectName FROM Projects P JOIN Managers M ON P.ManagerID = M.ManagerID WHERE M.Department = 'HR' AND P.Budget < 20000;",
            "SELECT P.ProjectName FROM Projects P LEFT JOIN Managers M ON P.ManagerID = M.ManagerID WHERE M.Department = 'HR' OR P.Budget < 20000;",
            "SELECT ProjectName FROM Projects WHERE Budget < 20000 OR Department = 'HR';",
            "SELECT P.ProjectName FROM Projects P JOIN Managers M ON P.ManagerID = M.ManagerID WHERE M.Department = 'HR' OR P.Budget < 20000;"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 1197,
        "framework": "SQL",
        "question": "Using **Managers** and **Projects**, find the **number of unique Departments** that currently manage at least one project.",
        "options": [
            "SELECT COUNT(DISTINCT Department) FROM Managers;",
            "SELECT COUNT(Department) FROM Managers JOIN Projects ON Managers.ManagerID = Projects.ManagerID;",
            "SELECT COUNT(DISTINCT Department) FROM Managers M JOIN Projects P ON M.ManagerID = P.ManagerID;",
            "SELECT COUNT(Department) FROM Managers WHERE ManagerID IN (SELECT DISTINCT ManagerID FROM Projects);"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1198,
        "framework": "SQL",
        "question": "Find the **ProjectName** with the **highest Budget** using only the **Projects** table.",
        "options": [
            "SELECT ProjectName FROM Projects WHERE Budget = MAX(Budget);",
            "SELECT ProjectName FROM Projects ORDER BY Budget DESC LIMIT 1;",
            "SELECT ProjectName FROM Projects HAVING MAX(Budget);",
            "SELECT TOP 1 ProjectName FROM Projects;"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1199,
        "framework": "SQL",
        "question": "Which DDL command correctly creates a **VIEW** named `Project_Managers` that combines `ProjectName` (from Projects) and `ManagerName` (from Managers)?",
        "options": [
            "CREATE VIEW Project_Managers AS SELECT ProjectName, ManagerName FROM Projects JOIN Managers ON Projects.ManagerID = Managers.ManagerID;",
            "CREATE VIEW Project_Managers (ProjectName, ManagerName) AS SELECT * FROM Projects, Managers;",
            "CREATE TABLE VIEW Project_Managers AS SELECT ProjectName, ManagerName FROM Projects, Managers;",
            "CREATE VIEW Project_Managers AS JOIN Projects, Managers;"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1200,
        "framework": "FastAPI",
        "question": "What is the default response serialization format in FastAPI?",
        "options": [
            "XML",
            "YAML",
            "JSON",
            "Plain text"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1201,
        "framework": "FastAPI",
        "question": "Which class is used to define response models?",
        "options": [
            "ResponseModel",
            "Schema",
            "Pydantic BaseModel",
            "Serializer"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1202,
        "framework": "FastAPI",
        "question": "How do you validate path parameters?",
        "options": [
            "Using Pydantic models",
            "Using function parameters with type hints",
            "Using request.path()",
            "Using decorators only"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1203,
        "framework": "FastAPI",
        "question": "Which parameter type is used for optional query params?",
        "options": [
            "Optional[T]",
            "Maybe[T]",
            "Nullable[T]",
            "QueryOptional[T]"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1204,
        "framework": "FastAPI",
        "question": "Which object gives access to request metadata?",
        "options": [
            "Response",
            "Request",
            "Session",
            "Context"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1205,
        "framework": "FastAPI",
        "question": "What is the purpose of response_model?",
        "options": [
            "Validate outgoing data",
            "Validate incoming requests",
            "Generate database schema",
            "Cache responses"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1206,
        "framework": "FastAPI",
        "question": "How do you disable automatic docs?",
        "options": [
            "Remove FastAPI",
            "Set docs_url=None",
            "Delete OpenAPI",
            "Disable Pydantic"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1207,
        "framework": "FastAPI",
        "question": "Which decorator is used for dependency injection?",
        "options": [
            "@inject",
            "@dependency",
            "@Depends",
            "Depends()"
        ],
        "correctIndex": 3,
        "explanation": ""
    },
    {
        "id": 1208,
        "framework": "FastAPI",
        "question": "How do you declare a header parameter?",
        "options": [
            "Using Header()",
            "Using Request.headers",
            "Using @header decorator",
            "Using Headers class"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1209,
        "framework": "FastAPI",
        "question": "What happens if validation fails?",
        "options": [
            "500 Internal Server Error",
            "422 Unprocessable Entity",
            "400 Bad Request",
            "403 Forbidden"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1210,
        "framework": "FastAPI",
        "question": "Which middleware interface does FastAPI use?",
        "options": [
            "Django middleware",
            "WSGI middleware",
            "Starlette middleware",
            "Custom Python middleware"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1211,
        "framework": "FastAPI",
        "question": "How do you add middleware?",
        "options": [
            "app.use()",
            "app.add_middleware()",
            "app.middleware()",
            "app.add_filter()"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1212,
        "framework": "FastAPI",
        "question": "Which lifespan event replaces startup/shutdown?",
        "options": [
            "@app.on_event",
            "lifespan context manager",
            "init()",
            "start()"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1213,
        "framework": "FastAPI",
        "question": "How do you return a custom Response type?",
        "options": [
            "Return dict only",
            "Return Response instance",
            "Use print()",
            "Raise Exception"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1214,
        "framework": "FastAPI",
        "question": "Which class is used for background tasks?",
        "options": [
            "AsyncTask",
            "BackgroundTask",
            "BackgroundTasks",
            "TaskManager"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1215,
        "framework": "FastAPI",
        "question": "How do you enable CORS?",
        "options": [
            "Using @EnableCORS",
            "Using CORSMiddleware",
            "Using cors.json",
            "Using headers manually"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1216,
        "framework": "FastAPI",
        "question": "What is APIRouter used for?",
        "options": [
            "Database routing",
            "Organizing routes into modules",
            "Request redirection",
            "Load balancing"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1217,
        "framework": "FastAPI",
        "question": "Which command generates OpenAPI schema?",
        "options": [
            "fastapi openapi",
            "GET /openapi.json",
            "uvicorn openapi",
            "app.schema()"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1218,
        "framework": "FastAPI",
        "question": "How do you secure endpoints?",
        "options": [
            "Using OAuth2, JWT, dependencies",
            "Using only HTTPS",
            "Using decorators only",
            "Using firewall rules"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1219,
        "framework": "FastAPI",
        "question": "Which exception is used to return HTTP errors?",
        "options": [
            "ValueError",
            "HTTPError",
            "HTTPException",
            "FastAPIError"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1220,
        "framework": "FastAPI",
        "question": "What is FastAPI primarily used for?",
        "options": [
            "Building high-performance REST APIs",
            "Creating desktop GUI applications",
            "Managing databases directly",
            "Rendering frontend UI"
        ],
        "correctIndex": 0,
        "explanation": ""
    },
    {
        "id": 1221,
        "framework": "FastAPI",
        "question": "Which feature makes FastAPI very fast?",
        "options": [
            "Thread-based execution only",
            "Use of Starlette and Pydantic",
            "Manual request parsing",
            "Built-in database engine"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1222,
        "framework": "FastAPI",
        "question": "Which decorator is used to define a GET endpoint?",
        "options": [
            "@app.fetch()",
            "@app.route()",
            "@app.get()",
            "@app.read()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1223,
        "framework": "FastAPI",
        "question": "What is Pydantic used for in FastAPI?",
        "options": [
            "Database ORM",
            "Request/response data validation",
            "Authentication only",
            "Async execution"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1224,
        "framework": "FastAPI",
        "question": "What does FastAPI automatically generate?",
        "options": [
            "Database schemas",
            "OpenAPI/Swagger documentation",
            "Frontend UI",
            "Docker images"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1225,
        "framework": "FastAPI",
        "question": "Which Python version is required for FastAPI?",
        "options": [
            "Python 2.7+",
            "Python 3.6+",
            "Python 3.7+",
            "Python 3.10+ only"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1226,
        "framework": "FastAPI",
        "question": "Which server is commonly used to run FastAPI?",
        "options": [
            "Gunicorn only",
            "Uvicorn",
            "Apache",
            "Tomcat"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1227,
        "framework": "FastAPI",
        "question": "How do you declare a request body model?",
        "options": [
            "Using @dataclass",
            "Using Pydantic BaseModel",
            "Using dictionary only",
            "Using SQLAlchemy model"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1228,
        "framework": "FastAPI",
        "question": "What keyword is used to declare async endpoints?",
        "options": [
            "thread",
            "await",
            "async",
            "parallel"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1229,
        "framework": "FastAPI",
        "question": "How are query parameters declared?",
        "options": [
            "Inside JSON body",
            "As function parameters",
            "Using request.query",
            "Using headers only"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1230,
        "framework": "FastAPI",
        "question": "Which decorator handles POST requests?",
        "options": [
            "@app.send()",
            "@app.insert()",
            "@app.post()",
            "@app.create()"
        ],
        "correctIndex": 2,
        "explanation": ""
    },
    {
        "id": 1231,
        "framework": "FastAPI",
        "question": "What does dependency injection in FastAPI use?",
        "options": [
            "@Autowired",
            "Depends()",
            "Inject()",
            "Use()"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1232,
        "framework": "FastAPI",
        "question": "Which status code represents successful creation?",
        "options": [
            "200",
            "201",
            "204",
            "400"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1233,
        "framework": "FastAPI",
        "question": "How do you return custom HTTP status codes?",
        "options": [
            "Return tuple (data, code)",
            "Use HTTPException or Response",
            "Raise ValueError",
            "Use print statement"
        ],
        "correctIndex": 1,
        "explanation": ""
    },
    {
        "id": 1234,
        "framework": "FastAPI",
        "question": "Which command starts a FastAPI app with reload?",
        "options": [
            "python main.py",
            "fastapi run",
            "uvicorn main:app --reload",
            "pip run fastapi"
        ],
        "correctIndex": 2,
        "explanation": ""
    }
]