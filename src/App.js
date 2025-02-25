import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import "./global.css";
function App() {
  return (
    <Router>
      <div style={{ fontFamily: "'Roboto', sans-serif" }}>
        <MainLayout />
      </div>
    </Router>
  );
}

export default App;
