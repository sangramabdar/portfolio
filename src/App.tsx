import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/About";
import Skills from "./Components/Skills";
import "./App.css";
import { NavBarProvider } from "./context/NavBarContext";
import cn from "./utils/cn";
import Header from "./Components/Header";

function App() {
  return (
    <NavBarProvider>
      <Header />
      <NavBar />
      <main className="bg-primary flex justify-center items-center">
        {/* navbar placeholder */}
        <div id="sidebar" className={cn("w-52 sm:w-20")}></div>
        <div id="main">
          <Home />
          <About />
          <Skills />
          <Work />
          {/* <Contact /> */}
        </div>
      </main>
    </NavBarProvider>
  );
}

export default App;
