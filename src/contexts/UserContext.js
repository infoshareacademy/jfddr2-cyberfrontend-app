import { createContext, useState, useEffect, useContext } from 'react';
import firebase from 'firebase/app';

const Context = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .onSnapshot((snapshot) => {
            setUserData(snapshot.data());
          });
      }
      setUser(user);
    });
  }, []);

  const value = {
    user,
    userData,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useUser = () => {
  return useContext(Context);
};
