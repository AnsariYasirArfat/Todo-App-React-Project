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
    <div className="mt-5 todoItem">
      {isEditing ? (
        <div className="editTodoInput text-xl rounded-lg font-semibold w-fit  flex items-center justify-between p-4">
          <p>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="todoScroll w-96 h-12 rounded-lg hover:overflow-x-scroll truncate hover:text-clip  bg-sky-800 p-2"
            />
          </p>
          <div className="flex items-center justify-evenly h-12 w-32 rounded-lg ms-4  bg-sky-700">
            <button onClick={handleSave}>
              <img
                src="https://img.icons8.com/3d-fluency/94/null/save.png"
                alt="Save"
                width={30}
                className=" bg-sky-700 "
              />
            </button>
            <button onClick={handleDelete}>
              <img
                src="https://img.icons8.com/plasticine/100/null/filled-trash.png"
                alt="Delete"
                width={30}
                className=" bg-sky-700 "
              />
            </button>
          </div>
        </div>
      ) : (
        <div className=" text-xl rounded-lg font-semibold w-fit bg-sky-800 flex items-center justify-between p-4">
          <p className="todoScroll w-96 h-12 p-2 rounded-lg hover:overflow-x-scroll truncate hover:text-clip">
            {todo.text}
          </p>
          <div className="flex items-center justify-evenly h-12 w-32 rounded-lg ms-4  bg-sky-700">
            <button onClick={handleEdit}>
              <img
                src="https://img.icons8.com/3d-fluency/94/null/edit.png"
                alt="Edit"
                width={30}
                className=" bg-sky-700 "
              />
            </button>
            <button onClick={handleDelete}>
              <img
                src="https://img.icons8.com/plasticine/100/null/filled-trash.png"
                alt="Delete"
                width={30}
                className=" bg-sky-700 "
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
TodoItem.propTypes = {
  todo: PropTypes.object,
  dispatch: PropTypes.func,
};

export default TodoItem;
