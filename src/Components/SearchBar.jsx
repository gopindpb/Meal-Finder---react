import React, { useState } from 'react'
import styles from "../styles/hero.module.css"
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [userInput, setuserInput] = useState("");
    const navigate = useNavigate()


    const userInputHandler = (e) => {
        setuserInput(e.target.value)

    }

    const inputDataHandler = (e) => {
        e.preventDefault();
        if (userInput.trim() !== "") {
             navigate(`/search/${userInput}`) }
    }

    return (

        <div className="banner">
            <form className={styles.search} role="search" onSubmit={inputDataHandler}>
                <input className="form-control rounded-pill" type="search" placeholder="Search for meals"
                    aria-label="Search" onChange={userInputHandler} />
                <button className={styles.searchbtn} type="submit"> <FaSearch className='text-center' /></button>
            </form>

        </div>
    )
}

export default SearchBar