import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UsersList from "./components/Users/UsersList";
import UserDetail from "./components/Users/UserDetail";
import AlbumsList from "./components/Albums/AlbumsList";
import PhotosList from "./components/PhotosList";
import Form from "./components/Users/Form";

console.log(process.env.PUBLIC_URL)

export const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: <App />,
    children: [
      {
        path: `${process.env.PUBLIC_URL}/users`,
        element: <UsersList />,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/users/:id/edit`,
            element: <Form />,
          },
          {
            path: `${process.env.PUBLIC_URL}/users/add`,
            element: <Form />,
          }
        ]
      },
      {
        path: `${process.env.PUBLIC_URL}/users/:id`,
        element: <UserDetail />,
      },
      {
        path: `${process.env.PUBLIC_URL}/users/:id/albums`,
        element: <AlbumsList />,
      },
      {
        path: `${process.env.PUBLIC_URL}/albums`,
        element: <AlbumsList />,
      },
      {
        path: `${process.env.PUBLIC_URL}/albums/:id/photos`,
        element: <PhotosList />,
      }
    ]
  },
]);