import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='first'>

        <h1  className='text'>LOGO</h1>
        <div className='second'>
          <Link to='/' className='text'>Home</Link>
          <Link to='/about'  className='text'>About us</Link>
          <Link to='/contact'  className='text'>Contact Us</Link>
          <Link to='/services'  className='text'>Services</Link>
         
        </div>
      
    </div>
  )
}

export default Navbar
