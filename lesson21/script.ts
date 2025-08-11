let myName : string = "Alex";
console.log(myName);

let age: number = 92;
let isLoggedIn: boolean = false;
console.log(age, isLoggedIn);

// more than one type in a variable
let price : number | string = 100;
// it's possible to create new variable type and set more than one variable type to it
type alex = string | boolean;
let data : alex = false;

// super types
// any: can be any type like in simple js 
let animal : any = [];
animal = 5;
animal = true;
animal = "Mizzy";
animal = [1, 2, 3];
console.log(animal);


// let value: any = 80;
// value.toUpperCase(); // error after compiling - in the web page

// let value2: unknown = 80;
// value2.toUpperCase(); // error in the time of writing code - can be useful to avoid a bug


// casting
let id: unknown = "1234"; // => console.log(id.length);  will be error

console.log((id as string).length); // => (id as string).length = casting unknown to string, than we can use string methods like length without error 


// arrays
let names : string[] = ["Alex", "Bob", "Charlie"];
console.log(names);
// names.push(7);  => error because 7 is not a string
// if crate an array like this: let names : string[]  | number[] .... => will not been error when:  names.push(7);

let ages: Array<number> = [10, 20, 30]; // another way to create array,calls: generics

// function check even or odd
function checkEven(num: number) : boolean {
   if (num % 2 === 0) return true;
   return false;
}

console.log(checkEven(8));
console.log(checkEven(9));

// function without parameters ir return
function printMSG(msg: string): void {
    console.log(msg);
};
printMSG("Hello, TypeScript!");


function welcome(username: string = "Margol"): void {
    alert(`Welcome, ${username}!`);
}

// welcome("Alex");

// JS object
let user = {
    id: "123",
    name: "Margol",
    age: 30,
    isLoggedIn: true
};
// TS object
let user2 : {id: string, username: string, age?: number, isLoggedIn: boolean} = {
    id: "123",
    username: "Margol",
    age: 30,
    isLoggedIn: true
};
// in the object in typescript must declare the variables 
// age?: number   => means that age is not mandatory, for literal objects when the same constructor in use at more than one place
// design patterns is: interface that means the same code is in use at a lot of places, when it's possible


// interface for TS (not exist in js ), or Literal object
interface User {
    id:string;
    username: string;
    age?: number;
    isLoggedIn: boolean;
}

let user3 : User = {
    id: "456",
    username: "Nissim",
    age: 70,
    isLoggedIn: false
}

// array of users
let users: User[] = [
     {
    id: "12",
    username: "Sarit",
    age: 42,
    isLoggedIn: false,
  },
  {
    id: "13",
    username: "Zohar",
    isLoggedIn: false,
  },
];

console.log(users);

// oop - object oriented programming 


// enum - let create constant variables that cannot be changed
enum Directions {
    North,
    East,
    West,
    South
} 

enum StatusCodes {
    Success = 200,
    Created = 201,
    NotFound = 404,
    BadRequest = 400,
    InternalServerError = 500
}

console.log(StatusCodes.Created);

// Exercise 1
interface Employee {
    id: string;
    name: string;
    age?: number;
    salary: number;
    department: string;
}

let employees: Employee[] = [
    {
        id: "1",
        name: "Rivka",
        age: 30,
        salary: 50000,
        department: "HR"
    },
    {
        id: "2",
        name: "Avi",
        age: 48,
        salary: 37000,
        department: "Phone assistant"
    },
    {
        id: "3",
        name: "Margol",
        salary: 90000,
        department: "Director"}
];

// my with copilot suggestion

// function showUsers(array: Employee[]): void {
//     for (let i : number = 0; i < array.length; i++) {
//         console.log(`${array[i].name}, ${array[i].salary}`);
//     }
// }

// showUsers(employees);

for(let employee of employees) console.log(employee.name, employee.salary);

