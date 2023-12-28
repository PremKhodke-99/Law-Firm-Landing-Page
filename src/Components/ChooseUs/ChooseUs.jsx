import React from 'react'
import styles from './ChooseUs.module.css';
import Card from '../Card/Card';

const ChooseUs = () => {
    return (
        <div className={styles.flex}>
            <div className={styles.choose}>
                <h1>Why Choose us?</h1>
                <div className={styles.cards}>
                    <Card successRate={98} />
                    <Card successRate={100} />
                    <Card successRate={100} />
                </div>
            </div>
        </div>
    )
}

export default ChooseUs