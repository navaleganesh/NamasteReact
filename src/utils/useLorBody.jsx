import { useEffect, useState } from "react";

const useLorBody = () => {

      const [listOfResturant, setlistOfResturant] = useState([]);

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
    const fetchD = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await fetchD.json();
    // console.log(json);
    setlistOfResturant(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  return {listOfResturant, setlistOfResturant};

}

export default useLorBody;