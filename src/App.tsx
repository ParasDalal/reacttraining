import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <header>
        <h1 text-align="center">React Hooks Trials</h1>
      </header>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
