import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import ErrorElement from './Layout/ErrorElement';
import Home from './Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorElement/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div>
      <RouterProvider router={router} />
      </div>
  </React.StrictMode>,
)
