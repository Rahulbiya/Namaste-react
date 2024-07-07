import React, { useEffect } from 'react';
import RestaurantCard from './Restaurantcard';
import resList from '../utils/mockData.js';
const Body = () => {
   const [listofRestaurants, setListofRestaurants] = React.useState([]);
   useEffect(() => {
    fetchData();
    },[]); 
    const fetchData = async () => {
       const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.19358469363305&lng=72.85892620682716&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        
        setListofRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    if(listofRestaurants.length === 0) 
        return <h1>Loading...</h1>;
   return (
       
        
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' onClick={()=>{
                    const filteredList = listofRestaurants.filter((res)=>res.data.avgRating>4.0);
                    setListofRestaurants(filteredList);
                }}>
                     Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
               {
                listofRestaurants.map((restaurant) =>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>
                ))}
            </div>
        </div>
    )

}
export default Body;