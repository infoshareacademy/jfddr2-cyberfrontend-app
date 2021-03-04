import { useState } from 'react';
import firebase from '../../../firebase/firebaseConfig';

const LoginValue = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        // const errorMessage = error.message;
        alert(
          `Your email or password is incorrect, please check your data, ${error}`
        );
      });
  };

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Nice to see you!</h2>
        <h3> Login Here.</h3>

        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='form-input'
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className='form-inputs'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              id='password'
              type='passord'
              name='password'
              className='form-input'
              placeholder='Please enter your password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <button className='form-input-btn' type='submit'>
          SIGN IN
        </button>
        <br />
        <span className='form-input-login'>
          Forget your password ? Press<a href='gosia.com'>Here</a>
        </span>
      </form>
    </div>
  );
};
export default LoginValue;
