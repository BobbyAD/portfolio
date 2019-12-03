import React from 'react'
import { aboutStyles } from '../../styles/about/aboutStyles';
import { Typography } from '@material-ui/core';

const About = () => {
    const classes = aboutStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h2" className={classes.header}>
                About Me
            </Typography>
            <Typography variant="body1">
                I have a Bachelor's of Fine Arts from the University of Texas. After a few years of working as an artist, I made the move in to software development in 2018. I attended Lambda School's Full-Stack Web Development program for the past 9 months, where I've learned a number of different technologies from React to Java. My experience as an artist sets me apart as a developer who understands both the technical aspects of development, as well as the design and user interface aspects.
            </Typography>
        </div>
    )
}

export default About;