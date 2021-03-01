import React from 'react';
import './buttonsForAllCounter.css';

export default function ButtonsForAll(props) {
  function handleAllIncrease() {
    props.setFirstNumber(props.firstNumber + 1)
    props.setSecondNumber(props.secondNumber + 1)
    props.setThirdNumber(props.thirdNumber + 1)
  }
  function handleAllDecrease() {
    props.setFirstNumber(props.firstNumber - 1)
    props.setSecondNumber(props.secondNumber - 1)
    props.setThirdNumber(props.thirdNumber - 1)
  }
  return (
    <div className="buttons-container">
      <button onClick={handleAllIncrease}> + All</button>
      <button onClick={handleAllDecrease}> - All</button>
    </div>
  )
}