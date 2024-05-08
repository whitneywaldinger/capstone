import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import ComponentPage from "./pages/home/HomePage";
import AboutPage from "./pages/about/About";
import DocPage from "./pages/documentation/Documentation";

// Main App component
function App() {
  return (
    <div className="app">
        <div className="page">
            <Routes>
                <Route path="/" element={<ComponentPage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/documentation" element={<DocPage/>} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
