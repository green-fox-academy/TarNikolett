import { useState } from 'react';
import './App.css';

export default function App() {
  const [number, setNumber] = useState(10);
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  function handleDecrement() {
    if (number === 0) {
      alert('Nullánál kisebb nem lehet')
    }
    else {
      setNumberOfClicks(numberOfClicks + 1)
      setNumber(number - 1)
    }
  }

  function handleIncrement() {
    setNumberOfClicks(numberOfClicks + 1)
    setNumber(number + 1)
  }

  return (
    <div className="container">
      <div>Számláló (mindenkori): {number}</div>
      <div>Számláló (munkamenet): {numberOfClicks}</div>
      <div>
        <button type="button" onClick={handleIncrement}>Növel</button>
      </div>
      <div>
        <button type="button" onClick={handleDecrement}>Csökkent</button>
      </div>
    </div >
  )
}
