import React from 'react'
import styles from './ChooseUs.module.css';
import Card from '../Card/Card';
import gift from '../../Assets/gift.png';

const ChooseUs = () => {
    return (
        <div className={styles.flex}>
            <div className={styles.choose}>
                <h1>Why Choose us?</h1>
                <div className={styles.cards}>
                    <Card image={gift} successRate={98} button={true}/>
                    <Card image={gift} successRate={100} button={true}/>
                    <Card image={gift} successRate={100} button={true}/>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs