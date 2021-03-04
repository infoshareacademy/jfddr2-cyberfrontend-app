import '../../sass/main.scss';
import { Link } from 'react-router-dom';
import Home from './Home';
import Back from './Back';

function TopNav() {
  return (
    <nav className="nav">
      <ul className="class__list">
        <li>
          <Link to="/">
            <Home />
          </Link>
        </li>
        <li>
          <Link to="/board">
            <Back />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
