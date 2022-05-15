import React, { Component } from 'react';
import KeyRow from "./KeyRow.js";

const rowStyles = {
    display: "row",
    backgroundColor: 'purple'
}

function getKeyRows() {
    const keyrows = [];
    for (let i = 0; i < 5; i++) {
        keyrows.push(<KeyRow style={rowStyles} id={i+1}/>)
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