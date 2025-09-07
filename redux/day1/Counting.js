
import { useSelector , useDispatch} from "react-redux";
import { Increment, Decrement , Reset} from "./Slicer";

export default function Counting() {

    // using slicer and store in  react by communication in redux
    // use selector ka use karne se ye aapko global state la ke de deta hai 
    // event ke andhar kuch bhi change ho wo mere andhar le aana 
    // isko hum subscribe to the event bhi bolte hai 
    const count = useSelector((state) => state.slice2.count);
    // dispatch store ke pass jata hai and particular thing kis 
    // slice se aa rahi hai
    const dispatch = useDispatch(); 

    // console.log(Increment());
    
    return (
        <>
        <h1>Counting is {count}</h1>
        <button onClick={() => dispatch(Increment())}>Increment</button>
        <button onClick={() => dispatch(Decrement())}>Decrement</button>
        <button onClick={() => dispatch(Reset())}>Reset</button>
        </>
    );
}