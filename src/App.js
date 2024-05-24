import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";







function App() {
  return (
    <div >
      <Header />
      <Home />
      <About />
      <h2 className="service"><span>My</span>  Projects</h2>
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


