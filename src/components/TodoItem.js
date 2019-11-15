import React from 'react';

export default function TodoItem(props) {
  const completed = props.todo.completed ? "line-through red" : "none";
  return (
    <li style={{textDecoration: completed}} onClick={() => {props.dispatch({type: "TOGGLE_COMPLETED", payload: props.todo.id})}}>
      {props.todo.item}
    </li>
  )
}