import React from "react";

export default function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <li>
      {todo.text}
      <span>
        <button onClick={() => completeTodo(index)}>
          {todo.isCompleted ? "Completed" : "Complete"}
        </button>
        <button onClick={() => removeTodo(index)}> X </button>
      </span>
    </li>
  );
}
