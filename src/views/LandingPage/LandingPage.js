import Register from "./Register/Register";
import Form from "./Login/Form";
import { useState } from "react";
import logo from "../../img/logo.png";

const LandingView = ({ data, setData }) => {
  const [visibleReg, setVisibleReg] = useState(false);
  const [visibleFo, setVisibleFo] = useState(false);

  return (
    <div className="landingPage-container">
      {/* <h1>EFFIcient</h1> */}
      <button
        onClick={() => {
          setVisibleFo(false);
          setVisibleReg(!visibleReg);
        }}
        className="form__containerButtonIn btn-hover login"
      >
        SIGN UP
      </button>
      <button
        onClick={() => {
          setVisibleReg(false);
          setVisibleFo(!visibleFo);
        }}
        className="form__containerButtonIn btn-hover login"
      >
        SIGN IN
      </button>
      {visibleReg ? <Register data={data} setData={setData} /> : null}
      {visibleFo ? <Form data={data} setData={setData} /> : null}
      <img className="effiLogo" src={logo} alt="logo" />
    </div>
  );
};

export default LandingView;
