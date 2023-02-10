import { ADD_USER, DELETE_USER, SET_USERS, EDIT_USER } from '../constants';

export default function users(state = [], action){
  switch (action.type) {
    case ADD_USER: return [...state, action.payload];
    case EDIT_USER: return [...state.map(item => item.id === action.payload.id ? action.payload : item)]
    case DELETE_USER: return action.payload;
    case SET_USERS: return action.payload;
    default: return state;
  }
}