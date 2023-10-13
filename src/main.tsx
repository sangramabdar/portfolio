import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NavBarProvider } from "./context/NavBarContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <NavBarProvider>
    <App />
  </NavBarProvider>
);
