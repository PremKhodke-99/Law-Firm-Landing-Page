import React from 'react';
import styles from './Logo.module.css';
import logo from '../../Assets/logo.png';

const Logo = () => {
  return (
    <>
        <img src={logo} alt="IGStudio" className={styles.logo}/>
    </>
  )
}

export default Logo