import React from 'react'
import { mainStyles } from '../../styles/main/mainStyles';
import { Typography } from '@material-ui/core';
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

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
                <Typography variant="body1" className={classes.subtitle}>
                    Full-Stack Developer
                </Typography>
                <div className={classes.logos}>
                    <a href="https://www.linkedin.com/in/bobbyad/">
                        <img src={linkedin} alt="LinkedIn logo" />
                    </a>
                    <a href="https://github.com/BobbyAD">
                        <img src={github} alt="Github logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Main
