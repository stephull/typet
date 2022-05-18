/**
 *  Query: selected random words
 */

import React, { useState } from 'react';
import "./styles/QueryDisplay.css";
import axios from 'axios';

export default function Query({seed}) {
    const [wordData, setData] = useState(null);

    function getWords() {
        axios({
            method: "GET",
            url: "/words",
        })
        .then((response) => {
            const res = response.data;
            setData({
                word_data: res.words,
            })
        })
        .catch((err) => {
            if (err.response) {
                console.log(`${err.response}\n${err.response.status}\n${err.response.headers}`)
            }
        })
    }

    return(
        <>
            {
                (getWords() || wordData) &&
                <span className="generatedQuery">
                    {wordData.word_data}
                </span>
            }
            <br/><small><b>Seed: {seed}</b></small>
        </>
    );
}