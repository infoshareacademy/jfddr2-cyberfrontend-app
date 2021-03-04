import NewProjectBtn from './NewProjectBtn';
import { useUser } from '../../contexts/UserContext';
import { NewAgeProjects } from '../NewAgeProjects/NewAgeProjects';
import LogoutBtn from './LogoutBtn';

function TableView() {
  const { user, userData } = useUser();
  return (
    <div>
      <div className="board-nav">
        <h3>
          Hello <span>{userData.username || 'Anonymous'}</span>
        </h3>
        <LogoutBtn />
      </div>
      <div>
        <h2>Your projects:</h2>
        <NewProjectBtn userId={user.uid} />
        <NewAgeProjects />
      </div>
    </div>
  );
}

export default TableView;
