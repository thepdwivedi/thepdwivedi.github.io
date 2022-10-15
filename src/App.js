import logo from "./logo.svg";
import React, { useEffect } from "react";
import Home from "./components/home/home";
import "./App.css";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
