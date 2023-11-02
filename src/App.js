import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./Navbar";
import Card from "./Card";

function App() {
  return (
      <div className="App">
        <Navbar />
          <h1>CS 230L</h1>
          <h2>Section - 003</h2>
          <p>WVU ID: 800365907</p>
          <p>Hi I am Ross Shaner</p>
    </div>
  );
}

export default App;
