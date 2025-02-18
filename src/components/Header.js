import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between border border-black items-center m-2'>
      <div className='m-4'>
        <img 
            className='w-25 h-25'
            alt='header-logo'
            src='https://banner2.cleanpng.com/20180530/ogx/avp9e5238.webp'
        />
      </div>
      <div>
        <ul className='flex m-4 p-4'>
            <li className='p-2 m-2 text-xl'>Home</li>
            <li className='p-2 m-2 text-xl'>About Us</li>
            <li className='p-2 m-2 text-xl'>Contact Us</li>
            <li className='p-2 m-2 text-xl'>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
