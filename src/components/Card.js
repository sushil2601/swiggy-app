import React from 'react'

const Card = (props) => {

    const {resName,cuisine} = props;

  return (
    <div className='hover:border-2 cursor-pointer w-50 h-70 items-center bg-gray-400 m-2'>
      <img 
        className='w-[100%] h-20'
        alt='cart-logo'
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/67192d83dc3a56ed3536a8ea3e2e894e'
      />
      <h3 className='font-bold py-4 mx-2'>{resName}</h3>
      <h4 className='py-2 mx-2'>{cuisine}</h4>
      <h4 className='py-2 mx-2'>4.4 stars</h4>
      <h4 className='py-2 mx-2'>38 minutes</h4>
    </div>
  )
}

export default Card
