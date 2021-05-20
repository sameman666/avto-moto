import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import Test from './components/test/test';

ReactDOM.render(
    <React.StrictMode>
      <App />
      <Test />
    </React.StrictMode>,
    document.getElementById(`root`)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
