import React , {useState} from "react";

function Main(){

    const [color,setColor] = useState("black");
    // console.log('render'); 
    console.log('render')

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
        <h1>Background Color Changer</h1> 
        <div className="but">
            <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
            <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
            <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
            <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
        </div>
    </>
    )
}

export default React.memo(Main)