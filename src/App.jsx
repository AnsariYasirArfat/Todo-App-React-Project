import { useReducer } from "react";
import { initialState, reducer } from "./Components/reducer.js";
import TodoForm from "./Components/TodoForm.jsx";
import TodoList from "./Components/TodoList.jsx";
import "./App.css";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
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
