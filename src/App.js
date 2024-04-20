import React from "react";

import Header from "./components/Header";
import Interest from "./components/InterestForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <section className="main--container">
        {
          "Collect your most important dates. Setup email reminders and never forget a birthday or an important date again."
        }
      </section> */}
      <Interest />
    </div>
  );
}

export default App;
