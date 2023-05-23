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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
TodoForm.propTypes = {
  dispatch: PropTypes.func,
};

export default TodoForm;
