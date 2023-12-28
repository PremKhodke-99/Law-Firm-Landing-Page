import React from 'react';
import styles from './Clients.module.css';
import leftArrow from '../../Assets/leftArrow.png';
import rightArrow from '../../Assets/rightArrow.png';
import Card from '../Card/Card';
import devon from '../../Assets/ceo/devon.png';
import jane from '../../Assets/ceo/jane.png';
import robert from '../../Assets/ceo/robert.png';

const Clients = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.flexarea}>
                <div className={styles.head}>
                    <div className={styles.heading}>
                        <h1>What says our happy Clients</h1>
                    </div>
                    <div>
                        <button className={styles.buttonleft}><img src={leftArrow} /></button>
                        <button className={styles.buttonright}><img src={rightArrow} /></button>
                    </div>
                </div>
                <div className={styles.card}>
                    <Card image={jane} name={'Jane Cooper'} />
                    <Card image={devon} name={'Devon Lane'} />
                    <Card image={robert} name={'Robert Fox'} />
                </div>
            </div>

        </div>
    )
}

export default Clients