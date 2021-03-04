import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyBcs9OUlswKK3ACSAUVIy3qihGGQlPJkMI',
  authDomain: 'effi-d406d.firebaseapp.com',
  projectId: 'effi-d406d',
  storageBucket: 'effi-d406d.appspot.com',
  messagingSenderId: '810856324098',
  appId: '1:810856324098:web:9dc06130ba685c78501b1b',
  measurementId: 'G-CCEQRXHV1Z',
};
firebase.initializeApp(firebaseConfig);
export default firebase;
