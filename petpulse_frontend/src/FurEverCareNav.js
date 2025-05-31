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
      <div className="fc-nav-horizontal-header">
        <span className="fc-logo" aria-label="FurEverCare Logo">🐾</span>
        <span className="fc-title">FurEverCare</span>
      </div>
      <ul className="fc-nav-horizontal-list">
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
            <li
              className={"fc-nav-horiz-subitem" + (dropdowns.settingsAccount ? " open" : "")}
              onMouseEnter={e => setDropdowns(d => ({ ...d, settingsAccount: true }))}
              onFocus={e => setDropdowns(d => ({ ...d, settingsAccount: true }))}
              onMouseLeave={e => setDropdowns(d => ({ ...d, settingsAccount: false }))}
            >
              <button
                className="fc-nav-horizontal-subsection"
                aria-expanded={dropdowns.settingsAccount}
                aria-haspopup="true"
                onClick={e => setDropdowns(d => ({ ...d, settingsAccount: !d.settingsAccount }))}
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setDropdowns(d => ({ ...d, settingsAccount: !d.settingsAccount }));
                  } else if (e.key === "Escape") {
                    setDropdowns(d => ({ ...d, settingsAccount: false }));
                  }
                }}
              >
                Account
                <span className="fc-nav-chevron-sm">{dropdowns.settingsAccount ? "▲" : "▼"}</span>
              </button>
              <ul className={"fc-nav-horizontal-supdropdown" + (dropdowns.settingsAccount ? " open" : "")}>
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
