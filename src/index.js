import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const { studioGhibliFilms } = require("./studioGhibliAPI.js");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

