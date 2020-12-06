import React from "react";
import "./footer.css"
import {Icon} from '@iconify/react';
import mapMarker from '@iconify-icons/fa/map-marker';
import phoneFilled from '@iconify-icons/carbon/phone-filled';
import envelopeIcon from '@iconify-icons/fa/envelope';
import facebookFilled from '@iconify-icons/ant-design/facebook-filled';
import youtubeFilled from '@iconify-icons/ant-design/youtube-filled';
import whatsAppOutlined from '@iconify-icons/ant-design/whats-app-outlined';
import {Link} from "react-router-dom";


export default function Footer() {
    return (
        <div className={"footer"}>
            <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"/>
            <footer className="footer-distributed">

                <div className="footer-left">
                    <a href={"/rine_store"}><h3>Rine<span> Store</span></h3></a>
                    <p className="footer-links">
                        <a href="/rine_store">Home </a>
                    </p>

                    <p className="footer-company-name">© 2020 Floraria RineStore.</p>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>Contact</span></p>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/FlorariaRinestore"><i><Icon icon={facebookFilled}/></i></a>
                        <a href="tel:0752780336"><i><Icon icon={whatsAppOutlined}/></i></a>
                        <a href="https://www.youtube.com/channel/UCk3iSvK_YHeaEdyZXw8iHkA"><i><Icon
                            icon={youtubeFilled}/></i></a>
                    </div>
                </div>

                <div className="footer-center">
                    <div>
                        <i><Icon icon={mapMarker}/></i>
                        <p>Galati</p>
                    </div>

                    <div>
                        <a href="tel:0752780336">
                            <i><Icon icon={phoneFilled}/></i>
                            <p>0752780336</p>
                        </a>
                    </div>
                    <div>
                        <a href="mailto:rinestone1996@gmail.com"><i><Icon icon={envelopeIcon}
                                                                          style={{fontSize: "20px"}}/></i>
                            <p>rinestone1996@gmail.com</p></a>
                    </div>
                </div>
            </footer>
        </div>)
}
