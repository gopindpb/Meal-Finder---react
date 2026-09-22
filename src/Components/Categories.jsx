import React from 'react'
import { useFetch } from '../Hooks/useFetch';
import styles from '../styles/categories.module.css'
import { Link } from 'react-router-dom';


const Categories = () => {


    const data = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");


    return (

        <div className={styles.categories}>
            <div className={styles.cathead}>
                <h2>CATEGORIES</h2>
            </div>
            <div className={styles.catitems}>


                {data && data?.categories?.map((category, _i) => (
                    <Link to={`/category/${category.strCategory}`}className={styles.column}key={_i}>
                        
                            <p><span className={styles.badge}>{category.strCategory}</span></p>
                            <img src={category.strCategoryThumb} alt={category.strCategory} className="card-img-top" />
                        
                    </Link>

                ))}
            </div>
        </div>

    )
}

export default Categories