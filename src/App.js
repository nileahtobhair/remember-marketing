import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Interest from "./components/InterestForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Interest />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
