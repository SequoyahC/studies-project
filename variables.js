/**
 * VARIABLES:
 * 
 * 0: JavaScript variables are containers for data. JavaScript variables can be declared in 4 ways:
 * Modern JavaScript: Using let, using const. Old Javascript only had var. You can also declare variables automatically.
 * 
 * 1. After the declaration, the variable has no value (technically it is undefined). You can declare many variables 
 * in one statement. Start the statement with let or const and separate the variables by comma:
 * 
 * 2. When to Use var, let, or const? 
 * Always declare variables
 * Always use const if the value should not be changed
 * Always use const if the type should not be changed (Arrays and Objects)
 * Only use let if you cannot use const
 * Avoid using var.
 * 
 * 3. JavaScript Identifiers
 * Variables are identified with names called identifiers. Names can be short like x, y, z. Names can be descriptive 
 * like age, sum, carName. The rules for constructing names (identifiers) are:
 * Names can contain letters, digits, underscores, and dollar signs.
 * Names must begin with a letter, a $ sign or an underscore (_).
 * Names are case sensitive (X is different from x).
 * Reserved words (JavaScript keywords) cannot be used as names.
 * JavaScript Underscore (_) JavaScript treats underscore as a letter. Identifiers containing _ are valid variable names.
 * JavaScript Dollar Sign $ JavaScript also treats a dollar sign as a letter.
 * 
 * 4. Declaring a Variable Using const. Always use const if the value should not be changed
 * 
 * 
 */
// let //
// Only use let if you cannot use const
// can be reassigned
let x = 5;
let y = 6;
let z = x + y;  // => 11

// const //
// Always use const if the value should not be changed
// Always use const if the type should not be changed (Arrays and Objects)
const arr1 = [8, 6, 7, 5, 3, 0, 9];
const person = {name: "Sequoyah",
age: 30,
tired: 'yes'
}

// 1. Undefined Variable //
let x;
// Declaring Multiple Variables in One Line //
let person = "John Doe", carName = "Volvo", price = 200;

// 3. Variable Names //
let arr3 = [1, 2, 2, 3];
const firstName = "Becca";
let $ = "Hello World";
let _lastName = "Johnson";
