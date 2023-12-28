import React from 'react';
import styles from './Card.module.css';
import gift from '../../Assets/gift.png';

const Card = ({successRate}) => {
  return (
    <div className={styles.hover}>
    <div className={styles.card}>
        <img src={gift} className={styles.image} />
        <h3 className={styles.success}>{successRate}% Success Rate</h3>
        <p className={styles.para}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
        <button className={styles.button}>Read More</button>
    </div>
    </div>
  )
}

export default Card