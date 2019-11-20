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
        background: "#eeeeee",
        padding: "5rem 25%",
        color: "#eeeeee",
    },
    front: {
        position: "absolute",
        top: "0",
        background: "#f72536",
        padding: "5rem 25%",
        color: "white",
    },
}))

export default skillStyles