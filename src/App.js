import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home.js";
import Sunrun from "./components/Sunrun";
import Images from "./components/Images";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sunrun />
      <Images />
      <Benefits />
      <Services />
      <Footer />
    </>
  );
}

export default App;
