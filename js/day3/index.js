
// primitive 
// let a = 23
// let b = a
// b = 22
// console.log(a);

// non primitive 
// let obj1 ={
//     "name":"ajay",
//     "age":20
// }

// let obj2 = obj1
// obj2.name = "vijay"
// console.log(obj1);

// const a = 23;
// a = 21  // error dega kyuki ek const variable hai 
const obj = {
    id:1,
    name:"ajay"
}
obj.id = 2
console.log(obj); // error nahi dega kyuki stack me address store hoga and hum address ko
                  // change nahi kar raha hai

let obj1 = {
    id :2,
    name:"vijay"
}

obj = obj1 // error dega kyuki hum address ko change karne ka try kar raha hai







