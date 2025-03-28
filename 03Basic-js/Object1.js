// singleton 
Object.create

// object literals 

const mySym = Symbol("keys1") 


const JsUser = {
    name: "Mahfooz",
    "full name": "Mahfooz Alam",
    [mySym]: "mykeys1",
    age: 21,
    location: "Varansi",
    email: "mahfooz@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Friday", "Sunday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])  // remember symbol access  and creation
 
JsUser.email = "mahfooz@openai.com"
// Object.freeze(JsUser)  // you not add after freez
JsUser.email = "mahfooz@microsoft.com"
 console.log(JsUser);

JsUser.greetone = function(){
    console.log("Hello JS user");
}
JsUser.greetTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetone());
console.log(JsUser.greetTwo());
