import React from 'react'
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <div className={styles.main}>
    <div className={styles.intro}>
        <div className={styles.introOne}>Let's Introduce Ourself</div>
        <hr/>
        <div className={styles.introTwo}>
            <h1>Criminal Lawyer</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.</p>
        </div>
    </div>
    </div>
  )
}

export default Intro