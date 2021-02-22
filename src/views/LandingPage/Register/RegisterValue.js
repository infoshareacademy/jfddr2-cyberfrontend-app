import { useState, useEffect } from "react";
import firebase from "firebase";


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
        firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
            .then((cred) => {
                firebase.firestore().collection("users").doc(cred.user.uid).set({
                    username: values.username,
                    email: values.email
                })
            })
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitted) {
            callback();
        }
    }, [callback, errors, isSubmitted])

    return { handleChange, handleSubmit, values, errors };

}
export default RegisterValue;

