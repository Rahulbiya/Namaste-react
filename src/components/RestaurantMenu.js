import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";
const RestaurantMenu =()=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const { resId } = useParams();
const fetchMenu = async()=>{
    const data  =await fetch(MENU_API + resId +"&catalog_qa=undefined&submitAction=ENTER" );
    const json = await data.json();
    console.log(json.data);

    setResInfo(json.data);
};
if(resInfo ===null) return<Shimmer/>;

const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
const {itemCards} =resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);

return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(" ,")}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item =><li key ={item.card.info.id}>{item.card.info.name} - {"Rs "}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
                
            </ul>

        
          
        </div>
    )
}
export default RestaurantMenu;