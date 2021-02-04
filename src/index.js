import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
axios.defaults.baseURL = 'https://developers.zomato.com/api/v2.1';
axios.defaults.headers.get['Content-Type'] = 'application/json';
// axios.defaults.headers.common['user-key'] = process.env.REACT_APP_API_KEY;
axios.defaults.headers.common['user-key'] = 'f40737229ca819cbc545cac59d6b357e';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
