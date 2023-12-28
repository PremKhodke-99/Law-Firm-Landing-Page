import React from 'react';
import styles from './TeamCard.module.css';

const TeamCard = ({image, name, cases}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.rect}>
        <div>
            <img src={image}/>
        </div>
        <div>
            <h2>{name}</h2>
            <p>{cases} Cases</p>
        </div>
    </div>
    </div>
  )
}

export default TeamCard