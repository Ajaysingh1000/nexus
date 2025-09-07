
import { Link } from "react-router";
export default function RestCard({restInfo}) {
    return (
        <>
        <Link to={"/city/jaipur"+"/"+restInfo?.info?.id}>
            <div className="flex-none w-70 transform transition duration-200 hover:scale-95">
                <a href={restInfo?.info?.cloudinaryImageId}>
                <img className="w-70 h-50 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
                <h1>{restInfo?.info?.name}</h1>
                <div className="flex gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    width="20px"
                    height="20px"
                    className="bg-green-800 border p-0.5 rounded-full border-none"
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <h1>{restInfo?.info?.avgRating}</h1>
                <h1>{restInfo?.info?.sla?.slaString}</h1>
                </div>
                <div className="overflow-hidden">{restInfo?.info?.cuisines?.join(" ")}</div>
                </a>
            </div>
        </Link>
        </>
    )
}