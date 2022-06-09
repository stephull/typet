/**
 *  Key: key button for Keyboard
 */

import React, {Component} from 'react';
import "./styles/Keyboard.css";

const shifts = new Map([
    ["tilde", "~"],
    ["1", "!"], ["2", "@"],
    ["3", "#"], ["4", "$"],
    ["5", "%"], ["6", "^"],
    ["7", "&"], ["8", "*"],
    ["9", "("], ["0", ")"],
    ["-", "_"], ["=", "+"],
    ["[", "{"], ["]", "}"],
    ["\\", "|"], [";", ":"],
    ["'", "\""], [",", '<'],
    [".", ">"], ["/", "?"]
]);

/*function changeFromShift(val) {
    if (SHIFT WAS CLICKED OR PRESSED) {
        return Object.keys(shifts).find((key) => shifts[key] === val)
    }
    return shifts.get(val);
}*/

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

export default class Key extends Component {
    render() {
        const { children, id = children, code, className = "normal" } = this.props;
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
            fontSize: 'small',
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
}