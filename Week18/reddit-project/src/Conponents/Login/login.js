import auth, { AuthenticationProvider } from '../../Firebase/auth';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import './login.css';

export default function Login(props) {
  const { user, onLogin } = props;
  const { login, setLogin } = props;


  function handleOnClickLogin() {
    auth()
      .signInWithPopup(AuthenticationProvider)
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    auth()
      .onAuthStateChanged((user) => {
        if (user) {
          onLogin(user)
        }
      });
  }, [user, onLogin]);

  setTimeout(() => {
    setLogin(true)
  }, 2000);

  if (login && user) { return <Redirect to="/posts" /> }

  return (
    <div>
      <button type="button" onClick={handleOnClickLogin} className="sign-in-btn">Sign in with Google</button>
      <span>{user && `Helló ${user.displayName}`}</span>
    </div>
  );
}