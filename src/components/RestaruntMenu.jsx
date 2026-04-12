import { useParams } from "react-router-dom";
import { prod_url } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaruntsDetails from "../utils/useRestaruntsDetails";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaruntMenu = () => {

  const { resId } = useParams();


  const resDetails = useRestaruntsDetails(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resDetails === null) return (<Shimmer />)

  const { name, costForTwo, cuisines, cloudinaryImageId } = resDetails?.cards?.[2]?.card?.card?.info || {};
  const { itemCards = [] } = resDetails?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};


  const categories = resDetails?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  console.log("Restaurnats details", categories);

  return (
    <div className="text-center">


      {/* <div>
        <img style={{ width: 100 }} src={prod_url + cloudinaryImageId} alt="" />
      </div>
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <p className="font-bold text-xl">{cuisines.join(", ")} - {costForTwo}</p> */}

      {/* Categories Accordion */}

       <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      
        {
          categories.map((category, index)=> (
          <RestaurantCategory 
          key={category?.card?.card?.title} 
          data={category?.card?.card} 
          showItems = {index === showIndex }
          setShowIndex = {() => setShowIndex(index)}
          // setShowIndex = {() => setShowIndex(prev => prev === index ? null : index)}
          />))  
        }
        
     

      {/* <ul>
        {

          itemCards.map((item) => <li key={item.card.info.id}> {item.card.info.name} - Rs. {item.card.info.price / 100}</li>)

        }
      </ul> */}

    </div>
  )
}

export default RestaruntMenu