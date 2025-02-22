import React, { useContext, useEffect, useState } from 'react'
import Card,{withPromotedLabel} from './Card'
import { RES_LIST } from '../utils/constants';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const Body = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([]);

    const [filteredRestaurants,setFilterRestaurants] = useState([]);

    const [searchText,setSearchText] = useState('');

    const RestaurantCardPromoted = withPromotedLabel(Card);

    const fetchData = async() =>{
        const data = await fetch(RES_LIST);

        const json = await data.json();

        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(()=>{
        fetchData();
    },[])
    

//   return listOfRestaurants.length === 0 ? (
//     <Shimmer />
//   )  : (

// if(listOfRestaurants.length === 0){
//     return <h1>Loading .......</h1>
// }

const onlineStaus = useOnlineStatus();

if(onlineStaus === false){
    return <h1 className='p-2 m-2 text-2xl font-bold'>Looks like you're offline!! Please check your internet connection</h1>
}

const { loggedInUser, setUserName } = useContext(UserContext);


return listOfRestaurants.length === 0 ? (<Shimmer />) : (
    <div>
      <div className='m-4 p-4 flex items-center'>
        <button 
            className='px-4 py-2 bg-gray-300 rounded-lg cursor-pointer'
            onClick={()=>{
                const filteredList = listOfRestaurants.filter((res)=>
                    res.info.avgRating > 4
                )
            // setListOfRestaurants(filteredList)
            setFilterRestaurants(filteredList)
        }}>
            Top Rated Restaurants
        </button>

        <div>
            <input 
                className='mx-8 p-2 border border-black rounded-md bg-gray-200'
                type='text'
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}
            />

            <button
                className='font-bold bg-slate-300 p-2 rounded-lg'
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                    )
                    // setListOfRestaurants(filteredList)
                    setFilterRestaurants(filteredList)
                }}
            >Search</button>
        </div>
        <div className='px-4 mx-4 items-center'>
          <label className='py-6 mx-2 font-bold'> UserName : </label>
          <input
            className="border border-black p-2 m-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

      </div>
      <div className='flex flex-wrap px-2 mx-4'>
        {
            filteredRestaurants.map((restaurant)=>(
                <Link key={restaurant?.info.id} to={"/restaurants/" + restaurant?.info.id}>
                    {
                        restaurant?.info?.isOpen ? (
                            <RestaurantCardPromoted resData={restaurant}/>
                        ) : (
                            <Card  resData = {restaurant}/>
                        )
                    }
                </Link>
            ))
        }
      </div>
    </div>
  )
}

export default Body
