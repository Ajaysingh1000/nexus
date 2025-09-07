
// first div : swiggy logo
import { Link } from "react-router";

export default function Header() {
    return (
        <div className="bg-[#ff5200] font-serif" >
            <div className="flex justify-between items-center p-4 container mx-auto py-4">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                <div className=" text-white text-base font-bold flex gap-10 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login">Partner with Us</a>
                    <a className="border border-white px-4 py-3 rounded-2xl"target="_blank" href="https://www.swiggy.com/corporate/">Get the App</a>
                    <a className="border border-black bg-black px-4 py-3 rounded-2xl"target="_blank" href="https://www.swiggy.com/corporate/">Sign in</a>
                </div>
            </div>
            <div className="pt-16 pb-8 relative">
            <img  className="h-110 w-60 absolute top-0 left-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
            <img  className="h-110 w-60 absolute top-0 right-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="container mx-auto max-w-[60%] text-white text-5xl font-bold text-center">
                    Order Food and groceries. Discover best Restaurants. Swiggy it!
                </div>
                <div className="max-w-[70%] container mx-auto flex gap-5 mt-5">
                    <input className="bg-white w-[40%] text-base px-6 py-4 rounded-2xl" placeholder="Delhi, India"></input>
                    <input className="bg-white w-[55%] text-base px-6 py-4 rounded-2xl"  placeholder="Search for reastaurant and more "></input>
                </div>
            </div>
            <div className="max-w-[80%] container mx-auto flex justify-between items-center">
                <Link to="/restaurant">
                  <img className="w-100 h-100" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
                </Link>
                <a target="_blank" href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img className="w-100 h-100" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                </a>
                <a target="_blank" href="https://www.swiggy.com/dineout">
                    <img className="w-100 h-100" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                </a>
                <a target="_blank" href="https://www.swiggy.com/genie">
                    <img className="w-100 h-100" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>      
                </a>

            </div>
        </div>
    );
}