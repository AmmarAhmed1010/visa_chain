import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import Demo from './pages/Demo';
import Benefits from './pages/Benefits';
import TechSpecs from './pages/TechSpecs';
import CompetitiveAnalysis from './pages/CompetitiveAnalysis';
import ScamAwareness from './pages/ScamAwareness';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/tech-specs" element={<TechSpecs />} />
          <Route path="/competitive-analysis" element={<CompetitiveAnalysis />} />
          <Route path="/scam-awareness" element={<ScamAwareness />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
