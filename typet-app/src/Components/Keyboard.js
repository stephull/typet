/**
 *  Keyboard: main keyboard layout on screen, for interaction
 */

import React, { Component } from 'react';
import KeyRow from "./KeyRow.js";
import "./Keyboard.css";

function getKeyRows() {
    const keyrows = [];
    for (let i = 0; i < 5; i++) {
        keyrows.push(<KeyRow id={i+1}/>)
    }
    return keyrows;
}

class Keyboard extends Component {
    render() {
        return (
            <>
                {getKeyRows()}
            </>
        );
    }
}

export default Keyboard;