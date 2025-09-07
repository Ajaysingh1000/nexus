
import { useState } from "react"
import { addItem, IncrementItems, DecrementItems } from "../Stored/CartSlice"
import { useDispatch } from "react-redux"

export default function RestInfo({restData}) {

    // const [count , setCount] = useState(0)

    const dispatch = useDispatch();
    const items = useSelector((state) => state.slice1.items);

    const element = items.find((item) => item.id === restData.id)
    const count = element ? element.quantity : 0

    function handleAddItems(){
      dispatch(addItem(restData))
    }

    function handleIncrementItems(){
      dispatch(IncrementItems(restData))
    }

    function handleDecrementItems(){
      dispatch(DecrementItems(restData))
    }

    return (
        <>
        <div className="flex w-full justify-between mb-2 pb-2">
          <div className="w-[70%]">
            <p className="text-2xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
            <p className="text-xl">{"₹"+ ("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
            <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
            <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
            <p>
                {restData?.description}
            </p>    
          </div>
          <div className="w-[20%] relative">
            <img className="w-full h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}></img>
            {
              count===0?(<button className="justify-center absolute bottom-1 left-20 rounded-xl text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white" onClick={() => handleAddItems()}>ADD</button>):(
              <div className="flex gap-2 text-2xl absolute bottom-1 left-20 border border-white bg-white px-6 py-2 shadow-md justify-between">
                <button onClick={() => handleDecrementItems()} className="hover:bg-gray-400 transition-colors duration-200 border px-3 border-none text-green-600">-</button>
                <span className="text-green-600">{count}</span>
                <button onClick={() => handleIncrementItems()} className="hover:bg-gray-400 transition-colors duration-200 border px-3 border-none text-green-600">+</button>
              </div>
              )
            }
            
          </div>
        </div>
        <hr className="mb-6 mt-2"></hr>
        </>
    )
} 