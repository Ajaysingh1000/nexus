

// function attach(){
//     const element = document.getElementsByTagName("body")[0]
//     let first = Math.floor(Math.random()*256)
//     let second = Math.floor(Math.random()*256)
//     let third = Math.floor(Math.random()*256)
//     element.style.backgroundColor = `rgb(${first},${second},${third})`
// }
// // console.log(element);
// setInterval(attach,3000)


const quotes = [
    "Be the change that you wish to see in the world. – Mahatma Gandhi",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Happiness is not by chance, but by choice. – Jim Rohn",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "Dream big and dare to fail. – Norman Vaughan",
    "It always seems impossible until it's done. – Nelson Mandela",
    "Act as if what you do makes a difference. It does. – William James",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The future depends on what you do today. – Mahatma Gandhi",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Do one thing every day that scares you. – Eleanor Roosevelt"
  ];



// event listener
// let button = document.querySelector("button");
// //   console.log(button);
// button.addEventListener("mouseover",function(){
//     let n = quotes.length;
//     let i = Math.floor(Math.random() * n);
//     document.getElementById("quote").innerHTML = quotes[i]; 
// })

// let button = document.querySelector("button");
//   console.log(button);

// key down matlab key is pressed
// key up matlab key is released
// document.addEventListener("keydown",function(){
//     let n = quotes.length;
//     let i = Math.floor(Math.random() * n);
//     document.getElementById("quote").innerHTML = quotes[i]; 
// })
  

// document.addEventListener("keydown",function(event){
//     let keys = event.key
//     if (keys=="Enter"){
//         let n = quotes.length;
//         let i = Math.floor(Math.random() * n);
//         document.getElementById("quote").innerHTML = quotes[i];   
//     }
// })

  
//   function attach(){
//     let n = quotes.length;
//     let i = Math.floor(Math.random() * n);
//     document.getElementById("quote").innerHTML = quotes[i];  
//   }


//   setInterval(attach,2000)





const button = document.querySelector('button')

button.addEventListener('click' , ()=>{
    let a = document.getElementById('root2').children[0]
    let b = document.getElementById('root2').children[1]
    // console.log(a.value);
    // console.log(b.value);
    num1 = Number(a.value)
    num2 = Number(b.value)
    if (isNaN(num1) || isNaN(num2)){
        return;
    }
    let c = Number(a.value)+Number(b.value)
    let sum = document.getElementById('result')
    // sum.innerHTML = `Result: ${c}`
    // console.log(sum.textContent);
    sum.textContent += ' ' + c
    
    
})