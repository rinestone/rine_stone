import React, { Component } from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import './Gallery.css'
import elem1 from "../../images/slideElem/slide_elem1.png"
import elem2 from "../../images/slideElem/slide_elem2.png"
import elem3 from "../../images/slideElem/slide_elem3.png"
import elem4 from "../../images/slideElem/slide_elem4.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Home} from "@material-ui/icons";


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
                <h1>GALERIE</h1>
                <h2>PRODUSELE NOASTRE</h2>
                <div className={'emptysquare'}/>
                <Slider {...settings} >
                    <div>
                        <img src={elem1} alt={elem1} className={'sliderimg'} />
                        <h2>Aranjamente Florale</h2>
                    </div>
                    <div>
                        <img src={elem2} alt={elem2} className={'sliderimg'}/>
                        <h2>Ochelari</h2>
                    </div>
                    <div>
                        <img src={elem3} alt={elem3} className={'sliderimg'}/>
                        <h2>Ceasuri</h2>
                    </div>
                    <div>
                        <img src={elem4} alt={elem4} className={'sliderimg'}/>
                        <h2>Bratari</h2>
                    </div>
                </Slider>
            </div>
        );
    }
}


//     return (
//         <div class={'square'}>
//             <h1>There is a Square</h1>
//             <h2>Produsele Noastre</h2>
//             <Slider {...settings}>
//                 <div>
//                     <h3>1</h3>
//                 </div>
//                 <div>
//                     <h3>2</h3>
//                 </div>
//             </Slider>
//         </div>
//     )
//
// }
