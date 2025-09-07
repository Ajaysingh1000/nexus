

// let p = setTimeout(()=>{
//     console.log("hello"); 
// },2000)


// let s = setTimeout(()=>{
//     console.log("world");
// },4000)


// console.log(p);



// async function name(){

//     let a = await s;

// }

let test = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("my name is ajay");
    }, 2000);
});



test.then((v)=>{
    console.log(v);
})

