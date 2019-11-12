import React from 'react'
import Skill from "./Skill";
import { Typography } from '@material-ui/core';

const testArr = ["hey", "hey", "hey", "hey", "hey", "hey", "hey", "hey", "hey",]

// This is just here to map over the array, keeps App.js a little cleaner
// Also lets me keep my styles better divided
const Skills = () => {
    return (
        <div>
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