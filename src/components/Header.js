import React, { useContext, useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

const Header = () => {

    const [btnName,setBtnName] = useState('Login')

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    const cartItem = useSelector(store => store.cart.items)


  return (
    <div className='flex justify-between shadow-lg items-center m-2 bg-green-100'>
      <div className='m-4'>
        <img 
            className='w-25 h-25'
            alt='header-logo'
            src={LOGO_URL}
        />
      </div>
      <div>
        <ul className='flex m-4 p-4'>
            <li className='p-2 m-2 text-xl'>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
            <li className='p-2 m-2 text-xl'><Link to='/'>Home</Link></li>
            <li className='p-2 m-2 text-xl'><Link to='/about'>About Us</Link></li>
            <li className='p-2 m-2 text-xl'><Link to='/contact'>Contact Us</Link></li>
            <li className='p-2 m-2 text-xl'><Link to='/grocery'>Grocery</Link></li>
            <li className='p-2 m-2 font-bold text-xl'><Link to='/cart'>Cart - ({cartItem.length} items)</Link></li>
            <button className='bg-slate-300 p-2 cursor-pointer rounded-lg'
                onClick={()=>{
                    btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                }}
            >{btnName}</button>
            <li className="px-4  m-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
