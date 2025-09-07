

let obj = {
    name : "ajay",
    age : 23,
    gender : "male"
}

// for (let val in obj){
//     console.log(val, obj[val]); // val is a key 
// }

// console.log(Object.keys(obj));

// creating the prototype 
let obj1 = Object.create(obj)
// console.log(obj1)
obj1.class = 'maths'
obj1.value = 234

// console.log(obj1);

// for (let x in obj1){
//     console.log(x);
    
// }

let ob = {}

// ob.name = "ajay"
// console.log(ob);
// key value writable enumerable configurable 
// console.log(Object.getOwnPropertyDescriptor(ob, 'name'));

// writable = true , value ko kya mein change kar sakta hu

Object.defineProperty(ob, 'name', {
    value : 'rohit',
    writable : false, // agar false hoga to edit nahi kar payenge
    enumerable : true,
    configurable : true // agar ye false hoga to writable and enumerable ki value change 
    // nahi kar sakte 
})

// console.log(ob);
// ob.name = 'mohit'
// console.log(ob);

// enumerable : jis bhi key ka enumerable true hoga , un sbka access hga ya print kar sakta 
// Inherit hoke bhi koi bhi property or key aati hai , uska enumerable true ho to access hoga

// for (let v in obj)
//     console.log(v); 
// for in loop kaise kaam karta hai ?
// jis jis key ka enumerable true hoga ye sirf unhi ko access karta hai 
// and uski propery inherit hoke aa bhi rakhi hai (object ki keys ko)
    

let item = {
    "dal" : 12,
    "moong" : 14
}
// for (let key in item)
//     console.log(key); 

// output me object.prototype ki values nahi aa rahi hai kyuki 
// enumerables ki values sab me fasle hai 
// dal
// moong 

// console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
// {
//     value: [Function: toString],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }


// for in loop : Isko array ke sath nahi lete
// array is an object 
const arr = [1,2,3,5]
console.log(typeof arr);
// if array is a object tab me ye bhi kar sakta hu
arr.name = "ajay"
for (let i in arr)
    console.log(i, arr[i]);
// object
// 0 1
// 1 2
// 2 3
// 3 5
// name ajay
    






    
   
 

