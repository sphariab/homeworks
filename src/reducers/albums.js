import { SET_ALBUMS } from '../constants';

export default function albums(state = [], action){
  switch (action.type) {
    case SET_ALBUMS: return action.payload;
    default: return state;
  }
}