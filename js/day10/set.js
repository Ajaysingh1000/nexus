

// const set1 = new Set([10,20,30,40,10,30]) // because we use new keyword this is a object
// console.log(typeof set1);

const user_id = new Set(["new_user1" , "rohit_negi9" , "bhaiya10"])
// console.log(user_id.has("rohit_negi9")); // check user exists in the set 

// set ke pass properties kaha se aa rahi hai 
// check by set.prototype
// console.log(Set.prototype);

let arr = [1,2,1,3,4,3,5,6]
let st = new Set(arr)
// console.log(st);
// convert set to array by spread operator
ar = [...st]
// console.log(ar);


// union 
let st1 = new Set([25,2,1,3,4,4,5,6])
let st2 = new Set([6,6,7,7,8,9,10])
let st3 = new Set([...st1,...st2])
// console.log(st3); 

// intersection 
// using filter 
const res = [...st1].filter((num)=> st2.has(num))
console.log(res);








