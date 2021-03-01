import './counters.css';

export default function Counters(props) {

  function handleFirstNumberIncrease() {
    props.setFirstNumber(props.firstNumber + 1)
  }
  function handleFirstNumberDecrease() {
    props.setFirstNumber(props.firstNumber - 1)
  }

  function handleSecondNumberIncrease() {
    props.setSecondNumber(props.secondNumber + 1)
  }
  function handleSecondNumberDecrease() {
    props.setSecondNumber(props.secondNumber - 1)
  }

  function handleThirdNumberIncrease() {
    props.setThirdNumber(props.thirdNumber + 1)
  }
  function handleThirdNumberDecrease() {
    props.setThirdNumber(props.thirdNumber - 1)
  }

  return (
    <div className="counters-container">
      <div>
        <button onClick={handleFirstNumberIncrease}>+</button>
        Első számláló:  {props.firstNumber}
        <button onClick={handleFirstNumberDecrease}>-</button>
      </div>
      <div>
        <button onClick={handleSecondNumberIncrease}>+</button>
        Második számláló:  {props.secondNumber}
        <button onClick={handleSecondNumberDecrease}>-</button>
      </div>
      <div>
        <button onClick={handleThirdNumberIncrease}>+</button>
        Harmadik számláló:  {props.thirdNumber}
        <button onClick={handleThirdNumberDecrease}>-</button>
      </div>
    </div>
  )
}