//app/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import App from './components/App.jsx';
//import './fixed-data-table.css';

require("!style!css!sass!./main.scss");
//require("!css!./fixed-data-table.css");

var css = require("!css!sass!./main.scss");

ReactDOM.render(<App />, document.getElementById('app'));