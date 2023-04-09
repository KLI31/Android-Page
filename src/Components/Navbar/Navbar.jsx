import React from 'react'
import "./Navbar.css"
import logo from "../../Assets/logo2.svg"
import {RiCloseCircleFill} from "react-icons/ri"
import {TbGridDots} from "react-icons/tb"


const Navbar = () => {
  return (
    <div className='header'>
      <div className='containerLogo'>
          <img src={logo} alt="logo-image" className='logo' />
      </div>

      <div className='navbar'>
        <ul className='menu'>
          <li className='listItem'>
          <a href='/' className='link'>Cellphones</a>
          </li>

          <li className='listItem'>
          <a href='/' className='link'>New Cellphones</a>
          </li>

          <li className='listItem'>
          <a href='/' className='link'>Auction</a>
          </li>

          <li className='listItem'>
          <a href='/' className='link'>Sell</a>
          </li>
        </ul>

        <RiCloseCircleFill className="icon closeIcon"/>
      </div>

       <div className="signUp flex">
          <div className="text">Sign up</div>
          <TbGridDots className="icon toggleNavbarIcon"/>
      </div> 
    </div>
  )
}

export default Navbar