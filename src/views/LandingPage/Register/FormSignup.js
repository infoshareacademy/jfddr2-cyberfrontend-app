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

import React from "react";
import RegisterValue from "./RegisterValue";
import errorsInForm from "./errors";

const FormSignup = ({ submitForm }) => {
  const { handleSubmit, handleChange, values, errors } = RegisterValue(
    submitForm,
    errorsInForm
  );
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <br></br>
        <h2>Nice to see you!</h2>
        <h3> Create your account by filling out the form below.</h3>
        <div className="form-inputs">
          <br></br>
          <label htmlFor="username" className="form-label">
            {/* Username */}
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            {/* Email */}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            {/* Password */}
          </label>
          <input
            id="password"
            type="passord"
            name="password"
            className="form-input password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            {/* Confirm your password */}
          </label>
          <input
            id="password2"
            type="passord"
            name="password2"
            className="form-input password"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <br></br>
        <button className="form-input-btn" type="submit">
          SIGN UP
        </button>
        <br />
        <span className="form-input-login">
          If you have an account press <a href="gosia.com">Here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
