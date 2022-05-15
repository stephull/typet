import React, {Component} from 'react';

const FILL = 2;

const converting = new Map([
    ["tilde", "`"],
    ["equals", "="],
    ["left-bracket", "["],
    ["right-bracket", "]"],
    ["backslash", "\\"],
    ["semicolon", ";"],
    ["quote", "'"],
    ["comma", ","],
    ["dot", "."],
    ["slash", "/"],
    ["filler1", ""],
    ["filler2", ""],
    ["backspace", "<<"]
]);

function getKey(val) {
    let keyWidth;
    switch(val) {
        case "filler1":
            keyWidth = 4; break;
        case "filler2":
        case "space":
            keyWidth = 5; break;
        case "shift":
            keyWidth = 2.2; break;
        case "caps":
        case "enter":
            keyWidth = 1.5; break;
        case "backspace":
            keyWidth = 1.4; break;
        case "tab":
        case "backslash":
            keyWidth = 1.2; break;
        default:
            keyWidth = 1; break;
    }

    if (converting.has(val)) {
        val = converting.get(val);
    }

    const keyStyle = {
        height: `${FILL}em`,
        width: `${keyWidth * FILL}em`,
        color: "black",
        backgroundColor: "white",
        borderRadius: `${0.5}em`,
        margin: `${-0.1}em`
    }
    const keyTextStyle = {
        alignItems: "center",
        fontWeight: 'bold',
        color: 'blue'
    }

    return (
        <div style={keyStyle}>
            <p style={keyTextStyle}>{val}</p>
        </div>
    );
}

class Key extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.className = props.className;
    }
    render() {
        return (
            <>
                {getKey(this.id)}
            </>
        );
    }
}

Key.defaultProps = {
    className: 'default'
};

export default Key;