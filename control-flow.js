/**
 * CONTROL FLOW:
 * 
 * 0:  Control Flow is the order in which statements are executed in a program.
 * By default, JavaScript runs code from top to bottom and left to right.
 * Control flow statements let you change that order, based on conditions, loops or keywords.
 *
 * 1: Conditional Control Flow. Conditions let you make decisions using: if, if...else, switch, ternary (? :)
 * 
 * 2: Loops let you run code multiple times using: for, while, do...while
 * 
 * 3: JavaScript Is Single-Threaded. JavaScript runs on a single thread. It can only do one thing at a time. 
 * Every task has to wait for the previous one to finish. This can freeze an application during slow operations 
 * (like file requests).
 * 
 */
// 1. Conditional Control Flow //
let text = "Unknown";

if (age >= 18) {
  text = "Adult";
} else {
  text = "Minor";
}

// 2. Repetition Control Flow //
// Repeat flow until a condition (i < 5) is false.
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
