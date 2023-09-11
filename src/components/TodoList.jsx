import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const returnedTodos = useSelector((state) => state.todos);
  console.log(returnedTodos);

  const displayTodos = returnedTodos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ));
  return <div>{displayTodos}</div>;
};

export default TodoList;
