import React from 'react';
import KeyRow from "./KeyRow.js";

function Keyboard() {
    const keyrows = [];
    for (let i = 1; i <= 5; i++) {
        keyrows.push(<KeyRow id={i}/>)
    }
    return (
        <React.Component>
            {keyrows}
        </React.Component>
    );
}

export default Keyboard;