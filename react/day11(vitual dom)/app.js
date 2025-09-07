

import React from "react";
import ReactDOM from "react-dom/client";
import Add from "./first";

import { useState } from "react";

// const arr = [0,1,2,3]

function App() {

    const [arr , setArr] = useState(["JS" , "TS" , "JAVA"]);

    function func(){
        setArr(["PHP",...arr])
    }
    return (
        <>
            {arr.map((value,index) => <Add key={index} value={value} />)}
            <button onClick={func}>Add</button>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);




