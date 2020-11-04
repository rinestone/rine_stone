import React from "react";
import "./footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import wapp from '../../images/wapp_icon.png'

export default function Footer() {
    return (
        <div className={'footer'}>
            <div className={'footer_contact'}>
                <h1>DATE DE CONTACT</h1>
                <div >
                    <FacebookIcon style={{height:'2vw', width:'2vw'}}/>
                    <PhoneIcon style={{height:'2vw', width:'2vw'}}/>
                    <img src={wapp} alt={wapp} style={{height:'2vw', width:'2vw'}}/>
                </div>
            </div>
        </div>

    )

}
