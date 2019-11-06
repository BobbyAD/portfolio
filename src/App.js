import React from "react";
import Main from "./components/main/Main";

import { mainStyles } from "./styles/main/mainStyles";
import { theme } from "./styles/theme";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
    const classes = mainStyles();

    const muiTheme = createMuiTheme(theme);

    return (
        <>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                <div className={classes.container}>
                    <Main />
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
