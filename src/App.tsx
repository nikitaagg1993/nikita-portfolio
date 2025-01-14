import React from "react";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <header
        id="home"
        style={{ height: window.innerHeight - 140, display: "block" }}
      >
        <Header />
      </header>
    </div>
  );
}

export default App;
