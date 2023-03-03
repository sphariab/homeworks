import { combineReducers } from 'redux'
import users from './users';
import albums from './albums';
import user from './user';
import photos from "./photos";

const rootReducer = combineReducers({ users, user, albums, photos })

export default rootReducer