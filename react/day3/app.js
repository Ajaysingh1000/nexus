
import React from 'react'
import Reactdom from 'react-dom/client'



// let func = function(name) {
//     return  <h1>Hello {name} how are you</h1>
// }

// props = {
//     'name' : 'ajay',
//     'age' : 23
// }

function Greet(props){

    return <h1>My name is {props.name} and my age is {props.age}</h1>

}

let ele = <Greet name = 'ajay' age = '23' />
let root = Reactdom.createRoot(document.getElementById('root'))

root.render(ele)
