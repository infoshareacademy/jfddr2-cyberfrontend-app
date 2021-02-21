import { useState, useEffect } from "react";



const RegisterValue = (callback, validate) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);



    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            // [e.target.name]: e.target.value
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitted(true);
        console.log(values)

    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitted) {
            callback();
        }
    }, [errors])

    return { handleChange, handleSubmit, values, errors };

}
export default RegisterValue;

