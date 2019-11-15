import React from 'react';
import TodoItem from './TodoItem.js';

const TodoList = (props) => {
  return (
    <div>
    {
      props.todos.map(todo => {
        return <TodoItem todo={todo} />;
      })
    }
    </div>
  );
}
export default TodoList;