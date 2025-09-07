import React, { useState } from "react";

export default function Add(props){

    const [count , setCount] = useState(0);
   



    return(
        <>
        <h1>{props.value} : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}

