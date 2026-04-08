import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Body from './components/Body'
import About from './components/About'
import ContactUs from './components/ContactUs'
import RestaruntMenu from './components/RestaruntMenu'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shimmer from './components/Shimmer'
// import Grocery from './components/Grocery'



const Grocery = lazy(() => import("./components/Grocery")); 

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contactus",
        element:<ContactUs/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<Shimmer></Shimmer>}><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaruntMenu />

      }
    ],
    errorElement:<Error />
  },
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter } />
  </StrictMode>
)
