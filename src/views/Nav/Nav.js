import { Link } from 'react-router-dom';

import './Nav.css';

function TopNav() {
  return (
    <nav className="nav">
      <ul className="class__list">
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
