import logo from './logo.svg';
import './App.css';

// testing purposes
import Test from "./Components/Test.js";

function App(props) {
  const testProp = props.children;
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
        </a><br/>
        <h4>TESTING...</h4>
        {testProp}
        <Test id={2} />
      </header>
    </div>
  );
}

export default App;
