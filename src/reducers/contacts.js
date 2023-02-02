import { SET_CONTACTS } from '../constants';

export default function contacts(state = [], action){
  switch (action.type) {
    case SET_CONTACTS: return action.payload;
    default: return state;
  }
}