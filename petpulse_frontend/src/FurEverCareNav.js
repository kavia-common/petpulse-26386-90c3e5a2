import React, { useState } from "react";
import "./FurEverCareNav.css";

/*
  FurEverCareNav Navigation Component for the FurEverCare platform

  Hierarchy:
    - Main Heading: FurEverCare / Main Page
    - Section: My Pets
      - Pet Profiles
      - Health Tracker
      - Diet & Nutrition
      - Activity
    - Section: Appointments
      - Manage
    - Section: Settings
      - Account
        - login
        - signup
      - Support
      - Contact
      - Help
      - About & Privacy
*/

// PUBLIC_INTERFACE
function FurEverCareNav() {
  // State for opened/closed submenus
  const [openMenus, setOpenMenus] = useState({
    myPets: false,
    appointments: false,
    settings: false,
    settingsAccount: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className="furevercare-nav">
      <div className="fc-nav-heading" tabIndex="0">
        <span className="fc-logo" aria-label="FurEverCare Logo">🐾</span>
        <span className="fc-title">FurEverCare</span>
      </div>
      <ul className="fc-nav-list">
        {/* My Pets */}
        <li>
          <button
            className="fc-nav-section"
            onClick={() => toggleMenu("myPets")}
            aria-expanded={openMenus.myPets}
            aria-controls="fc-nav-section-my-pets"
          >
            <span className="fc-nav-icon" style={{ color: "var(--fc-primary)" }}>🐶</span>
            My Pets
            <span className="fc-nav-chevron">{openMenus.myPets ? "▲" : "▼"}</span>
          </button>
          <ul
            className={`fc-nav-sublist ${openMenus.myPets ? "open" : ""}`}
            id="fc-nav-section-my-pets"
          >
            <li><a href="#pet-profiles">Pet Profiles</a></li>
            <li><a href="#health-tracker">Health Tracker</a></li>
            <li><a href="#diet-nutrition">Diet &amp; Nutrition</a></li>
            <li><a href="#activity">Activity</a></li>
          </ul>
        </li>

        {/* Appointments */}
        <li>
          <button
            className="fc-nav-section"
            onClick={() => toggleMenu("appointments")}
            aria-expanded={openMenus.appointments}
            aria-controls="fc-nav-section-appointments"
          >
            <span className="fc-nav-icon" style={{ color: "var(--fc-secondary)" }}>📅</span>
            Appointments
            <span className="fc-nav-chevron">{openMenus.appointments ? "▲" : "▼"}</span>
          </button>
          <ul
            className={`fc-nav-sublist ${openMenus.appointments ? "open" : ""}`}
            id="fc-nav-section-appointments"
          >
            <li><a href="#appointments-manage">Manage</a></li>
          </ul>
        </li>

        {/* Settings */}
        <li>
          <button
            className="fc-nav-section"
            onClick={() => toggleMenu("settings")}
            aria-expanded={openMenus.settings}
            aria-controls="fc-nav-section-settings"
          >
            <span className="fc-nav-icon" style={{ color: "var(--fc-accent)" }}>⚙️</span>
            Settings
            <span className="fc-nav-chevron">{openMenus.settings ? "▲" : "▼"}</span>
          </button>
          <ul
            className={`fc-nav-sublist ${openMenus.settings ? "open" : ""}`}
            id="fc-nav-section-settings"
          >
            {/* Account submenu */}
            <li>
              <button
                className="fc-nav-subsection"
                onClick={() => toggleMenu("settingsAccount")}
                aria-expanded={openMenus.settingsAccount}
                aria-controls="fc-nav-settings-account"
              >
                Account
                <span className="fc-nav-chevron-sm">{openMenus.settingsAccount ? "▲" : "▼"}</span>
              </button>
              <ul
                className={`fc-nav-supersublist ${openMenus.settingsAccount ? "open" : ""}`}
                id="fc-nav-settings-account"
              >
                <li><a href="#account-login">Login</a></li>
                <li><a href="#account-signup">Signup</a></li>
              </ul>
            </li>
            <li><a href="#support">Support</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#help">Help</a></li>
            <li><a href="#about-privacy">About &amp; Privacy</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default FurEverCareNav;
