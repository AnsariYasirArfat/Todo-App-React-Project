import TodoItem from "./TodoItem.jsx";
import PropTypes from "prop-types";

const TodoList = ({ todos, dispatch }) => {
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <h2 className="text-xl font-bold">Total Todos: {todos.length}</h2>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))
      ) : (
        <p className="text-3xl m-12 font-bold">No todos here.</p>
      )}
    </div>
  );
};
TodoList.propTypes = {
  todos: PropTypes.array,
  dispatch: PropTypes.func,
};
export default TodoList;
