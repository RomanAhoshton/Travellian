import "./App.scss";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Blog from "./pages/Blog/Blog";
import Travel from "./pages/Travel";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Explore />
      <Blog/>
      <Travel/>
      <Footer/>
    </div>
  );
}

export default App;
