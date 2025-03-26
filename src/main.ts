// Simple Types
// Main primitives = boolean, number, string
// Less common primitives = bigint, symbol

// Type Assignment 1. Explicit 2. Implicit

// 1. Explicit
let firstName: string = "Kagenoudev";
let age: number = 20;
let married: boolean = false;

// 2. Imlicit
let lastName = "Somsin";

// Special Types = any, unknown, never, undefined & null

let array: unknown = [];
array = {};

let x: never = "Mai";

let y: undefined = undefined;
let z: null = null;

// TypeScript Arrays

const names: readonly number[] = [1, 2, 3];
names.push("Mai");
console.log(names);

// Define our tuple

let Tuple: readonly [myNum: number,myBoo: boolean,myString: string ] = [10, true, "Typescript is great"];
let [myNum , myBoo, myStr] = Tuple;
console.log(myNum, myBoo , myStr);

// TypeScript Object Types

const car: {type: string, model: string, year: number } = {
    type: "Honda",
    model: "Civic",
    year: 2025
}

// TypeScript Enums

enum Employees {
  Id, //0
  FirstName, //1
  LastName, //2
  age,//3
  Position //4
}

enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

enum CarLists {
  firstCar = "Honda",
  secondCar = "BMW",
  thirdCar = "Benz",
  fourthCar = "Maclaren"
}

console.log(CarLists.firstCar);
