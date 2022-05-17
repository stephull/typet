/**
 *  Query: selected random words (TBD)
 */

import React, {Component} from 'react';

class Query extends Component {
    constructor(props) {
        super(props);
        this.seed = props.seed;
    }
    render() {
        return(
            <>
                <span>Test text goes here, hello!</span>
                <small>Seed: {this.seed}</small>
            </>
        );
    }
}

export default Query;