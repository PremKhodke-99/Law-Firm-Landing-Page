import React from 'react';
import styles from './Subscribe.module.css';

const Subscribe = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.flexWrap}>
            <h1 className={styles.header}>Subscribe Our Newsletter</h1>
            <div className={styles.input}>
                <input type="text" placeholder='Name:' className={styles.name}/>
                <input type="text" placeholder='Enter your Email' className={styles.email}/>
                <button className={styles.button}>SEND</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe