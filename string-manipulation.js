/**
 * STRING MANIPULATION:
 * 
 * 0: Javascript strings are primitive and immutable: All string methods produce a new string without altering the 
 * original string.
 * 
 * 1. The length property returns the length of a string.
 * 
 * 2. Concat() You can add two or more strings using concat()
 * 
 * 2. xtracting String Characters. There are 4 methods for extracting string characters:
 * The at(position) Method
 * The charAt(position) Method
 * The charCodeAt(position) Method
 * Using property access [] like in arrays
 * 
 * 3. Extracting String Parts. There are 3 methods for extracting a part of a string:
 * slice(start, end)
 * substring(start, end)
 * substr(start, length) (not used very much anymore)
 * 
 * 4. Converting to Upper and Lower Case. A string is converted to upper case with toUpperCase():
 * A string is converted to lower case with toLowerCase():
 * 
 * 5. JavaScript String trim() The trim() method removes whitespace from both sides of a string:
 * 
 * 6. JavaScript String repeat(),The repeat() method returns a string with a number of copies of a string.
 * The repeat() method returns a new string.
 * The repeat() method does not change the original string.
 * 
 * 7. Replacing String Content. The replace() method replaces a specified value with another value in a string:
 * The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
 * If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
 * 
 * 8. JavaScript String split() A string can be converted to an array with the split() method:
 * 
 * 
 */
// 1. Length Property //
const arr = ['fox', 'chicken', 'pig'];
var x = array.length;       // => 3

// 2. Concat ()
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);   // => Hello World

// 2. Xtracting String Characters //
// The charAt() method returns the character at a specified index (position) in a string:
let text = "HELLO WORLD";
let char = text.charAt(0);      // => H
// Property Access
let text = "HELLO WORLD";
let char = text[0];     // => H

// 3. Xtracting String Parts //
// Slice()
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);   // => Banana 
// Substring
// substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Apple, Banana, Kiwi";    // The substring() method extract a part of a string and returns 
let part = str.substring(7, 13);    // the extracted parts in a new string:
                                    // => Banana

// 4. Upper Case //
let text1 = "Hello World!";
let text2 = text1.toUpperCase();    // => HELLO WORLD
// Lower Case
let text1 = "Hello World!";       
let text2 = text1.toLowerCase();    // => hello world

// 5. Trim Method
let text1 = "      Hello World!      ";
let text2 = text1.trim();           // => Length text1 = 22
                                    // => Length text2 = 12

// 6. Repeat Method //
let text = "Hello world!";
let result = text.repeat(2);        // => Hello world!Hello world!

// 7. Replace //
// By default, the replace() method replaces only the first match. You can use replaceAll() to replace all matches 
let text = "Please visit Microsoft!";               
let newText = text.replace("Microsoft", "W3Schools");   // => Please visit W3Schools!

// 8. Split() //
let text = "The quick brown fox.";
const myArr = text.split(" ");      // => ['The', 'quick', 'brown', 'fox'];


