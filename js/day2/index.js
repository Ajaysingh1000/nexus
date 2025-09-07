
//comparison operator
// let a = 10
// let b = "10"
// js engine b ko convert karega Number me then wo compare karega 
// console.log(a==b); // true 

// === type check then compare the value 
// console.log(a===b);

// let a = 30
// let b = 30
// console.log(a===b);

// console.log(null==undefined);
// console.log(null===undefined);

// console.log(null==0); // false sirf undefined ke equal ho sakta hai 
// // niche wale sare cases me type confersion hoga kyuki equality ke liye javascript
// // pehle hi define kar rakha hai ki null==undefine and other cases it is false
// console.log(null<0);  // null => 0  => 0<0 => false
// console.log(null>0);  // null => 0  => 0>0 => false
// console.log(null<=0); // null => 0  => 0<=0 => true
// console.log(null>=0); // null => 0  => 0>=0 => true



// console.log(undefined==0); // false (null==undefined only)
// console.log(undefined<0); // false (value of undefined is NaN)
// console.log(undefined>0);  // fasle (value of undefined is NaN)
// console.log(undefined<=0); // fasle (value of undefined is NaN)
// console.log(undefined>=0);// fasle (value of undefined is NaN)

console.log(NaN==NaN); // false because first NaN kuch aur ho sakta hai and dusra kuch aur
let a = "ajay" 
let b = "vijay"
a = Number(a) // NaN
b = Number(b) // NaN
console.log(a==b);








