
import React , {useCallback, useMemo, useState} from "react";
import ReactDOM from "react-dom/client";



function App(){

    const [count , setCount] = useState(0)
    const [value, setValue] = useState(0)


    // function fib(n){
    //     if (n<=1)
    //         return 1

    //     return fib(n-1) + fib(n-2)
    // }
    // function creation is only one time and not again and again
    const fib = useCallback((n)=>{
        if (n<=1)
        return 1

        return fib(n-1) + fib(n-2)
    },[])
    // let result = fib(value)

    const result = useMemo(()=>{
        return fib(value)
    },[value])



    return(
        <>
            <h1>Count is: {count}</h1> 
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <h1>fibonacci is : {result}</h1>
            <input type="number" value = {value} onChange={(e) => setValue(e.target.value)}></input>
        </>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
