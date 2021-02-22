import { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Form = ({ data }) => {
    console.log(data);
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <div>
            {/* <FormSignup /> */}
            {!isSubmitted ? (<FormSignup submitForm={submitForm} />) : (<FormSuccess data={data} />)}
            {/* <FormSuccess /> */}
        </div>
    )
}

export default Form;