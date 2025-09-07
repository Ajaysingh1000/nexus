
// const obj = {
//     name:"ajay",
//     age:23,
//     gender:"male",
//     "account number" : 420,
//     account_balance:123456

// }
// console.log(obj["gender"]);
// console.log(obj.gender);
// console.log(obj."account number");
// console.log(obj["account number"]);
// console.log(obj.account_balance);
// console.log(obj["account_balance"]);
// console.log(obj);
// console.log(typeof obj);

// let obj1 ={
//     0:203
// }

// console.log(obj1); // { '0': 203 }

// console.log(obj1["0"]);
// console.log(obj1.0);

// const obj = {
//     name:"ajay",
//     age:23,
//     gender:"male",
//     "account number" : 420,
//     account_balance:123456,
//     0:120,


// }

// console.log(obj);


// let a = {undefined:"ajay"}

// console.log(a.undefined);
// console.log(a[undefined]);

// another way to create object
// const person = Object()
// person.name = "ajay"
// person.age = 30
// // console.log(person);
// console.log(person);
// delete person.age
// console.log(person);



// class Person{

//     constructor(na,gen,ag){
//         this.name = na
//         this.gender = gen
//         this.age = ag

//     }
// }

// const p = new Person("ajay","male",34)

// console.log(p);
// console.log(p.name);
// console.log(p.gender);
// console.log(p.age);


// let obj = {
//     "name" : "ajay",
//     age:23
// }

// const arr = Object.keys(obj)
// const arr1 = Object.values(obj)
// console.log(arr);
// console.log(arr1);

let arr1 = {a:1,b:2}
let arr2 = {c:3,d:4}
let arr3 = {e:5,f:6}

// let arr3 = arr1+arr2
// console.log(arr3); // give wrong answer

// let x = Object.assign(arr1,arr2);
// console.log(x); // give correct answer
// console.log(arr1); // ye bhi change ho jayega(arr1) 
// console.log(arr2);

// first argument target hota 
// let x1 = Object.assign({} ,arr1,arr2);  // {} ye hamara target hai isme arr1 change nahi 
// // hoga and isme obj1 and obj2 hamare source hai 
// console.log(x1);
// console.log(arr1);

// let val = Object.assign({},arr1,arr2,arr3)
// console.log(val);

let val = {...arr1,...arr2,...arr3}
console.log(val);




















