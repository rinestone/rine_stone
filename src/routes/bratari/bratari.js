import React from "react";
import Footer from "../../components/Footer/footer";
import NavBar from "../../components/Navbar/NavBar";
import slide3 from "../../images/slide3.png";
import "./bratari.css";

const Bratari = () => {
    return (
        <div>
            <NavBar />
            <div className={"image"}>
                <img src={slide3} alt={"slide3"} className={"image"}/>
                    <div className={"centered"}>
                        <div className={"bracelet"}>BRATARI</div>
                    </div>
                <div className={"lineBracelet"}>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Bratari;
