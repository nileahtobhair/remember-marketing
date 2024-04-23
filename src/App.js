import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Interest from "./components/InterestForm";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

const Index = () => {
  return (
    <div className="App">
      <Header />
      <Interest />
      <Features />
      <Footer />
    </div>
  );
};

const Success = () => {
  return (
    <div className="App">
      <Header />
      <Interest success={true} />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
