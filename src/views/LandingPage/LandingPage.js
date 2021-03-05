import Register from "./Register/Register";
import Form from "./Login/Form";
import { useState } from "react";
import logo from "../../img/logo.png";

const LandingView = ({ data, setData }) => {
  const [isRegistrationVisible, setRegistrationVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(true);

  return (
    <div className="landingPage-container">
      {/* <h1>EFFIcient</h1> */}
      <button
        onClick={() => {
          setLoginVisible(false);
          if (!isRegistrationVisible) {
            setRegistrationVisible(!isRegistrationVisible);
          }
        }}
        className="form__containerButtonIn btn-hover login"
      >
        SIGN UP
      </button>
      <button
        onClick={() => {
          if (!isLoginVisible) {
            setLoginVisible(!isLoginVisible);
          }
          setRegistrationVisible(false);
        }}
        className="form__containerButtonIn btn-hover login"
      >
        SIGN IN
      </button>
      {isRegistrationVisible ? <Register data={data} setData={setData} /> : null}
      {isLoginVisible ? <Form data={data} setData={setData} /> : null}
      <img className="effiLogo" src={logo} alt="logo" />
    </div>
  );
};

export default LandingView;
