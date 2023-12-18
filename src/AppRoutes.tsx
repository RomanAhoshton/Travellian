import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import ContentPage from "./pages/ContentPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { CONTENT, SIGNIN, SIGNUP } from "./constants/Routes";
import { useAuth } from "./hooks/useAuth";

const AppRoutes = () => {
  const authKey = "sb-eeqorsxttevsnqgauyjs-auth-token";
  const { isAuthenticated, auth } = useAuth();

  useEffect(() => {
    const getUser = localStorage.getItem(authKey);
    if (getUser) {
      auth(true);
    }
  }, []);

  if (isAuthenticated) {
    return (
      <Routes>
        <Route path={CONTENT} element={<ContentPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path={SIGNUP} element={<Signup />} />
      <Route path={SIGNIN} element={<Signin />} />
    </Routes>
  );
};

export default AppRoutes;
