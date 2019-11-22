import { makeStyles } from "@material-ui/core/styles";

const skillStyles = makeStyles((theme) => ({
    container: {
        ...theme.tenTwentyFour,
        maxWidth: "1024px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10% 0",
    },
    skillContainer: {
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#eeeeee",
        width: "50%",
        height: "10rem",
        color: "#eeeeee",
    },
    front: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "0",
        background: "#f72536",
        width: "50%",
        height: "10rem",
        color: "white",
    },
}))

export default skillStyles