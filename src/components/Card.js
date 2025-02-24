import React, { useContext } from 'react'
import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/UserContext';

const Card = (props) => {

    const {resData} = props;

    const { loggedInUser } = useContext(UserContext);


    // console.log('resData :-',resData)

    const {name,cuisines,avgRating,cloudinaryImageId,costForTwo} = resData.info;
    const {deliveryTime} = resData.info.sla

  return (
    <div       data-testid="resCard"
    className='className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"'>
      <img 
        className='rounded-lg'
        alt='card-logo'
        src={CDN_URL + cloudinaryImageId} 
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>User : {loggedInUser} </h4>
    </div>
  )
}

//Higher Order Component --> 

export const withPromotedLabel = (Card) =>{
  return (props) => {
    return (
      <div>
        <lable className="absolute bg-black text-white p-2 m-2 rounded-lg">Promoted</lable>
        <Card {...props}/>
      </div>
    )
  }
}

export default Card
