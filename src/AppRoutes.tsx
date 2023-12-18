import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ContentPage from "./pages/ContentPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { CONTENT_PAGE, SIGNIN_PAGE, SIGNUP_PAGE } from "./constants/Routes";
import { useAuth } from "./hooks/useAuth";

const AppRoutes = () => {
  const authKey = "sb-eeqorsxttevsnqgauyjs-auth-token";
  const { isAuthenticated, setAuthenticated } = useAuth();

  useEffect(() => {
    const getUser = localStorage.getItem(authKey);
    if (getUser) {
      setAuthenticated(true);
    }
  }, [isAuthenticated]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path={SIGNUP_PAGE} element={<Signup />} />
        <Route path={SIGNIN_PAGE} element={<Signin />} />
        {isAuthenticated ? (
          <Route path={CONTENT_PAGE} element={<ContentPage />} />
        ) : null}
      </Routes>
    </>
  );
};

export default AppRoutes;
