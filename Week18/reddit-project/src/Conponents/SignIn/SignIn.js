import './signin.css';
import firebase from '../../Firebase/firebase';
import { Redirect } from 'react-router-dom';

export default function SignIn(props) {
  let user = props.user;

  function handleSignOut() {
    try {
      firebase.auth().signOut().then(() => { return <Redirect to="/" /> });
    } catch (e) {
      console.log(e.message)
    }
  };

  return (
    <div className="welcome-container">
      <span className="welcome-message">Sign in as {user.displayName}</span>
      <button type="button" className="logout-btn" onClick={handleSignOut}>Logout</button>
    </div>
  )
};