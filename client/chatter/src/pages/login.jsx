import { useState } from 'react'
import { useAuth } from "../contexts/AuthContext.jsx"
import { Navigate } from 'react-router-dom'
//import '../css/App.css'

function Login() {
  const { isAuthenticated, login } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
        <h1>Login Page</h1>
        
        <button onClick={login}>Log in </button>



    </>
  );
}

export default Login