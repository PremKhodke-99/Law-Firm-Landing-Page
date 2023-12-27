import React from 'react'
import Logo from '../Logo/Logo'
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a href="/">
                <Logo />
            </a>
            <div className={styles.navlinks}>
                <a href="">Home</a>
                <a href="">Attorneys</a>
                <a href="">Practice Areas</a>
                <a href="">About Us</a>
            </div>
            <button className={styles.button}>Contact Now</button>
        </nav>
    )
}

export default Navbar