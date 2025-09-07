
let arr = [1,2,3,4,5]

// curr me 1 aayega then 1+2=3 then 3+3=6 then 6+4=10 then 10+5=15
// let res = arr.reduce((acc,curr)=>{ 
//     acc = acc + curr
//     return acc
// }, 0) // 0 is initial value jo acc aa jayega initially
// console.log(res);

// let res = arr.reduce((acc,curr)=> acc + curr, 0)
// console.log(res);


let arr1 = ["orange" , "apple" , "bananana", "orange" , "apple"] 

// let res = arr1.reduce((acc,curr)=>{
    
//     // check is curr present in acc or not
//     if (acc.hasOwnProperty(curr)){ // readable 
//         acc[curr] += 1
//     }else{
//         acc[curr] = 1
//     }
//     // acc[curr] = (acc[curr] || 0) + 1
//     // return acc
//     return acc

// }, {})

// console.log(res);

// let x = {name : "ajay"}
// console.log(x.hasOwnProperty('age'));


// let x = {}
// console.log(x['curr']);

let val =  arr1.reduce((acc,curr)=>{

    acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr] = 1 // not readable
    return acc

}, {})

console.log(val);


