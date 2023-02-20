import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import About from "./Components/About";

function App() {
  return (
    <div className="bg-violet-600 text-white">
      <NavBar />
      <main className="pt-10 flex flex-col justify-center items-center">
        <Home />
        <Experience />
        <Work />
        <About />
      </main>
    </div>
  );
}

export default App;
