import React from "react";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

import { appStyles } from "./styles/appStyles";
import { theme } from "./styles/theme";
import {
    createMuiTheme,
    responsiveFontSizes,
    ThemeProvider,
} from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
    const classes = appStyles();
    const fontOptions = {
        // breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
        factor: 3.4,
    };
    const muiTheme = responsiveFontSizes(createMuiTheme(theme), fontOptions);

    return (
        <>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                <div className={classes.container}>
                    <Main />
                    <div className={classes.tenTwentyFour}>
                        <About />
                        <Projects />
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
