import * as actions from '../constants';

export const addUser = user => ({ type: actions.ADD_USER, payload: user });
export const editUser = user => ({ type: actions.EDIT_USER, payload: user });
export const deleteUser = id => ({ type: actions.DELETE_USER, payload: id });
export const setUsers = users => ({ type: actions.SET_USERS, payload: users });
export const setAlbums = albums => ({ type: actions.SET_ALBUMS, payload: albums });
export const setUser = user => ({ type: actions.SET_USER, payload: user });
export const setPhotos = photos => ({ type: actions.SET_PHOTOS, payload: photos });




