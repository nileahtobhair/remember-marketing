import React from "react";

import Header from "./components/Header";
import Features from "./components/Features";
import Interest from "./components/InterestForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Interest />
      <Features />
    </div>
  );
}

export default App;
