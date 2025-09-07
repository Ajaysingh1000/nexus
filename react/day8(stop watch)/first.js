import React , {useCallback, useMemo, useRef, useState} from "react";
import ReactDOM from "react-dom/client";



function Stopwatch() {

    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);
    const [isRunning, setIsRunning] = useState(false);

    // function start(){
    //     setInterval(() => {
    //         // iska name aap kuch bhi rakh sakta ho
    //         // and yaha pe time ki updated value aayegi
    //         setTime((prevtime)=>prevtime+1);
    //         console.log(time);
            
    //     }, 1000);
    // }
    function start(){
        if (!isRunning){

            intervalRef.current = setInterval(()=>{
                setTime((prevtime)=>prevtime+1);
            },1000)
            setIsRunning(true)
        }
    }

    function stop(){
        clearInterval(intervalRef.current);
        intervalRef.current = null
    }


    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current = null
        setTime(0)
    }




    return (
        <>
         <h1>StopWatch is : {time}</h1>
         <button onClick={start}>Start</button>
         <button onClick={stop}>Stop</button>
         <button onClick={reset}>reset</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Stopwatch/>);