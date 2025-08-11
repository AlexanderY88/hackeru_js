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
let name : string = "Alex";
// number
let age : number = 30;
// boolean
let isStudent : boolean = true;

//name = 123; // This will cause a TypeScript error because 'name' is expected to be a string
// array
let numbers : number[] = [1, 2, 3, 4, 5];

// tuple
let person : [string, number] = ["Alex", 30]; // A tuple with a string and a number

// enum
enum Color {
    Red,
    Green,
    Blue
}

// using enum
let myColor : Color = Color.Green; // myColor will be 1 (index of Green in the enum)

// any type
let randomValue : any = "Hello"; // can be any type