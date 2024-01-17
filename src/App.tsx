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
      <div className={cn("bg-primary-1 flex")}>
        <NavBar />
        <main>
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </main>
      </div>
    </NavBarProvider>
  );
}

export default App;
