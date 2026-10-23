/**
 * DATATYPES:
 * 
 * 0. A JavaScript variable can hold 8 types of data. 7 Primitive Data Types and 1 Object Data Type.
 * The Object data type can hold many different object types.
 * 
 * 1. Data Types: Number: A number representing a numeric value
 * Bigint:	A number representing a large integer
 * String:	A text of characters enclosed in quotes
 * Boolean:	A data type representing true or false
 * Undefined:	A variable with no assigned value
 * Null:	A value representing object absence
 * Symbol:	A unique primitive identifier
 * Object:	A collection of key-value pairs of data
 * 
 * 2. When adding a number and a string, JavaScript will treat the number as a string.
 * 
 * 3. You can use the JavaScript typeof operator to find the type of a JavaScript variable.
 * The typeof operator returns the type of a variable or an expression:
 * 
 * 
 */
// 1. Data Types Examples //
// Number
let length = 16;
let weight = 7.5;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
// Strings
let color = "Yellow";
let lastName = "Johnson";

// Boolean
let x = true;
let y = false;
// Undefined
let x;
let y;
// Null
let x = null;
let y = null;
// Symbol
const x = Symbol();
const y = Symbol();
// Object
const person = {firstName:"John", lastName:"Doe"};
// Array Object
const cars = ["Saab", "Volvo", "BMW"];
// Date Object
const date = new Date("2022-03-25");

// 2. Adding number to a string, number becomes a string //
let x = 16 + "Volvo"; // => '16Volvo'

// 3. Type of Operator //
// The typeof operator returns the type of a variable or an expression
typeof ""          // Returns "string"
typeof "John"      // Returns "string"
typeof "John Doe"  // Returns "string"