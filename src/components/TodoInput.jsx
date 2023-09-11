import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [input, setInput] = useState("");

  const onAddTodo = (e) => {
    setInput(e.target.value);
  };
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  console.log(input);
  return (
    <div>
      <form className="todo_form_container" onSubmit={handleTodoSubmit}>
        <input
          className="todo_input"
          type="text"
          placeholder="Enter your todo"
          value={input}
          onChange={onAddTodo}
        />
        <button className="todo_btn">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoInput;
