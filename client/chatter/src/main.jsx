import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from './App.jsx'

import PageNotFound from './pages/PageNotFound.jsx'

/*

  NOTE:

  What this does is that it find id=root within the index.html file 
  and sticks the StrictMode DOM object inside the div which now looks something like this:

  <div id="root">
      <StrictMode>
        <App />
      </StrictMode>
  </div>

  App.js then finds the element '<App />' and then renders stuff there...

*/



const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '*', element: <PageNotFound />},

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
