
import React from "react";
import ReactDOM from "react-dom/client"

// const element1 = React.createElement('h1', {}, 'Hello Coder army');
// const element2 = React.createElement('h1', {}, 'Maja aaye muje');
// ReactDOM.render(element, document.getElementById('root'));
// element :50 card pade hue hai   
// console.log(element);
// const div1 = React.createElement('div',{},[element1,element2])

const names = 'maja aaya'

// const newElement = (
//     <>
//       <h1 className="second">Hello ajay {names}</h1>
//       <h1 id = "test" money = '23' style={{backgroundColor : 'red'}}>kaise ho app</h1>
//     </>
// )

// React component 
// functional component
function newElement(){

     return  <h1>Hello ajay</h1>
}

// let func = newElement()
// agar mai multiple tabs ko jaldi jaldi click karta hu to us cheej 
// ko react root container handle karega 
// agar button click hua hai to uska response aayega chahe process bich 
// mai ruk jaye 
// const divroot = ReactDOM.createRoot()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(newElement());