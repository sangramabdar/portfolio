import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Header from "./Components/Header";
import SideNavBar from "./Components/NavBar";
import Projects from "./Components/Projects";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SideNavBar />
      <main className="bg-primary flex justify-center items-center flex-col pl-14 md:pl-0">
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
