import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList=({items,dummy})=>{
//console.log(dummy)

    //console.log(items)
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
      };
    return(
        <div className='text-left '>
           {items.map(( item) =>(
                <div key={item.card.info.id} className=' m-3 p-3 border-so flex' >
                  
                    <div className='flex justify justify-between'>
                    <div className='py-4 my-3'>
                        <span className=''>{item.card.info.name}</span>
                        <span> -₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        <p className='text-xs align-top m-1 p-2 mx-0 w-4/12'>{item.card.info.description}</p>
                    </div>
                    
                </div>
                
                <div className=' flex mx-10  '><img src={CDN_URL + item.card.info.imageId} 
                    className='w-40 rounded-full'/>
                     <div className='my-20 '>
                    <button className=' bg-black text-white shadow-lg p-2 mx-16 rounded-lg' onClick={()=>handleAddItem(item)}>Add+</button>
                    </div>
                   
                    </div>
                    
                </div>
                
                ))}
           
        </div>
    )
}
export default ItemList;