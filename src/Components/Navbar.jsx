import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import { FaUtensils, FaBars } from "react-icons/fa";
import { Link } from 'react-router'
import { useFetch } from '../Hooks/useFetch';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const data = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");

    const menuHandler = () => {
        setIsOpen(!isOpen)
    }

    return (

        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
            <div className="container-fluid pe-0">

                <div className={`logo`}>
                    <Link className=" navbar-brand" to="/"><FaUtensils className='m-3' color='white' /><span className='text-white'>MEAL FINDER</span></Link>
                </div>

                <div className='hamburger-menu' >
                    <button onClick={menuHandler} className={styles.menubutton}>
                        <FaBars />
                    </button>


                    {isOpen && (
                        <div>

                            <ul className={styles.sidebar}>
                                <IoClose className={styles.closeicon} onClick={menuHandler} />
                                {data?.categories?.map((category, i) => (
                                    <li key={i} className={styles.menuitem}>
                                        <Link to={`/category/${category.strCategory}`} onClick={menuHandler}>
                                            {category.strCategory}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar