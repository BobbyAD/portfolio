import React, { useState } from 'react';
import { projectStyles } from "./projectStyles"
import { useSpring, animated as a } from "react-spring";
import { Typography } from '@material-ui/core';
import { FaGithub } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

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
            height: click ? "60vh" : "25vh",
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
                    filter: x.interpolate(x => `grayscale(${x}%) blur(${x/20}px) brightness(50%)`),
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
                    {card.description}
                </Typography>
                <div className={classes.icons}>
                    <a href={card.link}>
                        <FiLink />
                    </a>
                    <a href={card.git}>
                        <FaGithub />
                    </a>
                </div>
            </a.div>
        </a.div>
    )
}

export default Card
