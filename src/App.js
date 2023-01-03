import './App.css';
import React, {useState} from "react";
import CalcDisplay from "./components/CalcDisplay"
import CalcButtons from "./components/CalcButtons"

function App() {
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
  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;

    setCalc({
      ...calc,
      sign: value,
      result: !calc.result && calc.num ? calc.num : calc.result,
      num: 0
    })
  }

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: CalcDisplay.num ? calc.num * -1 : 0,
      result: calc.result ? calc.result * -1 : 0,
      sign: ""
    })
  }

  const percentClickHandler = () => {
    let number = calc.num ? parseFloat(calc.num) : 0
    let result = calc.result ? parseFloat(calc.result) : 0
  
    setCalc({
      ...calc,
      num: (number /= Math.pow(100, 1)),
      result: (result /= Math.pow(100, 1)),
      sign: ""
    })
  }

  const equalsClickHandler = (e) => {
    if (calc.sign && calc.num) {
      const equation = (a, b, sign) =>
        sign === "/"
          ? a / b : sign === "X"
          ? a * b : sign === "-"
          ? a - b : a + b

      setCalc({
        ...calc,
        result:
        calc.num === "0" && calc.sign === "/"
          ? "Can't divide"
          : equation(Number(calc.result), 
            Number(calc.num),
            calc.sign),
        sign: "",
        num: 0
      })
    }
  }

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".")
      ? calc.num + value
      : calc.num
    })
  }

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      num: 0,
      sign: "",
      result: 0
    })
  }

  const numClickHandler = (e) => {
    const value = e.target.value;

    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0" : calc.num % 1 === 0
          ? Number(calc.num + value) : calc.num + value,
      result: !calc.sign ? 0 : calc.result
    })
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
                ? signClickHandler : btn === "+-"
                ? invertClickHandler : btn === "%"
                ? percentClickHandler : btn === "="
                ? equalsClickHandler : btn === "."
                ? commaClickHandler : btn === "C"
                ? resetClickHandler : numClickHandler
            }
          />
          )
        })}
      </div>
    </div>
  );
}

export default App;
