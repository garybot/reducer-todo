import React, { useState } from 'react';

const AddTodoForm = (props) => {
  const [newItem, setNewItem] = useState("");
  const handleChange = evt => {
    setNewItem(`${evt.target.value}`);
  }
  const handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = {"item": newItem, id: Date.now(), completed: false};
    props.dispatch({ type: "ADD_TODO", payload: newTodo });
  }
  return (
    <form>
      <label htmlFor="item">Add Todo: </label>
      <input type="text" name="item" id="item" placeholder="What to do?" value={newItem.item} onChange={handleChange}/>
      <button type="submit" onClick={handleSubmit}>Add Item</button>
    </form>
  )
}

export default AddTodoForm;