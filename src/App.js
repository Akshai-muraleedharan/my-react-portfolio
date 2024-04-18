import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  return (
    <div >
      <Header />
      <Home />
      <About />

    </div>
  );
}

export default App;


