import React from "react";
import "./footer.css"
import { Icon, InlineIcon } from '@iconify/react';
import mapMarker from '@iconify-icons/fa/map-marker';
import phoneFilled from '@iconify-icons/carbon/phone-filled';
import envelopeIcon from '@iconify-icons/fa/envelope';
import facebookFilled from '@iconify-icons/ant-design/facebook-filled';
import youtubeFilled from '@iconify-icons/ant-design/youtube-filled';
import whatsAppOutlined from '@iconify-icons/ant-design/whats-app-outlined';




export default function Footer() {
    return (
        <div className={"footer"}>
            <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"/>
            <footer className="footer-distributed">

                <div className="footer-left">
                        <h3>Rine<span> Store</span></h3>
                        <p className="footer-links">
                            <a href="#">Home </a>
                            |
                            <a href="#"> Aranjamente Florale</a>
                        </p>

                        <p className="footer-company-name">© 2020 Floraria RineStore.</p>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>Contact</span></p>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/FlorariaRinestore"><i><Icon icon={facebookFilled} /></i></a>
                        <a href="tel:0752780336"><i><Icon icon={whatsAppOutlined} /></i></a>
                        <a href="https://www.youtube.com/channel/UCk3iSvK_YHeaEdyZXw8iHkA"><i><Icon icon={youtubeFilled} /></i></a>
                    </div>
                </div>

                <div className="footer-center">
                    <div>
                        <i><Icon icon={mapMarker} /></i>
                        <p>Galati</p>
                    </div>

                    <div>
                        <i><Icon icon={phoneFilled} /></i>
                        <p>0752780336</p>
                    </div>
                    <div>
                        <i><Icon icon={envelopeIcon} style={{fontSize: "20px"}}/></i>
                        <p><a href="mailto:rinestone1996@gmail.com">rinestone1996@gmail.com</a></p>
                    </div>
                </div>
            </footer>
        </div>)
}
