
// functional component
//a javascript function that returns a react element
//component composition is using function component in another function
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';

const RestaurantCard= (props) => {
    const {resData} =props;
    return (
        <div className='res-card'>
             <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/7aeb2bbff29d99d6e986240911ce0e71' alt='res-image' />
            <h3>Persian Darbar</h3>
            <h4>Biryani,NorthIndian</h4>
            <h4>4.4 ⭐</h4>
            <h4>38 minutes</h4>
           
        </div>
    )}
const resObj ={}
const Body = () => { 
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard/>
                <RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/>
            </div>
        </div>
    )

}
const AppLayout = () => {
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
