import React from 'react';
import './App.css';
// Components
import TodoList from './components/TodoList.js';
const todos = [
  {item: "A Todo"},
  {item: "Another Todo"}
]
function App() {
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
