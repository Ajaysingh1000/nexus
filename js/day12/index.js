// global object : object
// Chrome Browser : window
// Nodejs : global

// globalThis => jo orgnaization thi usne socha ki har jagah object ka name 
// alag alag hai to uske karan ye har ek environment me same hoga chahe wo 
// browser ho ye phir node js 

// ye sab kaha se aa raha hai (ye aa raha hai global object se)
// console.log("Hello")
// setInterval
// new object 

// console.log(global.Math.random());
// console.log(globalThis.Math.random());
// console.log("Hello");

let a = 10
let b = 10
let c = 10
// console.log(this);

"use strict"
// let obj = {
//     name : "ajay"
// }

// Object.freeze(obj)
// obj.name = "vijay" // yaha pe wo error dena chahiya tha to isliye hum "use strict" ka 
// // use kar sakta hai 
// console.log(obj);


// "use strict"
// x =10
// console.log(x); 

// let obj ={
//     name : "ajay",
//     age : 20,
//     greet : function(){
//         console.log(this); // this refer to object
//     }
// }

// obj.greet()


let obj = {
    name : "ajay",
    age : 20,
    greet : ()=>{
        console.log(this);
    }
}

obj.greet()






