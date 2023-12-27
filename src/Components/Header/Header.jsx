import React from 'react';
import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';
import man from '../../Assets/man.png';
import message from '../../Assets/message.png';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.rect}>
                <Navbar />
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <p className={styles.head}><span className={styles.h1}>You don't have to</span><br /><span className={styles.h2}>Fight Them Alone.</span></p>
                        <br/>
                        <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, voluptas. Necessitatibus similique quod magni sed amet quos iure ut deserunt alias aliquid, in aspernatur illum.</p>
                        <br />
                        <div className={styles.inputDiv}>
                            <div className={styles.input}>
                                <img src={message} />
                                <input type="text" placeholder='Enter Your email Address' />
                            </div>
                            <button className={styles.button}>Let's Talk</button>
                        </div>
                    </div>
                    <div >
                        <img src={man} alt="Human" className={styles.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header