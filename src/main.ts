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

let Tuple: readonly [myNum: number, myBoo: boolean, myString: string] = [
  10,
  true,
  "Typescript is great",
];
let [myNum, myBoo, myStr] = Tuple;
console.log(myNum, myBoo, myStr);

// TypeScript Object Types

const car: { type: string; model: string; year: number } = {
  type: "Honda",
  model: "Civic",
  year: 2025,
};

// TypeScript Enums

enum Employees {
  Id, //0
  FirstName, //1
  LastName, //2
  age, //3
  Position, //4
}

enum StatusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

enum CarLists {
  firstCar = "Honda",
  secondCar = "BMW",
  thirdCar = "Benz",
  fourthCar = "Maclaren",
}

console.log(CarLists.firstCar);

// Type Aliases

type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2023;
const carType: CarType = "Honda";
const carModel: CarModel = "Civic";
const myCar: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

// Typescript Interfaces

interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const reactangel: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};

// Union Types

function statusCode(code: string | number) {
  console.log(`My status code is ${code}`);
}

statusCode(404);
statusCode("404");

// Functions

function getTime(): number {
  return new Date().getTime();
}

function printHellow(): void {
  console.log("Hello!");
}

function multiply(a: number, b: number, c: number = 10) {
  return a * b + c;
}

function divide({ divided, dividsor }: { divided: number; divisor: number }) {
  return divided / dividsor;
}

function add(a: number, b: number, ...arr: number[]) {

}

// Typescript Casting
// as

let someVar: unknown = 'hello';
console.log((<string>someVar).length);

// Typescirpt Classes

class Person {
  private name: string;

  public constructor(name: string){
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Mai");
console.log(person.getName());

// Typescript Generics

function identity<T>(value: T): T {
  return value;
}

const result = identity<number>(123);
const resultStr = identity("I love typescript");
console.log(result);
console.log(typeof(resultStr));




