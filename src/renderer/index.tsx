import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.global.css';

ReactDOM.render(
  <div className="bg-gray-900 w-full h-screen flex justify-start items-start font-sans overflow-auto">
    <App />
  </div>,
  document.getElementById('root')
);
