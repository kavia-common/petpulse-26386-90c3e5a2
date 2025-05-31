import React from 'react';
import './App.css';
import FurEverCareLandingPage from './FurEverCareLandingPage';
import FurEverCareHomePage from './FurEverCareHomePage';
import FurEverCareNav from './FurEverCareNav';
import DashboardPage from './DashboardPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Main App router for FurEverCare. Renders global navigation and 
 * switches between the new landing page and the main dashboard/home page.
 */
function App() {
  return (
    <Router>
      <div className="app">
        <FurEverCareNav />
        <div style={{ marginTop: 60 }}> {/* Avoid nav overlap */}
          <Routes>
            <Route path="/" element={<FurEverCareLandingPage />} />
            <Route path="/dashboard" element={<FurEverCareHomePage />} />
            <Route path="/dashboard2" element={<DashboardPage />} />
            {/* Add more routes as the app grows */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;