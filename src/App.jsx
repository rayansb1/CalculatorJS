import React, {useState} from 'react';
import Calculator from './component/Calculator'
import CalculatorOutput from './component/CalculatorOutput';
import CalculatorKeys from './component/CalculatorKeys';
import './App.css';
function App() {
const [value, setValue] = useState('');

    return(
    <Calculator>
  <CalculatorOutput>{value}</CalculatorOutput>
  <CalculatorKeys>
    <button className="calculator__key calculator__key--operator" value="+" onClick={e => setValue(value + e.target.value)}>+</button>
    <button className="calculator__key calculator__key--operator" value="-" onClick={e => setValue(value + e.target.value)}>-</button>
    <button className="calculator__key calculator__key--operator" value="*" onClick={e => setValue(value + e.target.value)}>x</button>
    <button className="calculator__key calculator__key--operator" value="/" onClick={e => setValue(value + e.target.value)}>÷</button>
    <button className="calculator__key" value="7" onClick={e => setValue(value + e.target.value)}>7</button>
    <button className="calculator__key" value="8" onClick={e => setValue(value + e.target.value)}>8</button>
    <button className="calculator__key" value="9" onClick={e => setValue(value + e.target.value)}>9</button>
    <button className="calculator__key" value="4" onClick={e => setValue(value + e.target.value)}>4</button>
    <button className="calculator__key" value="5" onClick={e => setValue(value + e.target.value)}>5</button>
    <button className="calculator__key" value="6" onClick={e => setValue(value + e.target.value)}>6</button>
    <button className="calculator__key" value="1" onClick={e => setValue(value + e.target.value)}>1</button>
    <button className="calculator__key" value="2" onClick={e => setValue(value + e.target.value)}>2</button>
    <button className="calculator__key" value="3" onClick={e => setValue(value + e.target.value)}>3</button>
    <button className="calculator__key" value="0" onClick={e => setValue(value + e.target.value)}>0</button>
    <button className="calculator__key" value="." onClick={e => setValue(value + e.target.value)}>.</button>
    <button className="calculator__key" value="AC" onClick={e => setValue('')}>AC</button>
    <button className="calculator__key calculator__key--enter" value="=" onClick={e => setValue(eval(value))}>=</button>
  </CalculatorKeys>
  </Calculator>
);
}

export default App;