import React from "react";
import slide1 from '../../images/slideElem/slide1.png'
import './homeSlide.css'

export default function Home_Image() {
    return (
        <div class={'imageHome'}>
            <img src={slide1} alt={""} className={"image"}/>
            <div class={"homecentered"}>
                <div className={"hometitle"}>Rine Store </div>
                <div className={"hometitle2"}> AMINTIRI DE NEUITAT</div>
            </div>
        </div>
    )

}
