import React, {Component} from "react";
import Footer from "../../components/Footer/footer";
import NavBar from "../../components/Navbar/NavBar";
import slide3 from "../../images/slideElem/slide3.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ceasBarbatesc from "../../images/ceasuri/ceasBarbatesc.png"
import { useStyles } from "../../constants/constants";
import { ceaturiCart } from "../../constants/products"
import "../style.css";

export default function CeasuriB() {
    const classes = useStyles();

    return (
        <div>
            <NavBar/>
            <div className={"image"}>
                <img src={ceasBarbatesc} alt={"slide3"} className={"image"}/>
                <div className={"centered"}>
                    <div className={"bracelet"}>CEASURI BARBATI</div>
                </div>
                <div className={"lineBracelet"}>
                </div>
            </div>
            <div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {ceaturiCart.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.img}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.title}
                                        </Typography>
                                        <Typography>{card.desc}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
            <Footer/>
        </div>
    );
};
