import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom';
import store from './store/store';

//  Importing Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
      <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
