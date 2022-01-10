import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers';

import {Provider} from 'react-redux';

// Adding combined reducers to store + ability to use Redux devtools with chrome
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
	  <Provider store={store}>
    <App />
	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


