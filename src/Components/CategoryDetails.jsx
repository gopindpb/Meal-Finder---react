import React from 'react'
import { useFetch } from '../Hooks/useFetch'
import styles from '../styles/catdetails.module.css'
import Navbar from './Navbar'
import Hero from './Hero'
import SearchBar from './SearchBar'
import { Link, useParams } from 'react-router-dom'

const CategoryDetail = () => {
    
    const { categoryName } = useParams();

    const categoryData = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const mealsData = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);

    const category = categoryData?.categories?.find(
        (c) => c.strCategory === categoryName
    );

    return (
        <>
            <Navbar />
            <Hero />
            <SearchBar />

            <div className={styles.categoryDetail}>

                {category && (
                    <div className={styles.catinfo}>
                        <h2 className={styles.header}>{categoryName}</h2>
                        <p className={styles.description}>{category.strCategoryDescription}</p>
                    </div>
                )}

                <div className={styles.catitems}>

                    {mealsData && mealsData?.meals?.map((meal, _i) => (
                        <Link to={`/meal/${meal.idMeal}`} className={styles.column} key={_i}>

                            
                                <img src={meal.strMealThumb} alt={meal.strMeal}/>
                                <p className={styles.mealtitle}>{meal.strMeal}</p>
                           


                        </Link>

                    ))}
                </div>
            </div>
        </>
    )

}

export default CategoryDetail