import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './index.css';
import './../node_modules/video-react/dist/video-react.css';
import { BrowserRouter, Router } from 'react-router-dom';
import ScrollToTop from "./components/scrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
		  <App />
    </ScrollToTop>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
