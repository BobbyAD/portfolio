import React from 'react'
import { aboutStyles } from '../../styles/about/aboutStyles';
import { Typography } from '@material-ui/core';

const About = () => {
    const classes = aboutStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h3">
                About Me
            </Typography>
            <Typography variant="body1">
                After a few years blah blah blah working artist blah blah blah me want be cool programmer man. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tenetur animi qui dolorum deserunt iusto totam, incidunt ea nam asperiores! Modi illo neque laboriosam nulla cupiditate facere vitae rem commodi.
            </Typography>
        </div>
    )
}

export default About;