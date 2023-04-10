import React from 'react'
import "./Trendings.css"
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"

const Trending = () => {
  return (
    <div className='trending section'>
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            Treding Near You
          </h3>

          <div className="navBtns flex">
                <BsArrowLeftShort className="icon leftIcon"/>
                <BsArrowRightShort className="icon rightIcon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending