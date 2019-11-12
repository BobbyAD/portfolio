import React, { useState } from 'react';
import { projectStyles } from "./projectStyles"
import { useSpring, animated as a } from "react-spring";
import { Typography } from '@material-ui/core';

const Card = ({ card }) => {
    const [hover, setHover] = useState(false);

    const { left } = useSpring({
        from: {
            left: "100%",
        },
        to: {
            left: hover ? "25%" : "100%",
        }
    })

    const { opacity } = useSpring({
        from: {
            opacity: "0%"
        },
        to: {
            opacity: hover ? "50%" : "0%",
        }
    })

    const classes = projectStyles();

    const onClick = (e) => {
        setHover(!hover);
    }

    return (
        <div className={classes.card} onClick={onClick} style={{ cursor: hover ? "auto" : "pointer" }}>
            <img src={card.image} alt="Screenshot of a project"/>
            <a.div className={classes.darken} style={{opacity}}/>
            <a.div className={classes.info} style={
                {
                    left
                }
            }>
                <Typography variant="h4" className={classes.infoHeader}>{card.name}</Typography>
                <Typography variant="body2" className={classes.description}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ipsum magnam incidunt reprehenderit consequuntur, pariatur veritatis reiciendis, nobis voluptates obcaecati rerum assumenda repellat totam amet vitae necessitatibus esse, alias aspernatur.
                </Typography>
            </a.div>
        </div>
    )
}

export default Card
