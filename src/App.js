import './App.css';
import React, {useState} from "react";
import CalcLogic from "./components/CalcLogic"
import CalcDisplay from "./components/CalcDisplay"
import CalcButtons from "./components/CalcButtons"

function App() {
  const [value, setValue] = useState(0);
  const [calc, setCalc] = useState({
    num: 0,
    sign: "",
    result: 0
  })

  const buttonArr = [
    ["C", "+-", "%", "/"],
    [7, 8 ,9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
  ]

  //Click Handlers
  const signClickHandler = () => {

  }

  const invertClickHandler = () => {
    
  }

  const percentClickHandler = () => {
    
  }

  const equalsClickHandler = () => {
    
  }

  const commaClickHandler = () => {
    
  }

  const resetClickHandler = () => {
    
  }

  const numClickHandler = () => {
    
  }

  return (
    <div className="App">
      <CalcDisplay 
      value={calc.num ? calc.num : calc.result}
      />
      <div className="button-container">
        {buttonArr.flat().map((btn, index) => {
          return (
          <CalcButtons
            key={index}
            className={btn === "=" ? "equals" : ""}
            value={btn}
            onClick={
              btn === "/" || btn === "X" || btn === "-" || btn === "+"
                ? signClickHandler
                : btn === "+-"
                ? invertClickHandler  
                : btn === "%"
                ? percentClickHandler
                : btn === "="
                ? equalsClickHandler
                : btn === "."
                ? commaClickHandler
                : btn === "C"
                ? resetClickHandler
                : numClickHandler
            }
          />
          )
        })}
      </div>
    </div>
  );
}

export default App;
