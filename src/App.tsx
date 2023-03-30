import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/About";
import Skills from "./Components/Skills";
import React from "react";
import { NavBarContext } from "./context/NavBarContext";

function App() {
  const { toggleSideDrawer, open } = useContext(NavBarContext);

  const handleOnClick = () => {
    if (open) {
      toggleSideDrawer();
    }
  };

  return (
    <div className="bg-gradient-to-b bg-gray-900 text-white">
      <NavBar />
      <main
        onClick={handleOnClick}
        className="pt-10 flex flex-col justify-center items-center"
      >
        <Home />
        <Skills />
        <Work />
        <About />
      </main>
    </div>
  );
}

export default App;
