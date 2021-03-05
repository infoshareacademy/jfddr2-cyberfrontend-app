import NewProjectBtn from './NewProjectBtn';
import { useUser } from '../../contexts/UserContext';
import { NewAgeProjects } from '../NewAgeProjects/NewAgeProjects';
import LogoutBtn from './LogoutBtn';

function TableView() {
  const { user, userData } = useUser();
  return (
    <div className='board-wrapper'>
      <div className='board-nav'>
        <h3>Hello</h3>
        <span className='board__userName'>
          {userData.username || 'Anonymous'}
        </span>
        <LogoutBtn />
      </div>
      <div className='projectsContainer'>
        <div className='board-header'>
          <NewProjectBtn
            className='projectsContainer__newProjectBtn'
            userId={user.uid}
          />
          <h2 className='projectsContainer__title'>Your projects:</h2>
        </div>
        <NewAgeProjects className='projectsContainer__newProjects' />
      </div>
    </div>
  );
}

export default TableView;
