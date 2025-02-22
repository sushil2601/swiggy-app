import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import Shimmer from './Shimmer';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);

    const [showIndex,setShowIndex] = useState(0);

    const {resId} = useParams();
    // console.log('ResId :- ',resId)

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() =>{

        const data = await fetch(MENU_API+resId + '&catalog_qa=undefined&query=Pizza&submitAction=ENTER')

        const json = await data.json();

        console.log('Json :-',json)

        setResInfo(json.data)
    }

if (resInfo === null) return <Shimmer />;

const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

console.log(categories)


  return (
    <div>
      <div className='text-center my-6'>
        <h1 className='p-2 m-2 font-bold text-2xl'>{name}</h1>
        <p className='p-2 m-2 text-xl'>{cuisines.join(', ')} - {costForTwoMessage}</p>
      </div>

      {
        categories.map((category,index)=>(
          <RestaurantCategory 
            key={category?.card?.card?.title} 
            data={category?.card?.card}
            showItems={index === showIndex ? true : false} 
            setShowIndex={()=>setShowIndex(index)} 
          />
        ))
      }
      

      {/* <h2 className='font-bold p-2 m-2 text-xl'>Menu</h2>
      <ul>
        {
          itemCards.map((itemCard)=> 
          <li
              className='mx-4'
              key={itemCard.card.info.id}>{itemCard.card.info.name} - {itemCard.card.info.price/100}</li>)
        }
      </ul> */}
      
    </div>
  )
}

export default RestaurantMenu
