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
import RegisterValue from "./RegisterValue";

const FormSignup = () => {
    const { handleSubmit, handleChange, values, errors } = RegisterValue();
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Nice to see you!</h2>
                <h3> Create your account by filling out the form below.</h3>
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
                        value={values.username}
                        onChange={handleChange}
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
                        value={values.email}
                        onChange={handleChange}
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
                        value={values.password}
                        onChange={handleChange}
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
                        value={values.password2}
                        onChange={handleChange}
                    />
                </div>
                <button className="form-input-btn"
                    type="submit">SIGN UP</button>
                <br />
                <span className="form-input-login">
                    If you have an account press <a href="gosia.com">Here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup;
