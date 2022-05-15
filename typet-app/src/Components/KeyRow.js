/**
 *  KeyRow: key row for keyboard
 */

import React, {Component} from 'react';
import Key from "./Key.js";

const STOP = "@";

function assembleRow(query, sp) {
    const elements = [];
    for (let i = 0; i < query.length; i++) {
        var val = (query[i] === STOP) ? sp.shift() : query[i];
        elements.push(
            <Key id={val} />
        );
    }
    return elements;
}

function createRowByQuery(id) {
    let query = "", specialties = [];
    switch(id) {
        case 1:
            query = "@1234567890-@@"
            specialties = ["tilde", "equals", "backspace"]
            break;
        case 2:
            query = "@qwertyuiop@@@"
            specialties = ["tab", "left-bracket", "right-bracket", "backslash"]
            break;
        case 3:
            query = "@asdfghjkl@@@"
            specialties = ["caps", "semicolon", "quote", "enter"];
            break;
        case 4:
            query = "@zxcvbnm@@@@"
            specialties = ["shift", "comma", "dot", "slash", "shift"];
            break;
        case 5:
            query = "@@@"
            specialties = ["filler1", "space", "filler2"];
            break;
        default: break;
    }
    return assembleRow(query, specialties);
}

function createRow(id) {
    let r = createRowByQuery(id);
    return (r !== null) ? r : "unavailable";
}

class KeyRow extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
    }
    render() {
        return (
            <>
                <div>
                    {createRow(this.id)}
                </div>
            </>
        );
    }
}

export default KeyRow;