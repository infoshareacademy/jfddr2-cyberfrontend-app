import userEvent from "@testing-library/user-event"
import { useState } from "react"



const RegisterValue = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    })
    const [errors, setErrors] = useState({


    })
    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...value,
            // [e.target.name]: e.target.value
            [name]: value
        })
    }

    const handleSubmimt = (e) => {
        e.preventDefault();
    }
    return { handleChange, handleSubmimt, values, errors };

}
export default RegisterValue;

