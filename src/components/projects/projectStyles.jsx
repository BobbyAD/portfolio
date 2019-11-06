import { makeStyles } from "@material-ui/core/styles";

const projectStyles = makeStyles((theme) => ({
    cardsContainer: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
    },
    card: {
        // Centering image, full size
        display: "flex",
        margin: "10px",
        width: "30%",
        justifyContent: "center",
        //Responsive square
        paddingBottom: "30%",
        overflow: "hidden",
        position: "relative",
        "& img": {
            position: "absolute",
            height: "auto",
            minHeight: "100%",
            minWidth: "100%",
            filter: "brightness(100%)",
            transition: "300ms",
        },
        // Hover effect
        background: "#000",
        "&:hover": {
            "& div": {
                opacity: "1"
            },
            "& img": {
                filter: "brightness(50%)",
            }
        },
        // Text effect
        "& div": {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            opacity: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "300ms",
            color: "white",
            textTransform: "uppercase",
            fontSize: "4rem",
            textAlign: "center",
            userSelect: "none",
            lineHeight: "4rem",
        }
    },
}))

export { projectStyles }