import "./LandingPage.css";
import Register from "./Register/Register";
import Form from "./Login/Form";
import { useState } from "react";

const LandingView = () => {
    const [visibleReg, setVisibleReg] = useState(false);
    const [visibleFo, setVisibleFo] = useState(false);

    return (
        <div>
            <button
                onClick={() => { setVisibleFo(false); setVisibleReg(!visibleReg) }}
                className="form__containerButtonIn"
            >
                SIGN UP
      </button>
            <button
                onClick={() => { setVisibleReg(false); setVisibleFo(!visibleFo) }}
                className="form__containerButtonIn"
            >
                SIGN IN
      </button>
            {visibleReg ? <Register /> : null}
            {visibleFo ? <Form /> : null}
        </div>
    );
};

export default LandingView;
