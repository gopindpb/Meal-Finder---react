import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../Hooks/useFetch'
import Navbar from './Navbar'
import Hero from './Hero'
import SearchBar from './SearchBar'
import styles from '../styles/mealDetails.module.css'
import { FaHome, FaCheckSquare, FaKey } from 'react-icons/fa'
import Categories from '../Components/Categories'

const MealDetails = () => {
    const { id } = useParams()
    const mealData = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const meal = mealData?.meals?.[0]
    const ingredients = []
    const measures = []

    if (meal) {
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients.push(meal[`strIngredient${i}`])
                measures.push(meal[`strMeasure${i}`])
            }
        }
    }

    const instructions = meal?.strInstructions?.split('.')

    return (
        <div className={styles.mealPage}>
            <Navbar />
            <Hero />
            <SearchBar />

            {
                meal ? (
                    <>
                        <div className={styles.header}>
                            <FaHome />
                            <span>»</span>
                            <span>{meal.strMeal}</span>
                        </div>

                        <div className={styles.heading}>
                            <h2>MEAL DETAILS</h2>
                           
                        </div>

                        <div className={styles.mealDetails}>
                            <div className={styles.mealTop}>
                                <div className={styles.mealImageBox}>
                                    <img src={meal.strMealThumb} alt={meal.strMeal} className={styles.mealImage} />
                                </div>

                                <div className={styles.mealInfo}>
                                    <h2>{meal.strMeal}</h2>
                                    <div className={styles.line}></div>

                                    <p> <b>CATEGORY:</b> {meal.strCategory}</p>

                                    {
                                        meal.strSource && (
                                            <p><b>Source:</b> {meal.strSource}</p>
                                        )
                                    }

                                    <p><b>Tags:</b> N/A </p>

                                    <div className={styles.ingredientsBox}>
                                        <h4>Ingredients</h4>

                                        <div className={styles.ingredientsList}>
                                            {
                                                ingredients.map((ingredient, i) => (
                                                    <div className={styles.ingredient} key={i}>
                                                        <span>{i + 1}</span>
                                                        {ingredient}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.measureSection}>
                                <h4>Measure:</h4>

                                <div className={styles.measureBox}>
                                    {
                                        measures.map((measure, i) => (
                                            <div className={styles.measure} key={i}>
                                                <FaKey />
                                                {measure || 'Garnish'}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.instructionsSection}>
                                <h4>Instructions:</h4>

                                <ul>
                                    {
                                        instructions?.map((instruction, i) => (
                                            instruction.trim() && (
                                                <li key={i}>
                                                    <FaCheckSquare />
                                                    <span>{instruction.trim()}.</span>
                                                </li>
                                            )
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    <h4 className={styles.loading}>Loading...</h4>
                )
            }

            <Categories />
        </div>
    )
}

export default MealDetails