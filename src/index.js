import { StrictMode } from "react";
import ReactDOM from "react-dom";

import CalculatorButton from "./CalculatorButton";
import Calculator from "./Calculator";

const makCalculatorButton = document.getElementById("makCalculatorButton");
if (makCalculatorButton) {
  ReactDOM.render(
    <StrictMode>
      <CalculatorButton />
    </StrictMode>,
    makCalculatorButton
  );
}

const calculatorElement = document.getElementById("makCalculator");
if (calculatorElement) {
  ReactDOM.render(
    <StrictMode>
      <Calculator />
    </StrictMode>,
    calculatorElement
  );
}
