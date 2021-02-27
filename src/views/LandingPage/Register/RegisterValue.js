import { useState, useEffect } from "react";
import firebase from "firebase";

const RegisterValue = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      // [e.target.name]: e.target.value
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitted(true);
    console.log(values);
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((cred) => {
        firebase.firestore().collection("users").doc(cred.user.uid).set({
          username: values.username,
          email: values.email,
        });
        return cred;
      })
      .then((cred) => {
        console.log(cred);
        firebase
          .firestore()
          .collection(`users/${cred.user.uid}/projects`)
          .add({
            projectName: "Starter project",
            archive: false,
            favourite: false,
          })
          .then((ref) => {
            ref
              .collection("columns")
              .add({
                columnName: "Todo",
              })
              .then((ref) => {
                ref.collection("tasks").add({
                  taskName: "Be awesome",
                });
              });

            ref.collection("columns").add({
              columnName: "In Progress",
            });

            ref.collection("columns").add({
              columnName: "Done",
            });
          });
      });
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      callback();
    }
  }, [callback, errors, isSubmitted]);

  return { handleChange, handleSubmit, values, errors };
};
export default RegisterValue;
