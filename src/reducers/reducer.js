

export const intialState = [
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
      return [...state, action.payload];
    default:
      return state;
  }
}
