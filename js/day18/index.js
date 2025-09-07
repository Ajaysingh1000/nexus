
// let body = document.querySelector('body')
// let red =  document.getElementById("red");
// let yellow =  document.getElementById("yellow");
// let blue =  document.getElementById("blue");
// let green =  document.getElementById("green");  

// red.addEventListener('click' , (event)=>{
    //     console.log(event);
    //     body.style.backgroundColor = 'red'
// })
// yellow.addEventListener('click' , ()=>{
//     body.style.backgroundColor = 'yellow'
// })
// blue.addEventListener('click' , ()=>{
    //     body.style.backgroundColor = 'blue'
// })
// green.addEventListener('click' , ()=>{
    //     body.style.backgroundColor = 'green'
// })

// let body = document.body
// const button = document.querySelectorAll('h1')

// button.forEach((button)=>{
//     button.addEventListener('click' , (event)=>{
//         // console.log(event.target.id);
//         let id = event.target.id
//         body.style.backgroundColor = id
//     })
// })

let ele = document.getElementById("root");
let body = document.body

ele.addEventListener('click' , (event)=>{
    // console.log(event.target); // due to event bubbling
    body.style.backgroundColor = event.target.id
    
})