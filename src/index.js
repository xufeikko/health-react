import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterList from './router';
import 'element-theme-default';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<RouterList />, document.getElementById('root'));
serviceWorker.unregister();
