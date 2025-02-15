
// functional component
//a javascript function that returns a react element
//component composition is using function component in another function
import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
//import Grocery from './components/Grocery'
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import{useState,useEffect} from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
//Chunking
//Code sPLITTING
//Dynamic Bundling
//Lazy Loading
//On Demand Loading
//dynamic import

const Grocery =lazy(()=>import("./components/Grocery"))
const AppLayout = () => {

    const [userName,setUserName] = useState();
     useEffect(()=>{
        
        const data={
                name: "Rahul Biya",
            };
        setUserName(data.name)
    
    },[])
    
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName,setUserName}}>
        <div className='app'>
            <Header/>
            {/** IF path =/ */}
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
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
            },{
                path:"/cart",
                element:<Cart/>
                
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
