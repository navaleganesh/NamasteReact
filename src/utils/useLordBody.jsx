import { useEffect, useState } from "react";

const useLordBody = () => {

      const [listOfResturantDummy, setlistOfResturantDummy] = useState([]);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
    const fetchD = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await fetchD.json();
    setlistOfResturantDummy(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  return {listOfResturantDummy, setlistOfResturantDummy};

}

export default useLordBody;




