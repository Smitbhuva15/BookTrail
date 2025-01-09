import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Course from './Course/Course.jsx';
import Home from './home/Home.jsx';
import Contact from './Contact/Contact.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';



const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      
      children: [
        {
          path:'course',
          element:<Course />
        },
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/contact',
          element:<Contact />
        }
         
      ],
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<SignUp />
  }

]);




createRoot(document.getElementById('root')).render(
  <div className='dark:bg-slate-900 dark:text-white' >
 
   <RouterProvider router={router} className='dark:bg-slate-900 dark:text-white' />
  
  </div>
)
