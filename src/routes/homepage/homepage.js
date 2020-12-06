import React from 'react';
import NavBar from "../../components/Navbar/NavBar";
import HomeImage from "../../components/HomeSlider/HomeSlide";
import Gallery from "../../components/Galary/Gallery";
import Services from "../../components/Services/services";
import Footer from "../../components/Footer/footer";
import './homepage.css'
import Notification from "../../components/Notification/notification";


const Homepage = () => {

    return (
        <div>
            <NavBar/>
            <HomeImage />
            <Notification />
            <Gallery />
            <Services />
            <Footer />
            <div className={'footerBar'}>
            </div>
        </div>
    );
};

export default Homepage;
