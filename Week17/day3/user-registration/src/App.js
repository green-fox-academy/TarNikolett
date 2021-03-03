import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {

  let [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });

  function handleDataChange(e) {
    setData({
      ...data, [e.target.name]: e.target.value
    })
  }

  function consoleData(e) {
    e.preventDefault();
    console.log(data)
  }

  let usernameInput = useRef(null);
  useEffect(() => {
    usernameInput.current.focus();
  }, []);

  return (
    <div className="container">

      <form onSubmit={consoleData}>

        <label htmlFor="username">Felhasználónév</label>
        <input
          type="text"
          id="username"
          name="username"
          ref={usernameInput}
          onChange={handleDataChange}
        />

        <label htmlFor="email">Email cím</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleDataChange}
        />

        <label htmlFor="password">Jelszó</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleDataChange}
        />

        <button type="submit" >Küldés</button>

      </form>
    </div >
  );
}

export default App;
