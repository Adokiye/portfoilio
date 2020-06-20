import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/css/reset.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/main.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
