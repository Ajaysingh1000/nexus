

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";


export default function RestaurantMenu() {

    const {id} = useParams();
    const [RestData, setRestData] = useState(null)
    const [selected, setSelected] = useState(null);


    // console.log(id);

    useEffect(() => {
        
        async function fetchData() {
            
            const proxyServer = "https://thingproxy.freeboard.io/fetch/"
            // const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9136&lng=75.7858&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
            const response = await fetch(proxyServer+swiggyAPI)
            const data = await response.json();
            const tempdata = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filteredData = tempdata?.filter((item) => 'title' in item?.card?.card);
            setRestData(filteredData);
        }

        fetchData();
    },[])

    
    // console.log(RestData);
    return (
        <div>

            <div className="flex w-[80%] container mx-auto gap-2">
                <button className={`rounded-full px-4 py-2 border border-green-500 ${selected === 'veg' ? 'bg-green-600' : 'bg-gray-200'}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
                <button className={`rounded-full px-4 py-2 border border-red-500  ${selected === 'non-veg' ? 'bg-red-600' : 'bg-gray-200'}`} onClick={()=>setSelected(selected==='non-veg'?null:'non-veg')}>Non Veg</button>
            </div>
            <div className="w-[80%] container mx-auto">
            {
                RestData?.map((items)=><MenuCard key ={items?.card?.card?.title} menuItems = {items?.card?.card}  select = {selected}/>)
            }

        </div>
        </div>
    )
    




    

}