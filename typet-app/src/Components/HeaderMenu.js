/**
 *  Header Menu: main menu for top of any page
 */

import React from 'react';
import "./styles/HeaderMenu.css";

function HeaderMenu() {
    return <header className="headermenu">
        <ul style={{
            listStyleType: 'none'
        }}>
            <li>HOME</li>
            <li>PROFILE</li>
            <li>SETTINGS</li>
            <li>COMMUNITY</li>
            <li>LOGIN</li>
            <li>CREDITS</li>
        </ul>
    </header>
}

export default HeaderMenu;