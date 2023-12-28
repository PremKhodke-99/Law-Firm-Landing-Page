import React from 'react';
import styles from './AreaOfPractice.module.css';
import { Grid } from '@mui/material';
import image1 from '../../Assets/Area/image1.png';
import image2 from '../../Assets/Area/image2.png';
import image3 from '../../Assets/Area/image3.png';
import image4 from '../../Assets/Area/image4.png';
import image5 from '../../Assets/Area/image5.png';
import image6 from '../../Assets/Area/image6.png';

const AreaOfPractice = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flexarea}>
        <h1>Area of Practices</h1>
        <Grid container spacing={2}>
          <Grid item xs={8} className={styles.item}>
            <img src={image1} />
            <h2 className={styles.text}>BUSINESS LAW</h2>
          </Grid>
          <Grid item xs={4} className={styles.item}>
            <img src={image2} />
            <h2 className={styles.text}>PARTNERSHIP LAW</h2>
          </Grid>
          <Grid item xs={4} className={styles.item}>
            <img src={image3} />
            <h2 className={styles.text}>REAL ESTATE LAW</h2>
          </Grid>
          <Grid item xs={8} className={styles.item}>
            <img src={image4} />
            <h2 className={styles.text}>BUSINESS LAW</h2>
          </Grid>
          <Grid item xs={8} className={styles.item}>
            <img src={image5} />
            <h2 className={styles.text}>LANDLORD DISPUTES</h2>
          </Grid>
          <Grid item xs={4} className={styles.item}>
            <img src={image6} />
            <h2 className={styles.text}>ELDER ABUSE</h2>
          </Grid>
        </Grid>
        {/* <div>

            </div> */}
      </div>
    </div>
  )
}

export default AreaOfPractice