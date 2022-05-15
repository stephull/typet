import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Test from "./Components/Test.js";
import Keyboard from "./Components/Keyboard.js";
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <h4>TESTING...</h4>
        {props.children}
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
        <Keyboard />
        <br/>

      </header>
    </div>
  );
}

export default App;
