import React from 'react';
import styles from './Card.module.css';

const Card = ({ image, successRate, button, name }) => {
  return (
    <div className={styles.hover}>
      <div className={styles.card}>
        <img src={image} className={styles.image} />
        {
          successRate ? (
            <h3 className={styles.success}>{successRate}% Success Rate</h3>
          ) : (
            <div>
              <h3>{name}</h3>
              <p className={styles.ceo}>Ceo Of Hunt</p>
            </div>
          )
        }

        {
          button ? (
            <>
              <button className={styles.button}>Read More</button>
              <p className={styles.para}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
            </>) : <><p className={styles.para}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia</p></>
        }

      </div>
    </div>
  )
}

export default Card