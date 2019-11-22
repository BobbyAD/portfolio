import { makeStyles } from "@material-ui/core/styles";

const projectStyles = makeStyles((theme) => ({
    cardsContainer: {
        ...theme.tenTwentyFour,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem 2.5%"
    },
    header: {
        alignSelf: "flex-start",
        marginBottom: "2rem",
    },
    card: {
        // Centering image, full size
        display: "flex",
        margin: "10px",
        minWidth: "100%",
        justifyContent: "center",
        border: "1px solid white",
        alignItems: "center",
        //Responsive rectangles
        height: "25vh",
        overflow: "hidden",
        position: "relative",
        "& img": {
            position: "absolute",
            height: "auto",
            minHeight: "100%",
            minWidth: "100%",
        },
    },
    cardHeader: {
        zIndex: "1",
        textTransform: "uppercase",
    },
    info: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: "5",
        top: "0",
        background: "#0f0f0f",
        display: "flex",
        flexDirection: "column",
        color: "white",
        textTransform: "uppercase",
        fontSize: "4rem",
        userSelect: "none",
        lineHeight: "4rem",
        paddingRight: "50%",
        paddingLeft: "2%",
        paddingTop: "1%",
        textAlign: "justify",
        overflowY: "scroll",
    },
    infoHeader: {
        alignSelf: "center",
        textAlign: "center",
    },
    darken: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "black",
    },
}))

export { projectStyles }