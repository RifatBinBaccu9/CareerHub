import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import Error from './Component/Error/Error';
import JobDetails from './Component/JobDetails/JobDetails';
import AppliedJobDetails from './Component/AppliedJobs/AppliedJobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
    {
     path: '/',
     element: <Home></Home>,
    },
    {
     path: '/appliedJobs',
     element: <AppliedJobs></AppliedJobs>,
     loader: ()=>fetch('/public/jobs.json')
    },
    {
      path: '/job/:id',
      element: <JobDetails></JobDetails>,
      loader: ()=>fetch('/public/jobs.json')
    },
    {
      path: '/appliedJob/:id',
      element: <AppliedJobDetails></AppliedJobDetails>,
      loader: ()=>fetch('/public/jobs.json')
    }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
