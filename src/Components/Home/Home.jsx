import React from 'react'
import "./Home.css"
import image from "../../Assets/Cellphone.png"

const Home = () => {
  return (
    <div className='home'>
      <div className='secContainer'>
        <div className="homeText">
          <span className="homeSpan">
            Meet your ideal phone
          </span>
          <h1 className='homeTitle'>
            Xiaomi Redmi 9S
          </h1>
          <div className="btns flex">
            <button className="btn">More Details</button>
            <button className="btn primaryBtn">Test Cellphone</button>
          </div>
        </div>

        <div className="homeImage">
          <img src={image} alt="homeImage" className='image' />
        </div>
      </div>
    </div>
  )
}

export default Home