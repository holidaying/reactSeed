import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import 'antd/dist/antd.css'; 
// import App from './App';
import Router from "./router"
window.React = React;
// import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
if (module.hot) {
  module.hot.accept();
}