import React from 'react'
import { mainStyles } from '../../styles/main/mainStyles';
import { Typography } from '@material-ui/core';

const Main = () => {
    const classes = mainStyles();
    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <div className={classes.firstName}>
                    <Typography variant="h1" >
                        Robert
                    </Typography>
                </div>
            </div>
            <div className={classes.lastName}>
                <Typography variant="h1">
                    Driskell
                </Typography>
            </div>
        </div>
    )
}

export default Main
