import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { UserProvider } from './contexts/UserContext';
import './sass/main.scss';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { firebaseConfig } from './firebase/firebaseConfig';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.querySelector('#root')
);
