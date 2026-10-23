/**
 * LOOPS:
 * 
 * 0: Loops in JavaScript allow a block of code to run multiple times as long as a given condition is satisfied. 
 * They help reduce repetition and make programs more efficient and organized.
 * Loops continue running until the condition becomes false.
 * They are useful for iterating over arrays, strings, and ranges of values.
 * 
 * 1. In JavaScript, there are three types of Loops : for loop, for in loop, and while loop
 * 
 * 2. for Loop: The for loop repeats a block of code a specific number of times. 
 * It contains initialization, condition, and increment/decrement in one line. 
 * Initialization condition: Here, we initialize the variable in use. It marks the start of a for loop. 
 * An already declared variable can be used or a variable can be declared, local to loop only.
 * Testing Condition: It is used for testing the exit condition for a loop. It must return a boolean value. 
 * It is also an Entry Control Loop as the condition is checked prior to the execution of the loop statements.
 * Statement execution: Once the condition is evaluated to true, the statements in the loop body are executed.
 * Increment/ Decrement: It is used for updating the variable for next iteration.
 * Loop termination:When the condition becomes false, the loop terminates marking the end of its life cycle.
 * 
 * 3. for in loop: The for-in loop iterates over the enumerable keys of an object.
 * For each loop: The forEach loop executes a provided function once for each element in an array.
 * 
 * 4. while Loop: The while loop executes as long as the condition is true. It can be thought of as a repeating 
 * if statement. While loop starts with the checking of Boolean condition. If it evaluated to true, then the loop body 
 * statements are executed otherwise first statement following the loop is executed. For this reason it is also called 
 * Entry control loop. Once the condition is evaluated to true, the statements in the loop body are executed. 
 * Normally the statements contain an update value for the variable being processed for the next iteration.
 * When the condition becomes false, the loop terminates which marks the end of its life cycle.
 * 
 * 5. do-while Loop: The do-while loop is similar to while loop except it executes the code block at least once 
 * before checking the condition. do while loop starts with the execution of the statement. 
 * There is no checking of any condition for the first time. After the execution of the statements, 
 * and update of the variable value, the condition is checked for true or false value. 
 * If it is evaluated to true, next iteration of loop starts.
 * When the condition becomes false, the loop terminates which marks the end of its life cycle.
 * It is important to note that the do-while loop will execute its statements atleast once before any 
 * condition is checked, and therefore is an example of exit control loop.
 * 
 */
// 2. For Loop //
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }                                         // ===> The number is 0
                                                 //The number is 1
                                                //The number is 2
                                                //The number is 3
                                                //The number is 4

// 3. For In Loop //
const person = {fname:"John", lname:"Doe", age:25};

let text = "";                      
for (let x in person) {             // A for in statement loops through the properties of a person object:
  text += person[x];                // John Doe 25
}

// 4. While Loop //
while (i < 4) {                     // The number is 0
    text += "The number is " + i;   // The number is 1
    i++;                            // The number is 2
  }                                 // The number is 3

// 5. Do While Loop //
let text = "";
let i = 0;
do {
  text += i + "<br>";     // => 0
  i++;                    // => 1
}                         // => 2
while (i < 5);            // => 3
                          // => 4
  