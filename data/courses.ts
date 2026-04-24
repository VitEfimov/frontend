import { Course } from '../types';

export const coursesData: Course[] = [
    {
        framework: "SDLC & Scrum",
        sections: [
            {
                title: "Waterfall vs Agile",
                content: `# Software Development Methodologies\n\n### 1. Waterfall Methodology\nWaterfall is a linear and sequential approach where each phase must be completed before the next begins.\n- **Sequential:** Requirements -> Design -> Implementation -> Testing -> Maintenance.\n- **Rigid:** Changes are difficult and expensive to implement once a phase is passed.\n- **Testing at the end:** One of the biggest risks; bugs found late are harder to fix.\n\n### 2. Agile Methodology\nAgile is based on iterative and incremental development. It embraces change and focuses on continuous feedback.\n- **Iterative:** The project is broken down into small, manageable cycles (Sprints).\n- **Flexible:** Adapts to changing requirements even late in development.\n- **Client Involvement:** Frequent collaboration with stakeholders ensures the product meets needs.\n- **Integrated Testing:** Testing happens throughout the lifecycle, not just at the end.\n\n> [!TIP]\n> **Metaphor:** Waterfall is like a luxury train on a fixed track. Agile is like an adaptive off-road vehicle that can change path based on the terrain.`
            },
            {
                title: "Scrum Framework",
                content: `## Key Scrum Concepts\n\n### 1. The Sprint\nA Sprint is a time-boxed iteration (2-4 weeks) where a specific set of work is completed. Each Sprint results in a potentially shippable product increment.\n\n### 2. Regular Meetings\n- **Sprint Planning:** Deciding what work to include in the upcoming Sprint.\n- **Daily Standup:** A 15-minute sync where each team member answers: What did I do yesterday? What will I do today? Any impediments?\n- **Sprint Review:** Demonstrating completed work to stakeholders.\n- **Sprint Retrospective:** The team reflects on what went well and how to improve the process.\n\n### 3. Documentation & Artifacts\n- **Product Backlog:** Prioritized list of all features and requirements.\n- **Sprint Backlog:** The subset of tasks chosen for the current Sprint.\n- **Burndown Chart:** Visual representation of work remaining vs. time.\n- **Definition of Done (DoD):** A checklist of criteria that must be met for a task to be considered complete.`
            }
        ]
    },
    {
        framework: "OS & CLI Basics",
        sections: [
            {
                title: "Operating Systems",
                content: `# Understanding the OS\n\nThe Operating System (OS) is the intermediary between computer hardware and the user. Its core functions include:\n- **Process Management:** Handling the execution of programs.\n- **Memory Management:** Allocating RAM to different tasks.\n- **File System:** Organizing files and directories on storage.\n- **Security:** Managing user permissions and data integrity.`
            },
            {
                title: "Terminal Navigation",
                content: `## Essential CLI Commands\n\n| Command | Description |\n| :--- | :--- |\n| **pwd** | Print Working Directory (where am I?) |\n| **ls** | List files and folders in the current directory |\n| **cd [dir]** | Change directory to [dir] |\n| **cd ..** | Move up one level (parent directory) |\n| **cd ~** | Move to the home directory |\n\n> [!NOTE]\n> Path separators differ by OS: Unix-based (Linux/Mac) uses \`/\`, while Windows uses \`\\ \`.`
            },
            {
                title: "File Manipulation",
                content: `## Managing Files via CLI\n\n- **touch [file]**: Create an empty file.\n- **mkdir [dir]**: Create a new folder.\n- **cp [src] [dst]**: Copy a file.\n- **mv [old] [new]**: Move or rename a file.\n- **rm [file]**: Delete a file. (\`rm -r\` for folders).\n- **cat [file]**: View the content of a file in the terminal.\n- **nano [file]**: Edit a file using a built-in text editor.`
            }
        ]
    },
    {
        framework: "Cypress",
        sections: [
            {
                title: "What is Cypress?",
                content: "Cypress is a next generation front end testing tool built for the modern web. It addresses the key pain points developers and QA engineers face when testing modern applications.\n\nCypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.\n\nThis enables you to write faster, easier and more reliable tests."
            },
            {
                title: "Architecture",
                content: "Most testing tools (like Selenium) operate by running outside of the browser and executing remote commands across the network. Cypress is the exact opposite. Cypress is executed in the same run loop as your application.\n\nBehind Cypress is a Node server process. Cypress and the Node process constantly communicate, synchronize, and perform tasks on behalf of each other. Having access to both parts (front and back) gives Cypress the ability to respond to your application's events in real time."
            },
            {
                title: "Pros / Cons",
                content: "Pros:\n- Fast execution directly in the browser\n- Automatic waiting (no need for explicit sleep/waits)\n- Time travel debugging (snapshots of every step)\n- Easy setup with no dependencies\n\nCons:\n- Only supports JavaScript/TypeScript\n- Cannot test multiple browser tabs at once\n- Limited cross-browser support (though improving)"
            }
        ]
    },
    {
        framework: "pytest",
        sections: [
            {
                title: "What is pytest?",
                content: "The pytest framework makes it easy to write small, readable tests, and can scale to support complex functional testing for applications and libraries. It's a mature, full-featured Python testing tool."
            },
            {
                title: "Fixtures",
                content: "pytest fixtures provide a reliable and consistent context for tests to execute in. They can be used to set up database connections, initialize objects, or perform any setup/teardown logic.\n\nFixtures have explicit names and are activated by declaring their use from test functions, modules, classes or whole projects."
            }
        ]
    }
    ,

    {
        framework: "API Testing",
        sections: [
            {
                title: "Introduction & Architecture",
                content: `# What is an API?\n\nAPI stands for **Application Programming Interface**. It acts as an intermediary that allows two software applications to communicate. In modern development, it's the middleman between the Frontend and Backend.\n\n### 1. Monolithic vs Microservices\n- **Monolithic**: One huge application where all layers (UI, Logic, DB) are bundled. Hard to scale and risky to update.\n- **Microservices**: Application divided into small, independent services communicating via APIs (REST). Allows different technologies and independent scaling.\n\n### 2. API Gateway\nThe "Front Door" for apps to access backend services. Handles authentication, routing, and rate limiting.\n\n### 3. SOAP vs REST\n- **SOAP**: Strict, XML-only, supports many protocols (HTTP, SMTP), slower but robust.\n- **REST**: Flexible, usually JSON, works over HTTP/S, faster and industry-standard.`
            },
            {
                title: "HTTP Protocol Deep Dive",
                content: `## The Request & Response Structure\n\n### 1. HTTP Methods (Verbs)\n- **GET**: Retrieve data (Idempotent).\n- **POST**: Create data (Not Idempotent).\n- **PUT**: Update data (Full update, Idempotent).\n- **PATCH**: Partial update.\n- **DELETE**: Remove data.\n\n### 2. Parameters & Headers\n- **Path Parameters**: Part of the URL (\`/users/{id}\`).\n- **Query Parameters**: Filter results (\`?name=john&gender=male\`).\n- **Headers**: Metadata (e.g., \`Accept: application/json\`, \`Authorization: Bearer <token>\`).\n\n### 3. Status Codes\n- **2xx**: Success (200 OK, 201 Created).\n- **4xx**: Client Error (400 Bad Request, 401 Unauthorized, 404 Not Found).\n- **5xx**: Server Error (500 Internal Error).`
            },
            {
                title: "RestAssured Automation",
                content: `## Advanced API Automation\n\nRestAssured provides a powerful Java DSL for validating REST services.\n\n### 1. Method Chaining (Given/When/Then)\n\`\`\`java\ngiven().\n    accept(ContentType.JSON).\n    pathParam(\"id\", 15).\nwhen().\n    get(\"/spartans/{id}\").\nten().\n    statusCode(200).\n    contentType(ContentType.JSON).\n    body(\"name\", is(\"Meta\")).\n    time(lessThan(2000L));\n\`\`\`\n\n### 2. GPath Expressions\nUse GPath to extract values from nested JSON easily:\n\`\`\`java\nList<String> names = response.path(\"items.findAll {it.gender=='Female'}.name\");\n\`\`\``
            },
            {
                title: "Serialization & POJOs",
                content: `## Mapping JSON to Java\n\n### 1. Deserialization\nConverting JSON response to a Java POJO (Plain Old Java Object) using Jackson.\n\`\`\`java\nSpartan s = response.as(Spartan.class);\n\`\`\`\n\n### 2. Serialization\nConverting a Java Object to JSON for POST/PUT requests.\n\`\`\`java\nSpartan s = new Spartan(\"Mike\", \"Male\", 1234567890);\ngiven().body(s).when().post(\"/spartans\");\n\`\`\`\n\n> [!TIP]\n> Use **Lombok**'s \`@Data\` or \`@JsonIgnoreProperties\` to handle unknown fields and reduce boilerplate code.`
            },
            {
                title: "Auth & Security",
                content: `## Securing API Requests\n\n### 1. Basic Auth\nUses Base64 encoded username:password. \n\`\`\`java\ngiven().auth().basic(\"user\", \"pass\")\n\`\`\`\n\n### 2. Bearer Token (JWT)\nMost common in modern apps. A token provided after login.\n\`\`\`java\ngiven().header(\"Authorization\", \"Bearer \" + token)\n\`\`\`\n\n### 3. OAuth 2.0\nSecure authorization between services without sharing passwords. Involves an \`Authorization Code\` and an \`AccessToken\` flow.`
            }
        ]
    }
,
    {
        framework: "Java Core",
        sections: [
            {
                title: "Java Fundamentals & Architecture",
                content: `# Java Foundations\n\n### Why Java?\n- **WORA (Write Once, Run Anywhere):** Java is platform-independent thanks to the JVM.\n- **Automatic Memory Management:** The Garbage Collector handles cleaning up unused objects.\n- **Robust and Secure:** Strong type-checking and built-in security features.\n\n### JDK vs JRE vs JVM\n- **JVM (Java Virtual Machine):** Think of it as a virtual computer that executes Java bytecode. It provides an abstraction layer between the program and the OS.\n- **JRE (Java Runtime Environment):** A package that includes the JVM and core libraries needed to **run** applications.\n- **JDK (Java Development Kit):** A full software development kit including the JRE and development tools (compiler, debugger) to **build** applications.\n\n### Memory Management\n- **Stack Memory:** Used for local variables and method execution (LIFO - Last In First Out). Very fast access.\n- **Heap Memory:** Used for dynamic memory allocation (Objects and Arrays). Managed by the Garbage Collector.\n\n> [!TIP]\n> **Metaphor:** Think of the **Stack** as a stack of plates on a desk (quick access to current task), and the **Heap** as a shared dining table where everyone has a seat (shared data pool for all parts of the app).`
            },
            {
                title: "Java Advantages & Environment",
                content: `# Why Java?\n\n- **Platform Independence (WORA):** "Write Once, Run Anywhere." Java bytecode runs on any device containing a Java Virtual Machine (JVM).\n- **Automatic Memory Management:** The Garbage Collector handles memory allocation/deallocation, reducing memory leaks.\n- **Robust & Secure:** Strong type-checking and built-in security managers.\n\n### JDK vs JRE vs JVM\n1. **JVM (Java Virtual Machine):** The "Engine" that executes bytecode. It provides an abstraction layer between code and hardware.\n2. **JRE (Java Runtime Environment):** A bundle containing the JVM plus libraries needed to **run** Java apps.\n3. **JDK (Java Development Kit):** A full superset containing the JRE plus development tools (compiler \`javac\`, debugger \`jdb\`) needed to **write** and **compile** Java code.`
            },
            {
                title: "Data Types & Wrapper Classes",
                content: `## Data in Java\n\n### Primitive Types\n| Type | Size | Range / Usage |\n| :--- | :--- | :--- |\n| **byte** | 8-bit | -128 to 127 |\n| **int** | 32-bit | Standard whole numbers |\n| **long** | 64-bit | Append 'L' (e.g., \`10L\`) |\n| **double** | 64-bit | Standard decimals |\n| **boolean** | 1-bit | true / false |\n\n### Wrapper Classes\nWrapper classes (e.g., \`Integer\`, \`Double\`) allow primitives to be treated as objects. Required for Collections.\n- **Autoboxing:** Primitve to Wrapper (\`int\` -> \`Integer\`).\n- **Unboxing:** Wrapper to Primitive (\`Integer\` -> \`int\`).\n\n### Type Casting\n- **Widening (Implicit):** Small to Large (e.g., \`int\` to \`double\`). Like converting cents to dollars—no loss of precision.\n- **Narrowing (Explicit):** Large to Small (e.g., \`double\` to \`int\`). Requires \`(int)\`. Like converting dollars to cents—potential rounding loss.`
            },
            {
                title: "Operators & Control Flow",
                content: `## Logic & Flow\n\n### Core Operators\n- **Arithmetic**: \`+\`, \`-\`, \`*\`, \`/\`, \`%\` (Modulus).\n- **Comparison**: \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`.\n- **Logical**: \`&&\` (AND), \`||\` (OR), \`!\` (NOT).\n\n### Flow Control\n- **If-Else:** Conditional pathways.\n- **Switch:** Multiple branches. Modern Java (14+) supports \`->\` arrow syntax.\n- **Loops:** \`for\`, \`while\`, and \`do-while\` (guarantees 1 execution).\n\n### Keywords: \`break\` vs \`continue\`\n- **break**: An "Emergency Exit" - stops the loop entirely.\n- **continue**: "Skip a Step" - jumps to the next iteration.`
            },
            {
                title: "Methods & Constructors",
                content: `## Methods and Reusability\n\n### Method Structure\n\`\`\`java\naccess_modifier return_type name(parameters) {\n    // logic\n    return value;\n}\n\`\`\`\n\n### Constructors\n- **Default Constructor:** Provided automatically if none defined.\n- **Parameterized Constructor:** Used for custom initialization.\n- **Constructor Chaining**: Using \`this()\` to call another constructor in the same class.`
            }
        ]
    },
    {
        framework: "Java Advanced",
        sections: [
            {
                title: "Deep Dive: Pillars of OOP",
                content: `# The 4 Pillars of Object-Oriented Programming\n\n1. **Encapsulation:** The technique of making the fields in a class private and providing access to the fields via public methods (Getters/Setters). It protects the data from outside interference.\n2. **Inheritance:** The process where one class acquires the properties and methods of another. Use the \`extends\` keyword for class inheritance and \`implements\` for interfaces.\n3. **Polymorphism:** The ability of an object to take on many forms. \n    - **Static (Compile-time):** Method Overloading (same method name, different parameters).\n    - **Dynamic (Runtime):** Method Overriding (same method signature in parent and child).\n4. **Abstraction:** Hiding the implementation details and showing only functionality. \n    - **Abstract Classes:** Can have both abstract (no body) and concrete methods.\n    - **Interfaces:** A pure contract (prior to Java 8, only abstract methods; now can have default and static methods).`
            },
            {
                title: "Keywords: this, super, static, new",
                content: `## Special Keywords in Java\n\n- **this**: Refers to the current instance of the class. Frequently used in constructors and to differentiate between instance variables and parameters.\n- **super**: Refers to the immediate parent class instance. Used to call parent constructors or methods.\n- **static**: Indicates that a member belongs to the class itself, rather than to instances. Static variables are shared; static methods can be called without an object.\n- **new**: The magic wand that brings objects to life. It allocates memory on the **Heap** and invokes the constructor to initialize the object.`
            },
            {
                title: "The Object & String Classes",
                content: `## Core Java Classes\n\n### The Object Class\nThe root of all Java classes. Every class implicitly extends \`Object\`.\n- **toString()**: Returns a string representation (Package.Class@Hash).\n- **equals()**: Compares contents (often needs to be overridden).\n- **hashCode()**: Generates a unique integer identifier for the object.\n\n### The String Class\nRepresents character sequences. Strings are **immutable** and stored in the **String Pool** to save memory.\n- **Methods**: \`length()\`, \`substring()\`, \`indexOf()\`, \`trim()\`, \`split()\`.\n- **Comparison**: Always use \`.equals()\` for content, never \`==\` (which compares memory addresses).`
            },
            {
                title: "The Collections Framework",
                content: `## Managing Groups of Objects\n\n### 1. List (Ordered, Duplicates Allowed)\n- **ArrayList**: Dynamic array. Fast for random access/retrieval.\n- **LinkedList**: Doubly-linked list. Fast for adding/removing at the ends.\n\n### 2. Set (Unordered, Unique Only)\n- **HashSet**: Fast, uses hashing, no order.\n- **TreeSet**: Sorted order (natural or custom).\n\n### 3. Map (Key-Value Pairs)\n- **HashMap**: Fast, permits one null key, unordered.\n- **TreeMap**: Sorted by keys.`
            },
            {
                title: "Exception Handling",
                content: `## Dealing with Errors\n\nExceptions are unexpected events that occur during execution. We handle them using **try-catch-finally** blocks.\n\n### Categories\n- **Checked Exceptions**: Checked at compile-time (e.g., \`FileNotFoundException\`). You MUST handle or declare them.\n- **Unchecked (Runtime) Exceptions**: Occur at runtime (e.g., \`NullPointerException\`, \`ArithmeticException\`). Result from logic errors.\n- **Errors**: Serious problems that applications shouldn't try to catch (e.g., \`OutOfMemoryError\`).`
            },
            {
                title: "Garbage Collection",
                content: `# Automatic Memory Management\n\n### How it Works\nJava's Garbage Collector (GC) runs in the background to identify and reclaim memory from objects that are no longer reachable (unreferenced).\n\n### Reachability\n- **Roots**: The starting point (e.g., local variables in the main method).\n- **Mark and Sweep**: The algorithm marks "live" objects and sweeps away "dead" ones.\n\n> [!NOTE]\n> You can request GC using \`System.gc()\`, but there is no guarantee that it will run immediately.`
            },
        ]
    },

    {
        framework: "JDBC",
        sections: [
            {
                title: "Introduction & Architecture",
                content: `# What is JDBC?\n\n**Java Database Connectivity (JDBC)** is a platform-independent API that connects Java applications with various databases (Oracle, MySQL, PostgreSQL, etc.).\n\n### How it Works\nThink of JDBC as a "middleman" that understands Java and communicates with Databases using local drivers.\n- **Java App** -> **JDBC API** -> **DB Driver** -> **Database**\n\n### Core Interfaces\n1. **Connection**: The bridge to the DB.\n2. **Statement**: Executes the SQL query.\n3. **ResultSet**: Stores the results of the query.\n4. **ResultSetMetaData**: Provides info about the table structure (column names, count).`
            },
            {
                "title": "ResultSet Navigation",
                "content": "## Moving the Cursor\n\nResultSet uses a pointer (cursor) to navigate through rows. By default, it starts at `beforeFirst`.\n\n| Method | Action |\n| :--- | :--- |\n| **next()** | Move to next row (returns true if valid) |\n| **previous()** | Move to previous row |\n| **first() / last()** | Jump to start or end |\n| **absolute(n)** | Jump to a specific row number |\n\n### Getting Data\n```java\nwhile(rs.next()) {\n    String name = rs.getString(\"first_name\");\n    int salary = rs.getInt(\"salary\");\n}\n```"
            },
            {
                "title": "Working with Metadata",
                "content": "## Data about Data\n\n### 1. ResultSetMetaData\nUse this when you don't know the column names in advance.\n```java\nResultSetMetaData rsmd = rs.getMetaData();\nint count = rsmd.getColumnCount();\nString colName = rsmd.getColumnName(1);\n```\n\n### 2. DatabaseMetaData\nProvides info about the database itself (version, username, driver name).\n```java\nDatabaseMetaData dbmd = conn.getMetaData();\nSystem.out.println(dbmd.getDatabaseProductName());\n```"
            },
            {
                "title": "DB_Util Pattern",
                "content": "# Reusable Database Utilities\n\nIn automation, we often store query results into a **List of Maps** for easy verification.\n\n### The List<Map> Structure\n- Each **Map** represents one row: `{ \"column_name\": \"value\" }`.\n- The **List** holds all the row maps.\n\n### Utility Example\n```java\npublic static List<Map<String, String>> getAllRowsAsListOfMap(String query) {\n    runQuery(query);\n    List<Map<String, String>> data = new ArrayList<>();\n    // ... logic to iterate and store ...\n    return data;\n}\n```"
            }
        ]
    },
    {
        framework: "Karate",
        sections: [
            {
                title: "What is Karate?",
                content: `# API Testing with Karate\n\nKarate is an open-source tool that combines API test-automation, mocks, performance-testing, and even UI automation into a single, unified framework based on Cucumber's Gherkin syntax.\n\n### Key Philosophies\n- **No Step Definitions Required:** Unlike Cucumber, you don't write Java glue code. The DSL handles everything.\n- **Native JSON/XML Support:** Assertions and payload handling are built directly into the language.\n- **Interoperability:** You can easily call Java code if you need custom logic (e.g., database utilities, random data generation).`
            },
            {
                title: "Core Syntax & Assertions",
                content: `## The Karate DSL\n\n| Feature | Gherkin Equivalent |\n| :--- | :--- |\n| **def** | Initialize a variable |\n| **match** | Assert equality or schema |\n| **path** | Define endpoint path |\n| **method** | HTTP Verb (GET, POST, etc.) |\n| **status** | Expected status code |\n\n### Schema Validation\nKarate makes it easy to validate the structure of a response using fuzzy matchers:\n\`\`\`gherkin\n* match each employees == { id: '#number', name: '#string', active: '#boolean' }\n* match spartan.phone == '#present'\n* match spartan.lastName == '#notpresent'\n\`\`\``
            },
            {
                title: "Advanced Features & Runner",
                content: `## Reusable Scripts & Parallel Execution\n\n### 1. Reusable Logic\nUse \`call read()\` to execute other feature files, common for authentication or data setup.\n\`\`\`gherkin\n* def result = call read('classpath:auth.feature')\n\`\`\n\n### 2. Java Interop\nCall Java static methods directly for complex logic:\n\`\`\`gherkin\n* def dataGen = Java.type('com.utils.DataGenerator')\n* def payload = dataGen.createSpartan()\n\`\`\n\n### 3. Parallel Execution\nKarate has its own Runner to execute multiple scenarios simultaneously for massive speed gains.\n\`\`\`java\nResults results = Runner.path(\"classpath:features\").parallel(5);\n\`\`\``
            },
            {
                title: "Project Configuration",
                content: `## karate-config.js\n\nThis is the central place to set global variables like Base URLs, timeouts, and authentication tokens depending on the environment (dev, qa, prod).\n\n### Setup\n- **IDE**: IntelliJ IDEA with the Karate plugin.\n- **Maven**: Use the official archetype to scaffold projects quickly.\n\`\`\`xml\n<dependency>\n    <groupId>com.intuit.karate</groupId>\n    <artifactId>karate-junit5</artifactId>\n    <version>1.4.0</version>\n</dependency>\n\`\`\``
            }
        ]
    }
,
    {
        framework: "SQL",
        sections: [
            {
                title: "Database Fundamentals",
                content: `# Relational Databases\n\nA Relational Database (RDBMS) stores data in tables related via keys.\n- **Primary Key (PK)**: Uniquely identifies a record. Cannot be null or duplicate.\n- **Foreign Key (FK)**: A column that establishes a link between two tables.\n- **Schema**: The blueprint/logical organization of the database.`
            },
            {
                title: "DDL: Data Definition Language",
                content: `## Managing Structure\n\n- **CREATE TABLE**: Define new tables with specific data types (INT, VARCHAR, DECIMAL).\n- **ALTER TABLE**: Add or modify columns and constraints.\n- **DROP TABLE**: Delete the entire table and its data.\n- **TRUNCATE**: Remove all rows but keep the structure.`
            },
            {
                title: "DML & Querying Basics",
                content: `## Data Manipulation\n\n- **SELECT**: Retrieve data. Use \`DISTINCT\` to remove duplicates.\n- **INSERT / UPDATE / DELETE**: Modify the contents of the database.\n- **WHERE**: Filter results before they are returned. Use \`BETWEEN\`, \`IN\`, and \`LIKE\` for complex filters.`
            },
            {
                title: "Aggregate Functions & Grouping",
                content: `## Working with Groups\n\n- **Core Functions**: \`COUNT()\`, \`SUM()\`, \`AVG()\`, \`MIN()\`, \`MAX()\`.\n- **GROUP BY**: Dividies result sets into groups representing each matching row in the database.\n- **HAVING**: Filters grouped results (applied **after** WHERE).\n\n> [!IMPORTANT]\n> Aggregate functions ignore NULL values except for \`COUNT(*)\`.`
            },
            {
                title: "Joining Tables",
                content: `## Combining Data\n\n- **INNER JOIN**: Returns only rows with matching values in both tables.\n- **LEFT JOIN**: Returns all rows from the left table and matching rows from the right.\n- **RIGHT JOIN**: Returns all rows from the right table and matching rows from the left.\n- **FULL JOIN**: Returns all rows when there is a match in either left or right table.`
            }
        ]
    },
    {
        "framework": "Selenium Java",
        "sections": [
            {
                "title": "Introduction & Automation Basics",
                "content": "# Selenium Fundamentals\n\n### 1. What is Automation?\nIf there is a repeating process and we reduce or remove human interaction, we automate that process.\n- **Precision & Accuracy**: Reduces human error.\n- **Efficiency**: Faster execution and cost-saving.\n- **Reporting**: Auto-generated test reports.\n\n### 2. What is Selenium?\nSelenium is a suite of tools for automating web browsers. It is actually a library of classes and methods.\n- **Pros**: Open source (free), supports multiple languages (Java, Python, C#, etc.), multiple OS (Windows, Mac, Linux), and multiple browsers.\n- **Cons**: Automates web browsers only (no desktop apps), requires programming knowledge, no built-in reporting (requires TestNG/ExtentReports).\n\n### 3. Maven Architecture\nMaven is a build automation tool that manages project lifecycles and dependencies.\n- **pom.xml**: The heart of a Maven project where dependencies like Selenium and WebDriverManager are added.\n- **Lifecycle**: `validate` -> `compile` -> `test` -> `package` -> `install` -> `deploy`.\n\n> [!TIP]\n> Use `mvn clean install -U` to forcefully check and update dependencies and rebuild the project locally."
            },
            {
                "title": "WebDriver & Navigation",
                "content": "## WebDriver vs. Browser Driver\n\n- **WebDriver**: The core API/library used to write tests.\n- **Browser Driver**: The executable (e.g., `chromedriver.exe`) that translates Selenium commands into browser actions.\n\n### Basic Navigations\n```java\ndriver.get(url);            // Navigates to a URL\ndriver.navigate().to(url);   // Similar to get(url)\ndriver.navigate().back();    // Go back one page\ndriver.navigate().forward(); // Go forward one page\ndriver.navigate().refresh(); // Refresh current page\n```\n\n### Core Methods\n- `click()`: Clicks an element.\n- `sendKeys(\"text\")`: Enters text into input fields.\n- `getText()`: Returns text of an element as a String.\n- `getAttribute(\"name\")`: Gets a specific attribute value.\n- `getTitle()`: Returns page title.\n- `close()` vs `quit()`: `close()` closes the current window; `quit()` closes all windows and kills the session."
            },
            {
                "title": "Locators & Elements",
                "content": "## Finding Web Elements\n\nSelenium provides 8 core locators to find elements in the HTML DOM:\n\n1. **id**: The most reliable and unique (if static).\n2. **name**: Often used in input fields.\n3. **tagName**: Useful for identifying generic tags (e.g., all `<a>` links).\n4. **className**: Used to locate elements by their CSS class.\n5. **linkText**: Exact match for a link's text.\n6. **partialLinkText**: Partial match for a link's text.\n7. **XPath**: A powerful way to navigate the XML structure. \n   - *Relative Syntax*: `//tagName[@attribute='value']`\n8. **cssSelector**: Faster and more efficient than XPath for many cases.\n   - *Syntax*: `tagName[attribute='value']` or `tag#id` / `tag.class`.\n\n### Interactive Elements\n- **Radio Buttons / Checkboxes**: Use `.click()` to select and `.isSelected()` to verify state.\n- **Dropdowns (Select tag)**: \n  ```java\n  Select select = new Select(dropdownElement);\n  select.selectByVisibleText(\"Apple\");\n  ```"
            },
            {
                "title": "Synchronization & Waits",
                "content": "## Handling Latency in UI Testing\n\nWeb pages often load elements dynamically. Selenium provides three main ways to wait for elements:\n\n### 1. Implicit Wait\nA global wait applied once. Selenium will poll the DOM for up to $X$ seconds before throwing a `NoSuchElementException`.\n```java\ndriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);\n```\n\n### 2. Explicit Wait\nUsed for specific conditions on specific elements (e.g., wait until an element is clickable).\n```java\nWebDriverWait wait = new WebDriverWait(driver, 10);\nwait.until(ExpectedConditions.elementToBeClickable(button));\n```\n\n### 3. Fluent Wait\nAdvanced wait that allows defining polling frequency and ignoring specific exceptions.\n\n> [!WARNING]\n> **Thread.sleep()**: Never use this in production automation. It pauses the whole thread regardless of whether the element is ready, leading to slow and flaky tests."
            },
            {
                "title": "TestNG Framework",
                "content": "## Organizing Tests with TestNG\n\nTestNG is a testing framework that allows you to run, group, and report on your tests using annotations.\n\n### Key Annotations\n- `@Test`: Marks a method as a test case.\n- `@BeforeMethod`/`@AfterMethod`: Runs before/after every test.\n- `@BeforeClass`/`@AfterClass`: Runs once per class.\n- `@DataProvider`: Used for Data Driven Testing (DDT).\n\n### Assertions\n- **Hard Assert**: `Assert.assertEquals(a, b);` (Stops execution on failure).\n- **Soft Assert**: `SoftAssert softAssert = new SoftAssert();` (Continues execution; use `softAssert.assertAll();` at the end).\n\n### Batch Execution\nUse `testng.xml` files to group multiple classes and packages for regression or smoke runs."
            },
            {
                "title": "Page Object Model (POM)",
                "content": "## POM Design Pattern\n\nPOM is a design pattern where you create a Java class for each page of your web application. This class stores the locators and methods specific to that page.\n\n### Why use POM?\n- **Reusability**: Use the same locators in multiple tests.\n- **Maintainability**: If a locator changes, you only update it in one class.\n- **Readability**: Test scripts focus on logic, not locators.\n\n### Implementation\n```java\npublic class HomePage {\n    public HomePage() {\n        PageFactory.initElements(Director.getDriver(), this);\n    }\n\n    @FindBy(id = \"login-btn\")\n    public WebElement loginButton;\n}\n```"
            }
        ]
    },
    {
        "framework": "Cucumber Framework",
        "sections": [
            {
                "title": "BDD & Cucumber Setup",
                "content": "# Behavior Driven Development (BDD)\n\n### 1. What is BDD?\nBDD is a software development process that encourages collaboration between developers, QA, and non-technical business stakeholders. It focuses on the **behavior** of the application from the user's perspective.\n\n### 2. Gherkin Language\nCucumber uses **Gherkin**, a plain-English language with specific keywords:\n- **Feature**: High-level description of a software feature.\n- **Background**: Steps that run before every scenario in the file.\n- **Scenario**: A specific test case/behavior.\n- **Given**: Pre-condition.\n- **When**: Action taken by the user.\n- **Then**: Expected outcome/verification.\n- **And/But**: Continues the previous keyword.\n\n### 3. Framework Setup\n**Dependencies (pom.xml)**:\n- `cucumber-java`: Core library.\n- `cucumber-junit`: Integration with JUnit runner.\n- `selenium-java`: To drive the browser.\n\n**Plugins**:\nInstall \"Cucumber for Java\" and \"Gherkin\" plugins in IntelliJ for syntax highlighting and step navigation."
            },
            {
                "title": "CukesRunner & Execution",
                "content": "## The Test Runner\n\nThe Runner class is the entry point for Cucumber tests. It uses `@RunWith(Cucumber.class)` and `@CucumberOptions`.\n\n### Cucumber Options\n- **features**: Path to your `.feature` files.\n- **glue**: Path to your step definition classes.\n- **tags**: Filters which scenarios to run (e.g., `\"@smoke or @regression\"`).\n- **dryRun**: \n  - `true`: Checks if every Gherkin step has a matching Java method without running the actual code.\n  - `false`: Executes the tests normally.\n- **plugin**: Used for reporting (e.g., `\"html:target/cucumber-report.html\"`, `\"json:target/cucumber.json\"`, `\"rerun:target/rerun.txt\"`)."
            },
            {
                "title": "Hooks & Background",
                "content": "## Shared Logic\n\n### 1. Background\nWhen multiple scenarios in a feature file share the same setup steps (e.g., \"Given user is logged in\"), move them to a `Background` block. It runs before **each** scenario.\n\n### 2. Hooks\nHooks are Java methods that run `@Before` and `@After` every scenario. Unlike Background, they are not visible in the feature file.\n- **Global Hooks**: Run for every scenario.\n- **Tagged Hooks**: Run only for scenarios with a specific tag (e.g., `@Before(\"@db\")`).\n\n> [!IMPORTANT]\n> Always import `@Before` and `@After` from `io.cucumber.java`, NOT from JUnit."
            },
            {
                "title": "Data Driven Testing (DDT)",
                "content": "## Handling Test Data\n\n### 1. Scenario Outline\nUsed to run the same scenario multiple times with different data sets. Uses `<placeholder>` in steps and an `Examples:` table.\n```gherkin\nScenario Outline: Login with different users\n  When user enters \"<username>\"\n  Then user should be logged in\n\n  Examples:\n    | username | \n    | admin    |\n    | editor   |\n```\n\n### 2. Data Tables\nUsed to pass a list of data to a **single** step.\n```gherkin\nThen user should see the following options:\n  | Home     |\n  | About    |\n  | Contact  |\n```\nIn Java, this is handled as a `List<String>` or `Map<String, String>` parameter."
            },
            {
                "title": "Advanced Features",
                "content": "## Reporting & Parallelism\n\n### 1. Snapshots on Failure\nUse the `@After` hook to take a screenshot if the scenario fails and embed it into the cucumber report.\n\n### 2. Failed Test Rerun\nConfigure the `rerun` plugin to save failed scenarios to a file. Create a separate `FailedTestRunner` to execute only those tests, saving time during debugging.\n\n### 3. Parallel Execution\nTo run tests in parallel, use the `maven-surefire-plugin` with `dataproviderthreadcount`. Ensure your `Driver` class uses `ThreadLocal` to provide a dedicated browser instance for each thread."
            },
            {
                "title": "Setting Environment Variables",
                "content": "- **How to set environment variables in Mac:**\n1. Go -> Home -> .zprofile\n\n**Press Command + Shift + .**\u00a0**(period)**\u00a0to make the hidden files appear\n\n2.If you do not have z file create from terminal: **touch ~/.zprofile**\n\n3.You will write environment variables in this file with using **key=value** and save the file\n\nexport LIBRARY_USER=librarian44@library\nexport LIBRARY_PASSWORD=libraryUser\n\n4.In IntelliJ whenever you need this environment variables, you will use below code:\n\nString value = **System.getenv(\u201ckey\u201d);**\n\n\n- **How to set environment variables in Windows:**\n\n1.in you machine search for env and choose **Edit the system environment**\n\n**variables.**\n\n2.click **Environment Variables** and click **New** button\n\n3.put variable **name, value** and press **OK**\n\nexport LIBRARY_USER=librarian44@library\nexport LIBRARY_PASSWORD=libraryUser\n\n4.In IntelliJ whenever you need this environment\tvariables, you will use below code:\n\nString value = **System.getenv(\u201ckey\u201d);**\n\n# SELENIUM GRID"
            },
            {
                "title": "Selenium Grid is a completely native part of the Selenium project",
                "content": "- The [***Selenium Grid](https://www.selenium.dev/documentation/grid/)*** is a testing tool which allows us to run our tests on different machines against different browsers. It is a part of the Selenium Suite which specialize in running multiple tests across different browsers, operating system and machines. You can connect to it with Selenium Remote by specifying the browser, browser version, and operating system you want. You specify these values through Selenium Remote\u2019s Capabilities. There are two main elements to ***Selenium Grid*** \u2014 a ***hub*** and ***node***\n\n**When would you use a Selenium Grid?**\n\n- To run your tests in parallel, against different browser types, browser versions, operating systems\n- To reduce the time needed to execute a test suite\n- Selenium Grid runs test suites in parallel against multiple machines (called Nodes). *For large and long-running test suites, this can save minutes, hours, or perhaps days.*\n\n![Screen Shot 2022-10-05 at 10.54.39.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87f75eb0-c197-482e-8727-cbb3aae9c09f/Screen_Shot_2022-10-05_at_10.54.39.png)\n\n\n### HUB\n\n- The hub is the central point where you load your tests into.\n- There should only be one hub in a grid.\n- The hub is launched only on a single machine, say, a computer whose O.S is Windows 10 and whose browser is Chrome.\n- The machine containing the hub is where the tests will be run, but you will see the browser being automated on the node.\n- The hub can be parametrized with json file.\n\n### NODE\n\n- Nodes are the Selenium instances that will execute the tests that you\nloaded on the hub.\n- There can be one or more nodes in a grid.\n- Nodes can be launched on multiple machines with different platforms\nand browsers.\n- Nodes can be located on different machines.\n- Nodes can be parametrized with json file.\n\n### [HOW SELENIUM GRID WORKS ?](https://miro.com/app/board/o9J_lZ1yLEI=/)\n\n- A grid consists of **a single hub**, and **one or more nodes**. Both are started using the selenium-server.jar executable.\n- The hub receives a test to be executed along with information on which browser and \u2018platform\u2019 (i.e. WINDOWS, LINUX, etc) where the test should be run. It \u2018knows\u2019 the configuration of each node that has been \u2018registered\u2019 to the hub. Using this information it selects an available node that has the requested browser-platform combination.\n- Once a node has been selected, Selenium commands initiated by the test are sent to the hub, which passes them to the node assigned to that test. The node runs the browser, and executes the Selenium commands within that browser against the application under test.\n\n![Screen Shot 2022-09-27 at 17.22.41.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/58bbe31b-37eb-4c02-837a-b151f059c99a/Screen_Shot_2022-09-27_at_17.22.41.png)\n\n\n**NOTE**  :\n\n- If you don't want to deal with a setup, you can use SauceLabs , BrowserStack etc. for remote execution. Everything is easy and super reliable but you need to pay for it. Many companies have a budget for this kind of thing as well. you will get the URL once you log in and open an account from this website. As I remember there needs to be a trial if you have time you can check it as well. It only makes Selenium Grid setup issues very easy. These are not free\n\n![Screen Shot 2022-10-05 at 10.37.04.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/90432160-8a50-4ec9-a01b-877f91b99583/Screen_Shot_2022-10-05_at_10.37.04.png)"
            }
        ]
    }
    ,
    {
        framework: "Git",
        sections: [
            {
                title: "Git Architecture",
                content: `# Version Control with Git\n\n### The Three Trees\nGit manages your project through three main areas:\n1. **Working Directory:** The actual files on your disk that you are currently editing (Untracked files are Red).\n2. **Staging Area (Index):** A conceptual "sandbox" where you prepare changes for the next commit (Staged files are Green).\n3. **Local Repository:** The \`.git/\` subdirectory where your committed snapshots live (Committed/Clean files).\n\n### Why the Staging Area?\nIt allows you to select changes in a granular way. You can choose which specific files or even lines of code should be part of your next snapshot.`
            },
            {
                title: "Core Workflow",
                content: `## Daily Git Flow\n\n1. **Status**: \`git status\` - See what has changed.\n2. **Add**: \`git add <file>\` - Move changes to the Staging area.\n3. **Commit**: \`git commit -m "message"\` - Save the snapshot to the Local Repo.\n4. **Push**: \`git push\` - Send your local commits to a Remote Repo (like GitHub).\n5. **Pull**: \`git pull\` - Fetch and merge changes from the Remote Repo into your working directory.`
            },
            {
                title: "Branching & Merging",
                content: `## Branches & Collaboration\n\n- **Branching**: Allows you to work on new features without affecting the \`master\` code.\n- **Merge**: Combining work from one branch back into another.\n- **Merge Conflict**: Happens when two branches have modified the same line in the same file. You must manually resolve these and then "Mark as Resolved".\n\n### Remote Strategies\n- **Fetch**: Updates your local database with remote changes but doesn't touch your working files.\n- **Pull Request (PR)**: A request to a team lead or colleague to review your code before it is merged into the main (\`develop\` or \`master\`) branch.`
            }
        ]
    },
    {
        framework: "Docker",
        sections: [
            {
                title: "Introduction to Containers",
                content: `# Modern Deployment with Docker\n\n### What is Docker?\nDocker is a tool that allows you to package an application with all its dependencies into a standardized unit called a **Container**. This ensures the app runs perfectly on any machine, solving the "It works on my machine" problem.\n\n### VM vs. Container\n- **Virtual Machine (VM)**: Includes a full Guest OS. Heavy and slow to start.\n- **Container**: Shares the host OS kernel. Lightweight, fast, and portable.\n\n### Linux & Docker\nDocker was originally built for Linux. While it runs on Windows/Mac via "Docker Desktop", Linux is the native and most efficient environment for containerization.`
            },
            {
                title: "Core Terminologies",
                content: `## The Docker Ecosystem\n\n1. **Dockerfile**: A text script containing commands to build an image (Infrastructure as Code).\n2. **Image**: A read-only template used to create containers (like a Class in Java).\n3. **Container**: A running, isolated instance of an image (like an Object in Java).\n4. **Docker Hub**: A public registry (like Maven Central) to share and download images.\n5. **Docker Compose**: A tool for defining and running multi-container applications using a YAML file.`
            },
            {
                title: "Essential Commands",
                content: `## Common Docker CLI\n\n- **ls**: List files (to check for docker-compose.yml).\n- **pull**: Download an image from Docker Hub.\n- **ps**: List running containers.\n- **run**: Create and start a container from an image (\`-d\` for background, \`-it\` for interactive).\n- **docker-compose up -d**: Start all services defined in your compose file in the background.\n- **docker-compose down**: Stop and remove all services.`
            }
        ]
    },
    {
        framework: "Spring Boot",
        sections: [
            {
                title: "The Spring Ecosystem",
                content: `# Backend Development with Spring Boot\n\n### What is Spring Boot?\nSpring Boot is an extension of the Spring framework that makes it easy to create stand-alone, production-grade Spring-based Applications that you can "just run". It removes the need for heavy XML configuration.\n\n### Key Features\n- **Auto-Configuration**: Automatically configures your app based on the libraries you've added (Starters).\n- **Embedded Servers**: Comes with Tomcat or Jetty built-in (no need to deploy WAR files).\n- **Dependency Injection (DI)**: A design pattern that allows for loose coupling by letting the framework manage object creation.`
            },
            {
                title: "Core Annotations",
                content: `## Essential Annotations\n\n- **@SpringBootApplication**: Marks the main class of a Spring Boot application.\n- **@RestController**: Marks a class as a controller where every method returns a domain object instead of a view.\n- **@Service**: Marks a class as a Service (business logic).\n- **@Repository**: Marks a class as a Data Access Object (database logic).\n- **@Autowired**: Used for automatic dependency injection into constructors or fields.\n- **@GetMapping / @PostMapping**: Maps HTTP requests to specific handler methods.`
            },
            {
                title: "Building REST APIs",
                content: `## API Development Flow\n\n1. **Controllers**: Handle incoming HTTP requests and map them to service methods.\n2. **Services**: Perform business logic and coordinate data flow.\n3. **Repositories**: Interact with the database using JPA (Java Persistence API).\n4. **Entities**: Define the database table structure using Java POJOs.\n\n### Spring Starters\nPre-defined sets of dependencies. For example, \`spring-boot-starter-web\` includes everything needed to build a RESTful API.`
            }
        ]
    }
];
