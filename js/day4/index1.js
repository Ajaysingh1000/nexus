
const arr = [1,2,3,"ajay",true]
// console.log(arr.length);
// console.log(arr.at(0)); // at is latest and negative index le leta hai 
// console.log(arr[-1]); // negative index nahi use kar sakta 
// console.log(arr.at(-2));
// console.log(typeof arr);

// const newArr = arr
// const newArr = structuredClone(arr) // isme copy hoga matlab new array banega matlab 
// // new address banega and newArr me assign hoga (newArr==arr) => False
// console.log(newArr==arr); // true because addresses are same 


// add element at end
arr.push(999)
// console.log(arr);
// remove element from end
arr.pop()
// console.log(arr);
arr.pop()
// console.log(arr);


// add element at start
arr.unshift(67)
// console.log(arr);
arr.unshift(123)
// console.log(arr);

// remove element from start
// arr.shift()
// console.log(arr);


// delete operation (recommend not to use)
// delete arr[0]
// console.log(arr);


// console.log(arr);
// first and second value is index
// console.log(arr.slice(1,4));

// first is index and second is kitni values leni hai 
// console.log(arr.splice(1,4));

// console.log(arr);
// console.log(arr.slice(1,4)); // new array return karta hai original ko change nahi karta hai 
// console.log(arr);
// console.log(arr.splice(2,4)); // ye array orginal array ko affect karta hai 
// console.log(arr);



let arr1 = [[1,2,3],[4,5,6],[7,8,9]]
let arr2 = arr1.flat() // 2d is converted to 1d array [1,2,3,4,5,6,7,8,9]
// console.log(arr2);

let arr3 = [1,2,[3,4, [5,6]],7,8,9,[10,11]]
let arr4 = arr3.flat() // flat ke andar integer le sakta hai by default 1 hota hai 
// wo level batata hai ki kitne level tak flat kar sakta hai 
let arr5 = arr3.flat(2)
let arr6 = arr3.flat(Infinity)
// console.log(arr4);
// console.log(arr5);


let abc = [1,2,3]
console.log(Array.isArray(abc)); // check whether array or not


let a1 = new Array(1,2,3) // not recommended



















