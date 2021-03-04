import NewProjectBtn from './NewProjectBtn';
import './NewProjectBtn.css';
import { useUser } from '../../contexts/UserContext';
import { NewAgeProjects } from '../NewAgeProjects/NewAgeProjects';
import firebase from '../../firebase/firebaseConfig';
import SvgLogout from '../buttons/Logout';

function TableView() {
  const { user, userData } = useUser();

  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <div className='board-nav'>
        <h3>Hello</h3>
        <span className='board__userName'>
          {userData.username || 'Anonymous'}
        </span>
        <button className='logoutBtn' onClick={logout}>
          <SvgLogout />
        </button>
      </div>
      <div className='projectsContaniner'>
        <NewProjectBtn userId={user.uid} />
        <h2 className='projectsContaniner__title'>Your projects:</h2>
        <NewAgeProjects />
      </div>
    </div>
  );
}

export default TableView;
