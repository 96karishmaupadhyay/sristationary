import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { HeroCarousel } from '../../HeroCarousel/HeroCarousel'
import Products from '../../Products/Products'
import Footer from '../../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroCarousel/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home
