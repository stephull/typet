import React from 'react';

function Key(props) {
    const {className = "normal", id} = props;
    let width;
    switch(className) {
        case "space":
            width = 5;
            break;
        case "shift":
            width = 2.2;
            break;
        case "caps":
        case "enter":
            width = 1.5;
            break;
        case "backspace":
            width = 1.4;
            break;
        case "tab":
        case "backslash":
            width = 1.2;
            break;
        default:
            width = 1; 
            break;
    }
    return (
        <React.Component>
            <div>
                <p>{id}</p>
            </div>
        </React.Component>
    );
}

export default Key;