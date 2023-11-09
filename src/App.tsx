import { useState } from "react";
import "./App.scss";
import ContentPage from "./pages/ContentPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [token, setToken] = useState<null | object| boolean>(null);

  if(token){
    localStorage.setItem("token",JSON.stringify(token))
  }

  return (
    <Router>
      <Routes>
        {token ? <Route path="/travellian" element={<ContentPage />} /> : null}
        <Route path="/signin" element={<Signin setToken={setToken} />} />
        <Route path="/" element={<Signup setToken={setToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
