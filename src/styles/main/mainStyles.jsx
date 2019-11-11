import { makeStyles } from "@material-ui/core/styles";

const mainStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    top: {
        width: "100%",
        height: "35%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        background: "#f72536",
        color: "#fff",
        paddingBottom: "1rem",
    },
    firstName: {
        marginRight: "15%",
        fontWeight: "700",
        userSelect: "none",
    },
    lastName: {
        marginLeft: "15%",
        fontWeight: "700",
        color: "#222",
        userSelect: "none",
    }
}))

export { mainStyles }