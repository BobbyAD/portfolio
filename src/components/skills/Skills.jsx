import React from 'react'
import { Typography } from '@material-ui/core';
import skillStyles from "../../styles/skills/skillStyles";

const skills = ["JavaScript", "React", "Redux", "CSS", "LESS/SASS", "Firebase/Firestore", "Java/Spring", "Python"]

// This is just here to map over the array, keeps App.js a little cleaner
// Also lets me keep my styles better divided
const Skills = () => {
    const classes = skillStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h2" className={classes.header}>
                Skills
            </Typography>
            <Typography variant="body1">
                My projects are mostly built using a React front end, and either a Java Spring, Firebase/Firestore, or Django backend. However, I am getting more in to using Node/Express as my back end framework. I typically use Material-UI's styling framework, but I'm proficient in vanilla CSS and CSS pre-processors (LESS/SASS).
            </Typography>
        </div>
    )
}

export default Skills;