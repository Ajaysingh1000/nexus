
// function t(){
    
//     let pr = new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             console.log("hello world")
//         }, 3000);
//     })
//     return pr
// }

let t = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("hello world")
    }, 3000);
})

// t.then((val)=>{
//     console.log(val);
// })

// await ka istemal async ke andhar hi hoga 
async function name1() {
    let val1 = await t
    console.log(val1);
    // console.log("test");
    let val2 = await t
    console.log(val2);
    
}

// name1()


async function test(){
    return "hello"
}

test().then((val)=>{
    console.log(val);
})

