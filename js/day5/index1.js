// let obj1 = {
//     name:"ajay",
//     age:23
// }

// let obj2 = obj1 // pass by referance wali copy called as shallow copy

// obj2.name = "vijay"

// console.log(obj1);

// let obj2 = structuredClone(obj1) // pass by value wali copy called as deep copy
// console.log(obj2);

// obj2.name = "vijay"
// console.log(obj1);

// const user = {
//     name : "Ajay", // inki deep copy create hogi
//     balance : 420,
//     address : {   // andhar wale ki shallow copy create hogi
//         pincode : 246149,
//         city : "jaipur"
//     }
// }

// console.log(user.address.city);


// const obj = Object.assign({},user)
// console.log(obj); 

// user.address.pincode = 1234
// // console.log(user);

// user.name = 'karan'
// console.log(obj);

// const test = {
//     name : "ajay",
//     age:30,
//     roll:"manager"
// }

// // const {name , age} = test

// const {name:full_name , age:Umar}  = test
// // name ko full_name me dal do and age ko umar me dal do
// console.log(full_name);
// console.log(Umar);

// const test = {
//     name : "ajay",
//     age:30,
//     roll:"manager",
//     money:12000,
//     city:"sikar"
// }

// const {name,age,...x1} = test
// console.log(name,age);
// console.log(x1); // x1 name and age ke alawa sara object me store hoga 

// x1 = {
//     roll:"manager",
//     money:12000,
//     city:"sikar"

// }

// let arr = [1,2,3,4]
// const [fir,sec] = arr
// console.log(fir,sec); // destructuring in array

// const [x1,x2,...x3] = arr
// console.log(x1,x2);  // 1,2
// console.log(x3); // [3,4]

// let obj = {
//     name : "ajay",
//     age : 29,
//     arr:[1,2,3,4],
//     address : {
//         pincode : 333029,
//         city : "sikar"
//     }
// }

// const {address:{pincode , city}} = obj
// console.log(pincode);
// console.log(city);

// const {arr:[first]} = obj
// console.log(first);


// const arr = {
//     name : "ajay",
//     greet:function(){
//         console.log("hello world");
        
//     }
// }
// arr.greet()

let obj = {
    name:"ajay",
    age:29
}

// mene to toString() name ka koi function banaya hi nahi to mai kaise 
// access kar pa raha hu because object me mere pass two fields hai and me 
// . laga ke access kar sakta hu but toString() to kuch nahi hai to kaise 
// access kar pa raha hu and vice versa in array because array is a object
console.log(obj.toString()); 



















