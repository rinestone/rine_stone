import slide1 from '../images/slideElem/slide1.png'
import {makeStyles} from "@material-ui/core/styles";

export const SLIDE_INFO = [
    { backgroundImage: slide1, title: 'Rine Store' }
];

export const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2)
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
        marginTop: theme.spacing(4)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        paddingTop: "100%" // 16:9
    },
    cardContent: {
        textAlign: "center",
        flexGrow: 1
    },
}));