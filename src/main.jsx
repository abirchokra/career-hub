import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import ErrorElement from './Components/ErrorElement/ErrorElement';
import Body from './Components/Body/Body';
import JobDetails from './Components/JobDetails/JobDetails';
import { ToastContainer } from 'react-toastify';
import Apply from './Components/Apply/Apply';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path: '/',
        element: <Body></Body>,
      },
      {
        path:'jobDetails/:job_id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json'),
      },
      {
        path: 'apply/:job_id',
        element: <Apply></Apply>,
        loader: () => fetch('/jobs.json'),
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
