import { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ dispatch }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  return (
    <div className="mx-auto my-5">
      <form
        onSubmit={handleSubmit}
        className="addTaskForm p-4 bg-sky-500 rounded-lg w-fit m-auto"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="inputText w-96 h-12  bg-sky-400 mr-4  p-2 rounded-lg border-2 border-sky-900"
          placeholder="Add todo here..."
        />
        <button
          type="submit"
          className="addTaskButton p-1 h-12 w-32 text-xl font-semibold rounded-lg border-2 border-sky-900 bg-sky-400 hover:bg-sky-950  text-sky-950 hover:text-sky-300"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
TodoForm.propTypes = {
  dispatch: PropTypes.func,
};

export default TodoForm;
