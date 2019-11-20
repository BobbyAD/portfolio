import React from "react";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

import { appStyles } from "./styles/appStyles";
import { theme } from "./styles/theme";
import {
    createMuiTheme,
    responsiveFontSizes,
    ThemeProvider
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";
import Skills from "./components/skills/Skills";

function App() {
    const classes = appStyles();
    const fontOptions = {
        // breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
        factor: 3.4
    };
    const muiTheme = responsiveFontSizes(createMuiTheme(theme), fontOptions);

    return (
        <>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                <div className={classes.container}>
                    <Main />
                    <About />
                    <div className={classes.black}>
                        <Projects />
                    </div>
                    <Skills />
                    <div className={classes.tenTwentyFour}>
                        <Typography variant="body1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nisi necessitatibus fugiat, voluptatibus
                            consequuntur dolores numquam quis non, laborum nemo,
                            voluptatem dolore beatae possimus quia sint placeat
                            repudiandae sequi unde obcaecati. Lorem ipsum, dolor
                            sit amet consectetur adipisicing elit. Nisi
                            necessitatibus fugiat, voluptatibus consequuntur
                            dolores numquam quis non, laborum nemo, voluptatem
                            dolore beatae possimus quia sint placeat repudiandae
                            sequi unde obcaecati. Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Nisi necessitatibus
                            fugiat, voluptatibus consequuntur dolores numquam
                            quis non, laborum nemo, voluptatem dolore beatae
                            possimus quia sint placeat repudiandae sequi unde
                            obcaecati.
                        </Typography>
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
