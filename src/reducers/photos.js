import { SET_PHOTOS } from '../constants';

export default function photos(state = [], action){
  switch (action.type) {
    case SET_PHOTOS: return action.payload;
    default: return state;
  }
}