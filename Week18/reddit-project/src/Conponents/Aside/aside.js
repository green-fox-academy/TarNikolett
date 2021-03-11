import './aside.css';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function Aside() {
  let [isClicked, setIsClicked] = useState(false);

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