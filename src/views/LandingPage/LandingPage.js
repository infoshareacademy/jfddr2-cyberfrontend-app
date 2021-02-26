import "./LandingPage.css";
import Register from "./Register/Register";
import Form from "./Login/Form";
import { useState } from "react";

const LandingView = ({ data, setData }) => {
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
            {visibleReg ? <Register data={data} setData={setData} /> : null}
            {visibleFo ? <Form data={data} setData={setData} /> : null}
        </div>
    );
};

export default LandingView;
