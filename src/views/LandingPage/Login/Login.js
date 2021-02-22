import React from "react";
import Form from "./Form";
// import LoginButton from "./LandingPage";
import './style.css';

const Login = ({ data }) => {
    return (
        <div>
            <Form data={data} />
        </div>
    )
}

export default Login;