import { makeStyles } from "@material-ui/core/styles";

const skillStyles = makeStyles((theme) => ({
    container: {
        ...theme.tenTwentyFour,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem 0",
        padding: "0 2.5%",
    },
    header: {
        marginBottom: "2rem",
    }
}))

export default skillStyles