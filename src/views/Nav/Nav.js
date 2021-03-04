import '../../sass/main.scss';
import { Link } from 'react-router-dom';
import Home from './Home';
import Back from './Back';
import User from './User';

function TopNav() {
  return (
    <nav className="nav">
      <User />
      <ul className="class__list">
        <li className="class__list-element">
          <Link to="/">
            <>
              <Home />
              <p className="class__list-text">Home</p>
            </>
          </Link>
        </li>
        <li className="class__list-element">
          <Link to="/board">
            <>
              <Back />
              <p className="class__list-text">Board</p>
            </>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
