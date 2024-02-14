import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import LoginPage from "./Component/LoginPage";
// import { saveToken } from "./Store/authSlice";
// import Navbar from "./Component/Navbar";
import { loginSuccess } from "./Store/authSlice";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if there is a token in local storage
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(loginSuccess(token));
    }
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
          <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
