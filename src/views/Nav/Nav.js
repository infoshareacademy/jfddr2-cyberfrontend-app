import { Link } from "react-router-dom";

import "./Nav.css";

function TopNav() {
  return (
    <nav className="nav">
      <ul className="class__list">
        <li>
          <Link to="/">Hello page</Link>
        </li>
        <li>
          <Link to="/board">To Board</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
