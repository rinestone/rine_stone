import React from 'react';
import flowers from "../../images/home/homeFlowers.png";
import "./services.css";

export default function Services() {
    return (
        <div className={'serviceSquare'}>
            <div className={'textJustify'}>
                <img src={flowers} alt={flowers}/>
                <h1>SERVICII OFERITE</h1>
                <h2>DESPRE NOI</h2>
                <div className={'h3text'}>
                    <h3>
                        Fiecare om are propria sa paleta de culoare cu ajutorul careia isi lasa amprenta in lume, iar      Rine Store isi propune sa evidentieze acest lucru prin produse unice.
                    </h3>
                    <h3>
                    Fie ca doriti sa oferiti persoanelor dragi un cadou, fie sa va colorati ziua cu o mica atentie, cu un simplu click, acest lucru devine posibil.
                    </h3>
                </div>
            </div>
        </div>
    );

}
