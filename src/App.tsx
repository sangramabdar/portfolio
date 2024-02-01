import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/About";
import Skills from "./Components/Skills";
import "./App.css";
import cn from "./utils/cn";
import Header from "./Components/Header";
import SideNavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <Header />
      <SideNavBar />
      <main className="bg-primary flex justify-center items-center">
        {/* navbar placeholder */}
        <div id="sidebar" className={cn("w-52 sm:w-20")}></div>
        <div id="main">
          <Home />
          <About />
          <Skills />
          <Work />
        </div>
      </main>
    </>
  );
}

export default App;
