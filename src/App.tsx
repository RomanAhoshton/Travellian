import "./App.scss";
import ContentPage from "./pages/ContentPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import {  Route, Routes } from "react-router-dom";
import { CONTENT_PAGE, SIGNIN_PAGE, SIGNUP_PAGE } from "./constants/Routes";
import { ToastContainer } from "react-toastify";
import { useEffect , memo,} from "react";
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
 
      <Routes>
          <ToastContainer />
          <Route path={CONTENT_PAGE} element={<ContentPage />} />
        </Routes>

    );
  }


    return (
 
      <Routes>
 ƒ
          <Route path={SIGNIN_PAGE} element={<Signin />} />
          <Route path={SIGNUP_PAGE} element={<Signup />} />
        </Routes>

    );
  
};

export default memo(App);

