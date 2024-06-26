import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BlogList from './components/blogs.tsx';
import BlogDetail from './components/detail.tsx';
import About from './components/about.tsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children :[
      {
        path: "/", 
        element: <BlogList/>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail/>
      },
      {
        path: "/about",
        element: <About/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
