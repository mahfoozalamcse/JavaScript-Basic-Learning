// Dates practice

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
      
    // Output =>
    //    Thu Sep 05 2024 13:54:54 GMT+0000 (Coordinated Universal Time)
    //    Thu Sep 05 2024
    //    9/5/2024, 1:54:54 PM
    //    object

// let myCreatedDate = new Date(2024, 0, 5)  // indexing from zero of the month
let myCreatedDate = new Date(2024, 0, 11, 5, 3)
// let myCreatedDate = new Date("2024-09-14")
// let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
/*
  Output =>
    2024-09-05T14:07:57.708Z
    9
    4
*/
 
`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
