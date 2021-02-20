// import { react } from "react";

// function Register() {

//     event.preventDefault();
//     return (
//         <div>
//             <form>
//                 <label for="username">Podaj nazwę użytkownika:</label>
//                 <input type="email" required />
//                 <label for="username">Podaj hasło:</label>

//                 <input type="password" id="pass" name="password" required />
//             </form>

//         </div >
//     )
// }
// export default Register;

import { React } from "react";

const FormSignup = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h2>Nice to see you! Create your account by filling out the form below.</h2>
                <div className="forms-inputs">
                    <label for="username"
                        className="form-label">

                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Please enter your username"
                    />
                </div>

                <div className="forms-inputs">
                    <label for="email"
                        className="form-label">

                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Please enter your email"
                    />
                </div>
                <div className="forms-inputs">
                    <label for="password"
                        className="form-label">

                    </label>
                    <input
                        id="password"
                        type="passord"
                        name="password"
                        className="form-input"
                        placeholder="Please enter your password"
                        required
                    />
                </div>
                <div className="forms-inputs">
                    <label for="password2"
                        className="form-label">

                    </label>
                    <input
                        id="password2"
                        type="passord"
                        name="password2"
                        className="form-input"
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <button className="form-input-btn"
                    type="submit">SIGN UP</button>
                <span className="form-input-login">
                    Press the button if you have an account <a href="gosia.com">Here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup;
