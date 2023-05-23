import { useState } from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, dispatch }) => {
  const [editText, setEditText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch({ type: "EDIT_TODO", payload: { id: todo.id, text: editText } });
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: todo });
    console.log(todo.id);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
TodoItem.propTypes = {
  todo: PropTypes.object,
  dispatch: PropTypes.func,
};

export default TodoItem;
