import { setContacts, addContact, deleteContact } from "../actions";

const url = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => dispatch => fetch(url)
  .then(data => data.json())
  .then(data => dispatch(setContacts(data)));

const deleteUser = id => (dispatch, getState) => {
  const contacts = getState().contacts;

  fetch(`${url}/${id}`, {method: 'DELETE'})
    .then(response => response.json())
    .then(() => dispatch(deleteContact(contacts.filter(item => item.id !== id))));
}

const addUser = user => dispatch => fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(user)
  })
  .then(data => data.json())
  .then(data => dispatch(addContact(data)));

export { getUsers, deleteUser, addUser };
