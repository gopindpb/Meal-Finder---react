import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import styles from "../styles/navbar.module.css"
import Hero from '../Components/Hero'
import SearchBar from '../Components/SearchBar'
import Categories from '../Components/Categories'



const Home = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Categories />


    </>
  )
}

export default Home