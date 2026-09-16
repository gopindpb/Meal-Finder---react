import React from 'react'
import { useFetch } from '../Hooks/useFetch';
import styles from '../styles/categories.module.css'


const Categories = () => {


    const data = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");

    console.log(data);

    return (

        <div className={styles.categories}>
            <div className={styles.cathead}>
                <h2>CATEGORIES</h2>
            </div>
            <div className={styles.catitems}>

                {data && data?.categories?.map((category) => (
                    <div className={styles.column} >
                        <p><span className={styles.badge}>{category.strCategory}</span></p>
                        <img src={category.strCategoryThumb} alt={category.strCategory} className="card-img-top" />
                    </div>

                ))}
            </div>
        </div>

    )
}

export default Categories