import { makeStyles } from "@material-ui/core/styles";

const aboutStyles = makeStyles((theme) => ({
    container: {
        ...theme.tenTwentyFour,
        display: "flex",
        flexDirection: "column",
        padding: "0 2.5%",
    },
    header: {
        marginBottom: "2rem",
    }
}))

export { aboutStyles }