
// functional component
//a javascript function that returns a react element
//component composition is using function component in another function
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';



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
