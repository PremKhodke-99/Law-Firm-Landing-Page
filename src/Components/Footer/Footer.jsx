import React from 'react';
import styles from './Footer.module.css';
import logo from '../../Assets/logo.png';
import facebook from '../../Assets/media/facebook.png'
import instagram from '../../Assets/media/instagram.png'
import twitter from '../../Assets/media/twitter.png'
import pinterest from '../../Assets/media/pinterest.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.wrapper}>
            <img src={logo}/>
            <div className={styles.navlinks}>
                <a href="">Home</a>
                <a href="">Attorneys</a>
                <a href="">Practice Areas</a>
                <a href="">About Us</a>
            </div>
            <div className={styles.media}>
                <img src={instagram} />
                <img src={facebook} />
                <img src={twitter} />
                <img src={pinterest} />
            </div>
        </div>
        <div className={styles.rights}>
            <p>2023 Acme. All rights reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
    </div>
  )
}

export default Footer