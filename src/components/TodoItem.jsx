import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div>
      <h3>{todo.item}</h3>
      <div>
        <button>Complete</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
