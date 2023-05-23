import { useReducer } from "react";
import { initialState, reducer } from "./Components/reducer.js";
import TodoForm from "./Components/TodoForm.jsx";
import TodoList from "./Components/TodoList.jsx";
import "./App.css";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1 className="text-6xl font-bold">Todo App</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList todos={state.todos} dispatch={dispatch} />
    </>
  );
}

export default App;
