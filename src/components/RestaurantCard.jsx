 
import { useContext } from "react";
import { prod_url } from "../utils/constants";
import UserContext from "./UserContext";

const RestaurantCard = ({resData}) => {
  const { info } = resData;
  const { name, cuisines, avgRating,id } = info;

  const {loginUser} = useContext(UserContext);
  
 
  return (
    
    <div className='m-4 p-4 w-[250px] h-[400px] rounded-lg hover:bg-gray-100'>
      <img className="res-logo rounded-lg" src={prod_url + info.cloudinaryImageId} alt="" />
      {/* <h3>{id}</h3> */}
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <p>{avgRating}</p>
      <p>{loginUser}</p>
    </div>
  )
}

export const withPromoted = (RestaurantCard)=>{

  return (props) => {

    return (
        <div>
          <label className="absolute  bg-black text-white py-1 px-1 rounded-md text-sm">Promoted</label>
          <RestaurantCard {...props} />
        </div>
    )
  }
}

export default RestaurantCard

