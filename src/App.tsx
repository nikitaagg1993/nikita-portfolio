import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div>
      <Header />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
