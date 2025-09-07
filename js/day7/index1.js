
// scope of variables 
// 1. global scope 
// 2. local scope (functional scope)
// 3. block scope

// global scope (program me kahi bhi access kar sakta hai)
// let a = 1
// const b = 2
// var c = 3

const test = function(){
    console.log(a);
    console.log(b);
    console.log(c);
}
// test()

// local scope (isme hum variables ko function ke andhar hi use kar sakta hai bahar nahi)
// functional scope
function greet(){
    let a = 1
    var b = 2
    const c = 3
    console.log("hello world");
}

// greet()
// console.log(b);

// block scope  => if else , for loop , while loop 
// why we not using var instead of this we use let and const
if (true){
    let a = 1
    var b = 2
    const c = 3
}

// console.log(a);
// console.log(b);
// console.log(c);


// function declare hone se pehle access kar sakta hu
greet()
function greet(){
    console.log("Hello Greet");
}


// function declare hone se pehle access nahi kar sakta hu
meet()
const meet =  function(){
    console.log("Hello Meet");
}



