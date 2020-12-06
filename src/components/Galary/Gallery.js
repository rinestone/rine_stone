import React, { Component } from "react";
import Slider from "react-slick";
import './Gallery.css'
import elem1 from "../../images/slideElem/slide_elem1.png"
import elem2 from "../../images/slideElem/slide_elem2.png"
import elem3 from "../../images/slideElem/slide_elem3.png"
import elem4 from "../../images/slideElem/slide_elem4.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";


export default class Gallery extends Component {

    render() {
        const settings = {
            className: 'slider',
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            display: 'flex',
            centralPadding: true,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 5000,
            cssEase: "linear",
            textAlign: "center",
        };

        return (
            <div class={'square'}>
                <h1>Galerie</h1>
                <h2>Produsele Noastre</h2>
                <Slider {...settings} >
                    <Link to={'/rine_store/aranjamente'}><div>
                        <img src={elem1} alt={elem1} className={'sliderimg'} />
                        <h2>Aranjamente Florale</h2>
                    </div></Link>
                    <Link to={'/rine_store/ceasuriD'}><div>
                        <img src={elem3} alt={elem3} className={'sliderimg'}/>
                        <h2>Ceasuri Dama</h2>
                    </div></Link>
                    <Link to={'/rine_store/ceasuriB'}><div>
                        <img src={elem3} alt={elem3} className={'sliderimg'}/>
                        <h2>Ceasuri Barbatesti</h2>
                    </div></Link>
                    <Link to={'/rine_store/bratari'}><div>
                        <img src={elem4} alt={elem4} className={'sliderimg'}/>
                        <h2>Bratari</h2>
                    </div></Link>
                    <Link to={'/rine_store/seturiB'}><div>
                        <img src={elem2} alt={elem2} className={'sliderimg'}/>
                        <h2>Seturi Barbati</h2>
                    </div></Link>
                    <Link to={'/rine_store/seturiD'}><div>
                        <img src={elem2} alt={elem2} className={'sliderimg'}/>
                        <h2>Seturi Dama</h2>
                    </div></Link>
                    <Link to={'/rine_store/seturiC'}><div>
                        <img src={elem2} alt={elem2} className={'sliderimg'}/>
                        <h2>Seturi Cuplu</h2>
                    </div></Link>
                </Slider>
            </div>
        );
    }
}
