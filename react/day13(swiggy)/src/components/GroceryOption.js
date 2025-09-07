import {GrocerGridCard} from "../utils/GroceryData"
import Grocerycard from "./GroceryCard"

export default function GroceryOption(){


    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <h1>Shop Groceries on Instamart</h1>
            <div className="w-[80%] container mx-auto flex flex-nowrap gap-10 overflow-x-auto mt-20 gap-3">
                    {
                        GrocerGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                    }
            </div>
        </div>
    )
}