import { useEffect, useState, useContext } from 'react';
// import resList from '../resList.js'
import RestaurantCard, {withPromoted} from './RestaurantCard.jsx'
import Shimmer from './Shimmer.jsx';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus.jsx';
import useLorBody from '../utils/useLorBody.jsx';
import useLordBody from '../utils/useLordBody.jsx';
import UserContext from './UserContext.js';



const Body = () => {
  // let restaurants = resList.infoWithStyle.restaurants;


  const [searchText, setSearchText] = useState("")

  const RestaurantCardPromoted = withPromoted(RestaurantCard)

  const {loginUser, setShowContext} = useContext(UserContext);

  //Conditional Rendering
  // if(listOfResturant.length === 0){
  //   return <Shimmer />
  // }

  const { listOfResturant, setlistOfResturant } = useLorBody();
  const { listOfResturantDummy, setlistOfResturantDummy } = useLordBody();

  console.log("List of restaurants",listOfResturant);
  

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline check you internet connection
      </h1>
    );



  return listOfResturant.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }} />

          <button className='px-4 py-2 bg-green-100 m-4 rounded-lg' onClick={() => {
            const filterResturant = listOfResturant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setlistOfResturantDummy(filterResturant)
          }}>Search
          </button>


        </div>

        <div className="search m-4 p-4">
          <button className=" px-4 py-2 bg-gray-100  rounded-lg" onClick={() => {
            const filterList = listOfResturant.filter((item) => item.info.avgRating > 4.5)
            setlistOfResturantDummy(filterList)
          }} >
            Top Rated Resturant
          </button>
        </div>

        <div className="m-4">
          <label className='mr-1'>Username: </label>
          <input type="text" value={loginUser} onChange={(e)=> setShowContext(e.target.value)} />
        </div>


      </div>


      <div className="flex flex-wrap cursor-pointer">
        {listOfResturantDummy.map((restaurant) => (
          
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {
                restaurant.info.locality ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>
            }
            
 
          </Link>
        ))}

      </div>
    </div>
  )
}

export default Body


