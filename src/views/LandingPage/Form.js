import react, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <div>
            {/* <FormSignup /> */}
            {!isSubmitted ? (<FormSignup submitForm={submitForm} />) : (<FormSuccess />)}
            {/* <FormSuccess /> */}
        </div>
    )
}

export default Form;