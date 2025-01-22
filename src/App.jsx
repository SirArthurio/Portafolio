import { AppRutas } from "./Rutas";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import ScrollToTop from "./Components/scroll";
function App() {
  return (
    <>
      <Router >
        <Navbar/>
        <ScrollToTop/>
        <AppRutas />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
