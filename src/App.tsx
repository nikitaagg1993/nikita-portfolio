import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { basic_info } from "./data/basic_info";

function App() {
  return (
    <div>
      <Header />
      <Skills />
      <Experience />
      <div className="copyright py-4 text-center">
        <div className="container">
          <small>Copyright &copy; {basic_info.name}</small>
        </div>
      </div>
    </div>
  );
}

export default App;
