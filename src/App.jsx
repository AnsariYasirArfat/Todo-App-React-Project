import { useReducer, useEffect } from "react";
import { reducer } from "./Components/reducer.js";
import TodoForm from "./Components/TodoForm.jsx";
import TodoList from "./Components/TodoList.jsx";

import "./App.css";
function App() {
  // To get data from lacalStorage
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  const initialState = {
    todos: storedTodos || [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // To store the data in string format in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);
  return (
    <>
      <div className="p-3 mb-5">
        <h1 className="text-6xl font-bold text-center italic hover:not-italic text-sky-950">
          Todo App
        </h1>
      </div>
      <TodoForm dispatch={dispatch} />
      <TodoList todos={state.todos} dispatch={dispatch} />
    </>
  );
}

export default App;
