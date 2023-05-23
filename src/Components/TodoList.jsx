import TodoItem from "./TodoItem.jsx";
import PropTypes from "prop-types";

const TodoList = ({ todos, dispatch }) => {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))
      ) : (
        <p>No todos found.</p>
      )}
    </div>
  );
};
TodoList.propTypes = {
  todos: PropTypes.array,
  dispatch: PropTypes.func,
};
export default TodoList;
