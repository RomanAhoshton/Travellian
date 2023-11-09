import { useEffect, useState } from "react";
import "./App.scss";
import ContentPage from "./pages/ContentPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { CONTENT_PAGE, SIGNIN_PAGE, SIGNUP_PAGE } from "./constants/Routes";

function App() {
  const [token, setToken] = useState<any>(null);



  useEffect(() => {
    const getToken = localStorage.getItem("loginGuest");
    if(getToken){
      setToken(true)
    }


  }, [token]);
  return (
    <Router>
      <Routes>
        {token ? <Route path={CONTENT_PAGE} element={<ContentPage />} /> : null}
        <Route path={SIGNIN_PAGE} element={<Signin />} />
        <Route path={SIGNUP_PAGE} element={<Signup  />} />
      </Routes>
    </Router>
  );
}

export default App;
