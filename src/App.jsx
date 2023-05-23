import { useReducer } from "react";
import { initialState, reducer } from "./assets/reducer.js";
import TodoList from "./Components/TodoList .jsx";
import "./App.css";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Todo App</h1>
      <TodoList todos={state.todos} dispatch={dispatch} />
    </>
  );
}

export default App;
