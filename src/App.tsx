import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import "./App.css";
import { NavBarProvider } from "./context/NavBarContext";

function App() {
  return (
    <NavBarProvider>
      <NavBar />
      <main className="bg-primary-1">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </NavBarProvider>
  );
}

export default App;
