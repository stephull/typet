/**
 *  Display: screen for typing
 */

import React, {Component} from 'react';
import Query from "./Query.js";
import "./styles/Display.css";

let rand = Math.floor(Math.random() * 65536);
if (rand < 10000) rand += 10000;

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