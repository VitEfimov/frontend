export const cheatsheetData = {
    "Python": [
        {
            "topic": "Class Definition",
            "code": "// Define a blueprint for objects\nclass Person:\n    // Initialize instance attributes\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    // Instance method\n    def greet(self):\n        print(f'Hello, {self.name}')"
        },
        {
            "topic": "Creating Object",
            "code": "// Instantiate the class\np = Person('Alice', 25)\n// Call the instance method\np.greet()"
        },
        {
            "topic": "Instance vs Class Variables",
            "code": "class Dog:\n    species = 'Canis' // Class variable (shared by all instances)\n    def __init__(self, name):\n        self.name = name // Instance variable (unique to each object)\n\nd1 = Dog('Rex')\nd2 = Dog('Fido')\nprint(d1.species, d2.species)"
        },
        {
            "topic": "Inheritance",
            "code": "// Base class\nclass Animal:\n    def speak(self):\n        print('Animal sound')\n\n// Child class inheriting from Animal\nclass Dog(Animal):\n    def speak(self):\n        print('Bark') // Overriding method\n\nd = Dog()\nd.speak()"
        },
        {
            "topic": "Multiple Inheritance",
            "code": "class A:\n    def show(self): print('A')\nclass B:\n    def show(self): print('B')\n// Inheriting from multiple classes\nclass C(A,B): pass\nc = C()\nc.show() // Resolution follows MRO"
        },
        {
            "topic": "super()",
            "code": "class A:\n    def __init__(self): print('A')\nclass B(A):\n    def __init__(self):\n        super().__init__() // Delegate to parent constructor\n        print('B')\nB()"
        },
        {
            "topic": "Method Overriding",
            "code": "class Parent:\n    def greet(self): print('Hello Parent')\nclass Child(Parent):\n    // Replace parent behavior\n    def greet(self): print('Hello Child')\nChild().greet()"
        },
        {
            "topic": "Private and Protected",
            "code": "class MyClass:\n    _protected = 'Protected' // Convention only\n    __private = 'Private'    // Name mangling applied\n\nobj = MyClass()\nprint(obj._protected)\n# print(obj.__private) // This would throw AttributeError"
        },
        {
            "topic": "Class Methods",
            "code": "class Person:\n    count = 0\n    @classmethod\n    def increase_count(cls):\n        cls.count += 1 // Work with class-level attributes\nPerson.increase_count()\nprint(Person.count)"
        },
        {
            "topic": "Static Methods",
            "code": "class Math:\n    @staticmethod\n    def add(a,b):\n        return a+b // No access to 'self' or 'cls'\nprint(Math.add(2,3))"
        },
        {
            "topic": "Properties",
            "code": "class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    @property // Getter syntax\n    def radius(self):\n        return self._radius\n    @radius.setter // Setter syntax\n    def radius(self, r):\n        self._radius = r\nc = Circle(5)\nc.radius = 10\nprint(c.radius)"
        },
        {
            "topic": "Magic / Dunder Methods",
            "code": "class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    // Overload the + operator\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    // Default string representation\n    def __repr__(self):\n        return f'Vector({self.x}, {self.y})'\nv1 = Vector(1,2)\nv2 = Vector(3,4)\nprint(v1 + v2)"
        },
        {
            "topic": "Operator Overloading",
            "code": "class Number:\n    def __init__(self, value): self.value = value\n    // Overload the * operator\n    def __mul__(self, other): return Number(self.value * other.value)\n    def __repr__(self): return str(self.value)\nprint(Number(2) * Number(3))"
        },
        {
            "topic": "Decorators (Function)",
            "code": "// Wrap a function with additional logic\ndef decorator(func):\n    def wrapper(*args, **kwargs):\n        print('Before call')\n        func(*args, **kwargs)\n        print('After call')\n    return wrapper\n\n@decorator\ndef hello():\n    print('Hello World')\nhello()"
        },
        {
            "topic": "Decorators (Class)",
            "code": "// Modify class properties upon definition\ndef class_decorator(cls):\n    cls.extra = 'Added data'\n    return cls\n\n@class_decorator\nclass MyClass: pass\nprint(MyClass.extra)"
        },
        {
            "topic": "Abstract Base Classes",
            "code": "from abc import ABC, abstractmethod\n// Define an interface/contract\nclass Shape(ABC):\n    @abstractmethod\n    def area(self): pass\n\nclass Square(Shape):\n    def __init__(self, s): self.s = s\n    // Subclasses must implement the abstract method\n    def area(self): return self.s*self.s\nprint(Square(5).area())"
        },
        {
            "topic": "Metaclasses",
            "code": "// Logic for creating classes themselves\nclass Meta(type):\n    def __new__(cls, name, bases, dct):\n        dct['added'] = lambda self: 'Injected method'\n        return super().__new__(cls, name, bases, dct)\n\nclass MyClass(metaclass=Meta): pass\nprint(MyClass().added())"
        },
        {
            "topic": "Slots",
            "code": "class MyClass:\n    // Optimize memory by limiting attribute names\n    __slots__ = ['x','y']\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\nobj = MyClass(1,2)"
        },
        {
            "topic": "Singleton Pattern",
            "code": "class Singleton:\n    _instance = None\n    // Control the creation of the object instance\n    def __new__(cls):\n        if not cls._instance:\n            cls._instance = super().__new__(cls)\n        return cls._instance\ns1 = Singleton()\ns2 = Singleton()\nprint(s1 is s2) // Always true"
        },
        {
            "topic": "Dynamic Attributes",
            "code": "class A: pass\na = A()\n// Modify object structure at runtime\na.x = 20\nprint(a.x)"
        },
        {
            "topic": "Introspection",
            "code": "class A:\n    def method(self): pass\n// Examine object metadata at runtime\nprint(dir(A))\nprint(hasattr(A,'method'))"
        },
        {
            "topic": "Context Managers in Classes",
            "code": "class MyCM:\n    // Setup logic\n    def __enter__(self): print('Resource Acquired'); return self\n    // Teardown logic\n    def __exit__(self, exc_type, exc_val, exc_tb): print('Resource Released')\nwith MyCM() as cm: \n    print('Doing work...')"
        },
        {
            "topic": "MRO (Method Resolution Order)",
            "code": "// Path taken to find attributes in inheritance chains\nclass A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B,C): pass\nprint(D.__mro__)"
        },
        {
            "topic": "Callable Objects",
            "code": "class Adder:\n    // Define object behavior when called like a function\n    def __call__(self, a,b): return a+b\nadd = Adder()\nprint(add(2,3))"
        },
        {
            "topic": "Property with Validation",
            "code": "class Person:\n    def __init__(self, age): self._age = age\n    @property\n    def age(self): return self._age\n    @age.setter\n    def age(self, value):\n        // Enforce logic during assignment\n        if value<0: raise ValueError('Age cannot be negative')\n        self._age = value\np = Person(10)\np.age = 20"
        }
    ],
    "JavaScript": [
        {
            "topic": "Variables",
            "code": "let x = 10;    // Block-scoped variable\nconst y = 20;  // Constant value\nvar z = 30;    // Function-scoped (classic)"
        },
        {
            "topic": "Data Types",
            "code": "let num = 10;        // Number\nlet str = 'JS';      // String\nlet bool = true;     // Boolean\nlet arr = [1,2,3];   // Array\nlet obj = {a:1};     // Object\nlet func = () => {}; // Arrow function\nlet n = null;        // Intentional empty value\nlet u = undefined;   // Declared but not assigned"
        },
        {
            "topic": "Type Conversion",
            "code": "let x = '10';\nlet y = Number(x);   // To number\nlet z = String(123); // To string\nlet b = Boolean(0);  // To boolean (0 is falsy)"
        },
        {
            "topic": "Operators",
            "code": "let sum = 10 + 20;    // Add\nlet diff = 20 - 10;   // Subtract\nlet prod = 2 * 3;     // Multiply\nlet div = 10 / 2;     // Divide\nlet mod = 10 % 3;     // Remainder\nlet exp = 2 ** 3;     // Power (2 cubed)"
        },
        {
            "topic": "Control Flow",
            "code": "// Conditional branching\nif(x>5){console.log('>5');} else {console.log('<=5');}\n\n// Standard loop\nfor(let i=0;i<5;i++){console.log(i);}\n\n// While loops\nwhile(x>0){x--;}\ndo { x++; } while(x<5);"
        },
        {
            "topic": "Functions",
            "code": "// Standard function declaration\nfunction add(a,b){ return a+b; }\n// Functional expression\nconst multiply = (a,b) => a*b;"
        },
        {
            "topic": "Arrow Functions",
            "code": "// Concise syntax for small functions\nconst square = x => x*x;\nconst sum = (a,b) => a+b;"
        },
        {
            "topic": "Objects",
            "code": "// Data collections using key-value pairs\nlet obj = {name:'JS', age:25};\nconsole.log(obj.name);\nobj.height = 180; // Dynamic property addition"
        },
        {
            "topic": "Destructuring",
            "code": "// Extract values into specific variables\nconst {name, age} = obj;\nconst [a,b] = [1,2];"
        },
        {
            "topic": "Spread and Rest",
            "code": "// Spread: Unpack elements\nlet arr1=[1,2]; \nlet arr2=[...arr1,3,4]; \n\n// Rest: Collect items into an array\nfunction sum(...nums){ \n  return nums.reduce((a,b)=>a+b,0); \n}"
        },
        {
            "topic": "Classes",
            "code": "// Template for creating objects with shared methods\nclass Person {\n  constructor(name, age){ this.name=name; this.age=age; }\n  greet(){ console.log(`Hello, ${this.name}`); }\n}\nconst p = new Person('Alice',25); p.greet();"
        },
        {
            "topic": "Inheritance",
            "code": "// Subclassing for reuse\nclass Animal { \n  speak(){ console.log('Animal sound'); } \n}\nclass Dog extends Animal { \n  speak(){ console.log('Bark'); } \n}\nnew Dog().speak();"
        },
        {
            "topic": "Static Methods",
            "code": "// Belong to the class, not instance\nclass MathUtil {\n  static add(a,b){ return a+b; }\n}\nconsole.log(MathUtil.add(2,3));"
        },
        {
            "topic": "Getters and Setters",
            "code": "class Circle {\n  constructor(radius){ this._radius = radius; }\n  get radius(){ return this._radius; }     // Public view\n  set radius(r){ this._radius = r; }      // Public assignment with control\n}\nlet c = new Circle(5); c.radius = 10;"
        },
        {
            "topic": "Template Literals",
            "code": "// Strings with embedded expressions using backticks\nlet name='JS'; \nconsole.log(`Hello ${name}`);"
        },
        {
            "topic": "Promises",
            "code": "// Asynchronous operation container\nlet p = new Promise((resolve,reject)=>{ \n  resolve('Success value'); \n});\np.then(val => console.log(val));"
        },
        {
            "topic": "Async/Await",
            "code": "// Syntactic sugar for handling promises sequentially\nasync function main(){\n  let res = await Promise.resolve('Hello World'); \n  console.log(res); \n}\nmain();"
        },
        {
            "topic": "Error Handling",
            "code": "// Trap and handle logic failures\ntry{ \n  throw new Error('Oops'); \n} catch(e){ \n  console.log(e.message); \n} finally{ \n  console.log('Final cleanup'); \n}"
        },
        {
            "topic": "Map",
            "code": "// Collection of keyed data items (retains insertion order)\nlet m = new Map(); \nm.set('id', 123); \nconsole.log(m.get('id'));"
        },
        {
            "topic": "Set",
            "code": "// Collection of unique values (duplicates removed)\nlet s = new Set([1,2,2,3]); \nconsole.log(s); // Set {1, 2, 3}"
        },
        {
            "topic": "Array Methods",
            "code": "[1,2,3].forEach(x=>console.log(x));   // Loop\n[1,2,3].map(x=>x*2);                  // Transform\n[1,2,3].filter(x=>x>1);               // Filter\n[1,2,3].reduce((a,b)=>a+b,0);         // Aggregate"
        },
        {
            "topic": "Destructuring Function Params",
            "code": "// Extract values directly in function signature\nfunction greet({name,age}){ \n  console.log(`Hello ${name}, ${age}`); \n}\ngreet({name:'Alice',age:25});"
        },
        {
            "topic": "Modules - ES6",
            "code": "// Standard modern module syntax\nexport const pi=3.14;\nimport {pi} from './math.js';"
        },
        {
            "topic": "Modules - CommonJS",
            "code": "// Node.js classic module syntax\nmodule.exports = {pi:3.14};\nconst m = require('./module');"
        },
        {
            "topic": "Optional Chaining",
            "code": "// Short-circuiting for deep null properties\nlet obj = {a:{b:2}};\nconsole.log(obj?.a?.b);\nconsole.log(obj?.nonExistent?.val); // returns undefined instead of error"
        },
        {
            "topic": "Nullish Coalescing",
            "code": "// Provide fallback only for null/undefined\nlet x = null ?? 'Default Value'; \nconsole.log(x);"
        },
        {
            "topic": "Type Checking",
            "code": "// Identify data types at runtime\nconsole.log(typeof 10);\nconsole.log(Array.isArray([1,2])); // Special check for arrays"
        },
        {
            "topic": "Event Loop",
            "code": "// JS is single threaded but async\nconsole.log('First');\nsetTimeout(()=>console.log('Last (Async)'), 0);\nconsole.log('Second');"
        },
        {
            "topic": "DOM Manipulation",
            "code": "// Interacting with HTML\nconst el = document.getElementById('demo'); \nel.innerHTML = '<b>Updated</b>';"
        },
        {
            "topic": "Fetch API",
            "code": "// Native way to perform network requests\nfetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data));"
        },
        {
            "topic": "Destructuring Arrays",
            "code": "// Unpack array elements\nconst arr = [1,2,3]; \nconst [a, b, ...rest] = arr;"
        },
        {
            "topic": "Rest and Spread in Objects",
            "code": "// Functional cloning and merging\nconst obj1 = {a:1}; \nconst obj2 = {...obj1, b:2}; // Clone obj1 and add b"
        },
        {
            "topic": "SetTimeout and SetInterval",
            "code": "// Timed execution\nsetTimeout(()=>console.log('Once after 1s'), 1000);\nlet id = setInterval(()=>console.log('Every 1s'), 1000);\nclearInterval(id); // Stop the interval"
        },
        {
            "topic": "JSON Methods",
            "code": "// Serialization and Parsing\nlet str = JSON.stringify({a:1}); // To JSON string\nlet obj = JSON.parse(str);        // To JS object"
        },
        {
            "topic": "Closures",
            "code": "// A function that remembers its outer scope\nfunction counter(x){\n  return function(y){ return x + y; };\n}\nlet addFive = counter(5);\nconsole.log(addFive(2));"
        },
        {
            "topic": "Currying",
            "code": "// Transforming a function with N params into N functions with 1 param\nconst add = a => b => a+b;\nconsole.log(add(2)(3));"
        },
        {
            "topic": "Prototype",
            "code": "// The mechanism for JS inheritance\nfunction Person(name){ this.name=name; }\nPerson.prototype.greet = function(){ console.log(this.name); };"
        },
        {
            "topic": "Classes & Prototype",
            "code": "// Modern 'class' is just prototype sugar\nclass Animal{ speak(){ /* ... */ } }"
        },
        {
            "topic": "Symbol",
            "code": "// Unique, immutable primitive for private keys\nconst sym = Symbol('secret');"
        },
        {
            "topic": "Iterators & Generators",
            "code": "// Custom iteration using yield\nfunction* gen(){ yield 1; yield 2; }\nlet g = gen(); console.log(g.next().value);"
        },
        {
            "topic": "Promises All / Race",
            "code": "// Manage multiple async tasks\nPromise.all([p1, p2]); // Waits for all to finish\nPromise.race([p1, p2]); // Returns the first one to finish"
        },
        {
            "topic": "Error Throwing",
            "code": "// Stop execution with a message\nthrow new Error('Critical failure');"
        },
        {
            "topic": "Async Iterators",
            "code": "// Iterate over sources that return promises\nfor await (let chunk of responseBody){ /* ... */ }"
        },
        {
            "topic": "Modules Dynamic Import",
            "code": "// Lazy-load modules only when needed\nimport('./utils.js').then(mod => mod.init());"
        }
    ],
    "SQL": [
        {
            "topic": "Select Statement",
            "code": "// Retrieve data from a table\nSELECT * FROM employees;\n// Filter specific columns and rows\nSELECT name, salary FROM employees WHERE salary > 50000;\n\n// Examples from implementation:\nSELECT first_name, last_name, salary FROM employees;\nSELECT first_name, last_name, salary FROM employees WHERE first_name='David' AND last_name='Austin';"
        },
        {
            "topic": "Distinct",
            "code": "// Remove duplicate results from the view\nSELECT DISTINCT department FROM employees;"
        },
        {
            "topic": "Where Clause",
            "code": "// Filter data before any calculation\nSELECT * FROM employees WHERE age >= 30 AND department = 'Sales';\n\n// Examples from implementation:\nSELECT * FROM employees WHERE salary > 6000 AND department_id = 60;\nSELECT * FROM employees WHERE salary BETWEEN 3000 AND 7000;\nSELECT * FROM employees WHERE job_id IN ('IT_PROG', 'MK_MAN', 'SA_REP');\nSELECT * FROM employees WHERE department_id IS NULL;"
        },
        {
            "topic": "Order By",
            "code": "// Sort the results (Default is ASC)\nSELECT * FROM employees ORDER BY salary DESC, name ASC;\n\n// Examples from implementation:\nSELECT * FROM employees WHERE employee_id < 120 ORDER BY salary DESC;\nSELECT * FROM employees ORDER BY first_name ASC, last_name DESC;"
        },
        {
            "topic": "Group By",
            "code": "// Aggregate rows based on a column\nSELECT department, COUNT(*) FROM employees GROUP BY department;\n\n// Examples from implementation:\nSELECT department_id, SUM(salary), COUNT(*), MAX(salary), MIN(salary), ROUND(AVG(salary)) \nFROM employees \nWHERE department_id IS NOT NULL \nGROUP BY department_id \nORDER BY MAX(salary), MIN(salary) DESC;"
        },
        {
            "topic": "Having Clause",
            "code": "// Filter aggregated results (Post-GROUP BY)\nSELECT department, AVG(salary) FROM employees \nGROUP BY department \nHAVING AVG(salary) > 50000;"
        },
        {
            "topic": "Joins - Inner Join",
            "code": "// Matching records from both tables\nSELECT e.name, d.dept_name \nFROM employees e \nINNER JOIN departments d ON e.dept_id = d.id;"
        },
        {
            "topic": "Left Join",
            "code": "// All records from left table + matches from right\nSELECT e.name, d.dept_name \nFROM employees e \nLEFT JOIN departments d ON e.dept_id = d.id;"
        },
        {
            "topic": "Right Join",
            "code": "// All records from right table + matches from left\nSELECT e.name, d.dept_name \nFROM employees e \nRIGHT JOIN departments d ON e.dept_id = d.id;"
        },
        {
            "topic": "Full Outer Join",
            "code": "// Combine all records from both tables (matches + non-matches)\nSELECT e.name, d.dept_name \nFROM employees e \nFULL OUTER JOIN departments d ON e.dept_id = d.id;"
        },
        {
            "topic": "Subqueries",
            "code": "// Use one query result inside another\nSELECT name FROM employees \nWHERE salary > (SELECT AVG(salary) FROM employees);"
        },
        {
            "topic": "Insert Statement",
            "code": "// Add new rows to a table\nINSERT INTO employees(name, age, department) \nVALUES ('Alice', 30, 'IT');"
        },
        {
            "topic": "Update Statement",
            "code": "// Modify existing data (Always use a WHERE clause!)\nUPDATE employees SET salary = salary * 1.1 \nWHERE department = 'Sales';"
        },
        {
            "topic": "Delete Statement",
            "code": "// Remove rows from a table\nDELETE FROM employees WHERE age < 25;"
        },
        {
            "topic": "Create Table",
            "code": "// Define the blueprint for data storage\nCREATE TABLE employees (\n  id INT PRIMARY KEY,\n  name VARCHAR(50),\n  salary DECIMAL(10,2),\n  department VARCHAR(50)\n);"
        },
        {
            "topic": "Alter Table",
            "code": "// Modify table structure (Add/Rename/Drop columns)\nALTER TABLE employees ADD COLUMN hire_date DATE;"
        },
        {
            "topic": "Drop Table",
            "code": "// Permanently delete a table and its data\nDROP TABLE employees;"
        },
        {
            "topic": "Indexes",
            "code": "// Improve query performance for large datasets\nCREATE INDEX idx_name ON employees(name);"
        },
        {
            "topic": "Views",
            "code": "// Save a complex query as a virtual table\nCREATE VIEW high_earners AS \nSELECT name, salary FROM employees WHERE salary > 80000;"
        },
        {
            "topic": "Transactions",
            "code": "// Ensure ACID compliance for multi-step updates\nBEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT; // Save or ROLLBACK to cancel"
        }
    ],
    "FastAPI": [
        {
            "topic": "Install FastAPI",
            "code": "// Install framework and ASGI server\npip install fastapi uvicorn"
        },
        {
            "topic": "Basic App",
            "code": "from fastapi import FastAPI\n// Create app instance\napp = FastAPI()\n\n// Define a GET endpoint\n@app.get('/')\ndef read_root():\n    return {'message': 'Hello API'}"
        },
        {
            "topic": "Run Server",
            "code": "// Launch with hot-reloading for development\nuvicorn main:app --reload"
        },
        {
            "topic": "Path Parameters",
            "code": "// Capture data from the URL path\n@app.get('/items/{item_id}')\ndef read_item(item_id: int):\n    return {'item_id': item_id}"
        },
        {
            "topic": "Query Parameters",
            "code": "// Capture data from the URL query string (?skip=0&limit=10)\n@app.get('/items/')\ndef read_items(skip: int = 0, limit: int = 10):\n    return {'skip': skip, 'limit': limit}"
        },
        {
            "topic": "Request Body",
            "code": "from pydantic import BaseModel\n\n// Define data model for validation\nclass Item(BaseModel):\n    name: str\n    price: float\n\n// Recive complex data via POST\n@app.post('/items/')\ndef create_item(item: Item):\n    return item"
        },
        {
            "topic": "Response Model",
            "code": "// Enforce return data structure and filtering\n@app.get('/items/{id}', response_model=Item)\ndef read_item(id: int):\n    return {'name': 'phone', 'price': 500.0, 'internal_id': 1} // internal_id is filtered out"
        },
        {
            "topic": "Dependencies",
            "code": "from fastapi import Depends\n\n// Reusable logic injected into endpoints\ndef common_params(q: str = None):\n    return q\n\n@app.get('/search/')\ndef search(q: str = Depends(common_params)):\n    return {'query': q}"
        },
        {
            "topic": "Middleware",
            "code": "// Intercept every request before it reaches handler\n@app.middleware('http')\nasync def log_time(request, call_next):\n    response = await call_next(request)\n    print('End request')\n    return response"
        },
        {
            "topic": "Background Tasks",
            "code": "// Run heavy logic AFTER returning response to client\nfrom fastapi import BackgroundTasks\n\n@app.post('/process/')\ndef heavy_work(background_tasks: BackgroundTasks):\n    background_tasks.add_task(send_email_logic)\n    return {'status': 'Work scheduled'}"
        },
        {
            "topic": "Path Operation with Tags",
            "code": "// Organize the automatic Swagger UI documentation\n@app.get('/users/', tags=['User Management'])\ndef read_users():\n    return []"
        }
    ],
    "Spring Boot": [
        {
            "topic": "Create Spring Boot App",
            "code": "// Fast start via Initializr CLI\nspring init --dependencies=web,jpa,mysql my-project"
        },
        {
            "topic": "Main Application",
            "code": "// Main entry point that launches the Spring Context\n@SpringBootApplication\npublic class MyApp {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApp.class, args);\n    }\n}"
        },
        {
            "topic": "Rest Controller",
            "code": "// Handle RESTful web requests and return JSON\n@RestController\n@RequestMapping('/api')\npublic class MyController {\n    @GetMapping('/hello')\n    public String hello(){ return 'Hello Spring'; }\n}"
        },
        {
            "topic": "Path Variables",
            "code": "// Map dynamic segments of the URL to parameters\n@GetMapping('/users/{id}')\npublic User getUser(@PathVariable int id){ return service.findById(id); }"
        },
        {
            "topic": "Request Params",
            "code": "// Capture query parameters from the URL\n@GetMapping('/search')\npublic List<Item> search(@RequestParam String name){ return repo.findByName(name); }"
        },
        {
            "topic": "Post Request",
            "code": "// Handle incoming JSON payloads via HTTP POST\n@PostMapping('/users')\npublic User save(@RequestBody User user){ return repo.save(user); }"
        },
        {
            "topic": "Service Layer",
            "code": "// Logic layer for business rules and calculations\n@Service\npublic class UserProcessor {\n    public void process(){ /* logic */ }\n}"
        },
        {
            "topic": "Repository Layer",
            "code": "// Data layer interface (Spring Data JPA generates implementation)\n@Repository\npublic interface UserRepo extends JpaRepository<User, Long> {}"
        },
        {
            "topic": "Dependency Injection",
            "code": "// Let Spring manage and inject the objects automatically\n@Autowired\nprivate UserRepo userRepo;"
        },
        {
            "topic": "Exception Handling",
            "code": "// Global center for catching and mapping errors to HTTP responses\n@ControllerAdvice\npublic class ErrorHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> fail(){ return ResponseEntity.status(500).body('Alert'); }\n}"
        },
        {
            "topic": "Properties File",
            "code": "// External configuration for DB, servers, and security\nspring.datasource.url=jdbc:mysql://localhost/db\nserver.port=8081"
        },
        {
            "topic": "Profiles",
            "code": "// Run different logic based on environment (dev, prod, test)\n@Profile('prod')\n@Service\npublic class CloudStorageService {}"
        },
        {
            "topic": "Actuator",
            "code": "// Health checks, auditing, and metrics for operations\nmanagement.endpoints.web.exposure.include=health,info"
        },
        {
            "topic": "Logging",
            "code": "// Standard logging using SLF4J / Logback\nprivate static final Logger log = LoggerFactory.getLogger(Main.class);\nlog.error('Something went wrong');"
        }
    ],
    "Java": [
        {
            "topic": "Entry Point",
            "code": "// Every Java program must have a class and a main method\npublic class Main {\n    // The JVM looks for this method to start the program\n    public static void main(String[] args) {\n        System.out.println(\"Hello Java\"); // Prints text to console\n    }\n}"
        },
        {
            "topic": "Primitive Data Types",
            "code": "// Fixed-size memory buckets for basic data\nbyte b = 1;      // 8-bit integer\nshort s = 2;     // 16-bit integer\nint i = 3;       // 32-bit integer (standard)\nlong l = 4L;     // 64-bit integer\nfloat f = 1.5f;  // 32-bit decimal point\ndouble d = 2.5;  // 64-bit decimal point (standard)\nchar c = 'A';    // Single 16-bit Unicode character\nboolean flag = true; // true or false"
        },
        {
            "topic": "Wrapper Classes",
            "code": "// Object versions of primitives (used in Collections)\nInteger a = 10;\nDouble b = 2.5;\nBoolean c = true;"
        },
        {
            "topic": "Autoboxing and Unboxing",
            "code": "// Automatic conversion between primitives and wrappers\nInteger x = 10; // Primitve 10 is 'autoboxed' into Integer object\nint y = x;      // Integer object is 'unboxed' back to primitive"
        },
        {
            "topic": "Control Flow",
            "code": "// Conditional statements and loops\nif(i > 5) { /* runs if true */ }\nelse { /* runs if false */ }\n\n// Classic for loop: (init; condition; increment)\nfor(int j=0; j<5; j++) { \n    System.out.println(j); \n}\n\n// while loop: checks condition BEFORE execution\nwhile(i>0){ i--; }\n\n// do-while: executes at least ONCE because condition is checked AFTER\ndo { i++; } while(i<5);"
        },
        {
            "topic": "Switch Expression (Java 14+)",
            "code": "// Modern switch with arrow syntax (no 'break' needed)\nString day = switch(num) {\n    case 1 -> \"Mon\";\n    case 2 -> \"Tue\";\n    default -> \"Unknown\";\n};"
        },
        {
            "topic": "Arrays",
            "code": "// Fixed-size container for same-type data\nint[] arr = {1,2,3}; // Shortcut initialization\nint[] arr2 = new int[3]; // Empty array of size 3"
        },
        {
            "topic": "Var Keyword (Java 10+)",
            "code": "// Type inference: compiler figures out the type from the value\nvar list = List.of(1,2,3); // list is inferred as List<Integer>"
        },
        {
            "topic": "Methods",
            "code": "// Block of code that performs an action\nstatic int add(int a, int b) {\n    return a + b; // returns the sum\n}"
        },
        {
            "topic": "Method Overloading",
            "code": "// Same method name, different parameter types/count\nint add(int a, int b){ return a + b; }\ndouble add(double a, double b){ return a + b; }"
        },
        {
            "topic": "Class and Object",
            "code": "// Class is a template/blueprint\nclass Car {\n    String model; // Instance variable\n    void drive(){ System.out.println(\"Driving \" + model); }\n}\n\n// Object is an instance of a class\nCar car = new Car();\ncar.model = \"Tesla\";\ncar.drive();"
        },
        {
            "topic": "Constructors",
            "code": "// Special method called when 'new' is used\nclass User {\n    String name;\n    // Parameterized constructor to initialize fields\n    User(String name){ \n        this.name = name; // 'this' refers to current object instance\n    }\n}"
        },
        {
            "topic": "Inheritance",
            "code": "// Reuse fields and methods from parent class\nclass Animal { void eat(){} }\nclass Dog extends Animal { /* Dog gets eat() for free */ }"
        },
        {
            "topic": "Polymorphism",
            "code": "// One object acting as multiple types\nA obj = new B(); // A reference to a B object"
        },
        {
            "topic": "Method Overriding",
            "code": "// Subclass provides its own implementation of a parent method\nclass A { void show(){ System.out.println(\"A\"); } }\nclass B extends A { \n    @Override // Good practice to use this annotation\n    void show(){ System.out.println(\"B\"); } \n}"
        },
        {
            "topic": "Encapsulation",
            "code": "// Hiding data using private fields and providing public accessors\nclass Person {\n    private int age; // private field\n    public int getAge(){ return age; } // public getter\n    public void setAge(int age){ this.age = age; } // public setter\n}"
        },
        {
            "topic": "Abstraction",
            "code": "// Abstract classes cannot be instantiated, only inherited\nabstract class Shape {\n    abstract double area(); // Method without body to be defined by subclasses\n}"
        },
        {
            "topic": "Interfaces",
            "code": "// A contract that classes must implement\ninterface Flyable { void fly(); }\n\nclass Bird implements Flyable {\n    public void fly(){ /* actual logic */ }\n}"
        },
        {
            "topic": "Default Interface Methods",
            "code": "// Interfaces can have default method bodies since Java 8\ninterface A {\n    default void show(){ System.out.println(\"A Default\"); }\n}"
        },
        {
            "topic": "Functional Interface",
            "code": "// Interface with exactly one abstract method\n@FunctionalInterface\ninterface Calc {\n    int add(int a,int b);\n}"
        },
        {
            "topic": "Lambda Expressions",
            "code": "// Concise implementation of functional interfaces\nCalc c = (a,b) -> a + b;"
        },
        {
            "topic": "Enum",
            "code": "// Collection of constants\nenum Status { SUCCESS, FAILED, PENDING }"
        },
        {
            "topic": "Static Keyword",
            "code": "// Belong to the class, not instance. Shared by all objects.\nstatic int counter;\nstatic void show(){ System.out.println(\"Static access\"); }"
        },
        {
            "topic": "Final Keyword",
            "code": "final int x = 10; // Constant value, cannot be changed\nfinal class Constants {} // Cannot be inherited\nfinal void method(){} // Cannot be overridden"
        },
        {
            "topic": "Equals vs ==",
            "code": "// == compares memory addresses (identity)\n// .equals() compares actual content\nString a = new String(\"Java\");\nString b = new String(\"Java\");\na.equals(b); // true (same letters)\na == b;       // false (different memory locations)"
        },
        {
            "topic": "Exception Handling",
            "code": "// Catching and handling runtime errors\ntry {\n    int x = 10/0; // Throws ArithmeticException\n} catch(ArithmeticException e) {\n    e.printStackTrace(); // Handle error\n} finally {\n    System.out.println(\"Always runs\"); // Cleanup code\n}"
        },
        {
            "topic": "Checked vs Unchecked",
            "code": "// Checked: Checked at compile time (must handle or throw)\n// Unchecked: Runtime exceptions (usually logic bugs)\nIOException // checked\nNullPointerException // unchecked"
        },
        {
            "topic": "Custom Exception",
            "code": "// Creating your own error type\nclass MyException extends RuntimeException {\n    MyException(String msg){ super(msg); }\n}"
        },
        {
            "topic": "Collections Hierarchy",
            "code": "// Collections Framework interfaces and common implementations\nList -> ArrayList, LinkedList // Ordered, duplicates OK\nSet -> HashSet, TreeSet       // Unique elements only\nMap -> HashMap, TreeMap       // Key-Value pairs"
        },
        {
            "topic": "ArrayList",
            "code": "// Dynamic array that grows in size\nList<String> list = new ArrayList<>();\nlist.add(\"A\");\nlist.get(0); // \"A\""
        },
        {
            "topic": "HashSet",
            "code": "// Set that uses Hashing for fast unique storage (No Order)\nSet<String> set = new HashSet<>();"
        },
        {
            "topic": "HashMap",
            "code": "// Stores key-value pairs for quick lookup\nMap<String,Integer> map = new HashMap<>();\nmap.put(\"a\",1);\nSystem.out.println(map.get(\"a\")); // 1"
        },
        {
            "topic": "Comparable",
            "code": "// natural ordering of objects\nclass User implements Comparable<User> {\n    int id;\n    public int compareTo(User u){ return this.id - u.id; }\n}"
        },
        {
            "topic": "Comparator",
            "code": "// custom ordering of objects (often used with Lambdas)\nComparator<User> c = (a,b) -> a.id - b.id;"
        },
        {
            "topic": "Streams",
            "code": "// Functional-style processing of collections for bulk data operations\nlist.stream()\n    .filter(x -> x.length() > 2)   // filter: keep only strings longer than 2 characters\n    .map(String::toUpperCase)      // map: transform each remains string to uppercase\n    .forEach(System.out::println); // terminal operation: print each result"
        },
        {
            "topic": "Optional",
            "code": "// A container object which may or may not contain a non-null value (prevents NullPointerException)\nOptional<String> opt = Optional.ofNullable(someString);\nopt.ifPresent(System.out::println); // Run logic only if a value is actually present"
        },
        {
            "topic": "Threads",
            "code": "// A thread is a lightweight subprocess; smallest unit of execution\nclass MyThread extends Thread {\n    public void run(){ \n        System.out.println(\"Running task in a separate call stack\"); \n    }\n}\nnew MyThread().start(); // Causes this thread to begin execution; JVM calls the run method"
        },
        {
            "topic": "Runnable",
            "code": "// Interface for task to be run by a thread\nRunnable r = () -> System.out.println(\"Running task\");\nnew Thread(r).start();"
        },
        {
            "topic": "Try-with-resources",
            "code": "// Automatically closes resources like files or DB connections\ntry(FileInputStream fis = new FileInputStream(\"test.txt\")) {\n    // logic\n} catch(IOException e){ /* error */ }"
        },
        {
            "topic": "Records (Java 16+)",
            "code": "// Data carrier class with built-in toString, equals, hashcode\nrecord User(String name, int age) {}"
        }
    ],
    "API Testing": [
        {
            "topic": "RestAssured Method Chaining (GET)",
            "code": "// Standard BDD workflow for API requests\ngiven()\n    .accept(ContentType.JSON) // Expect JSON response\n    .contentType(ContentType.JSON) // Sending JSON body\n    .pathParam(\"id\", 10)\n    .queryParam(\"filter\", \"active\")\n.when()\n    .get(\"/api/users/{id}\")\n.then()\n    .statusCode(200)\n    .contentType(\"application/json\")\n    .body(\"id\", equalTo(10));"
        },
        {
            "topic": "Extracting Response (JsonPath)",
            "code": "// Extracting data from response body\nJsonPath jsonPath = given()\n    .accept(ContentType.JSON)\n.when()\n    .get(\"/api/users\")\n.then()\n    .statusCode(200)\n    .extract().jsonPath();\n\nint firstId = jsonPath.getInt(\"id[0]\");\nList<String> names = jsonPath.getList(\"name\");"
        },
        {
            "topic": "Authentication (Bearer Token)",
            "code": "// Sending tokens via headers or built-in auth methods\ngiven()\n    .header(\"Authorization\", \"Bearer \" + token)\n    // Alternatively:\n    // .auth().oauth2(token)\n.when()\n    .get(\"/api/secure/data\")\n.then()\n    .statusCode(200);"
        },
        {
            "topic": "POJO Serialization (POST)",
            "code": "// Sending Java objects as JSON body automatically (using Jackson Databind)\nUser newUser = new User(\"John\", 30);\n\ngiven()\n    .contentType(ContentType.JSON)\n    .body(newUser) // Automatically serialized to JSON\n.when()\n    .post(\"/api/users\")\n.then()\n    .statusCode(201);"
        },
        {
            "topic": "POJO Deserialization (GET)",
            "code": "// Converting JSON response back into a Java Object\nUser user = given()\n    .accept(ContentType.JSON)\n    .pathParam(\"id\", 15)\n.when()\n    .get(\"/api/users/{id}\")\n.then()\n    .statusCode(200)\n    .extract().as(User.class);"
        }
    ]
};
