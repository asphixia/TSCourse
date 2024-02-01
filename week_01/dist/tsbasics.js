"use strict";
//task 1:
let num = 5;
let strang = "Hello";
let bool = true;
let arr = [1, 2, 3];
let diffArr = [4, 5, 6];
let all = "could be anything";
//task 2:
var Day;
(function (Day) {
    Day[Day["SUNDAY"] = 0] = "SUNDAY";
    Day[Day["MONDAY"] = 1] = "MONDAY";
    Day["TUESDAY"] = "TUESDAY";
    Day[Day["WEDNESDAY"] = 3] = "WEDNESDAY";
    Day[Day["THURSDAY"] = 4] = "THURSDAY";
    Day[Day["FRIDAY"] = 5] = "FRIDAY";
    Day[Day["SATURDAY"] = 6] = "SATURDAY";
})(Day || (Day = {}));
//task 3:
class Person {
    constructor(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
const personInstance = new Person("John Doe", "john.doe@example.com", 30);
class Employee extends Person {
    constructor(name, email, age, salary) {
        super(name, email, age);
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        this._salary = value;
    }
}
const employeeInstance = new Employee("Jane Doe", "jane.doe@example.com", 28, 50000);
// task 4:
let someValue = "this is a string";
let strLength = someValue.length;
let strLengthAngle = someValue.length;
// task 5:
function sum(a, b) {
    return a + b;
}
//task 6:
let http200 = [200, "OK"];
let http400 = [400, "Bad Request"];
let http404 = [404, "Not Found"];
let http500 = [500, "Internal Server Error"];
let personTuple = ["John Doe", 30, "john.doe@example.com"];
// task 7:
function printValue(value) {
    console.log(value);
}
printValue(123);
printValue("Hello TypeScript");
// task 8:
function getFirstElement(arr) {
    return arr[0];
}
function combineObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
// task 9:
let numbersArray = [1, 2, 3, 4, 5];
let ticTacToeBoard = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];
// task 10:
// Part 1
// A variable that might be null or undefined
let nullableValue = "Hello";
// Use the exclamation mark to assert that the value is non-null
let nonNullableValue = nullableValue;
console.log(nonNullableValue); // Output: Hello
// Part 2
// A variable that might be null or undefined
let myString = "placeholder";
// Use the exclamation mark to assert that the value is non-null
let lemgth = myString.length;
// task 11:
// Part 1
// A function that takes an optional parameter
function printName(name) {
    console.log(name);
}
// Call the function without a parameter
printName(); // Output: undefined
// Call the function with a parameter
printName("John"); // Output: John
// Create a person object with an age property
const person = {
    name: "John",
    age: 30
};
// Create a person object without an age property
const personWithoutAge = {
    name: "Jane"
};
// task 12:
function doubleOrEcho(value) {
    if (typeof value === "string") {
        return value;
    }
    else {
        return value * 2;
    }
}
// task 13:
const anyVariable = 14;
const myAnyToStr = anyVariable;
const myAnyToStrUseAngle = anyVariable;
// task 14:
function getDirection(direction) {
    switch (direction) {
        case "left": return 1;
        case "right": return 2;
        case "up": return 3;
        case "down": return 4;
        default: throw new Error("Invalid direction");
    }
}
function interact(creature) {
    if ("eat" in creature) {
        return creature.eat();
    }
    else {
        return creature.fly();
    }
}
// task 16:
class CarPerson {
    constructor(name) {
        this.name = name;
    }
}
class Car {
    constructor(model) {
        this.model = model;
    }
}
function identify(instance) {
    if (instance instanceof Person) {
        return instance.name;
    }
    else {
        return instance.model;
    }
}
// write a type predicate to narrow the type of the fish parameter
function isFish(pet) {
    return pet.swim !== undefined;
}
function howToMove(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
const psInterface = {
    name: "John Doe",
    "age": 30
};
function getPersonStudentInfo(person, student) {
    return { ...person, ...student };
}
