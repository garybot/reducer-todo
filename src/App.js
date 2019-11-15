import React, { useReducer } from 'react';
import './App.css';
// Components
import TodoList from './components/TodoList.js';
import AddTodoForm from './components/AddTodoForm.js';
// Reducers
import { initialState, todoReducer } from './reducers/reducer.js';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
      <AddTodoForm dispatch={dispatch} />
      <TodoList todos={state} />
    </div>
  );
}

export default App;
