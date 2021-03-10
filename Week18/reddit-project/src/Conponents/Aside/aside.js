import './aside.css';

export default function Aside() {
  return (
    <aside className="about-container">
      <button> Write new post </button>
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