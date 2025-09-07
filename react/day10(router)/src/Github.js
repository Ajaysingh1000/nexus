
import { useParams } from "react-router";

export default function Github() {

    const {name} = useParams() 
    console.log(name);
       
    return (
        <div>
            <h1>this is Github page</h1>
        </div>
    );
}