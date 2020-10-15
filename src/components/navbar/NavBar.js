import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav>
                <div className={"logo"}>Rine Stone</div>
                    <ul className={"nav-links"}>
                        <li><a>PRODUSE</a></li>
                        <li><a>DESPRE NOI</a></li>
                        <li><a>CONTACT</a></li>
                    </ul>
                    <ul className={"nav-icons"}>
                        <input type={"text"} placeholder={"Cautare..."}/>
                        <li><a>first</a></li>
                        <li><a>second</a></li>
                    </ul>
            </nav>
        </div>
    );
};

export default NavBar;