
let arr = [1,2,3,4,5]

// for of loop is best for arrays and isme sirf values hi aayenge
// for (val of arr)
//     console.log(val) 


// let str = "ajay"
// for (val of str)
//     console.log(val)

// don't use for of loop for objects
// iterable matlab agle step ke baad mujhe kaha jana hai
let obj = {
    name:"ajay",
    age:23,
    gender:"male",
    "account number" : 420,
    account_balance:123456

}

// for (val of obj)             
//     console.log(val)
// Object.values(obj) (Convert object to array)
// console.log(Object.values(obj));

// console.log(Object.keys(obj));


// for (key of Object.values(obj))
//     console.log(key);


// example of callback function 
// function hello(bye){
//     console.log("hello world");  
//     bye()
// }

function bye(){
    console.log("bye world");
}

// hello(bye)
// console.log(typeof hello);
// hello(bye)


// function names(){
//     console.log("hello world");  
// }

// setInterval(names,1000)


// call back function example 
let arr1 = [10,20,30,40]
// for each ke andhar callback function expect karta hai
// arr1.forEach(function(num){
//     console.log(num);
// })
// arr1.forEach(num =>console.log(num))

// arr1.forEach((num, index , arr1)=>{  // pehli cheej value , second index , third array
//     console.log(num, index, arr1);
// })


// function greet(num){
//     console.log(num);
// }

// arr1.forEach(greet)


// filter 
// arr2 = [10,22,33,44,55]
// console.log(arr2.filter(num => num%2==0));
// arr2.filter(num => num%2==0)

// filter example 
let students = [
    {name:"ajay", age:23, marks:89},
    {name:"rohit", age:24, marks:90},
    {name:"vijay", age:25, marks:78},
    {name:"manish", age:26, marks:92},
    {name:"naman", age:27, marks:85},
]

// let result = students.filter(student => student.marks>85)
// console.log(result);
// below code equal to above code but in below we do destructuring
// let result = students.filter(({marks}) => marks>85)
// console.log(result);

// filter me value condition ke basis pe hote hai but map me value ko change karta hai
// map

let arr4 = [1,2,3,4]
let result = arr4.map(num => num*num) // har ek element ko square karta hai
console.log(result);





