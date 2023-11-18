import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Door";
import { Route, Routes, useLocation } from "react-router-dom";
import { Xspace } from "./Components/Xspace";
import { AnimatePresence } from "framer-motion";
import { EnterHome } from "./Components/Home";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location?.key}>
          <Route path="/" element={<Home />}></Route>
          <Route path="xspace" element={<Xspace />}></Route>
          <Route path="/home" element={<EnterHome />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
