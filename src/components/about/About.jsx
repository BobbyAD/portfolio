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
                I have a Bachelor's of Fine Arts from the University of Texas in Fine Art. After years of working as an artist, I've made the move to software development. I attended Lambda School's Full-Stack Web Development program where I've learned a number of different technologies for both front end and back end development. My experience as an artist sets me apart as a developer who understands both the technical aspects of development, as well as the design and user interface aspects.
            </Typography>
        </div>
    )
}

export default About;