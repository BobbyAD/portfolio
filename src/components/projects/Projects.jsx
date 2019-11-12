import React from 'react'
import projects from '../../information/projects'
import { projectStyles } from "./projectStyles"
import { Typography } from '@material-ui/core';
import Card from "./Card";

// We're going to try and map a series of projects off Firestore here.

const Projects = () => {
    const classes = projectStyles();

    return (
        <div className={classes.cardsContainer}>
            <Typography variant="h2" className={classes.header}>
                Projects
            </Typography>
            {projects.map((card) => (
                <Card card={card} />
            ))}
        </div>
    )
}

export default Projects
