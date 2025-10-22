import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss'
import './index.scss';
import {ToDoListPage} from './pages/ToDoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescriprion } from './pages/ItemDescriptions';
import { Layout } from './layouts/Layout';

const todos: ToDo[] = [
  {
    id: 0,
    text: 'First',
    isDone: false
  },
  {
    id: 1,
    text: 'Two',
    isDone: true
  },
  {
    id: 2,
    text: 'Three',
    isDone: false
  },  
  {
    id: 3,
    text: 'Four',
    isDone: true
  }
]

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos}/>
      },
      {
        path: '/todo',
        element: <ToDoListPage />
      },
      {
        path: '/list/:id',
        element: <ItemDescriprion todos={todos}/>
      }
    ]
  },
  {
    path:'*',
    element: <NotFound />
  }
], { basename: '/app/'})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

