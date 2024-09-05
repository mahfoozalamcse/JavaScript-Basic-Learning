//  Primitive  data types in Java Script

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt  

// Note => they have change not reflect store in stack

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol('323');
const anotherId = Symbol('323');  // symbol is unique

console.log(id === anotherId);  // false

const bigNumber = 9956543576654356754n



// Reference (Non primitive)  // change original change reflected , Note => store in heap

//  Array, Objects, Functions

// const heros = ["raj", "shyam", "rock"];
// let myObj = {
//     name: "mahfooz",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello mahfooz");
// }

// console.log(typeof anotherId);

