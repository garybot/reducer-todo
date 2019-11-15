import React from 'react';
import TodoItem from './TodoItem.js';

const TodoList = (props) => {
  return (
    <ul>
    {
      props.todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} dispatch={props.dispatch}/>;
      })
    }
    </ul>
  );
}
export default TodoList;