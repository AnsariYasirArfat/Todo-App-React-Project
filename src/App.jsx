import { useReducer } from "react";
import { initialState, reducer } from "./assets/reducer.js";

import "./App.css";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Todo App</h1>
    </>
  );
}

export default App;
