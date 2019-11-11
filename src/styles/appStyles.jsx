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
    tenTwentyFour: {
        maxWidth: "1024px",
    }
}))

export { appStyles }