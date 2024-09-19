import React, { useEffect ,useContext,useState} from 'react';
import RestaurantCard,{withPromotedLabel} from './Restaurantcard';
//import resList from '../utils/mockData.js';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

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
    const{loggedInUser,setUserName} =useContext(UserContext);
    
   return listofRestaurants.length === 0 ? <Shimmer/>:(
       
        
        <div className='body'>
            <div className='flex'>
                 <div className='px-3 flex'>
                    <input type='text'className='  h-8 m-5 border border-solid border-black ' value={SearchText} placeholder='Search for restaurants'
                     onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button  className= 'bg-slate-800 rounded-xl w-20  text-white' onClick={()=>{
                        console.log(SearchText);
                        const filteredList = listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                        setFilteredRestaurant(filteredList);
                    }}>Search</button>
                </div>
                <button className=' p-4  bg-slate-800 text-white rounded-xl ' onClick={()=>{
                    const filteredList = listofRestaurants.filter((res)=>res.info.avgRating >4.5);
                    setListofRestaurants(filteredList);
                }}>
                     Top Rated Restaurants</button>

                <div className='p-4 flex border-black '>
                    <label className='py-3 bg-slate-600 rounded-xl'>UserName::</label>
                    <input  className =' border-black 'value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                </div>
            
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