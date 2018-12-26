import axios from 'axios';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

axios.defaults.withCredentials = true;
axios.defaults.baseUrl = 'http://rem-rest-api.herokuapp.com/api';

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
