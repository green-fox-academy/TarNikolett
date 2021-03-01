import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(1000);

  useEffect(() => {
    setInterval(() => {
      setTime((time) => time + 1)
    }, [speed]);
    return () => clearInterval();
  }, [speed]);

  function setDoubleSpeed() {
    setSpeed(speed / 2)
  }

  return (
    <div className="container">
      <button onClick={setDoubleSpeed}>Click me!</button>
      <p>{time}</p>
    </div>
  )
}

export default App;
