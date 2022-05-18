/**
 *  Scoreboard: assembles all statistics of user's speed and accuracy
 */

import React from 'react';
import "./styles/Scoreboard.css";

export default function Scoreboard() {
    return <div className="scoreboard">
        <span>Your Statistics</span>
        <div className="score-head">
            <ul>
                <li><small>Overall stats</small></li>
                <li><small>Previous run</small></li>
                <li><small>Current run</small></li>
            </ul>
        </div>
        <div className="score-element" id="speed">
            <span>Speed and Accuracy</span>
        </div>
        <div className="score-element" id="wpm">
            <span>Words per Minute</span>
        </div>
        <div className="score-element" id="errors">
            <span>Common errors</span>
        </div>
    </div>
}