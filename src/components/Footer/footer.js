import React from "react";
import "./footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import wapp from '../../images/home/wapp_icon.png'

export default function Footer() {
    return (
        <div className={'footer'}>
            <div className={'footer_contact'}>
                <h1>DATE DE CONTACT</h1>
                <div style={{marginTop: "2vw"}}>
                    <a href={'https://www.facebook.com/FlorariaRinestore'}><FacebookIcon style={{height:'2vw', width:'2vw', marginLeft: "40px"}}/></a>
                    <a href={"tel:072222"}><PhoneIcon style={{height:'2vw', width:'2vw', marginLeft: "40px"}}/></a>
                    <a href={"tel:072222"}><img src={wapp} alt={wapp} style={{height:'2vw', width:'2vw', marginLeft: "40px"}}/></a>
                </div>
                <div style={{backgroundColor: 'black', height: '2vw'}}/>
            </div>

        </div>

    )

}
