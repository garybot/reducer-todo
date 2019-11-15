import React from 'react';

export default function TodoItem(props) {
  return (
    <div>
      <h3>{props.todo.item}</h3>
      <button>Complete</button>
    </div>
  )
}