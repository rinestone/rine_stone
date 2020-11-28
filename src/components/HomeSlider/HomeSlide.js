import React from "react";
import slide1 from '../../images/slideElem/slide1.png'
import './homeSlide.css'

export default function Home_Image() {
    return (
        <div class={'imageHome'}>
            <img src={slide1} alt={"image"} className={"image"}/>
            <div class={"centered"}>
                <div className={"title"}>Rine Store </div>
                <div className={"title2"}> AMINTIRI DE NEUITAT</div>
            </div>
        </div>
    )

}
