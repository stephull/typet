import logo from './logo.svg';
import './App.css';

// testing purposes
import Test from "./Components/Test.js";
import Keyboard from "./Components/Keyboard.js";

import { useState } from 'react';
import axios from 'axios';

const keyboardStyle = {
  backgroundColor: 'lightblue',
  borderRadius: `${0.5}em`,
  border: '1px solid black'
}

function App(props) {
  const testProp = props.children;
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <br/>
        <h4>TESTING...</h4>
        {testProp}
        <Test id={2} />
        <br/>
        <div style={{
          width: "10em", height: "5em", backgroundColor: "white", borderRadius: "1em"
        }}/><br/>
        {getData()}
        {profileData &&
          <div>
            <small><b>{profileData.profile_name}</b>{`  (${profileData.profile_id})`}</small><br/>
            <small>{profileData.profile_type}</small><br/>
            <small>{profileData.profile_summary}</small>
          </div>
        }<br/>
        <h4>Keyboard Test</h4><br/>
        <Keyboard style={keyboardStyle}/>
        <br/>

      </header>
    </div>
  );
}

export default App;
