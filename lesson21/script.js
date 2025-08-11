var myName = "Alex";
console.log(myName);
var age = 92;
var isLoggedIn = false;
console.log(age, isLoggedIn);
// more than one type in a variable
var price = 100;
var data = false;
// super types
// any: can be any type like in simple js 
var animal = [];
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
var id = "1234"; // => console.log(id.length);  will be error
console.log(id.length); // => (id as string).length = casting unknown to string, than we can use string methods like length without error 
// arrays
var names = ["Alex", "Bob", "Charlie"];
console.log(names);
// names.push(7);  => error because 7 is not a string
// if crate an array like this: let names : string[]  | number[] .... => will not been error when:  names.push(7);
var ages = [10, 20, 30]; // another way to create array,calls: generics
// function check even or odd
function checkEven(num) {
    if (num % 2 === 0)
        return true;
    return false;
}
console.log(checkEven(8));
console.log(checkEven(9));
// function without parameters ir return
function printMSG(msg) {
    console.log(msg);
}
;
printMSG("Hello, TypeScript!");
function welcome(username) {
    if (username === void 0) { username = "Margol"; }
    alert("Welcome, ".concat(username, "!"));
}
// welcome("Alex");
// JS object
var user = {
    id: "123",
    name: "Margol",
    age: 30,
    isLoggedIn: true
};
// TS object
var user2 = {
    id: "123",
    username: "Margol",
    age: 30,
    isLoggedIn: true
};
var user3 = {
    id: "456",
    username: "Nissim",
    age: 70,
    isLoggedIn: false
};
// array of users
var users = [
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
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 0] = "North";
    Directions[Directions["East"] = 1] = "East";
    Directions[Directions["West"] = 2] = "West";
    Directions[Directions["South"] = 3] = "South";
})(Directions || (Directions = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Created"] = 201] = "Created";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["InternalServerError"] = 500] = "InternalServerError";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.Created);
var employees = [
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
        department: "Director"
    }
];
// my with copilot suggestion
// function showUsers(array: Employee[]): void {
//     for (let i : number = 0; i < array.length; i++) {
//         console.log(`${array[i].name}, ${array[i].salary}`);
//     }
// }
// showUsers(employees);
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    console.log(employee.name, employee.salary);
}
