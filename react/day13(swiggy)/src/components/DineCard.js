

export default function DineCard({restdata})
{

    return(
        <div className="border shadow-lg rounded-md p-2 opacity-90 flex-none">
            <a target="_blank" href={restdata?.cta?.link}>
            <div className="relative">
                {restdata?.info?.mediaFiles?.map((data) => (
                    <img className="w-[100%] h-50 object-cover" key={data?.url} src={"https://media-assets.swiggy.com/swiggy/image/upload/" + data?.url} style={{ zIndex: -1 }} />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-40 z-10"></div>
                <p className="absolute left-2 bottom-2 text-2xl text-white" style={{ zIndex: 11 }}>{restdata?.info?.name}</p>
                <p className="absolute right-2 bottom-2 text-2xl text-white" style={{ zIndex: 11 }}>{restdata?.info?.rating?.value}</p>
            </div>
            <div className="flex justify-between">
                <p>{restdata?.info?.cuisines}</p>
                <p>{restdata?.info?.costForTwo}</p>
            </div>
            <div className="flex justify-between">
                <p className="truncate" style={{ maxWidth: "200px" }}>
                    {restdata?.info?.locationInfo?.formattedAddress.length > 30
                        ? restdata?.info?.locationInfo?.formattedAddress.slice(0, 30) + "..."
                        : restdata?.info?.locationInfo?.formattedAddress}
                </p>
                <p>{restdata?.info?.locationInfo?.distanceString}</p>

            </div>

            <div>    
                 <p className="bg-green-700 opacity-90 p-1 rounded">{restdata?.info?.offerInfoV2?.offers?.header} on pre-booking</p>
                 <p className="bg-green-200 opacity-90 p-1 rounded">Up to 10% off with bank offers</p>
            </div>
            </a>
        </div>
    )
}
