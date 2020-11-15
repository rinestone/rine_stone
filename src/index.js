import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import './fonts/Segoe Script.ttf'

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <CssBaseline />
          <App/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
