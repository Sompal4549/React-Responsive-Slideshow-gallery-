import React, { useReducer } from "react";
function Counter() {
  // First render will create the state, and it will
  // persist through future  renders
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);
  return (
    <>
      {sum}
      <button onClick={() => dispatch(1)}>Add 1</button>
    </>
  );
}
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};
const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
  { id: 3, title: "Todo 3", complete: false },
];
const jucer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(jucer, initialTodos);
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  return (
    <>
      {todos.map((todo) => (
        <>
          <div key={todo.id}>
            <label htmlFor="kuchh to he">
              <input
                type={"checkbox"}
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
            </label>
          </div>
        </>
      ))}
    </>
  );
}
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });
  return (
    <div>
      <Counter />
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>
      {state.showText && <h1>This is the text</h1>}
      <Todos />
    </div>
  );
};

export default UseReducer;
