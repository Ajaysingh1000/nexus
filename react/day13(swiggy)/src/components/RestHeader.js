
import { useSelector } from "react-redux"


export default  function RestHeader (){

    const counter = useSelector((state) => state.cartslice.count);

    return(
        <div className="container mx-auto flex justify-between bg-gray-200 w-[80%] py-3">
            <div>
                <p className="text-2xl font-bold">Swiggy</p>
            </div> 
            <div>
                <p className="text-2xl font-bold">Cart {`(${counter})`}</p>
            </div>
        </div>
    )
}