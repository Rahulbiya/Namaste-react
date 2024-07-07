import React, { useEffect } from 'react';
import RestaurantCard from './Restaurantcard';
//import resList from '../utils/mockData.js';
import Shimmer from './Shimmer';
const Body = () => {
   const [listofRestaurants, setListofRestaurants] = React.useState([]);
   useEffect(() => {
    fetchData();
    },[]); 
    const fetchData = async () => {
       const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        
        setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    //conditional rendering
   
   return listofRestaurants.length === 0 ? <Shimmer/>:(
       
        
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text' placeholder='Search for restaurants'/>
                    <button>Search</button>
                </div>
                <button className='filter-btn' onClick={()=>{
                    const filteredList = listofRestaurants.filter((res)=>res.info.avgRating>4.2);
                    setListofRestaurants(filteredList);
                }}>
                     Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
               {
                listofRestaurants.map((restaurant) =>(
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )

}
export default Body;