import {
  ADD_CONTACT,
  DELETE_CONTACT, SET_CONTACTS,
} from '../constants';

export default function contacts(state = [], action){
  switch (action.type) {
    case ADD_CONTACT: return [...state, action.payload];
    case DELETE_CONTACT: return action.payload;
    case SET_CONTACTS: return action.payload;
    default: return state;
  }
}