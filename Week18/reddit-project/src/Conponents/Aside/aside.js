import './aside.css';

import { Redirect } from 'react-router-dom';

export default function Aside(props) {
  const { isClicked, setIsClicked } = props;

  function handleClick(event) {
    event.preventDefault()
    setIsClicked(true);
  }
  if (isClicked) { return <Redirect to="/newPost" /> }

  return (
    <aside className="about-container">
      <button onClick={handleClick}>Write new post </button>
      <div className="about">
        <h1>About</h1>
        <p>Share & discuss informative content on: </p>
        <ul>
          <li>Astrophysics</li>
          <li>Cosmology</li>
          <li>Space Exploration</li>
          <li>Planetary Science</li>
          <li>Astrobiology</li>
        </ul>
      </div>
    </aside>
  )
}