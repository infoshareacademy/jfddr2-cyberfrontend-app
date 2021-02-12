import { Link } from 'react-router-dom';

import './LandingPage.css';

const LoginButton = () => {
    return (
        <div>
            <button class="form__containerButtonUp" type="submit">SIGN UP</button>
            <button class="form__containerButtonIn" type="submit">SIGN IN</button>
        </div>
    )
}

export default LoginButton;
