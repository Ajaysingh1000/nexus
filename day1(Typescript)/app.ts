
let a : number  = 10;
let b : string = "hello";
let c : boolean = true;

let d : null = null
let e : undefined = undefined

// agar hum type define na kare to type script automatically jis type 
// ki value assign hui usko infer(type) karega
// let x = 20;
// x = "val"

// isse hume bachna hai
let money;

money = 20
money = "val"
// in the case of this we do not have to check the type
// agar integer bhi hoga tab ye convert karega chahe error kyu na aajaye 
console.log(money.toUpperCase());


let val2:unknown;

val2 = 10
val2 = "val"

// in the case of unknown we have to check the type
// if (typeof val2 === "string"){
//     console.log(val2.toUpperCase());
// }

// non primitive data type

let arr : number[] = [1,2,3,4,5]
let arr1 = [3,4,5]
// let arr2 = ["ajay",1,2,3,"value"]
let arr2:(string|number)[] = ["ajay",1,2,3,"value"]
 
let arr3:(string | number | boolean)[] = [1,2,3,4,5,true,"val"]


// fixed length tuple(array hai ye )
let tuple : [number,string,boolean] = [1,"val",true]


let obj : {name:string, age:number, gender:string} = {
    name : "ajay",
    age : 20,
    gender : "male"
}

let obj1 : {name:string, age:number, gender:string}

obj1 = {
    name : "ajay",
    age : 20,
    gender : "male"
}


// alias
type customer  = {
    name:string,
    age:number,
    gender:string
} 

let c1 : customer = {
    name : "ajay",
    age : 20,
    gender : "male"
}


// object banate wakht interface ka use kare type ke bajaye 
interface customer1  {
    name:string,
    age:number,
    gender:string
}

interface customer1  {
    id : number
}

let c2 : customer1 = {
    name : "ajay",
    age : 20,
    gender : "male",
    id : 1
}