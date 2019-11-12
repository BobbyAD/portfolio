import { makeStyles } from "@material-ui/core/styles";

const skillStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    vis: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        margin: "2% 0",
    },
    back: {
        background: "#eeeeee",
        padding: "5% 15%",
        color: "#eeeeee",
    },
    front: {
        position: "absolute",
        top: "0",
        background: "#f72536",
        padding: "5% 15%",
        color: "white",
    },
}))

export default skillStyles