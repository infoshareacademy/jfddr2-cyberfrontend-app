import firebase from '../../firebase/firebaseConfig';

const LogoutBtn = () => {
  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <button className="deleteBtn" onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutBtn;
