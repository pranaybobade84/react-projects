import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';
import Users from './pages/Users.jsx';
import UserDetail from './pages/UserDetail.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: 'users/:id',
        element: <UserDetail />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },

      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot (document.getElementById ('root')).render (
  <RouterProvider router={router} />
);
