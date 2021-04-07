import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();
  return (
    <div>
      <div className="row mx-2 align-items-center">
        <h4>#{todo.id.length > 1 ? todo.id[2] : todo.id}</h4>
        <div className="col">
          {editable ? (
            <input
              type="text"
              className="form-control"
              placeholder={todo.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                name: name,
              })
            );
            if (editable) {
              setName(todo.name);
            }
            setEditable(!editable);
          }}
          className="btn btn-success m-2"
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
