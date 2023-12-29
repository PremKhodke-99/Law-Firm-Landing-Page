import React from 'react';
import styles from './Team.module.css';
import TeamCard from './TeamCard/TeamCard';
import danial from '../../Assets/team/danial.png';
import colleen from '../../Assets/team/colleen.png';
import ces from '../../Assets/team/ces.png';
import nik from '../../Assets/team/nik.png';
import haldone from '../../Assets/team/haldone.png';
import sanfole from '../../Assets/team/sanfole.png';
import { Grid } from '@mui/material';

const Team = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.flexbox}>
                <div>
                    <h1>Our Team</h1>
                </div>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TeamCard image={danial} name={'Danial Def'} cases={301} />
                        </Grid>
                        <Grid item xs={4}>
                            <TeamCard image={sanfole} name={'Sanfole'} cases={850} />
                        </Grid>
                        <Grid item xs={4}>
                            <TeamCard image={ces} name={'Cesforila'} cases={470} />
                        </Grid>
                        <Grid item xs={4}>
                            <TeamCard image={colleen} name={'Colleen'} cases={180} />
                        </Grid>
                        <Grid item xs={4}>
                            <TeamCard image={haldone} name={'Haldone'} cases={212} />
                        </Grid>
                        <Grid item xs={4}>
                            <TeamCard image={nik} name={'Nik Jeo'} cases={350} />
                        </Grid>
                    </Grid>

                </div>
            </div>
        </div>
    )
}

export default Team