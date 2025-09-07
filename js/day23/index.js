
// promise 

// Promise object wada karta hai ki wo data lake dega but abhi nahi dega 
// at the end promise ek object hai 

// async task (matlab ye task time lega)
const obj = fetch('http://api.weatherapi.com/v1/current.json?key=71bcb85dc38b4175b89193511250401&q=London&aqi=yes')
// console.log(obj);

// ye answer to de dega but hume kya time dena hai matlab jo response aayega 
// usko humko koi time nahi pata and kabhi kabhi server ka issue bhi aa sakta hai
// jisse aur time lag sakta hai jisse ya user ko promise {pending} dikayeega 
// that's why ye acha solution nahi hai 
// setTimeout(()=>{
//     console.log(obj);
    
// },2000)

// good approach
// yaha par data jo obj return karega wo hai 
// and ye bhi promise hai and hum promises ko aise handle karte hai 
// (then wala) ye tabhi chalega jab obj me data aa chuka hoga 
// obj.then((data)=>{
//     // resolve
//     data.json().then((val)=>{
//         console.log(val);
//     })
// }).catch((error)=>{
//     console.log(error); // reject
// })


// this is called as promise chaining 
// neat and clean code 
obj
.then(data=>data.json())
.then(val=>console.log(val))
.catch(error=>console.log(error))

// promises me three states hoti hai
// pending resolve reject


