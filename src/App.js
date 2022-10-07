import React, { useEffect, useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// import { toast } from 'react-toastify';

//components

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch('http://localhost:3333/auth/verify', {
        method: 'POST',
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      parseRes === true
        ? setIsAuthenticated(true)
        : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  // useEffect(() => {
  //   checkAuthenticated();
  // }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              !isAuthenticated ? (
                <Login setAuth={setAuth} />
              ) : (
                <Navigate to="/dashboard" replace={true} />
              )
            }
          />
          <Route
            path="register"
            element={
              !isAuthenticated ? (
                <Register setAuth={setAuth} />
              ) : (
                <Navigate to="/dashboard" replace={true} />
              )
            }
          />
          <Route
            path="dashboard"
            element={
              isAuthenticated ? (
                <Dashboard setAuth={setAuth} />
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
