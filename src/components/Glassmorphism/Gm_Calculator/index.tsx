import React, { useCallback, useEffect, useRef, useState } from "react";
import { Gm_CalculatorBox } from "./styles";
import Tilt from "react-parallax-tilt";

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Operator = "+" | "-" | "×" | "/";

export const Gm_Calculator = () => {
  // Calculator's states
  const [memory, setMemory] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true);
  const [pendingOperator, setPendingOperator] = useState<Operator>();
  const [display, setDisplay] = useState<string>("0");

  const handleKeyDown = ({ keyCode, shiftKey }: KeyboardEvent) => {
    console.log(keyCode);
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitButtonClick((keyCode - 48) as Digit);
    } else if (keyCode >= 96 && keyCode <= 105) {
      onDigitButtonClick((keyCode - 96) as Digit);
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onOperatorButtonClick("+");
    } else if (keyCode === 109 || keyCode === 189) {
      onOperatorButtonClick("-");
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      onOperatorButtonClick("×");
    } else if (keyCode === 111 || keyCode === 191) {
      onOperatorButtonClick("/");
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      onEqualButtonClick();
    } else if (keyCode === 46) {
      onClearEntryButtonClick();
    } else if (keyCode === 27) {
      onAllClearButtonClick();
    } else if (keyCode === 78) {
      onChangeSignButtonClick();
    } else if (keyCode === 80) {
      onMemoryPlusButtonClick();
    } else if (keyCode === 81) {
      onMemoryMinusButtonClick();
    } else if (keyCode === 82) {
      onMemoryRecallButtonClick();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => document.body.removeEventListener("keydown", handleKeyDown);
  });
  const calculate = (
    rightOperand: number,
    pendingOperator: Operator
  ): boolean => {
    let newResult = result;

    switch (pendingOperator) {
      case "+":
        newResult += rightOperand;
        break;
      case "-":
        newResult -= rightOperand;
        break;
      case "×":
        newResult *= rightOperand;
        break;
      case "/":
        if (rightOperand === 0) {
          return false;
        }

        newResult /= rightOperand;
    }

    setResult(newResult);
    setDisplay(newResult.toString().toString().slice(0, 12));

    return true;
  };

  // Pad buttons handlers
  const onDigitButtonClick = (digit: Digit) => {
    let newDisplay = display;

    if ((display === "0" && digit === 0) || display.length > 12) {
      return;
    }

    if (waitingForOperand) {
      newDisplay = "";
      setWaitingForOperand(false);
    }

    if (display !== "0") {
      newDisplay = newDisplay + digit.toString();
    } else {
      newDisplay = digit.toString();
    }

    setDisplay(newDisplay);
  };

  const onPointButtonClick = () => {
    let newDisplay = display;

    if (waitingForOperand) {
      newDisplay = "0";
    }

    if (newDisplay.indexOf(".") === -1) {
      newDisplay = newDisplay + ".";
    }

    setDisplay(newDisplay);
    setWaitingForOperand(false);
  };

  const onOperatorButtonClick = (operator: Operator) => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }
    } else {
      setResult(operand);
    }

    setPendingOperator(operator);
    setWaitingForOperand(true);
  };

  const onChangeSignButtonClick = () => {
    const value = Number(display);

    if (value > 0) {
      setDisplay("-" + display);
    } else if (value < 0) {
      setDisplay(display.slice(1));
    }
  };

  const onEqualButtonClick = () => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }

      setPendingOperator(undefined);
    } else {
      setDisplay(operand.toString());
    }

    setResult(operand);
    setWaitingForOperand(true);
  };

  const onAllClearButtonClick = () => {
    setMemory(0);
    setResult(0);
    setPendingOperator(undefined);
    setDisplay("0");
    setWaitingForOperand(true);
  };

  const onClearEntryButtonClick = () => {
    setMemory(0);
    setDisplay("0");
    setWaitingForOperand(true);
  };

  const onMemoryRecallButtonClick = () => {
    setDisplay(memory.toString());
    setWaitingForOperand(true);
  };

  const onMemoryPlusButtonClick = () => {
    setMemory(memory + Number(display));
    setWaitingForOperand(true);
  };

  const onMemoryMinusButtonClick = () => {
    setMemory(memory - Number(display));
    setWaitingForOperand(true);
  };
  return (
    <Gm_CalculatorBox>
      <Tilt
        className="tilt"
        tiltMaxAngleX={40}
        tiltMaxAngleY={40}
        perspective={1000}
        transitionSpeed={1000}
        gyroscope={true}
      >
        <div className="container">
          <div className="calculator">
            <div className="expression">
              {typeof pendingOperator !== "undefined"
                ? `${result}${pendingOperator}${
                    waitingForOperand ? "" : display
                  }`
                : ""}
            </div>
            <div className="value">{display}</div>
            <button
              className="num clear"
              value="c"
              onClick={onAllClearButtonClick}
            >
              c
            </button>
            <button
              className="num"
              value="/"
              onClick={() => onOperatorButtonClick("/")}
            >
              /
            </button>
            <button
              className="num "
              value="×"
              onClick={() => onOperatorButtonClick("×")}
            >
              ×
            </button>
            <button
              className="num"
              value="7"
              onClick={() => onDigitButtonClick(7)}
            >
              7
            </button>
            <button
              className="num"
              value="8"
              onClick={() => onDigitButtonClick(8)}
            >
              8
            </button>
            <button
              className="num"
              value="9"
              onClick={() => onDigitButtonClick(9)}
            >
              9
            </button>
            <button
              className="num"
              value="-"
              onClick={() => onOperatorButtonClick("-")}
            >
              -
            </button>
            <button
              className="num"
              value="4"
              onClick={() => onDigitButtonClick(4)}
            >
              4
            </button>
            <button
              className="num"
              value="5"
              onClick={() => onDigitButtonClick(5)}
            >
              5
            </button>
            <button
              className="num"
              value="6"
              onClick={() => onDigitButtonClick(6)}
            >
              6
            </button>
            <button
              className="num plus"
              value="+"
              onClick={() => onOperatorButtonClick("+")}
            >
              +
            </button>
            <button
              className="num"
              value="1"
              onClick={() => onDigitButtonClick(1)}
            >
              1
            </button>
            <button
              className="num"
              value="2"
              onClick={() => onDigitButtonClick(2)}
            >
              2
            </button>
            <button
              className="num"
              value="3"
              onClick={() => onDigitButtonClick(3)}
            >
              3
            </button>
            <button
              className="num"
              value="0"
              onClick={() => onDigitButtonClick(0)}
            >
              0
            </button>
            <button className="num" value="." onClick={onPointButtonClick}>
              .
            </button>
            <button
              className="num equal"
              value="="
              onClick={onEqualButtonClick}
            >
              =
            </button>
          </div>
        </div>
      </Tilt>
    </Gm_CalculatorBox>
  );
};
