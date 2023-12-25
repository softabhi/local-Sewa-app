import React from 'react'
import Card from './card/Card'
import Navbar from './navbar/Navbar'
import Login from './login/Login'
import Footer from './footer/Footer'
const Home = () => {
  return (
    <>
      <Navbar />
      <Card />
      <Footer />
      {/* <Login/> */}
    </>
  )
}

export default Home