/* ----- Number----

const score = 500;
console.log(score);

const balance = new Number(300);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 423.8966

console.log(otherNumber.toPrecision(5));

const hundreds = 200000000
console.log(hundreds.toLocaleString('en-IN'));



   Output - 
   500
   [Number: 300]
   3
   300.00
   423.90
   20,00,00,000

   */
  
  // Number

console.log(Math);
console.log(Math.abs(-7));
console.log(Math.round(8.6));
console.log(Math.ceil(8.2));
console.log(Math.floor(7.9));
console.log(Math.min(4, 67, 6, 8));
console.log(Math.max(4, 3, 12, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

/*  Output =>

Object [Math] {}
7
9
9
7
4
12
0.1529854799592456
2.6583718055446983
6
2
*/