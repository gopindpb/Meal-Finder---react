import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CategoryDetail from '../Components/CategoryDetails'
import SearchResult from '../Components/searchResult'
import MealDetails from '../Components/MealDetails'

const Routing = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/category/:categoryName' element={<CategoryDetail />}/>

       <Route path="/search/:searchTerm" element={<SearchResult />} />

       <Route path="/meal/:id" element={<MealDetails />}/>

        
    </Routes>
  )
}

export default Routing