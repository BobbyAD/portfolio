import React, { useState } from 'react';
import { projectStyles } from "./projectStyles"
import { useSpring, animated as a } from "react-spring";
import { Typography } from '@material-ui/core';

const Card = ({ card }) => {
    const [click, setClick] = useState(false);
    const [hover, setHover] = useState(false);

    const { left } = useSpring({
        from: {
            left: "100%",
        },
        to: {
            left: click ? "5%" : "100%",
        }
    })

    const { opacity } = useSpring({
        from: {
            opacity: "0%"
        },
        to: {
            opacity: click ? "50%" : "0%",
        }
    })

    const { height } = useSpring({
        from: {
            height: "25vh",
        },
        to: {
            height: click ? "50vh" : "25vh",
        }
    })

    const { x } = useSpring({
        from: {
            x: 100,
        },
        to: {
            x: hover ? 0 : 100,
        }
    })

    const classes = projectStyles();

    const onClick = (e) => {
        setClick(!click);
    }

    const onEnter = (e) => {
        setHover(true);
    }

    const onLeave = (e) => {
        setHover(false);
    }

    return (
        <a.div className={classes.card} onClick={onClick} onMouseEnter={onEnter} onMouseLeave={onLeave} style={
            {
                cursor: click ? "auto" : "pointer",
                height
            }
        }>
            <Typography variant="h3" className={classes.cardHeader}>{card.name}</Typography>
            <a.img src={card.image} alt="Screenshot of a project" style={
                {
                    filter: x.interpolate(x => `grayscale(${x}%)`)
                }
            }/>
            <a.div className={classes.darken} style={{ opacity }} />
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
        </a.div>
    )
}

export default Card
