/**
 *  Display: screen for typing
 */

import React from 'react';
import Query from "./Query.js";
import "./styles/QueryDisplay.css";

let rand = Math.floor(Math.random() * 65536);
if (rand < 10000) rand += 5000;

export default function Display() {
    return <div className="queryDisplay">
        <Query seed={rand} />
    </div>
}