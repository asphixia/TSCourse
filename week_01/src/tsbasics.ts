//task 1:
let num: number = 5;
let strang: string = "Hello";
let bool: boolean = true;
let arr: number[] = [1, 2, 3];
let diffArr: Array<number> = [4, 5, 6];
let all: any = "could be anything";

//task 2:
enum Day {
    SUNDAY = 0,
    MONDAY = 1,
    TUESDAY = "TUESDAY",
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6    
}   

type DayOfWeek = "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY";

//task 3:
class Person {
    private _name: string;
    private readonly _email: string;
    private _age: number;

    constructor(name: string, email: string, age: number) {
        this._name = name;
        this._email = email;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}

const personInstance = new Person("John Doe", "john.doe@example.com", 30);

class Employee extends Person {
    private _salary: number;

    constructor(name: string, email: string, age: number, salary: number) {
        super(name, email, age); 
        this._salary = salary;
    }


    get salary(): number {
        return this._salary;
    }

   
    set salary(value: number) {
        this._salary = value;
    }
}
const employeeInstance = new Employee("Jane Doe", "jane.doe@example.com", 28, 50000);

// task 4:
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
let strLengthAngle: number = (<string>someValue).length;

// task 5:
function sum(a: number, b: number): number {
    return a + b;
}
//task 6:

let http200: [number, string] = [200, "OK"];
let http400: [number, string] = [400, "Bad Request"];
let http404: [number, string] = [404, "Not Found"];
let http500: [number, string] = [500, "Internal Server Error"];

let personTuple: [string, number, string] = ["John Doe", 30, "john.doe@example.com"];

// task 7:
function printValue(value: number | string) {
    console.log(value);
}

type PersonTuple = [string, number | string, string];

printValue(123); 
printValue("Hello TypeScript"); 

// task 8:
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

function combineObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// task 9:
let numbersArray: Array<number> = [1, 2, 3, 4, 5];

let ticTacToeBoard: string[][] = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];

// task 10:
 // Part 1
 // A variable that might be null or undefined
 let nullableValue: string | null | undefined = "Hello";

 // Use the exclamation mark to assert that the value is non-null
 let nonNullableValue: string = nullableValue!;

 console.log(nonNullableValue!); // Output: Hello

// Part 2
// A variable that might be null or undefined
let myString: string | undefined = "placeholder"
// Use the exclamation mark to assert that the value is non-null
let lemgth: number = myString!.length; 

// task 11:
// Part 1
// A function that takes an optional parameter
function printName(name?: string) {
    console.log(name);
  }
  
  // Call the function without a parameter
  printName(); // Output: undefined
  // Call the function with a parameter
  printName("John"); // Output: John
  
  // Part 2
  // A type alias with an optional age property
  type NewPerson = {
    name: string;
    age?: number;
  };
  
  // Create a person object with an age property
  const person: NewPerson = {
    name: "John",
    age: 30
  }
  // Create a person object without an age property
    const personWithoutAge: NewPerson = {
        name: "Jane"
    }

// task 12:
function doubleOrEcho(value: string | number): string | number {
    if (typeof value === "string") {
        return value;
    } else {
        return value * 2;
    }
}

// task 13:
const anyVariable: any = 14
const myAnyToStr = anyVariable as string 
const myAnyToStrUseAngle = <string>anyVariable

// task 14:
function getDirection(direction: "left" | "right" | "up" | "down"): number {
    switch (direction) {
        case "left": return 1;
        case "right": return 2;
        case "up": return 3;
        case "down": return 4;
        default: throw new Error("Invalid direction");
    }
}

// task 15:
type Human = { eat: Function};
type Alien = { fly: Function};

function interact(creature: Human | Alien) {
    if ("eat" in creature) {
        return creature.eat();
    } else {
        return creature.fly();
    }
}

// task 16:
class CarPerson{
    name: string;
    constructor(name: string) {
        this.name = name
    }
}

class Car {
    model: string
    constructor(model: string) {
      this.model = model
    }
  }

function identify(instance: Person | Car): string {
    if (instance instanceof Person) {
        return instance.name;
    } else {
        return instance.model;
    }
}  
  
// task 17:

interface Bird {
    fly(): void;
    layEggs(): void;
  }
  
  interface Fish {
    swim(): void;
    layEggs(): void;
  }
  
  // write a type predicate to narrow the type of the fish parameter
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function howToMove(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
}

// task 18:
interface PersonInterface {
    name: string;
    [key: string]: string | number
}
const psInterface: PersonInterface = {
    name: "John Doe",
    "age": 30
};

// task 19:
interface OtherPersonInterface {
    name: string;
}

interface StudentInterface {
    studentId: number;
}
function getPersonStudentInfo(person: OtherPersonInterface, student: StudentInterface): OtherPersonInterface & StudentInterface {
    return { ...person, ...student };
}

