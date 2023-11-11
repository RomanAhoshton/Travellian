import { useEffect, useState } from "react";
import "./App.scss";
import ContentPage from "./pages/ContentPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CONTENT_PAGE, SIGNIN_PAGE, SIGNUP_PAGE } from "./constants/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  const [token, setToken] = useState<boolean>(false);
  const supabaseTokenKey = "sb-eeqorsxttevsnqgauyjs-auth-token";

  useEffect(() => {
    const getSupabaseToken = localStorage.getItem(supabaseTokenKey);
    if (getSupabaseToken) {
      setToken(true);
    }
  }, []);
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {token ? <Route path={CONTENT_PAGE} element={<ContentPage />} /> : null}
        <Route path={SIGNIN_PAGE} element={<Signin />} />
        <Route path={SIGNUP_PAGE} element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
