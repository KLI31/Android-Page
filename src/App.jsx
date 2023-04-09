import "./App.css"
import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Auction from "./Components/Auction/Auction"
import Search from "./Components/Search/Search"
import Review from "./Components/Review/Review"
import Sellers from "./Components/Sellers/Sellers"
import Trending from "./Components/Trending/Trending"
import Footer from "./Components/Footer/Footer"




const App = () => {
  return (
    <div className="title">
      <Navbar/>
      {/* <Home/>
      <Search/>
      <Trending/>
      <Sellers/>
      <Auction/>
      <Review/>
      <Footer/> */}
    </div>
  )
}

export default App
