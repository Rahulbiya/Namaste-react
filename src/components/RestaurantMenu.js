import {useState} from 'react';
import Shimmer from "./Shimmer";
import useRestaurantMenu  from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu =()=>{
    const [showIndex,setShowIndex]=useState(null);
    const {resId} =useParams();
    const dummy= 'Dummy Data';
    const resInfo =useRestaurantMenu(resId);
if(resInfo ===null) return<Shimmer/>;

const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
//const {itemCards} =resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//console.log(resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)
//console.log(itemCards)
const categories =resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//console.log(categories)

return (
        <div className="text-center box-border">
            <h1 className='font-bold my-6 text-2xl'>{name}</h1>
            <h2 className='font-bold text-lg'>{cuisines.join(" ,") },{costForTwoMessage}</h2>
           
        {
            categories.map(
                (category,index)=><RestaurantCategory 
                key={category?.card?.card?.title} 
                data={category?.card?.card}
                showItems={index=== showIndex }
                setShowIndex={()=> setShowIndex(index ===showIndex ? null:index)}
                dummy={dummy}
                /> )
            
        }
          
        </div>
    )
}
export default RestaurantMenu;