/* eslint-disable prefer-destructuring */
import "./App.css";
import React, { useState } from "react";
import CalcDisplay from "./components/CalcDisplay";
import CalcButtons from "./components/CalcButtons";

function App() {
  const [calc, setCalc] = useState({
    num: 0,
    sign: "",
    result: 0,
  });

  const buttonArr = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  //  Click Handlers
  const signClickHandler = (e) => {
    const value = e.target.value;

    setCalc({
      ...calc,
      sign: value,
      result: !calc.result && calc.num ? calc.num : calc.result,
      num: 0,
    });
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num * -1,
      result: calc.result * -1,
    });
  };

  const percentClickHandler = () => {
    let number = parseFloat(calc.num);
    let result = parseFloat(calc.result);

    setCalc({
      ...calc,
      num: (number /= 100 ** 1),
      result: (result /= 100 ** 1),
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const equation = (a, b, sign) =>
        sign === "/"
          ? a / b
          : sign === "X"
          ? a * b
          : sign === "-"
          ? a - b
          : a + b;

      setCalc({
        ...calc,
        result:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide by 0"
            : equation(Number(calc.result), Number(calc.num), calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  const commaClickHandler = (e) => {
    const value = e.target.value;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      num: 0,
      sign: "",
      result: 0,
    });
  };

  const numClickHandler = (e) => {
    const value = e.target.value;

    const numLength = calc.num.toString().length;

    if (numLength < 12) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
        result: !calc.sign ? 0 : calc.result,
      });
    }
  };

  return (
    <div className="App">
      <CalcDisplay value={calc.num ? calc.num : calc.result} />
      <div className="button-container">
        {buttonArr.flat().map((btn, index) => {
          return (
            <CalcButtons
              key={index}
              className={
                btn === "="
                  ? "equals"
                  : btn === "C"
                  ? "clear"
                  : btn === 0
                  ? "zero"
                  : "button"
              }
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
          );
        })}
      </div>
    </div>
  );
}

export default App;
