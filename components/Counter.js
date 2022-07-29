import React, { useState } from "react";
function LessText({ text, maxLength }) {
  const [hidden, setHidden] = useState(true);
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }
  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()}...` : text}
      {hidden ? (
        <a onClick={() => setHidden(false)} style={{ cursor: "pointer" }}>
          read more
        </a>
      ) : (
        <a onClick={() => setHidden(true)} style={{ cursor: "pointer" }}>
          read less
        </a>
      )}
    </span>
  );
}
const Counter = () => {
  const [router, setRouter] = useState(0);
  const increment = () => {
    setRouter(router + 1);
  };
  const [counter, setCounter] = useState(0);
  const decrement = () => {
    setCounter(counter - 1);
  };
  const [mul, setMul] = useState(2);
  const multiply = (e) => {
    e.preventDefault();
    setMul(mul * 2);
  };
  const [plus, setPlus] = useState(0);
  const addTwo = (e) => {
    e.preventDefault();
    setPlus((prev) => prev + 2);
  };
  const [inputValue, setInputValue] = useState(null);
  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  const [newInput, setNewInput] = useState(null);
  const myFunction = (event) => {
    const newInputValue = event.target.value;
    setNewInput(newInputValue);
  };
  const [oldInput, setOldInput] = useState("");
  const handleClick = (event) => {
    const oldInputValue = event.target.value;
    setOldInput(oldInputValue);
  };
  const [count, setCount] = useState(0);
  const [showtext, setShowText] = useState(true);
  const [divide, setDivide] = useState("2000");
  const [show, setShow] = useState(false);
  return (
    <>
      <LessText
        text={`Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it.`}
        maxLength={35}
      />
      {divide}
      {show && <h1>Hello Peter </h1>}
      <button
        onClick={() => {
          setDivide(divide / 2);
          setShow(!show);
        }}
      >
        Divide
      </button>
      <h1>{count}</h1>
      {showtext && <h1>Show Text</h1>}
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showtext);
        }}
      >
        {" "}
        Button
      </button>

      {oldInput}
      <input onChange={handleClick} />
      {newInput}
      <input onChange={myFunction} />
      {inputValue && <h1>Hello Mr.{inputValue}</h1>}
      <input placeholder="enter something..." onChange={onChange} />
      {router}
      {counter}
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
      <div>
        {mul}
        <button onClick={multiply}>multiply</button>
      </div>
      {plus}
      <button onClick={addTwo}>AddTwo</button>
    </>
  );
};

export default Counter;
