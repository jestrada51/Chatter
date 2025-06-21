import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './css/style.css'


import App from './App.jsx'
import Login from './pages/login.jsx'
//import About from './pages/About.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import ProtectedRoute from './components/protectedRoute.jsx'

import { AuthProvider } from './contexts/AuthContext.jsx'
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
  {path: '/', element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute> 
  )},
  {path: '/login', element: <Login />},
  {path: '*', element: (
    <ProtectedRoute>
        <PageNotFound />
    </ProtectedRoute>
  )},
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
