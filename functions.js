/**
 * FUNCTIONS:
 * 
 * 0: Functions in JavaScript are reusable blocks of code designed to perform specific tasks. 
 * They allow you to organize, reuse, and modularize code. They can take inputs, perform actions, and return outputs.
 * 
 * 1. There are two phases to using functions: declaration/definition and invoking/calling/executing/applying the function. 
 * You decalre a function using the function keyword. Followed by the function name, followed by parentheses ( ),
 * followed by brackets { } The function name follows the naming rules for variables. 
 * Code to be executed is listed inside curly brackets: { }
 * Functions are executed when they are called or invoked. You call a function by adding parentheses to its name like: name()
 * 
 * 2. In functions, parameters are placeholders defined in the function, while arguments are the actual values you 
 * pass when calling the function. Optional parameters are listed inside parentheses: ( p1, p2, ... )
 * 
 * 3. Default parameters are used when no argument is provided during the function call.
 * If no value is passed, the function automatically uses the default value. Often used in recursion.
 * 
 * 4. Function Input and Output. The most useful functions work like this:
 * Parameters - The names listed in the function definition
 * Arguments - The values sent to the function when it is called
 * Function Code - The work done inside the function
 * Return Output - The value returned from the function
 * 
 * 5. The return statement is used to send a result back from a function. When return executes, the function 
 * stops running at that point. The returned value can be stored in a variable or used directly.
 * 
 * 6. Local Variables. Variables declared within a JavaScript function, become LOCAL to the function.
 * Local variables can only be accessed from within the function.
 * 
 * 7. Functions can be used as variables, in all types of formulas, assignments, and calculations.
 * 
 * 8. Function Types: 
 * Named Function- A function that has its own name when declared. It’s easy to reuse 
 * and debug because the name shows up in error messages or stack traces. 
 * Anonymous Function- An anonymous function 
 * is a function defined without an explicit name. It is commonly used as a callback or assigned to a variable.
 * Function Expression- A function expression is a function created as part of an expression and assigned to a 
 * variable or passed to another function. It can be named or anonymous.
 * Arrow Function (ES6)- A new way to write functions using the => syntax. They are shorter and do not have their 
 * own this binding, which makes them useful in some cases.
 * Immediately Invoked Function Expression (IIFE)- IIFE functions are executed immediately after their definition. 
 * They are often used to create isolated scopes.
 * Callback Functions- A callback function is passed as an argument to another function and is executed after 
 * the completion of that function.
 * Constructor Function- A special type of function used to create multiple objects with the same structure. 
 * It’s called with the new keyword.
 * Nested Functions- functions defined within other functions are called nested functions. 
 * They have access to the variables of their parent function.
 * 
 * 9. Higher Order Functions: A function that either takes another function as a parameter or returns another function. 
 * These are common in JavaScript (e.g., map, filter, reduce).
 * Recursive Function- A function that calls itself until a condition is met. Very useful for problems like factorial, 
 * Fibonacci, or tree traversals.
 * 
 * 10. Pure Functions- return the same output for the same inputs and do not produce side effects. 
 * This ensures consistent and predictable behavior. Does not modify or rely on any external variables or state.
 * Often works with immutable data(like strings and numbers), which improves reliability and prevents side effects.
 * Independent of external state, making functions easy to test and highly reusable.
 * 
 * 
 */
// 1. Function Definition Syntax //
// one line version
function sayHello() { return "Hello World"; }
// more common version
function sayHello() {
  return "Hello World";
}

// 3. Parameters & Default Parameters //
// Parameters
function sweet(array){
  return array[i] + 'is sweet!';
}
// Default Parameters
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet();
greet("Aman"); 

// 4. Function Input and Output //
function greet(name) {        // parameter: name
  return "Hello " + name;     // function code: return "Hello" + name;
}                             // return value: "Hello Riya"
greet("Riya");                // argument: "Riya"

// 6. Local Variables //
// code here can NOT use carName
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}
// code here can NOT use carName

// 7. Functions can be Variables //
let x = toCelsius(77);    
let text = "The temperature is " + x + " Celsius";

// 9. Higher Order Functions //
// map
const n = [1, 2, 3, 4, 5];
const square = n.map((num) => num * num);
console.log(square); // ========> [1,4,9,16,25]
 
// filter
const n = [1, 2, 3, 4, 5];
const even = n.filter((num) => num % 2 === 0);
console.log(even); // ==========> [2,4]
// reduce
const n = [1, 2, 3, 4, 5];
const even = n.filter((num) => num % 2 === 0);
console.log(even); // ============> 15

// 10. Pure Functions //
function add(a, b) {    // no mutations, no side effects
  return a + b;
}
console.log(add(2, 3)); // =============> 5
console.log(add(2, 3)); // =============> 5
