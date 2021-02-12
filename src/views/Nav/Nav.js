import { Link } from 'react-router-dom';

import './Nav.css';

function TopNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Landing Page</Link>
        </li>
        <li>
          <Link to="/table">Table</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
