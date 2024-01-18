import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import "./App.css";
import { NavBarProvider } from "./context/NavBarContext";
import cn from "./utils/cn";

function App() {
  return (
    <NavBarProvider>
      <NavBar />
      <main className="bg-primary-1 flex justify-center items-center">
        {/* navbar placeholder */}
        <div className={cn("hidden md:block sm:w-52 sm:bg-red-200")}></div>
        <div>
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </div>
      </main>
    </NavBarProvider>
  );
}

export default App;
