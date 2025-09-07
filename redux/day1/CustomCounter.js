import { useState } from "react";
// import stores from "./Store";
import { useDispatch} from "react-redux";
import { customIncreaser } from "./Slicer";




export default function CustomCounter () {

    const [state , setState] = useState("");
    // const count = useSelector((state) => state.slice1.count);
    const dispatch =  useDispatch()

    function handleClick(){
        dispatch(customIncreaser(Number(state)))
        setState("")
    }

    return (
        <>
        <input type="number" value={state} onChange={(e) => setState(e.target.value)}/>
        <button onClick={handleClick}>Submit</button>
        </>
    );
}