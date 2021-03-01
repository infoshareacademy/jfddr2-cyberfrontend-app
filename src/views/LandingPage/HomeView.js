import "../../sass/main.scss";
import logo from "../../img/logo.png";

const HomeView = () => {
  return (
    <div className="homeView">
      <div className="homeView__background"></div>
      <div className="homeView__title">
        <img src={logo} alt="" />
        {/* <h2>
          Welcome to <span className="effi">EFFI</span>
        </h2> */}
        <h2>From now your tasks gonna fly! Let`s try !</h2>
      </div>
    </div>
  );
};

export default HomeView;
