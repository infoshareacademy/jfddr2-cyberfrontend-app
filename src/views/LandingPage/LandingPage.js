import "./LandingPage.css";
import Register from "./Register/Register";
import Form from "./Login/Form";
import { useState } from "react";

const LandingView = ({ data, setData }) => {
  const [view, setView] = useState("none"); // sign-in | sign-up

  const views = {
    none: null,
    "sign-in": <Register />,
    "sign-up": <Form />,
  };

  return (
    <div>
      <button
        onClick={() => setView("sign-up")}
        className="form__containerButtonIn"
      >
        SIGN UP
      </button>
      <button
        onClick={() => setView("sign-in")}
        className="form__containerButtonIn"
      >
        SIGN IN
      </button>
      {views[view]}
    </div>
  );
};

export default LandingView;
