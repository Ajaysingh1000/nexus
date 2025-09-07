import { onlineData } from "../utils/OnlineDataPlaces"
// import Grocerycard from "./GroceryCard"

export default function StoreOption(){


    return(
        <div className="mt-20 w-[80%] mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Cities with food delivery</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
                {
                    onlineData.banners[0].categories.slice(0, 16).map((value, index) => (
                        <a key={index} href={value.link} className="border p-6 rounded-3xl shadow-md hover:bg-gray-100 transition">
                            {value.text}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}
