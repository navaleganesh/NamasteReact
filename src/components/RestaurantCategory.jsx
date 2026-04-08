import { useState } from "react";
import ItemCards from "./ItemCards";


const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    // const [showItems, setShowItems] = useState(false)

    const handleClick = () => {
         setShowIndex();
    }
    
    return (
        <div className="bg-gray-100 shadow-gray-100 px-3 py-3 my-3 w-xl m-auto " >
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">
                    {data.title} ({data.itemCards.length})
                </span>
                <span>⬇️</span>
            </div>
            <div>
                {showItems && <ItemCards items={data?.itemCards} />}
            </div>
        </div>

    )
}

export default RestaurantCategory;