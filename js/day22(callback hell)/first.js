// js is a single threaded synchronous language(ek time pe ek task);



// js : sync because all are part of js 

console.log(10);
let timer = Date.now()
// console.log(timer);
while (Date.now()-timer<2000){
    // wait for 2 second
}
console.log(20);
console.log(30);
// output is 10 20 30 beacuse Date is a part of js 





// js : Async
// output is 10 30 20 beacuse setTimeout is not part of js
console.log(10);

// js ka part nahi hai web api ka part hai 
// but agar setTimeout js ka part hota to output aata 10 20 30 kyuki js ek 
// single threded language hai jiska matlab hota hai ki ek bar mai ek hi 
// task complete hoga 
setTimeout(()=>{
    console.log(20);   
},2000)
 // two second ko calculate karna bhi ek task hai and isko js nahi karta hai 

console.log(30);

