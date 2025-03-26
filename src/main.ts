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
