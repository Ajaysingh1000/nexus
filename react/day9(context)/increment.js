import { useContext } from "react"
import Globalcontext from "./Global"





function Increment(){

    const {count , setCount} = useContext(Globalcontext)
    // console.log(Globalcontext);
    


    return (
        <>
        {/* <h1>value of data is {count}</h1> */}
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}

export default Increment