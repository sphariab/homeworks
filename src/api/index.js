const url = 'https://jsonplaceholder.typicode.com/users';
const getUsers = () => fetch(url).then((response) => response.json());
const deleteUser = id => {
  return fetch(`${url}/${id}`, { method: 'DELETE' })
    .then(response => response.json());
}
const addUser = user => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(user)
  })
    .then(response => response.json());
}

export { getUsers, deleteUser, addUser };
