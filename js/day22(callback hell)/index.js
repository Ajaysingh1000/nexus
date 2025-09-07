

// callback hell 

// callback function (function ke andhar ek aur function as a argument bhjna)
function fetchData(callback) {
    console.log("fetching the user details!!!");
    setTimeout(() => {
        console.log("Data fetched successfully");
        // data fetch from backend
        callback("ajay")
    }, 2000);
}

function greet(name){
    console.log("hello " + name);
}

function meet(name){
    console.log(`hello ${name}, we will meet in delhi`);
}

// fetchData(greet)
// fetchData(meet)


// callback hell 

function placeOrder(callback){
    console.log("Talking with Domino's");
    setTimeout(()=>{  
        console.log("Order placed successfully");
        callback()
    },2000) 
}

function pickupOrder(callback){
    console.log("Reaching restaurant for picking order");
    setTimeout(()=>{
        console.log("order picked up by delivery Boy");
        callback()
    },3000)
}

function preparingOrder(callback){
    console.log("Pizza preparation started");
    setTimeout(()=>{
        console.log("pizza preparation done");
        callback()
    },2000) 
}

function deliverOrder(){
    console.log("Delivery boy on the way");
    setTimeout(()=>{
         console.log("Order delivered successfully");      
    },3000)
}

// preparingOrder()
// placeOrder(preparingOrder)
// this is called as callback hell
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder()
        })
    }) // how this implement 
})
// =>  callback = ()=> {preparingOrder()}
// jab calback call tab ye arrow function chalega 