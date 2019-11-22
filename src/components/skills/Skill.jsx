import React, { useState } from 'react'
import { useSpring, animated as a } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import skillStyles from "../../styles/skills/skillStyles";
import { Typography } from '@material-ui/core';

const Skill = ({ content }) => {
    const [vis, setVis] = useState(false);
    const classes = skillStyles();

    const { transform, opacity } = useSpring({
        opacity: vis ? 1 : 0,
        transform: `perspective(600px) rotateX(${vis ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 20, duration: 400, }
    })

    const onChange = (isVisible) => {
        setVis(isVisible);
    }

    return (
        <div className={classes.skillContainer}>
            <VisibilitySensor onChange={onChange}>
                <div className={classes.vis}>
                    <a.div className={classes.back} style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>{content}</a.div>
                    <a.div className={classes.front} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                        <Typography variant="h5">{content}</Typography>
                    </a.div>
                </div>
            </VisibilitySensor>
        </div>
    )
}

export default Skill