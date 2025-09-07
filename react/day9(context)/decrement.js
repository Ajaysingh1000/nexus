
import Globalcontext from "./Global"
import { useContext } from "react";



export default function Decrement(){

    // const data = useContext(Globalcontext)
    // console.log(Globalcontext);

    const {count , setCount} = useContext(Globalcontext)

    


    return (
        <>
        {/* <h1>value of data is {data}</h1> */}
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    )
}