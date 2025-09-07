import { useContext } from "react"
import Globalcontext from "./Global"



export default function Fifth(){

    const data = useContext(Globalcontext)
    console.log(data);
    

    return (
        <>
        <h1>Fifth</h1>
        </>
    )
}