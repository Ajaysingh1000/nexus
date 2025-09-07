// console.log(20);
// console.log(20);
// console.log(20);
// console.log("Hello world");

let a = 10 // global scope ka part hai but global object ka part nahi hota hai(let,const)
let b = 10 // global scope ka part hai but global object ka part nahi hota hai(let,const)
var c = 20 // global scope and object ka part hota hai
// console.log(this.c);

// this refers to 
// 1. In browsers : window
// 2. Node js : Module's exports object 


// 1. strict mode (this give  undefined )
// 2. non strict mode (regular function)

"use strict" // latest rules and regulations ko follow karna 

// function greet(){
//     console.log(this);
// }   
// greet() 
// window.greet()

// let obj = {
//     name : "ajay",
//     age : 20,
//     greet : ()=>{
//         console.log(this);
//     }
// }

// obj.greet()


// let obj = {
//     name : "ajay",
//     age : 20,
//     greet : function(){     // is function ka this obj ko point karta hai 
//         let f = () => { 
//             console.log(this); // kyuki arrow function ke andhar this nahi hota hai 
//             // to wo outer se point karta hai jo ki ek function hai and us function
//             // ka this obj ko point karta hai
//         }
//         f()
//     }
// }

// obj.greet()





