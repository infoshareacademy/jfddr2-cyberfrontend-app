import "./LandingPage.css";
import Register from "./Register/Register";
import Login from "./Login/Login"
// import { useState } from "react"

const LandingView = ({ data }) => {
    // const [register, setRegister] = useState(false)
    // const [login, setLogin] = useState(false)

    return (
        <div>
            <button className="form__containerButtonIn" type="submit">SIGN IN</button>
            <Register />
            <Login data={data} />
            <button className="form__containerButtonIn" type="submit">SIGN IN</button>
        </div>
    );
};

export default LandingView;
