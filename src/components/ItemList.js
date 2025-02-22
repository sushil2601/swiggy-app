import React, { useState } from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    dispatch(addItem(item))
  }

  return (
    <div className='text-center'>
        {
            items.map((item)=>(
                <div key={item.card.info.id} className='p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between'>
                    <div className='w-9/12'>
                        <div className='py-2'>
                            <span className=''>{item.card.info.name}</span>
                            <span>- ₹
                                {item.card.info.price
                                ? item.card.info.price / 100
                                : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                    <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                    <div className='p-2 w-3/12'>
                        <div className='absolute'>
                            <button 
                                className='p-2 mx-16 rounded-lg bg-black text-white shadow-lg cursor-pointer'
                                onClick={()=>handleAddItem(item)}
                            >
                                Add +
                            </button>
                        </div>

                        <img 
                            alt='image'
                            src={CDN_URL + item.card.info.imageId}
                            className='w-full'
                        />
                    </div>
                </div>
                
            ))
        }
    </div>
  )
}

export default ItemList
