// import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { Link } from 'react-router-dom'
// import { hot } from 'react-hot-loader/root';
function App() {
  const numbers = [{name:"首页",path:"/index"}, {name:"日志",path:"/log"}, {name:"系统管理",path:"devops"}];
  const listItems = numbers.map((item,index) =>
    <li key={index.toString()} className="nav-item"><Link to={item.path}>{item.name}</Link></li>
  );
  return (
    <div className="nav-container">
      <header className="App-header">
        <ul>{listItems}</ul>
      </header>
    </div>
  );
}
export default App;
