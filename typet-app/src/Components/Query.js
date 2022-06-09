/**
 *  Query: selected random words
 */

import React, { useState } from 'react';
import TypeArea from "./TypeArea";
import "./styles/QueryDisplay.css";
import axios from 'axios';

export default function Query({seed}) {
    const [wordData, setData] = useState(null);
    const [show, setShow] = useState(false);

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
                (getWords() || wordData) && (show) &&
                <span className="generatedQuery">
                    {wordData.word_data}
                </span>
            }
            <br/>
            {
                (!show) && <small>
                    Typing session paused. <b>[Seed: {seed}]</b>
                </small>
            }
            <br/>
            <button className="showButton" 
                onClick={() => setShow((curr) => !curr)}>
                    {show ? `RESET` : `BEGIN`}
            </button>
            <TypeArea queryToText={show} />
        </>
    );
}