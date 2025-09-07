import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";


export default function Restaurant(){
   
    const [RestData, setRestData] = useState([])

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://thingproxy.freeboard.io/fetch/"
        // const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.9974&lng=79.0011&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer+swiggyAPI)
        const data = await response.json();
        setRestData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

     fetchData();
    },[])

    // console.log(RestData);
   
    // Shimmer Effect 
    if(RestData?.length===0)
        return <Shimmer />



    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            
            {
                [1,2,3].map(()=>RestData?.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>))
            }

        </div>
    )

}