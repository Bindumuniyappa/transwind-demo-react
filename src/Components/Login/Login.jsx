import React from 'react';
import { emailValidator, passwordValidator } from '../regexValidator';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate(); // Replaced useHistory with useNavigate

  const [input, setInput] = React.useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (localStorage.getItem('auth')) {
      navigate('/profile'); // Replaced history.push('/')
    }
  }, []);

  const formSubmitter = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    if (!emailValidator(input.email)) return setErrorMessage('Please enter a valid email id');

    if (!passwordValidator(input.password))
      return setErrorMessage(
        'Password should have a minimum of 8 characters with a combination of uppercase, lowercase, numbers, and special characters'
      );

    if (input.email !== 'admin@a.com' || input.password !== 'Password@1') {
      return setErrorMessage('Invalid email or password');
    }

    navigate('/profile'); // Replaced history.push('/')
    localStorage.setItem('auth', true);
  };

  return (
    <>
    <div className={styles.login}>
    <form onSubmit={formSubmitter}>
      <h1 className={styles.Login_head}>Login</h1>
      <span className={styles.error}>{errorMessage}</span>
      <div>{successMessage}</div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button className={styles.button_common} type='submit' >
        Login
      </button>
    </form>
  </div>
  </>
  );
};

export default Login;
