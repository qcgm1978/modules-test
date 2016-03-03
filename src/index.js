//import 'core-js/fn/object/assign';
//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './components/Main';
//
//// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));
require('styles//main.scss');

var component = require('./components/ComponentComponent');
var app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());