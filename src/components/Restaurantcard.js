import React from 'react';
import {CDN_URL} from "../utils/constant";
const RestaurantCard= (props) => {
    const {resData} =props;
    
    const {
      cloudinaryImageId,
      name,
      costForTwo,
      cuisines,
      avgRating,
      deliveryTime,
      

      } = resData;
  
    return (
        <div className='res-card'>
             <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
        </div>
    )}

export default RestaurantCard;