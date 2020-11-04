import React from "react";
import "./footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';

export default function Footer() {
    return (
        <div className={'footer'}>
            <div className={'footer_contact'}>
                <h1>DATE DE CONTACT</h1>
                <p><FacebookIcon/>  https://www.facebook.com/FlorariaRinestore</p>
                <p><PhoneIcon />  12345</p>
            </div>
        </div>

    )

}
