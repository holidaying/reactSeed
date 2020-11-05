import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { hot } from 'react-hot-loader/root';
import { Input } from 'antd';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Input placeholder="Basic usage" />
      <Input placeholder="Basic usage" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
      </header>
    </div>
  );
}
export default App;
