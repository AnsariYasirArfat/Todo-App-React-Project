import { nanoid } from "nanoid";

export const initialState = {
  todos: [
    { id: nanoid(), text: "hi there" },
    { id: nanoid(), text: "hidddd there" },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: nanoid(), text: action.payload }],
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
      };
    default:
      return state;
  }
};
