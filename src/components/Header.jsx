import React from 'react'
import {logo} from '../assets'

const Header = () => {
  return (
    <div className='heading flex justify-around p-2'>
      
      <p className='flex pb-1 pt-1'>
        <img src={logo} alt="logo" width="22px" style={{"marginRight": "8px"}}/>SmartCrop Management System</p>
        
    </div>
  )
}

export default Header