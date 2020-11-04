import React from 'react';
import NavBar from "../../components/Navbar/NavBar";
import Home_Image from "../../components/HomeSlider/HomeSlide";
import {SLIDE_INFO} from "../../constants/constants";
import Gallery from "../../components/Galary/Gallery";
import Services from "../../components/Services/services";
import Footer from "../../components/Footer/footer";
import './homepage.css'


const Homepage = () => {

    const content = SLIDE_INFO[3];

    return (
        <div>
            <NavBar/>
            <Home_Image />
            <Gallery />
            <Services />
            <Footer />
            <div className={'footerBar'}>
            </div>
        </div>
    );
};

export default Homepage;
