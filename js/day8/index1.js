// let obj1 = {
//     name:"ajay",
//     age:20
// }

// console.log(Object.getOwnPropertyDescriptors(obj1,'name','age'));
// Object.defineProperty(obj1, 'name' , {
//     // writable : false
//     enumerable : false
// })

// obj1.name = "vijay"
// console.log(obj1);

// for (i in obj1)
//     console.log(i);


// let arr = [1,2]
// console.log(typeof arr);
// console.log(arr.__proto__.__proto__==Object.prototype);

// let obj2 = Object.create(obj1)
// // console.log(obj2.name);
// // console.log(obj2.age);

// for (let i in obj2)
//     console.log(i);

// let str = "Rohit is Good Boy";
// console.log(typeof str);

// for(let value of str)
// {
//     console.log(value);
// }

// Object.keys(obj)
// console.log(Object.keys(obj1));

// let obj = {}
// obj.name = "ajay"
// obj.age = 23
// console.log(obj);


let obj = {
    name : "ajay",
    age : 23
}

Object.defineProperty(Object.prototype , 'toString', {
    enumerable : true
})

for (i in obj)
    console.log(i);
    









    
    


