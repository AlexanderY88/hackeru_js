console.log("Alex");
console.log("Alexander 1");
console.log("Hello");
console.log("Hey there!"); // This line was added to demonstrate a change
console.log("Hello2");
console.log("Alex11123");
/*
npm i -g typescript
חד פעמית, לא צריך להריץ שוב

tsc --init
tsc script.ts --watch
להריץ עבור כל פרויקט שמכיל קובץ ts

*/
// types for variables 
// string
var name = "Alex";
// number
var age = 30;
// boolean
var isStudent = true;
//name = 123; // This will cause a TypeScript error because 'name' is expected to be a string
// array
var numbers = [1, 2, 3, 4, 5];
// tuple
var person = ["Alex", 30]; // A tuple with a string and a number
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// using enum
var myColor = Color.Green; // myColor will be 1 (index of Green in the enum)
// any type
var randomValue = "Hello"; // can be any type
