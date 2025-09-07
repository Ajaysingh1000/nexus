

import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client"
import Main from "./src/test";



function Func(){

    const [count,setCount] = useState(0);
    // console.log('render'); 
    // console.log(color);

    // document.body.style.backgroundColor = color;
    
    
    
    // console.log("first");
    // useEffect(callback function,dependency)
    // sabse last me chalega 
    // useEffect(()=>{
    //     document.body.style.backgroundColor = color;
    // },[color])
    // console.log("second");

    return (
        <>

         <h1>Count: {count}</h1>
         <button onClick={()=>setCount(count+1)}>Increment</button>
         <button onClick={()=>setCount(count-1)}>Decrement</button> 

         <Main name = {count}/>

        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Func/>);