/**
 *  Header Menu: main menu for top of any page
 */

import React, {useState} from 'react';
import CreditsDialog from "./CreditsDialog";
import "./styles/HeaderMenu.css";

export default function HeaderMenu() {
    const [showModal, setModal] = useState(false);
    const handleCreditsHide = () => setModal(false);
    const handleCreditsShow = () => setModal(true);
    // CreditsDialog is shown when the user wants to see Credits

    return (
        <header className="headermenu">
            <ul style={{
                listStyleType: 'none'
            }}>
                <li>HOME</li>
                <li>PROFILE</li>
                <li>SETTINGS</li>
                <li>COMMUNITY</li>
                <li>LOGIN</li>
                <li onClick={handleCreditsShow}>CREDITS</li>
                <CreditsDialog show={showModal} onHide={handleCreditsHide}/>
            </ul>
        </header>
    );
}