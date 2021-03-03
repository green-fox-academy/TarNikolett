import { useState } from 'react';
import './App.css';

function App() {
  let [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  function handleDataChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <div className="registration-form">
        <form>
          <label htmlFor="first-name">Vezetéknév</label>
          <input type="text" id="first-name" name="firstName" onChange={handleDataChange} />

          <label htmlFor="last-name">Keresztnév</label>
          <input type="text" id="last-name" name="lastName" onChange={handleDataChange} />

          <label htmlFor="email">Email cím</label>
          <input type="email" id="email" name="email" onChange={handleDataChange} />

          <button type="submit">Küldés</button>

        </form>
      </div>
      <div className="container">
        <ul>
          <li>Vezetéknév: {data.firstName}</li>
          <li>Keresztnév: {data.lastName}</li>
          <li>Email: {data.email}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
