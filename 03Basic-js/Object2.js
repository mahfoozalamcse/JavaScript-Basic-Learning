//const tinderUser = new Object()
const mingle_User= {}

mingle_User.id = "123abc"
mingle_User.name = "raj"
mingle_User.isLoggedIn = true;

console.log(mingle_User);

 // output =>  { id: '123abc', name: 'raj', isLoggedIn: true }


// const regularUser = {
//     email: "mahfoozma@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "mahfooz",
//             lastname: "alam"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 }
// const obj5 = Object.assign({}, obj1, obj2, obj3)

// const obj6 = {...obj1, ...obj2}
// console.log(obj4);
// console.log(obj5);
// console.log(obj6);





const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
console.log(users);

console.log(mingle_User);

console.log(Object.keys(mingle_User));
console.log(Object.values(mingle_User));
console.log(Object.entries(mingle_User));

console.log(mingle_User.hasOwnProperty('isLoggedIn'));

/*
{ id: '123abc', name: 'raj', isLoggedIn: true }
[
  { id: 1, email: 'm@gmail.com' },
  { id: 1, email: 's@gmail.com' },
  { id: 1, email: 'a@gmail.com' }
]
{ id: '123abc', name: 'raj', isLoggedIn: true }
[ 'id', 'name', 'isLoggedIn' ]
[ '123abc', 'raj', true ]
[ [ 'id', '123abc' ], [ 'nam
*/

const course = {
    coursename: "javaScript",
    price: "499",
    courseInstructor: "mahfooz"
}


// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(course.courseInstructor);
console.log(instructor);

// {
//     "name": "mahfooz",
//     "coursename": "javaScrip",
//     "price": "499"
// }
  // give error 

[
    {},
    {},
    {}
]