

function mul(x1,x2){
    return x1*x2
}

// console.log(mul(1,5));


val = function(num1 , num2){
    return num1 + num2
}



// const sum = (num1,num2)=>{
//     return num1+num2
// }

// const sum = (num1,num2) => num1+num2



// console.log(sum(3,4));

// console.log(val(1,2));

// const cube = num => num*num*num // jab single parameter ho to bracket lagane ki jaroorat 
// // nahi hai 
// console.log(cube(4));


// const sum = function(...number1){  // rest operator kitne bhi parameters bhej sakta hai
     
//     console.log(number1); 
 
// }

// // rest operator sari values ko array me dal raha hai 
// // sum(1,2,3)
// sum(1,2,3,4)
// sum(3,4,5,6,7,8)

// difference between spread and rest operator
const arr = [1,2,3,4]
const arr1 = [...arr] // matlab arr me pehle se values rakhi hai unko spread karna 


// const obj = {
//     name:"ajay",
//     age : 34,
//     role : "Lead"
// }

// const fun = function({name,age}){
//     console.log(name,age);
    
// }

// fun(obj)

let obj2 = {
    c:1,
    d:2
}

obj1 = Object.create(obj2) // prototypwe aise change kare 







