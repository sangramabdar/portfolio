import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/About";
import Skills from "./Components/Skills";
import { useNavBarContext } from "./context/NavBarContext";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  const { toggleSideDrawer, open } = useNavBarContext();

  const handleOnClick = () => {
    if (open) {
      toggleSideDrawer();
    }
  };

  return (
    <div className="bg-gradient-to-b bg-gray-900 text-white">
      <NavBar />
      <main onClick={handleOnClick}>
        <Home />
        <About />
        <Skills />
        {/* <Work />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;
