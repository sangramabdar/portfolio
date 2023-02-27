import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/About";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="bg-gradient-to-b bg-gray-900 text-white">
      <NavBar />
      <main className="pt-10 flex flex-col justify-around items-center">
        <Home />
        <Skills />
        <Work />
        <About />
      </main>
    </div>
  );
}

export default App;
