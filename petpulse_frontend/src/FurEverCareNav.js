import React, { useState } from "react";
import "./FurEverCareNav.css";

/*
  FurEverCareNav Navigation Component for the FurEverCare platform

  Features:
    - Main Heading: FurEverCare logo/title on the left
    - Horizontal root menu bar:
        - My Pets (dropdown: Pet Profiles, Health Tracker, Diet & Nutrition, Activity)
        - Appointments (dropdown: Manage)
        - Settings (dropdown: Account > (Login, Signup), Support, Contact, Help, About & Privacy)
  Notes:
    - Horizontal nav with dropdowns for submenus
    - Mobile-responsiveness NOT explicitly handled here but structure enables it
    - Brand color palette and light theme
*/

// PUBLIC_INTERFACE
function FurEverCareNav() {
  // State for opened/closed dropdowns
  const [dropdowns, setDropdowns] = useState({
    myPets: false,
    appointments: false,
    settings: false,
    settingsAccount: false,
  });

  const handleDropdown = menu => setDropdowns(d => ({
    ...d,
    [menu]: !d[menu]
  }));

  const handleCloseAll = () =>
    setDropdowns({
      myPets: false,
      appointments: false,
      settings: false,
      settingsAccount: false,
    });

  // Ensures only one dropdown is open at root level at a time
  const handleRootOpen = menu => setDropdowns({
    myPets: menu === "myPets",
    appointments: menu === "appointments",
    settings: menu === "settings",
    settingsAccount: false,
  });

  // For keyboard menu navigation accessibility (optional, basic)
  const onNavKeyDown = (e, menu) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      handleRootOpen(menu);
    } else if (e.key === "Escape") {
      handleCloseAll();
    }
  };

  return (
    <nav
      className="furevercare-nav furevercare-nav-horizontal"
      role="navigation"
      aria-label="Primary"
      onMouseLeave={handleCloseAll}
    >
      <div className="fc-navbar-content">
        <div className="fc-nav-horizontal-header">
          <span className="fc-logo" aria-label="FurEverCare Logo">🐾</span>
          <span className="fc-title">FurEverCare</span>
          <div className="fc-auth-btn-group">
            <a href="#account-login" className="fc-auth-btn fc-auth-login">Login</a>
            <a href="#account-signup" className="fc-auth-btn fc-auth-signup">Signup</a>
          </div>
        </div>
        <ul className="fc-nav-horizontal-list">
          {/* Dashboard */}
          <li className="fc-nav-horizontal-item">
            <a
              className="fc-nav-horizontal-section"
              href="#dashboard"
              tabIndex={0}
              style={{ color: "var(--fc-primary)" }}
            >
              <span className="fc-nav-icon" style={{ color: "var(--fc-primary)" }}>🏠</span>
              Dashboard
            </a>
          </li>

          {/* My Pets */}
          <li
            className={
              "fc-nav-horizontal-item" +
              (dropdowns.myPets ? " open" : "")
            }
            onMouseEnter={() => handleRootOpen("myPets")}
            onFocus={() => handleRootOpen("myPets")}
          >
            <button
              className="fc-nav-horizontal-section"
              aria-expanded={dropdowns.myPets}
              aria-haspopup="true"
              onClick={() => handleRootOpen("myPets")}
              tabIndex={0}
              onKeyDown={e => onNavKeyDown(e, "myPets")}
            >
              <span className="fc-nav-icon" style={{ color: "var(--fc-primary)" }}>🐶</span>
              My Pets
              <span className="fc-nav-chevron">{dropdowns.myPets ? "▲" : "▼"}</span>
            </button>
            <ul className={"fc-nav-horizontal-dropdown" + (dropdowns.myPets ? " open" : "")}>
              <li><a href="#pet-profiles">Pet Profiles</a></li>
              <li><a href="#health-tracker">Health Tracker</a></li>
              <li><a href="#diet-nutrition">Diet &amp; Nutrition</a></li>
              <li><a href="#activity">Activity</a></li>
            </ul>
          </li>

          {/* Appointments */}
          <li
            className={
              "fc-nav-horizontal-item" +
              (dropdowns.appointments ? " open" : "")
            }
            onMouseEnter={() => handleRootOpen("appointments")}
            onFocus={() => handleRootOpen("appointments")}
          >
            <button
              className="fc-nav-horizontal-section"
              aria-expanded={dropdowns.appointments}
              aria-haspopup="true"
              onClick={() => handleRootOpen("appointments")}
              tabIndex={0}
              onKeyDown={e => onNavKeyDown(e, "appointments")}
            >
              <span className="fc-nav-icon" style={{ color: "var(--fc-secondary)" }}>📅</span>
              Appointments
              <span className="fc-nav-chevron">{dropdowns.appointments ? "▲" : "▼"}</span>
            </button>
            <ul className={"fc-nav-horizontal-dropdown" + (dropdowns.appointments ? " open" : "")}>
              <li><a href="#appointments-manage">Manage</a></li>
            </ul>
          </li>

          {/* Settings */}
          <li
            className={
              "fc-nav-horizontal-item" +
              (dropdowns.settings ? " open" : "")
            }
            onMouseEnter={() => handleRootOpen("settings")}
            onFocus={() => handleRootOpen("settings")}
          >
            <button
              className="fc-nav-horizontal-section"
              aria-expanded={dropdowns.settings}
              aria-haspopup="true"
              onClick={() => handleRootOpen("settings")}
              tabIndex={0}
              onKeyDown={e => onNavKeyDown(e, "settings")}
            >
              <span className="fc-nav-icon" style={{ color: "var(--fc-accent)" }}>⚙️</span>
              Settings
              <span className="fc-nav-chevron">{dropdowns.settings ? "▲" : "▼"}</span>
            </button>
            <ul className={"fc-nav-horizontal-dropdown" + (dropdowns.settings ? " open" : "")}>
              {/* Removed Account -> (Login, Signup) section since those buttons are now visible as main nav actions */}
              <li><a href="#support">Support</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#help">Help</a></li>
              <li><a href="#about-privacy">About &amp; Privacy</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default FurEverCareNav;
