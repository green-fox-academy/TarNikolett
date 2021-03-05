import './App.css';

function App() {
  return (
    <div>
      <form className="travel-form">
        <label htmlFor="first-name" className="form-label">First name</label>
        <input type="text" id="first-name" className="form-control" ></input>
        <label htmlFor="last-name" className="form-label">Last name</label>
        <input type="text" id="last-name" className="form-control" ></input>
        <label htmlFor="age" className="form-label">Age</label>
        <input type="number" id="age" className="form-control" ></input>

        <div className="form-check" >
          <input type="radio" id="female" name="gander" value="female" className="form-check-input"></input>
          <label for="female" className="form-check-label">Female</label>
        </div>
        <div className="form-check">
          <input type="radio" id="male" name="gender" value="male" className="form-check-input"></input>
          <label for="male" className="form-check-label">Male</label>
        </div>


        <select className="form-select">
          <option selected>Select one</option>
          <option>Hawaii</option>
          <option>Florida</option>
          <option>Bali</option>
        </select>

        <div className="form-check">
          <input type="checkbox" id="vegetarian" className="form-check-input"></input>
          <label htmlFor="vegetarian" className="form-check-label">Vegetarian</label>
        </div>

        <div className="form-check">
          <input type="checkbox" id="lactose-free" className="form-check-input"></input>
          <label htmlFor="lactose-free" className="form-check-label">Lactose-free</label>
        </div>

        <div className="form-check">
          <input type="checkbox" id="kosher" className="form-check-input"></input>
          <label htmlFor="kosher" className="form-check-label">Kosher</label>
        </div>

        <button type="submit" className="btn btn-outline-secondary"> Submit </button>

      </form>

    </div>
  );
}

export default App;
