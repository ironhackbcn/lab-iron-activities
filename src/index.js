import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js/dist/umd/popper.min.js';
import './App.css';


ReactDOM.render(
  <Router>
    <App /> 
  </Router>,
  document.getElementById('root')
);
