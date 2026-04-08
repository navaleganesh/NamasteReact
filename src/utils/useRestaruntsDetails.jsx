import { useEffect, useState } from "react";

const useRestaruntsDetails = (resId) => {

    const [resDetails, setresDetails] = useState(null);

    useEffect(() => {
        resfetchData(); 
    }, [])


    const resfetchData = async () => {
        const data = await fetch(`https://namastedev.com/api/v1/listRestaurantMenu/${resId}`);
        const getResDetail = await data.json();
        // console.log("Response", getResDetail);
        setresDetails(getResDetail.data)
    }
    return resDetails;
}

export default useRestaruntsDetails;