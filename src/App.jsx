import { AppRutas } from "./Rutas";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./Components/Footer";
import ScrollToTop from "./Components/scroll";
function App() {
  return (
    <>
      <Router >
        <ScrollToTop/>
        <AppRutas />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
