import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

// new imports
import Test from "./Components/Test.js";
import Keyboard from "./Components/Keyboard.js";
import Key from "./Components/Key.js";
import "./Components/Keyboard.css"

function App(props) {
  const [profileData, setData] = useState(null);

  function getData() {
    axios({
      method: "GET",
      url: "/profile",
    })
    .then((response) => {
      const res = response.data;
      setData({
        profile_name: res.name,
        profile_id: res.id,
        profile_summary: res.summary,
        profile_type: res.type
      })
    })
    .catch((err) => {
      if (err.response) {
        console.log(`${err.response}\n${err.response.status}\n${err.response.headers}`)
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /><br/>
        {props.children}
        <Test id={2} /><br/>
        {(getData() || profileData) &&
          <div>
            <small><b>{profileData.profile_name}</b>{`  (${profileData.profile_id})`}</small><br/>
            <small>{profileData.profile_type}</small><br/>
            <small>{profileData.profile_summary}</small><br/>
            <span>If you're seeing this, it means the backend works :-)</span>
          </div>
        }<br/>
        <Keyboard className="keyboard">
            <Key code="1-1-1" id="tilde" />
            <Key code="1-1-2">1</Key>
            <Key code="1-1-3">2</Key>
            <Key code="1-1-4">3</Key>
            <Key code="1-1-5">4</Key>
            <Key code="1-1-6">5</Key>
            <Key code="1-1-7">6</Key>
            <Key code="1-1-8">7</Key>
            <Key code="1-1-9">8</Key>
            <Key code="1-1-10">9</Key>
            <Key code="1-1-11">0</Key>
            <Key code="1-1-12">-</Key>
            <Key code="1-1-13" className="special" id="equal" />
            <Key code="1-1-14" className="special" id="backspace" />
            <Key code="1-2-1" className="special" id="tab" />
            <Key code="1-2-2">q</Key>
            <Key code="1-2-3">w</Key>
            <Key code="1-2-4">e</Key>
            <Key code="1-2-5">r</Key>
            <Key code="1-2-6">t</Key>
            <Key code="1-2-7">y</Key>
            <Key code="1-2-8">u</Key>
            <Key code="1-2-9">i</Key>
            <Key code="1-2-10">o</Key>
            <Key code="1-2-11">p</Key>
            <Key code="1-2-12" id="left-bracket" />
            <Key code="1-2-13" id="right-bracket" />
            <Key code="1-2-14" id="backslash" />
            <Key code="1-3-1" className="special" id="caps" />
            <Key code="1-3-2">a</Key>
            <Key code="1-3-3">s</Key>
            <Key code="1-3-4">d</Key>
            <Key code="1-3-5">f</Key>
            <Key code="1-3-6">g</Key>
            <Key code="1-3-7">h</Key>
            <Key code="1-3-8">j</Key>
            <Key code="1-3-9">k</Key>
            <Key code="1-3-10">l</Key>
            <Key code="1-3-11" id="semicolon" />
            <Key code="1-3-12" id="quote" />
            <Key code="2-3-13" className="special" id="enter" />
            <Key code="2-4-1" className="special" id="shift" />
            <Key code="1-4-3">z</Key>
            <Key code="1-4-4">x</Key>
            <Key code="1-4-5">c</Key>
            <Key code="1-4-6">v</Key>
            <Key code="1-4-7">b</Key>
            <Key code="1-4-8">n</Key>
            <Key code="1-4-9">m</Key>
            <Key code="1-4-10" id="comma" />
            <Key code="1-4-11" id="dot" />
            <Key code="1-4-12" id="slash" />
            <Key code="2-4-13" className="special" id="shift" />
            <Key code="3-5-1" className="filler"/>
            <Key code="8-5-4" className="special" id="space" />
            <Key code="3-5-12" className="filler"/>
        </Keyboard><br/>
      </header>
    </div>
  );
}

export default App;
