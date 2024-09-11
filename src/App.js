
// functional component
//a javascript function that returns a react element
//component composition is using function component in another function
import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
//import Grocery from './components/Grocery'
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';

//Chunking
//Code sPLITTING
//Dynamic Bundling
//Lazy Loading
//On Demand Loading

const Grocery =lazy(()=>import("./components/Grocery"))
const AppLayout = () => {
    return(
        <div className='app'>
            <Header/>
            {/** IF path =/ */}
            <Outlet/>
        </div>

    )
}
const appRouter= createBrowserRouter([
    {path:'/',
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
        
            {
                path:'/',
            element:<Body/>,
            },
            {
            path:'/about',
            element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>loading..</h1>}><Grocery/></Suspense>
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>,
            }
    ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
