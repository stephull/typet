/**
 *  Query: selected random words
 */

import React, { useState } from 'react';
import TypeArea from "./TypeArea";
import QueryDialog from "./QueryDialog";
import "./styles/Query.css";
import axios from 'axios';

export default function Query({seed}) {
    const [wordData, setData] = useState(null);
    const [show, setShow] = useState(false);

    const [settingsModal, setSettingsModal] = useState(false);
    const handleSettingsShow = () => setSettingsModal(true);
    const handleSettingsHide = () => setSettingsModal(false);

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
                <div className="queryBox">
                    <span className="generatedQuery">
                        {wordData.word_data}
                    </span>
                </div>
            }
            <br/>
            {
                (!show) &&
                <small>Typing session paused  [Seed: {seed}]</small>
            }
            <br/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button className="queryButton" 
                    onClick={() => setShow(!show)}>
                        {show ? `RESET` : `BEGIN`}
                </button>
                <button className="queryButton"
                    disabled={show ? true : false}
                    onClick={handleSettingsShow}>
                        SETTINGS
                </button>
            </div>
            <br/>
            <TypeArea queryToText={show} />
            <QueryDialog show={settingsModal} onHide={handleSettingsHide} />
        </>
    );
}