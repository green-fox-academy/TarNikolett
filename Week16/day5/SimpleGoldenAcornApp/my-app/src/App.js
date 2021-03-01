import { useState } from 'react';

export default function App() {
  return (
    <div>
      <NumberCounter />
    </div>
  );
}

function NumberCounter() {
  let [numberCount, setNumberCount] = useState(0);
  return (
    <>
      <div>
        <button type="button" onClick={() => setNumberCount(numberCount + 1)}>Vegyél egyet!</button>
      </div>
      <div>
        {numberCount < 0
          ? alert('0-nál kisebb nem lehet!')
          : <span>{numberCount}</span>}
      </div>
      <div>
        <button type="button" onClick={() => setNumberCount(numberCount - 1)}>Egyél egyet</button>
      </div>
    </>
  )
};


