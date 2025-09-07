import {dineoutRestaurants} from "../utils/DineData"
import DineCard from "./DineCard"

export default function GroceryOption(){


    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <p>Discover best restaurants on Dineout</p>
            <div className="w-[80%] container mx-auto flex flex-nowrap overflow-x-auto mt-20 gap-10">
                    {
                        dineoutRestaurants.map((Restdata)=><DineCard key={Restdata?.info?.id} restdata={Restdata}></DineCard>)
                    }
            </div>
        </div>
    )
}