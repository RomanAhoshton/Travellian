
import "./App.scss";
import ContentPage from "./pages/ContentPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/travellian" element={<ContentPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
