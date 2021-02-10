import "./TopNav.css";

function TopNav() {
  return (
    <nav>
      <ul className="main__nav">
        <li>LOGO</li>
        <li>Witaj użytkowniku!</li>
        <li>
          <ul className="burger__nav">
            <li className="burger__menu"></li>
            <li className="burger__menu"></li>
            <li className="burger__menu"></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
