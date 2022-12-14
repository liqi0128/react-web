import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Router from './router/index'
import 'antd/dist/antd.css';
import './assets/css/public.less'
import './assets/css/font/result.css'
import './assets/css/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Router />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
