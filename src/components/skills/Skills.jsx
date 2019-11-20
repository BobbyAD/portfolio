import React from 'react'
import Skill from "./Skill";
import { Typography } from '@material-ui/core';
import skillStyles from "../../styles/skills/skillStyles";

const testArr = ["hey", "hey", "hey", "hey", "hey", "hey", "hey", "hey", "hey",]

// This is just here to map over the array, keeps App.js a little cleaner
// Also lets me keep my styles better divided
const Skills = () => {
    const classes = skillStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h2">
                Skills
            </Typography>
            {testArr.map((i) => (
                <Skill content={i}/>
            ))}
        </div>
    )
}

export default Skills;