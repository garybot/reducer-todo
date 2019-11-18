import React, { useState } from 'react';

const AddTodoForm = (props) => {
  const [newItem, setNewItem] = useState({});
  const handleChange = evt => {
    setNewItem({...newItem, [evt.target.name]:evt.target.value});
  }
  const handleSubmit = evt => {
    evt.preventDefault();
    props.dispatch({ type: "ADD_TODO", payload: newItem });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Add Todo: </label>
      <input type="text" name="item" id="item" placeholder="What to do?" value={newItem.item} onChange={handleChange}/>
      
      <label htmlFor="due">Due Date: </label>
      <input type="date" name="due" id="due" placeholder="When to do by?" value={newItem.due} onChange={handleChange}/>
      <button type="submit">Add Item</button>
    </form>
  )
}

export default AddTodoForm;