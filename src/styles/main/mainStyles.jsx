import { makeStyles } from "@material-ui/core/styles";

const mainStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Raleway', 'sans-serif'",
    }
}))

export { mainStyles }