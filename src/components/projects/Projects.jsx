import React from 'react'
import projects from '../../information/projects'
import { projectStyles } from "./projectStyles"

// We're going to try and map a series of projects off Firestore here.

const Projects = () => {
    const classes = projectStyles();

    return (
        <div className={classes.cardsContainer}>
            {projects.map((card) => (
                <div className={classes.card}>
                    <img src={card.image}/>
                    <div>{card.name}</div>
                </div>
            ))}
        </div>
    )
}

export default Projects
