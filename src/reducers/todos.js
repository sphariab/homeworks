import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../constants'


export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload
      ];

    case DELETE_TODO:
      return [...state.filter(item => item.id !== action.payload)];

    case TOGGLE_TODO:
      return [...state.map(item => ({ ...item,
        completed: item.id === action.payload ? !item.completed : item.completed }) )];

    default:
      return state
  }
}
