import { PracticeExercise } from '../types';

export const practiceData: PracticeExercise[] = [
    {
        "id": 1,
        "framework": "Cypress",
        "category": "UI Automation",
        "title": "Clicking an Element",
        "instruction": "Write a Cypress command to find the element with ID 'submit-btn' and click it.",
        "initialCode": "cy",
        "validationRules": [
            {
                "type": "contains",
                "value": "cy.get('#submit-btn').click()",
                "message": "You must select the element by its ID '#submit-btn' and call '.click()'."
            }
        ]
    },
    {
        "id": 2,
        "framework": "pytest",
        "category": "API Automation",
        "title": "Basic API Assertion",
        "instruction": "You have a `response` object from a requests.get() call. Assert that the `status_code` is 200.",
        "initialCode": "def test_api():\n    response = requests.get('https://api.example.com')\n    ",
        "validationRules": [
            {
                "type": "regex",
                "value": "assert\\s+response\\.status_code\\s*==\\s*200",
                "message": "You must use the 'assert' keyword to check if response.status_code == 200."
            }
        ]
    },
    {
        "id": 1001,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 1 (medium)",
        "instruction": "Find the top 5 users who spent the most money overall.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            },
            {
                "type": "regex",
                "value": "(?i)LIMIT",
                "message": "Use LIMIT to restrict the number of results returned."
            }
        ]
    },
    {
        "id": 1002,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 2 (medium)",
        "instruction": "Find users who never placed an order.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)(LEFT JOIN|NOT IN|NOT EXISTS|IS NULL)",
                "message": "Consider using a standard exclusion approach like LEFT JOIN ... IS NULL, NOT IN, or NOT EXISTS."
            }
        ]
    },
    {
        "id": 1003,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 3 (medium)",
        "instruction": "Find the total revenue per month.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)SUM\\s*\\(",
                "message": "Use the SUM() aggregate function to calculate totals."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1004,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 4 (hard)",
        "instruction": "Find the second highest salary among employees.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            },
            {
                "type": "regex",
                "value": "(?i)OFFSET",
                "message": "Use OFFSET to skip the first row(s)."
            }
        ]
    },
    {
        "id": 1005,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 5 (hard)",
        "instruction": "Find employees earning more than their department average.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)AVG\\s*\\(",
                "message": "Use the AVG() aggregate function."
            },
            {
                "type": "regex",
                "value": "(?i)(>|HAVING)",
                "message": "Use > or HAVING for the greater-than condition."
            }
        ]
    },
    {
        "id": 1006,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 6 (medium)",
        "instruction": "List products that were never ordered.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)(LEFT JOIN|NOT IN|NOT EXISTS|IS NULL)",
                "message": "Consider using a standard exclusion approach like LEFT JOIN ... IS NULL, NOT IN, or NOT EXISTS."
            }
        ]
    },
    {
        "id": 1007,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 7 (hard)",
        "instruction": "Find users who made more than 3 orders in a single month.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)(>|HAVING)",
                "message": "Use > or HAVING for the greater-than condition."
            }
        ]
    },
    {
        "id": 1008,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 8 (hard)",
        "instruction": "Find cumulative revenue over time (running total).",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)SUM\\s*\\(",
                "message": "Use the SUM() aggregate function to calculate totals."
            },
            {
                "type": "regex",
                "value": "(?i)(>|HAVING)",
                "message": "Use > or HAVING for the greater-than condition."
            }
        ]
    },
    {
        "id": 1009,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 9 (medium)",
        "instruction": "Find the most sold product by quantity.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1010,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 10 (hard)",
        "instruction": "Rank employees by salary within each department.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1011,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 11 (medium)",
        "instruction": "Find average order value per user.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)AVG\\s*\\(",
                "message": "Use the AVG() aggregate function."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1012,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 12 (hard)",
        "instruction": "Find users who placed consecutive orders within 1 day.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1013,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 13 (hard)",
        "instruction": "Find duplicate emails in users table.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1014,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 14 (medium)",
        "instruction": "Find percentage contribution of each product to total revenue.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)SUM\\s*\\(",
                "message": "Use the SUM() aggregate function to calculate totals."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1015,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 15 (hard)",
        "instruction": "Find department with highest total salary expense.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)SUM\\s*\\(",
                "message": "Use the SUM() aggregate function to calculate totals."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            }
        ]
    },
    {
        "id": 1016,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 16 (medium)",
        "instruction": "Find top 3 products per category by revenue.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            },
            {
                "type": "regex",
                "value": "(?i)LIMIT",
                "message": "Use LIMIT to restrict the number of results returned."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1017,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 17 (hard)",
        "instruction": "Find gap between each employee salary and next highest salary.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1018,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 18 (medium)",
        "instruction": "Find users who logged in but never ordered.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)(LEFT JOIN|NOT IN|NOT EXISTS|IS NULL)",
                "message": "Consider using a standard exclusion approach like LEFT JOIN ... IS NULL, NOT IN, or NOT EXISTS."
            }
        ]
    },
    {
        "id": 1019,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 19 (hard)",
        "instruction": "Find orders where payment amount does not match total_amount.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)SUM\\s*\\(",
                "message": "Use the SUM() aggregate function to calculate totals."
            },
            {
                "type": "regex",
                "value": "(?i)(LEFT JOIN|NOT IN|NOT EXISTS|IS NULL)",
                "message": "Consider using a standard exclusion approach like LEFT JOIN ... IS NULL, NOT IN, or NOT EXISTS."
            }
        ]
    },
    {
        "id": 1020,
        "framework": "SQL",
        "category": "Basics",
        "title": "Task 20 (medium)",
        "instruction": "Find products with stock below average stock.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)AVG\\s*\\(",
                "message": "Use the AVG() aggregate function."
            }
        ]
    },
    {
        "id": 1021,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 21 (hard)",
        "instruction": "Find users who spent more than average user spending.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)AVG\\s*\\(",
                "message": "Use the AVG() aggregate function."
            },
            {
                "type": "regex",
                "value": "(?i)(>|HAVING)",
                "message": "Use > or HAVING for the greater-than condition."
            }
        ]
    },
    {
        "id": 1022,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 22 (hard)",
        "instruction": "Find median salary in employees table.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1023,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 23 (medium)",
        "instruction": "Find daily active users.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1024,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 24 (hard)",
        "instruction": "Find longest streak of consecutive order days per user.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1025,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 25 (medium)",
        "instruction": "Find average salary per department.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)AVG\\s*\\(",
                "message": "Use the AVG() aggregate function."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1026,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 26 (hard)",
        "instruction": "Find the 3rd highest distinct salary.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            }
        ]
    },
    {
        "id": 1027,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 27 (medium)",
        "instruction": "Find total quantity sold per product.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)SUM\\s*\\(",
                "message": "Use the SUM() aggregate function to calculate totals."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1028,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 28 (hard)",
        "instruction": "Find users whose first order was above 500 total_amount.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)SUM\\s*\\(",
                "message": "Use the SUM() aggregate function to calculate totals."
            }
        ]
    },
    {
        "id": 1029,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 29 (medium)",
        "instruction": "Find top country by revenue.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)COUNT\\s*\\(",
                "message": "Use the COUNT() aggregate function."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            },
            {
                "type": "regex",
                "value": "(?i)LIMIT",
                "message": "Use LIMIT to restrict the number of results returned."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1030,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 30 (hard)",
        "instruction": "Find users who increased their spending month over month.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)(>|HAVING)",
                "message": "Use > or HAVING for the greater-than condition."
            }
        ]
    },
    {
        "id": 1031,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 31 (medium)",
        "instruction": "Find employees hired in last 6 months.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1032,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 32 (hard)",
        "instruction": "Find department with most employees.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            }
        ]
    },
    {
        "id": 1033,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 33 (medium)",
        "instruction": "Find orders with more than 5 distinct products.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)(>|HAVING)",
                "message": "Use > or HAVING for the greater-than condition."
            }
        ]
    },
    {
        "id": 1034,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 34 (hard)",
        "instruction": "Find product pairs frequently bought together.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1035,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 35 (medium)",
        "instruction": "Find revenue per category.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1036,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 36 (hard)",
        "instruction": "Find percentage salary increase compared to previous hire.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1037,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 37 (medium)",
        "instruction": "Find users registered but inactive for 90 days.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1038,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 38 (hard)",
        "instruction": "Find users whose spending rank improved each month.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1039,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 39 (medium)",
        "instruction": "Find most used payment method.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            }
        ]
    },
    {
        "id": 1040,
        "framework": "SQL",
        "category": "Filtering",
        "title": "Task 40 (hard)",
        "instruction": "Find revenue growth rate month over month.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)(>|HAVING)",
                "message": "Use > or HAVING for the greater-than condition."
            }
        ]
    },
    {
        "id": 1041,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 41 (medium)",
        "instruction": "Find employees earning in top 10% salary.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            },
            {
                "type": "regex",
                "value": "(?i)LIMIT",
                "message": "Use LIMIT to restrict the number of results returned."
            }
        ]
    },
    {
        "id": 1042,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 42 (hard)",
        "instruction": "Find departments where average salary > company average.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)AVG\\s*\\(",
                "message": "Use the AVG() aggregate function."
            }
        ]
    },
    {
        "id": 1043,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 43 (medium)",
        "instruction": "Find users with no login logs.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1044,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 44 (hard)",
        "instruction": "Find most profitable product (price * quantity - cost assumed).",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)SUM\\s*\\(",
                "message": "Use the SUM() aggregate function to calculate totals."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            }
        ]
    },
    {
        "id": 1045,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 45 (medium)",
        "instruction": "Find orders placed on weekends.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1046,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 46 (hard)",
        "instruction": "Find employees whose salary is within 5% of department max.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1047,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 47 (medium)",
        "instruction": "Find users with highest single order.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            }
        ]
    },
    {
        "id": 1048,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 48 (hard)",
        "instruction": "Find top 3 revenue days per month.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            },
            {
                "type": "regex",
                "value": "(?i)LIMIT",
                "message": "Use LIMIT to restrict the number of results returned."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1049,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 49 (medium)",
        "instruction": "Find users with more than 2 failed payments.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)(>|HAVING)",
                "message": "Use > or HAVING for the greater-than condition."
            }
        ]
    },
    {
        "id": 1050,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 50 (hard)",
        "instruction": "Find churn rate (users inactive for 60+ days).",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1051,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 51 (medium)",
        "instruction": "Find department salary distribution (min, max, avg).",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1052,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 52 (hard)",
        "instruction": "Find employees whose salary doubled compared to previous employee.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1053,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 53 (medium)",
        "instruction": "Find first order date per user.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1054,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 54 (hard)",
        "instruction": "Find users who ordered every month since registration.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1055,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 55 (medium)",
        "instruction": "Find average time between user registration and first order.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)AVG\\s*\\(",
                "message": "Use the AVG() aggregate function."
            }
        ]
    },
    {
        "id": 1056,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 56 (hard)",
        "instruction": "Find department with highest salary variance.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            }
        ]
    },
    {
        "id": 1057,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 57 (medium)",
        "instruction": "Find most recent order per user.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1058,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 58 (hard)",
        "instruction": "Find employees hired before their manager (assume manager_id).",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)SUM\\s*\\(",
                "message": "Use the SUM() aggregate function to calculate totals."
            }
        ]
    },
    {
        "id": 1059,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 59 (medium)",
        "instruction": "Find total payments per method.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)SUM\\s*\\(",
                "message": "Use the SUM() aggregate function to calculate totals."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1060,
        "framework": "SQL",
        "category": "Joins",
        "title": "Task 60 (hard)",
        "instruction": "Find longest gap between employee hire dates.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1061,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 61 (medium)",
        "instruction": "Find products priced above category average.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)AVG\\s*\\(",
                "message": "Use the AVG() aggregate function."
            }
        ]
    },
    {
        "id": 1062,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 62 (hard)",
        "instruction": "Find orders that include products from multiple categories.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1063,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 63 (medium)",
        "instruction": "Find users from countries with no orders.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)COUNT\\s*\\(",
                "message": "Use the COUNT() aggregate function."
            }
        ]
    },
    {
        "id": 1064,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 64 (hard)",
        "instruction": "Find salary percentile rank for each employee.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1065,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 65 (medium)",
        "instruction": "Find monthly order count.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)COUNT\\s*\\(",
                "message": "Use the COUNT() aggregate function."
            }
        ]
    },
    {
        "id": 1066,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 66 (hard)",
        "instruction": "Find products contributing to 80% of revenue (Pareto analysis).",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1067,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 67 (medium)",
        "instruction": "Find departments with fewer than 3 employees.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1068,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 68 (hard)",
        "instruction": "Find consecutive login days per user.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1069,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 69 (medium)",
        "instruction": "Find average product price per category.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)AVG\\s*\\(",
                "message": "Use the AVG() aggregate function."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1070,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 70 (hard)",
        "instruction": "Find duplicate orders by same user on same date.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1071,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 71 (medium)",
        "instruction": "Find top spending user per country.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)COUNT\\s*\\(",
                "message": "Use the COUNT() aggregate function."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            },
            {
                "type": "regex",
                "value": "(?i)LIMIT",
                "message": "Use LIMIT to restrict the number of results returned."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1072,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 72 (hard)",
        "instruction": "Find month with highest revenue spike.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            }
        ]
    },
    {
        "id": 1073,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 73 (medium)",
        "instruction": "Find employees with salary equal to department minimum.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1074,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 74 (hard)",
        "instruction": "Find revenue trend over last 12 months.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)(>|HAVING)",
                "message": "Use > or HAVING for the greater-than condition."
            }
        ]
    },
    {
        "id": 1075,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 75 (medium)",
        "instruction": "Find total stock value per category.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)SUM\\s*\\(",
                "message": "Use the SUM() aggregate function to calculate totals."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1076,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 76 (hard)",
        "instruction": "Find employee salary growth ranking.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1077,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 77 (medium)",
        "instruction": "Find orders without order_items.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1078,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 78 (hard)",
        "instruction": "Find products with declining monthly sales.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1079,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 79 (medium)",
        "instruction": "Find number of new users per month.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1080,
        "framework": "SQL",
        "category": "Aggregation",
        "title": "Task 80 (hard)",
        "instruction": "Find users whose last 3 orders increased in amount.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1081,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 81 (medium)",
        "instruction": "Find revenue per weekday.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1082,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 82 (hard)",
        "instruction": "Find departments with zero employees.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1083,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 83 (medium)",
        "instruction": "Find employees earning below company median.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1084,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 84 (hard)",
        "instruction": "Find cumulative salary cost per department over time.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            },
            {
                "type": "regex",
                "value": "(?i)(>|HAVING)",
                "message": "Use > or HAVING for the greater-than condition."
            }
        ]
    },
    {
        "id": 1085,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 85 (medium)",
        "instruction": "Find highest order per month.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1086,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 86 (hard)",
        "instruction": "Find employees whose salary equals sum of two lowest salaries.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)SUM\\s*\\(",
                "message": "Use the SUM() aggregate function to calculate totals."
            }
        ]
    },
    {
        "id": 1087,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 87 (medium)",
        "instruction": "Find users with average order value above 1000.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)AVG\\s*\\(",
                "message": "Use the AVG() aggregate function."
            }
        ]
    },
    {
        "id": 1088,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 88 (hard)",
        "instruction": "Find most frequent product combinations of 3 items.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            }
        ]
    },
    {
        "id": 1089,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 89 (medium)",
        "instruction": "Find inactive products (not ordered in 6 months).",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)(LEFT JOIN|NOT IN|NOT EXISTS|IS NULL)",
                "message": "Consider using a standard exclusion approach like LEFT JOIN ... IS NULL, NOT IN, or NOT EXISTS."
            }
        ]
    },
    {
        "id": 1090,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 90 (hard)",
        "instruction": "Find revenue standard deviation per month.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1091,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 91 (medium)",
        "instruction": "Find employee tenure in years.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1092,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 92 (hard)",
        "instruction": "Find employees hired on same day across departments.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1093,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 93 (medium)",
        "instruction": "Find country with highest average order value.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)COUNT\\s*\\(",
                "message": "Use the COUNT() aggregate function."
            },
            {
                "type": "regex",
                "value": "(?i)ORDER BY",
                "message": "Sort the results using ORDER BY."
            },
            {
                "type": "regex",
                "value": "(?i)DESC",
                "message": "Sort the results in descending order using DESC."
            },
            {
                "type": "regex",
                "value": "(?i)AVG\\s*\\(",
                "message": "Use the AVG() aggregate function."
            }
        ]
    },
    {
        "id": 1094,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 94 (hard)",
        "instruction": "Find rolling 7-day revenue average.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)AVG\\s*\\(",
                "message": "Use the AVG() aggregate function."
            }
        ]
    },
    {
        "id": 1095,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 95 (medium)",
        "instruction": "Find users with only one order.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1096,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 96 (hard)",
        "instruction": "Find employees with duplicate salaries within department.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1097,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 97 (medium)",
        "instruction": "Find orders above overall average order value.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)AVG\\s*\\(",
                "message": "Use the AVG() aggregate function."
            }
        ]
    },
    {
        "id": 1098,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 98 (hard)",
        "instruction": "Find users who ordered every product category.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Write a complete and valid SQL query (e.g., SELECT ... FROM ...)."
            }
        ]
    },
    {
        "id": 1099,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 99 (medium)",
        "instruction": "Find revenue by quarter.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },
    {
        "id": 1100,
        "framework": "SQL",
        "category": "Advanced",
        "title": "Task 100 (hard)",
        "instruction": "Find longest employee tenure in each department.",
        "initialCode": "SELECT ",
        "validationRules": [
            {
                "type": "regex",
                "value": "(?i)SELECT",
                "message": "Must include a SELECT statement."
            },
            {
                "type": "regex",
                "value": "(?i)GROUP BY",
                "message": "Use GROUP BY to aggregate results per category or group."
            }
        ]
    },

    {
        "id": 2001,
        "framework": "Java",
        "category": "Basics",
        "title": "Reverse a String",
        "instruction": "Write a Java method to reverse a string 'input' using a loop or StringBuilder.",
        "initialCode": "public String reverse(String input) {\n    ",
        "validationRules": [
            {
                "type": "regex",
                "value": "reverse",
                "message": "Use a reverse method or logic."
            }
        ]
    },
    {
        "id": 2002,
        "framework": "Java",
        "category": "Collections",
        "title": "ArrayList Add",
        "instruction": "Create an ArrayList of Strings and add 'Apple' to it.",
        "initialCode": "List<String> list = new ArrayList<>();\n",
        "validationRules": [
            {
                "type": "contains",
                "value": "list.add(\"Apple\")",
                "message": "Use list.add() to add the string."
            }
        ]
    },

    {
        "id": 3001,
        "framework": "JavaScript",
        "category": "ES6+",
        "title": "Array Map",
        "instruction": "Use the .map() function to double each number in the 'nums' array.",
        "initialCode": "const nums = [1, 2, 3];\nconst doubled = ",
        "validationRules": [
            {
                "type": "regex",
                "value": "nums\.map",
                "message": "Use the .map() function."
            }
        ]
    },
    {
        "id": 3002,
        "framework": "JavaScript",
        "category": "Async",
        "title": "Fetch Data",
        "instruction": "Write an async function 'getData' that awaits a fetch call to 'url'.",
        "initialCode": "async function getData(url) {\n    ",
        "validationRules": [
            {
                "type": "contains",
                "value": "await fetch(url)",
                "message": "You must await the fetch call."
            }
        ]
    },
];
