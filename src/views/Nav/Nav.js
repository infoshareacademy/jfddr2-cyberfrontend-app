import { Link } from "react-router-dom";

import "./Nav.css";

function TopNav() {
  return (
    <nav className="nav">
      <ul className="class__list">
        <li>
          <Link to="/">To Board</Link>
        </li>
        <li>
          <Link to="/board">Table</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
