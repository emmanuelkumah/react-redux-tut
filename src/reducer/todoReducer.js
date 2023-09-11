const initialState = {
  todos: [
    {
      id: 1,
      item: "Learn redux fundamentals",
      completed: false,
    },
    {
      id: 2,
      item: "Build a todo-app",
      completed: false,
    },
  ],
};

//define the reducer logic
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/addedTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "todos/deleteTodo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
