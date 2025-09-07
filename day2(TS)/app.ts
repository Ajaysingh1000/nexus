
interface Person{
    name:string,
    age:number,
    gender:string,
    aadhar?:number // ye property optional hai because of question mark
}

// const obj : Person = {
//     name : "ajay",
//     age : 20,
//     gender : "male"
// }

// latest 

interface customer{
    name:string,
    age:number,
    gender:string
}

// yaha par partial likhne se aap decide kar sakta ho kisko rakhna hai and kisko nahi 
const obj1 : Partial<customer> = {
}

// sari properties required hai 
const obj2 : Required<customer> = {
    name : "ajay",
    age : 20,
    gender : "male"
}


// kisi bhi property ko change nahi kar sakta hai 
const obj3 : Readonly<customer> = {
    name : "ajay",
    age : 20,
    gender : "male"
}

// array of objects
let arr:{name:string, age:number, gender:string}[] = [{name:"ajay", age:20, gender:"male"}, {name:"ajay", age:20, gender:"male"}]


// function is js

function add(a : number, b : number) : number{
    return a + b
}


// console.log(add(1,2))


function neet(name : string = "ajay"){
    console.log(name);
    
}

// neet("vijay")

function GATE(person? : string){
    console.log(person||"mohan");
    
}

GATE()


// arrow function 

const sum = (num1 : number, num2 : number) : number => {
    return num1 + num2
}
// console.log(sum(1,2));


type chill = (amount:number) => void
function placeOrder(order:number, callback :chill){

    const amount:number = order + 10;
    callback(amount);
}

// placeOrder(100, (amount) => {
//     console.log(amount);
    
// });

// rest parameter

function total(...arr:number[]){
    let ans = 0;
    arr.forEach((val)=> ans = ans+val)
    console.log(ans);
}

// total(1,2,3,4,5)




// extends keyword
interface human{
    name:string,
    age:number
}


// teacher human ki properties ko use kar sakta hai
interface Teacher extends human{
    subject : string
    id : number
}

const obj5 : Teacher = { 
    name : "ajay",  
    age : 20,       
    subject : "physics",        
    id : 1            
}   


// classes in tsc 

class Person{
    public name : string;
    age : number;
    gender : string;
    constructor(name : string, age : number, gender : string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet():void{
        console.log("hello");
    }
}

let obj4 = new Person("ajay", 20, "male");
// console.log(obj4);
// obj4.greet();

class Employee extends Person{
    salary : number;

    constructor (salary:number, name : string, age : number, gender : string){
        super(name, age, gender);
        this.salary = salary
    }
}

// private ko class ke bahar access nahi kar sakta and extend karke bhi access nahi kar sakta 
// hai but protected ko class ke bahar access nahi kar sakta and extend karke access kar sakta hai

let e1 = new Employee(10000, "ajay", 20, "male");
// console.log(e1);


// generics
function value<T>(a : T) : T{
    return a
}

// console.log(value<number>(10));
// console.log(value<string>("hello"));
// console.log(value([1,2,3,4]));
// console.log(value(true));



interface admin<T,U>{
    name : string,
    id : number,
    data : T,
    salary : U
}

const obj10 : admin<string,number> = { 
    name : "ajay",  
    id : 1,       
    data : "hello",
    salary : 10000            
}





