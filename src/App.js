import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { hot } from 'react-hot-loader/root';
import { Input } from 'antd';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
      </header>
      <div className="form_login">
      <Input placeholder="请输入用户名" />
      <Input placeholder="请输入密码" />
      </div>
    </div>
  );
}
export default App;
