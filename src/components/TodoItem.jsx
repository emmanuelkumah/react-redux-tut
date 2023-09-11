import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const onDelete = (id) => {
    return dispatch({
      type: "todos/deleteTodo",
      payload: id,
    });
  };
  return (
    <div>
      <h3>{todo.item}</h3>
      <div>
        <button>Complete</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
