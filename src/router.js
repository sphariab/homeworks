import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UsersList from "./components/Users/UsersList";
import UserDetail from "./components/Users/UserDetail";
import AlbumsList from "./components/Albums/AlbumsList";
import PhotosList from "./components/PhotosList";
import FormCmp from "./components/Users/Form";

export const router = createBrowserRouter([
  {
    path: `/`,
    element: <App />,
    children: [
      {
        path: `/users`,
        element: <UsersList />,
        children: [
          {
            path: `/users/:id/edit`,
            element: <FormCmp />,
          },
          {
            path: `/users/add`,
            element: <FormCmp />,
          }
        ]
      },
      {
        path: `/users/:id`,
        element: <UserDetail />,
      },
      {
        path: `/users/:id/albums`,
        element: <AlbumsList />,
      },
      {
        path: `/albums`,
        element: <AlbumsList />,
      },
      {
        path: `/albums/:id/photos`,
        element: <PhotosList />,
      }
    ]
  },
]);