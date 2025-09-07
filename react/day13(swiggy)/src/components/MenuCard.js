import { useState } from "react"
import RestInfo from "./RestInfo"


export default function MenuCard({menuItems,select}){

    const [isOpen, setIsOpen] = useState(true);
    
    if("categories" in menuItems){
        return(
            <div className="w-full">
            <p className="text-2xl font-bold">{menuItems.title}</p>
            <div>
                {
                    menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items} select = {select}></MenuCard>)
                }
            </div>
            </div>
        )
    }

    if (select==='veg') {

        // let val = menuItems?.isVeg
        let data = menuItems?.itemCards?.filter((item)=> {
            return item?.card?.info?.isVeg
        })

        return (
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((item)=> ('isVeg' in item?.card?.info))?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )

        
    }

    if (select==='non-veg') {

        return (
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((item)=> !('isVeg' in item?.card?.info))?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }
   
    if(!isOpen){
        return(
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>   
        ) 
    }
    

    return (
               <div>

                <div className="w-[80%] mx-auto mt-20 mb-20">
                    <p className="w-full text-2xl text-center py-4 font-bold rounded-4xl bg-gray-200">Search for Dishes</p>
                </div>
                <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
               </div>
    )
}