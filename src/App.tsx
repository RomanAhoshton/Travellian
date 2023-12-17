import "./App.scss";
import ContentPage from "./pages/ContentPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { CONTENT_PAGE, SIGNIN_PAGE, SIGNUP_PAGE } from "./constants/Routes";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const authKey = "sb-eeqorsxttevsnqgauyjs-auth-token";

  const { isAuthenticated, setisAuthenticated } = useAuth();

  useEffect(() => {
    const getUser = localStorage.getItem(authKey);
    if (getUser) {
      setisAuthenticated(true);
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return (
      <Router>
        <ToastContainer />
        <Routes>
          <Route path={CONTENT_PAGE} element={<ContentPage />} />
        </Routes>
      </Router>
    );
  }
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path={SIGNIN_PAGE} element={<Signin />} />
        <Route path={SIGNUP_PAGE} element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
