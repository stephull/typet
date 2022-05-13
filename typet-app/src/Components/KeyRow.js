import React from 'react';
import Key from "./Key.js";

function createRow(id) {
    const newrow = []
    switch(id) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        default:
            break;
    }
    return newrow;
}

function KeyRow(props) {
    const {id} = props;
    const components = createRow(id);
    return (
        <React.Component>
            {components}
        </React.Component>
    );
}

export default KeyRow;