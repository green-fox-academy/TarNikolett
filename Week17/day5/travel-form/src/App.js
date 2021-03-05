import { useState } from 'react';
import './App.css';

let DietaryRestrictions = [];

function App() {
  let [data, setData] = useState({});

  function summaryAlert(e) {
    e.preventDefault();
    alert(JSON.stringify(data))
  }

  function handleValueChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

    if (e.target.name === 'Dietary restrictions') {
      DietaryRestrictions.push(e.target.value);
      console.log(DietaryRestrictions)
      setData({
        ...data,
        [e.target.name]: DietaryRestrictions
      })
    }
  }

  return (
    <div>
      <form className="travel-form">
        <label htmlFor="first-name" className="form-label">First name</label>
        <input type="text" id="first-name" className="form-control" name="First name" onChange={handleValueChange}></input>
        <label htmlFor="last-name" className="form-label">Last name</label>
        <input type="text" id="last-name" className="form-control" name="Last name" onChange={handleValueChange}></input>
        <label htmlFor="age" className="form-label">Age</label>
        <input type="number" id="age" className="form-control" name="Age" onChange={handleValueChange}></input>

        <div className="form-check" >
          <input type="radio" id="female" name="Gender" value="Female" className="form-check-input" onChange={handleValueChange}></input>
          <label htmlFor="female" className="form-check-label">Female</label>
        </div>
        <div className="form-check">
          <input type="radio" id="male" name="Gender" value="Male" className="form-check-input" onChange={handleValueChange}></input>
          <label htmlFor="male" className="form-check-label">Male</label>
        </div>

        <label htmlFor="direction">Choose direction</label>

        <select id="direction" className="form-select" name="Direction" onChange={handleValueChange}>
          <option>Select one</option>
          <option value="Hawaii"  >Hawaii</option>
          <option value="Florida" >Florida</option>
          <option value="Bali" >Bali</option>
        </select>

        <div className="form-check">
          <input type="checkbox" id="vegetarian" className="form-check-input" value="Vegetarian" name="Dietary restrictions" onChange={handleValueChange}></input>
          <label htmlFor="vegetarian" className="form-check-label">Vegetarian</label>
        </div>

        <div className="form-check">
          <input type="checkbox" id="lactose-free" className="form-check-input" value="Lactose-free" name="Dietary restrictions" onChange={handleValueChange}></input>
          <label htmlFor="lactose-free" className="form-check-label">Lactose-free</label>
        </div>

        <div className="form-check">
          <input type="checkbox" id="kosher" className="form-check-input" value="Kosher" name="Dietary restrictions" onChange={handleValueChange}></input>
          <label htmlFor="kosher" className="form-check-label">Kosher</label>
        </div>

        <button type="submit" className="btn btn-outline-secondary" onClick={summaryAlert}> Submit </button>

      </form>

    </div>
  );
}

export default App;
