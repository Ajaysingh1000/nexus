


import { useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./increment";
import Decrement from "./decrement";
import Globalcontext from "./Global";
import Fifth from "./Fifth";


function App(){
    const [count, setCount] = useState(0);

    return (
        <>  
            <Globalcontext.Provider value = {{count,setCount}}>
            <Fifth />
                <h1>Counter is: {count}</h1>
                <Increment counts= {count} setCounts = {setCount}/>
                <Decrement counts= {count} setCounts = {setCount}/>
            </Globalcontext.Provider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);