import { put, call, takeEvery, select } from 'redux-saga/effects'
import { setContacts } from "../actions";
import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS } from '../constants';

const url = 'https://jsonplaceholder.typicode.com/users';

const getUsersFetch = async() => {
  const response = await fetch(url)
  return response.json();
}

const  deleteUserFetch = async(id) => await fetch(`${url}/${id}`, { method: 'DELETE' });

const addUserFetch = async(user) => {
  const request = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(user)});

  return await request.json();
}

function* deleteUser(action) {
  const id = action.payload;
  const getContacts = (state) => state.contacts;
  const contacts = yield select(getContacts);
  yield call(deleteUserFetch, id);
  yield put(setContacts([...contacts.filter(item => item.id !== id)]))
}

export function* getUsers() {
  const contacts = yield call(getUsersFetch);
  yield put(setContacts(contacts));
}

export function* addUser(action) {
  const user = action.payload;
  const getContacts = (state) => state.contacts;
  const contacts = yield select(getContacts);
  const newContact = yield call(addUserFetch, user)
  yield put(setContacts([...contacts, newContact]));
}

export function* sagas() {
  yield takeEvery(GET_CONTACTS, getUsers);
  yield takeEvery(ADD_CONTACT, addUser);
  yield takeEvery(DELETE_CONTACT, deleteUser);
}
export default function* rootSaga() {
  yield sagas();
}
