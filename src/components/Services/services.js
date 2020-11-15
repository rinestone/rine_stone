import React from 'react';
import flowers from "../../images/home/homeFlowers.png";
import "./services.css";

export default function Services() {
    return (
        <div className={'serviceSquare'}>
            <h1>SERVICII OFERITE</h1>
            <h2>DESPRE NOI</h2>
            <div className={'textJustify'}
                 >
                <h3>#TODO TEXT
                <img className={'imageService'} src={flowers} alt={flowers}/>
                </h3>
            </div>
        </div>
    );

}
