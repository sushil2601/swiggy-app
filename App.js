import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";

// import Grocery from "./src/components/Grocery";

//lazy loading
const Grocery = lazy(()=>import("./src/components/Grocery"))

const About = lazy(()=>import("./src/components/About"))




const AppLayout = () =>{

    const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Sushil Suman",
    };
    setUserName(data.name);
  }, []);

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : '/',
        element  : <AppLayout />,
        children : [
            {
                path : '/',
                element : <Body />
            },
            {
                path : '/about',
                element : <Suspense fallback={<h1 className="font-bold p-2 m-2">Loading....</h1>}><About /></Suspense>
            },
            {
                path : '/contact',
                element : <Contact />
            },
            {
                path : '/grocery',
                element : <Suspense fallback={<h1 className="font-bold p-2 m-2">Loading.....</h1>}><Grocery /></Suspense>
            },
            {
                path : '/restaurants/:resId',
                element : <RestaurantMenu />
            }
        ],
        errorElement : <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)  



