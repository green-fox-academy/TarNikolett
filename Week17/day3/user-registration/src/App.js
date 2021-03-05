import { useState, useRef, useEffect } from 'react';
import './App.css';

let textForErrorMessages = {
  username: 'Felhasználónév megadása kötelező!',
  email: 'A mezőnek tartalmaznia kell a @ karaktert!',
  password: 'A jelszó hossza minimum 8 karakter!'
}

function App() {
  let [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: ''
  });

  let [errorMessages, setErrorMessages] = useState({
    username: '',
    email: ''
  });

  let usernameInput = useRef(null);
  useEffect(() => {
    usernameInput.current.focus();
  }, []);

  function validateField(value, fieldName) {
    let isValid = value.length > 0;

    if (fieldName !== 'email') {
      setErrorMessages({
        ...errorMessages,
        [fieldName]: isValid ? '' : textForErrorMessages[fieldName]
      })
    }
    else if (fieldName === 'email' && !value.includes('@')) {
      setErrorMessages({
        ...errorMessages,
        [fieldName]: textForErrorMessages[fieldName]
      });
    }
  }

  function handleValueChange(e) {
    e.preventDefault();
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
    console.log(formValues)
  };

  return (
    <div className="container">

      <form onSubmit={handleValueChange}>

        <label htmlFor="username">Felhasználónév</label>
        <input
          type="text"
          className={`input ${errorMessages.username ? 'invalid' : ''}`}
          id="username"
          name="username"
          value={formValues.username}
          ref={usernameInput}
          onChange={handleValueChange}
          onBlur={e => validateField(e.target.value, 'username')}
        />
        {errorMessages.username && (
          <div className="alert">{errorMessages.username}</div>
        )}

        <label htmlFor="email">Email cím</label>
        <input
          type="email"
          className={`input ${errorMessages.email ? 'invalid' : ''}`}
          id="email"
          value={formValues.email}
          name="email"
          onChange={handleValueChange}
          onBlur={e => validateField(e.target.value, 'email')}
        />
        {errorMessages.email && (
          <div className="alert">{errorMessages.email}</div>
        )}

        <label htmlFor="password">Jelszó</label>
        <input
          type="password"
          id="password"
          className={`input ${errorMessages.password ? 'invalid' : ''}`}
          name="password"
          value={formValues.password}
          onChange={handleValueChange}
          onBlur={e => validateField(e.target.value, 'password')}
        />
        {errorMessages.password && (
          <div className="alert">{errorMessages.password}</div>
        )}
        <button type="submit" >Küldés</button>

      </form>
    </div >
  );
}

export default App;
