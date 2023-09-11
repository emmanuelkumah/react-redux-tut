const initialState = {
  todos: [
    {
      id: 1,
      item: "Learn redux fundamentals",
    },
    {
      id: 2,
      item: "Build a todo-app",
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

    default:
      return state;
  }
};

export default todoReducer;
