import React from 'react'
import { useFetch } from '../Hooks/useFetch';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Hero from './Hero';
import SearchBar from './SearchBar';
import styles from '../styles/searchResult.module.css'
import Categories from '../Components/Categories'


const SearchResult = () => {
    const { searchTerm } = useParams()

    const searchData = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)

    return (
        <>
            <Navbar />
            <Hero />
            <SearchBar />

            <div className={styles.meals}>

                <div className={styles.mealhead}>
                    <h4>Meals</h4>
                </div>

                <div className={styles.mealitems}>

                    {
                        searchData?.meals ? (

                            searchData.meals.map((meal) => (
                                <Link to={`/meal/${meal.idMeal}`} className={styles.column} key={meal.idMeal}>
                                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                                    <p className={styles.mealtitle}>{meal.strMeal}</p>
                                </Link>
                            ))

                        ) : (<h4>Item Not available</h4>)
                    }

                </div>

            </div>
            <Categories />
        </>
    )
}

export default SearchResult