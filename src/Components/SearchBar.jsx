import React from 'react'
import styles from "../styles/hero.module.css"
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (

      <div className="banner">
            <form className = {styles.search } role="search" >
                <input className="form-control rounded-pill" type="search" placeholder="Search for meals"
                    aria-label="Search" />
                <button className = {styles.searchbtn} type="submit"> <FaSearch className='text-center'/></button>
            </form>

        
        </div>
  )
}

export default SearchBar