import { setUsers, addUser, deleteUser, setAlbums, editUser, setUser, setPhotos } from "../actions";

const url = 'https://jsonplaceholder.typicode.com';

const getUsersApi = () => dispatch => fetch(`${url}/users`)
  .then(data => data.json())
  .then(data => {
    if (!localStorage.getItem('users')){
      dispatch(setUsers(data))
    }
  })
  .catch(error => console.log(error));

const getUserItemApi = pathname => dispatch => fetch(`${url}/users/${pathname}`)
  .then(data => data.json())
  .then(data => {
    if (!localStorage.getItem('user')){
      dispatch(setUser(data))
    }
  })
  .catch(error => console.log(error));

const getAlbumsApi = pathname => dispatch => fetch(`${url}${pathname}`)
  .then(data => data.json())
  .then(data => {
    if (!localStorage.getItem('albums')){
      dispatch(setAlbums(data))
    }
  })
  .catch(error => console.log(error));

const getPhotosApi = params => dispatch => fetch(`${url}${params}`)
  .then(data => data.json())
  .then(data => {
    if (!localStorage.getItem('photos')){
      dispatch(setPhotos(data))
    }
  })
  .catch(error => console.log(error));

const deleteUserApi = id => (dispatch, getState) => {
  const users = getState().users;

  fetch(`${url}/users/${id}`, { method: 'DELETE' })
    .then(response => response.json())
    .then(() => dispatch(deleteUser(users.filter(item => item.id !== id))))
    .catch(error => console.log(error));
}

const addUserApi = user => dispatch => fetch(`${url}/users`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  body: JSON.stringify(user)
})
  .then(data => data.json())
  .then(data => dispatch(addUser(data)))
  .catch(error => console.log(error));

const editUserApi = user => dispatch => fetch(`${url}/users/${user.id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  body: JSON.stringify(user)
})
  .then(data => data.json())
  .then(data => dispatch(editUser(data)))
  .catch(error => console.log(error));

export { getUsersApi, getAlbumsApi, deleteUserApi, addUserApi, editUserApi, getUserItemApi, getPhotosApi };
