import { prod_url } from "../utils/constants";

const ItemCards = ({ items }) => {
    console.log("Items card", items);

    return (

        <div>
            {
                items.map((data) => (

                    <div key={data?.card?.info?.id} className="text-sm text-left border-b-1 pb-2 my-3 last:border-0 flex justify-between">
                        
                        <div>
                            <h3 className="font-bold text-red-500 py-1">{data?.card?.info?.name}</h3>
                            <p> {data?.card?.info?.description}</p>
                        </div>  
                        <div>
                            <img className="w-25" src={prod_url + data?.card?.info?.imageId} alt="" />
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default ItemCards;