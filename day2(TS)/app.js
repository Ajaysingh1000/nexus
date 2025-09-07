"use strict";
// yaha par partial likhne se aap decide kar sakta ho kisko rakhna hai and kisko nahi 
const obj1 = {};
// sari properties required hai 
const obj2 = {
    name: "ajay",
    age: 20,
    gender: "male"
};
// kisi bhi property ko change nahi kar sakta hai 
const obj3 = {
    name: "ajay",
    age: 20,
    gender: "male"
};
// array of objects
let arr = [{ name: "ajay", age: 20, gender: "male" }, { name: "ajay", age: 20, gender: "male" }];
// function is js
function add(a, b) {
    return a + b;
}
// console.log(add(1,2))
function neet(name = "ajay") {
    console.log(name);
}
// neet("vijay")
function GATE(person) {
    console.log(person || "mohan");
}
GATE();
// arrow function 
const sum = (num1, num2) => {
    return num1 + num2;
};
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
// placeOrder(100, (amount) => {
//     console.log(amount);
// });
// rest parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
const obj5 = {
    name: "ajay",
    age: 20,
    subject: "physics",
    id: 1
};
// classes in tsc 
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet() {
        console.log("hello");
    }
}
let obj4 = new Person("ajay", 20, "male");
// console.log(obj4);
// obj4.greet();
class Employee extends Person {
    constructor(salary, name, age, gender) {
        super(name, age, gender);
        this.salary = salary;
    }
}
// private ko class ke bahar access nahi kar sakta and extend karke bhi access nahi kar sakta 
// hai but protected ko class ke bahar access nahi kar sakta and extend karke access kar sakta hai
let e1 = new Employee(10000, "ajay", 20, "male");
// console.log(e1);
// generics
function value(a) {
    return a;
}
console.log(value(10));
console.log(value("hello"));
console.log(value([1, 2, 3, 4]));
console.log(value(true));
