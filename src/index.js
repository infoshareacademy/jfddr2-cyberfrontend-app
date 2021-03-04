import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { UserProvider } from './contexts/UserContext';
import './sass/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.querySelector('#root')
);
