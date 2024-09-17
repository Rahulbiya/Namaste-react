import React, { useEffect } from 'react';
import RestaurantCard,{withPromotedLabel} from './Restaurantcard';
//import resList from '../utils/mockData.js';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body = () => {
   const [listofRestaurants, setListofRestaurants] = React.useState([]);
   const [SearchText, setSearchText] = React.useState('');
   const[filteredRestaurant,setFilteredRestaurant]=React.useState([]);
   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
   
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
            <div className='flex'>
                <div className=''>
                    <input type='text'className='  w-max border border-solid border-black ' value={SearchText} placeholder='Search for restaurants' onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button  className= 'rounded-xl bg-green-100  w-5 m-5 px-4 py-2' onClick={()=>{
                        console.log(SearchText);0
                        const filteredList = listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                        setFilteredRestaurant(filteredList);
                    }}>Search</button>
                </div>
                <button className=' rounded-xl px-4 bg-green-100 m-4' onClick={()=>{
                    const filteredList = listofRestaurants.filter((res)=>res.info.avgRating >4.5);
                    setListofRestaurants(filteredList);
                }}>
                     Top Rated Restaurants</button>
            </div>
            <div className='flex flex-wrap'>
               {
                filteredRestaurant.map((restaurant) =>(
                  <Link 
                  key={restaurant.info.id} 
                  to={"/restaurants/"+ restaurant.info.id}> 
                  {/** if the restaurant is promoted then add a promoted label to it */
                  restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant}/>
                  ) : (<RestaurantCard  resData={restaurant}/>)
                  }
                  
                  </Link>
                ))}
            </div>
        </div>
    )

}
export default Body;