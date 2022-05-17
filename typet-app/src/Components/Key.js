/**
 *  Key: key button for Keyboard
 */

import React from 'react';
import "./Keyboard.css";

/*const shifts = new Map([
    
]);*/

const converts = new Map([
    ["tilde", '`'],
    ["equal", "+"],
    ["backspace", "<<"],
    ["tab", "TAB"],
    ["left-bracket", '['],
    ["right-bracket", ']'],
    ["backslash", "\\"],
    ["caps", "CAPS"],
    ["semicolon", ";"],
    ["quote", '\''],
    ["enter", "ENTER"],
    ["shift", "SHIFT"],
    ["comma", ","],
    ["dot", "."],
    ["slash", "/"],
    ["space", "SPACEBAR"]
]);
function displayNew(val) {
    return converts.get(val);
}

function decodeCode(code) {
    return code.split('-').map((item) => parseInt(item, 10));
}

function Key({ children, id = children, code, className = "normal" }) {
    let [width, row, pos] = decodeCode(code);
    const styles = {
        backgroundColor: (className === "filler") ? "gray" : "white",
        border: '1px solid gray',
        borderRadius: '0.15em',
        padding: '0.25em',
        display: 'block',
        gridArea: `${row} / ${pos} / ${row + 1} / ${pos + width}`
    }
    const textStyles = {
        color: "black",
        fontSize: 'smaller',
        margin: '0.15em 0.25em',
        userSelect: false
    }
    return (
        <div style={styles} className={`${className} key`} id={id}
            onClick={() => console.log(children)}>
                <p style={textStyles}>
                    {(converts.has(id)) ? displayNew(id) : children}
                </p>
        </div>
    );
}
export default Key;