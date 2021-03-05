import "../../sass/main.scss";
import logo from "../../img/logo.png";

const HomeView = () => {
  return (
    <div className="homeView">
      <div className="homeView__background"></div>
      <div className="homeView__title">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p>Online application to tackle</p>
        <p>all of your work in one place.</p>
        <p>Portfolio view</p>
        <p>of all your projects.</p>
        <p>Personalized to-do lists.</p>
        {/* <p>Totally for free.</p> */}
      </div>
    </div>
  );
};

export default HomeView;
