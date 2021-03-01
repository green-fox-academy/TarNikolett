import Counters from './Counters.js';
import ButtonsForAll from './ButtonsForAllCounter.js';
import React, { useState } from 'react';

function App() {
  const [firstNumber, setFirstNumber] = useState(1);
  const [secondNumber, setSecondNumber] = useState(2);
  const [thirdNumber, setThirdNumber] = useState(3);

  return (
    <div>
      <Counters firstNumber={firstNumber} setFirstNumber={setFirstNumber} secondNumber={secondNumber} setSecondNumber={setSecondNumber} thirdNumber={thirdNumber} setThirdNumber={setThirdNumber} />
      <ButtonsForAll firstNumber={firstNumber} setFirstNumber={setFirstNumber} secondNumber={secondNumber} setSecondNumber={setSecondNumber} thirdNumber={thirdNumber} setThirdNumber={setThirdNumber} />
    </div>
  );
}

export default App;
