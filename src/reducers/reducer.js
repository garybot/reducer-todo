import moment from 'moment';

export const initialState = [
  {
    item: 'Learn about reducers',
    due: moment(Date.now()),
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn more about reducers',
    due: moment(Date.now()),
    completed: false,
    id: 3892987223
  },
  {
    item: 'Learn even more about reducers',
    due: moment(Date.now()),
    completed: false,
    id: 3892986523
  },
]

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {...action.payload, due: moment(action.payload.due), id: Date.now(), completed: false};
      return [...state, newTodo];
    case "TOGGLE_COMPLETED":
      return state.map(item => {
        return item.id === action.payload ? {...item, completed: !item.completed, dateCompleted: moment()} : item;
        });
    case "CLEAR_COMPLETED":
      return state.filter(item => !item.completed);
    default:
      return state;
  }
}
