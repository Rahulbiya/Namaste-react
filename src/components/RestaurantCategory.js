import {useState} from 'react';
import ItemList from "./ItemList";

const RestaurantCategory=({data})=>{
    const [showItems,setShowItems]=useState(false);
    
    //console.log(data)
    const handleClick=()=>{
        setShowItems(!showItems)
    }
    return(
        <div className='w-6/12 mx-auto m-4 shadow-lg p-4 flex justify-between'>
            <div className='text-left cursor-pointer  'onClick={handleClick} >
            <span className='font-bold text-l text-center font-serif'> {data.title}     ({data.itemCards.length})</span>
            <span className='  text-center  '>     ⬇️</span>
            {
                showItems && <ItemList items={data.itemCards} />
            }
            
            
            
            </div>
            
        </div>
    )
    
}
export default RestaurantCategory
