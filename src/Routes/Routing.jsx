import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import CategoryDetail from '../Components/CategoryDetails'

const Routing = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/category/:categoryName' element={<CategoryDetail />}/>
        
    </Routes>
  )
}

export default Routing