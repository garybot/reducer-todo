

export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn more about reducers',
    completed: false,
    id: 3892987223
  },
  {
    item: 'Learn even more about reducers',
    completed: false,
    id: 3892986523
  },
]

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {"item": action.payload, id: Date.now(), completed: false};
      return [...state, newTodo];
    default:
      return state;
  }
}
