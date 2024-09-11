import React, { useEffect } from 'react';
import RestaurantCard from './Restaurantcard';
//import resList from '../utils/mockData.js';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body = () => {
   const [listofRestaurants, setListofRestaurants] = React.useState([]);
   const [SearchText, setSearchText] = React.useState('');
   const[filteredRestaurant,setFilteredRestaurant]=React.useState([]);
   useEffect(() => {
    fetchData();
    },[]); 
    const fetchData = async () => {
       const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        
        
        setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    //conditional rendering
   
    const onlineStatus =useOnlineStatus();

    if(onlineStatus===false)
        return(
    <h1>
        Looks like you're offline!! please check your internet connection;
    </h1>)

   return listofRestaurants.length === 0 ? <Shimmer/>:(
       
        
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text'className='input-restaurant' value={SearchText} placeholder='Search for restaurants' onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button onClick={()=>{
                        console.log(SearchText);
                        const filteredList = listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                        setFilteredRestaurant(filteredList);
                    }}>Search</button>
                </div>
                <button className='filter-btn' onClick={()=>{
                    const filteredList = listofRestaurants.filter((res)=>res.info.avgRating>4.0);
                    setListofRestaurants(filteredList);
                }}>
                     Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
               {
                filteredRestaurant.map((restaurant) =>(
                  <Link 
                  key={restaurant.info.id} 
                  to={"/restaurants/"+ restaurant.info.id}> <RestaurantCard  resData={restaurant}/>
                  </Link>
                ))}
            </div>
        </div>
    )

}
export default Body;