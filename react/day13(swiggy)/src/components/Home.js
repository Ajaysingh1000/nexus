
import Header from "./Header"
import FoodOption from "./FoodOption"
import GroceryOption from "./GroceryOption"
import DineOption from "./DineOption"
import StoreOption from "./StoreOption"
import Footer from "./Footer"

export default function Home() {
    return (
        <>
            <Header/>
            <FoodOption />
            <GroceryOption />
            <DineOption />
            <img className="w-full mt-10" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"></img>
            <StoreOption />
            <Footer/>
        </>
    )
}