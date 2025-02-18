import React from 'react'
import Card from './Card'

const Body = () => {
  return (
    <div>
      <div>
        <h3 className='p-2'>Search</h3>
      </div>
      <div className='flex flex-wrap px-2'>
        <Card resName="Meghana Biryani" cuisine="Biryani,North Indian, Asian"/>
        <Card resName="KFC" cuisine="Biryani,North Indian"/>

      </div>
    </div>
  )
}

export default Body
