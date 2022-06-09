/**
 *  TypeArea: textbox to type words
 */

import React, { Component }from 'react';
import "./styles/TypeArea.css";

export default class TypeArea extends Component {
    render() {
        return (
            <textarea disabled={(this.props.queryToText) ? false : true}
                className="typearea" placeholder="Start typing..."/>
        );
    }
}