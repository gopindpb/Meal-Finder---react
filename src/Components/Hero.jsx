import React from 'react'
import banner from "../assets/image.png"
import styles from "../styles/hero.module.css"

const Hero = () => {
  return (

    <div>
        <img src={banner} className={styles.hero}  />

            <div className={styles.heading}>
                <h1>What are your favorite cuisines?</h1>
                <p>PERSONALIZE YOUR EXPERIENCE</p>
            </div>
    </div>

    
  )
}

export default Hero