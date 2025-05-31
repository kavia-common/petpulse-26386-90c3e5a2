import React from 'react';
import './App.css';
import FurEverCareNav from './FurEverCareNav';

function App() {
  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh', background: '#f9fbfa' }}>
      {/* Left-side Navigation */}
      <FurEverCareNav />

      {/* Main Dashboard Content Area */}
      <div style={{ flex: 1, paddingLeft: "0", marginLeft: "0" }}>
        <nav className="navbar" style={{ marginLeft: 0, background: "transparent", boxShadow: "none", border: "none" }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
              <button className="btn">Template Button</button>
            </div>
          </div>
        </nav>

        <main>
          <div className="container">
            <div className="hero">
              <div className="subtitle" style={{ color: "#4E8D7C" }}>AI Workflow Manager Template</div>
              
              <h1 className="title" style={{ color: "#2F4D40" }}>petpulse_frontend</h1>
              
              <div className="description" style={{ color: "#49786F" }}>
                Start building your application.
              </div>
              
              <button className="btn btn-large">Button</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;