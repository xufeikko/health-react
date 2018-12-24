import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterList from './router'
import Login from './components/login/login';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<RouterList />, document.getElementById('root'));
serviceWorker.unregister();
