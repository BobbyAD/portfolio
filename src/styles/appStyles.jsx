import { makeStyles } from "@material-ui/core/styles";

const appStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
    },
    black: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#0f0f0f",
        color: "white",
        marginTop: "4rem",
    }
}))

export { appStyles }