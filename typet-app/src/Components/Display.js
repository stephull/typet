/**
 *  Display: screen for typing
 */

import React, {Component} from 'react';
import random from Math;
import MAX_VALUE from Number;

let rand = random() * MAX_VALUE;

class Display extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
    }
    render() {
        return (
            <>
                <Query seed={rand}/>
            </>
        );
    }
}

export default Display;