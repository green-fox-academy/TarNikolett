import './App.css';

function App() {
  return (
    <div className="pizza-picker-container">

      <h1>Pizza rendelés</h1>
      <select name="alap" id="alap-valaszto">
        <option>Alap választó</option>
        <option value="paradicsom">Paradicsom</option>
        <option value="tejszin">Tejszín</option>
        <option value="tejfol">Tejföl</option>
      </select>

      <div className="feltet-valaszto">
        <h3>Feltétek:</h3>

        <div className="checkbox">
          <input type="checkbox" id="sonka"></input>
          <label htmlFor="sonka">Sonka</label>
        </div>

        <div className="checkbox">
          <input type="checkbox" id="szalami"></input>
          <label htmlFor="szalami">Szalámi</label>
        </div>

        <div className="checkbox">
          <input type="checkbox" id="vegetarianus"></input>
          <label htmlFor="vegetarianus">Vegetáriánus</label>
        </div>
      </div>

      <div className="radio-gombok">
        <h3>Felvágva kérem</h3>
        <input type="radio" id="igen" name="felvagva" value="igen"></input>
        <label for="igen">Igen</label>
        <input type="radio" id="nem" name="felvagva" value="nem"></input>
        <label for="nem">Nem</label>
      </div>

    </div>
  )
}

export default App;
