import React, { useState } from "react";
import "./FurEverCareNav.css";

/*
  FurEverCareNav Navigation Component – Strict Dropdown Hierarchy

  - My Pets: dropdown with Pet Profiles, Health Tracker, Diet & Nutrition, Activity
  - Appointments: dropdown with Manage
  - Settings: dropdown
      - Account (as submenu, downward): 
          - Login
          - Signup
      - Support
      - Contact
      - Help
      - About & Privacy

  Sub-dropdown for Account must only appear under Settings > Account, 
  with correct open/close interaction.
*/

// PUBLIC_INTERFACE
function FurEverCareNav() {
  // Track root dropdowns & subdropdown (account under settings)
  const [dropdownOpen, setDropdownOpen] = useState({
    myPets: false,
    appointments: false,
    settings: false,
    settingsAccount: false,
  });

  // Root: open only specified menu, close others/submenus (except special for account)
  function handleRootOpen(menu) {
    setDropdownOpen(prev => ({
      myPets: menu === "myPets",
      appointments: menu === "appointments",
      settings: menu === "settings",
      settingsAccount: menu === "settingsAccount" ? true : false,
    }));
  }

  // For hover/focus on root settings only (don't open account menu)
  function handleSettingsRootHover() {
    setDropdownOpen(prev => ({
      myPets: false,
      appointments: false,
      settings: true,
      settingsAccount: false,
    }));
  }

  // For Account sub-dropdown open under settings
  function handleSettingsAccountOpen() {
    setDropdownOpen(prev => ({
      myPets: false,
      appointments: false,
      settings: true,
      settingsAccount: true,
    }));
  }

  // Close all dropdowns (root + sub)
  function handleCloseAll() {
    setDropdownOpen({
      myPets: false,
      appointments: false,
      settings: false,
      settingsAccount: false,
    });
  }

  // Keyboard support
  function onNavKeyDown(e, menu) {
    if (["Enter", " ", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
      if (menu === "settingsAccount") {
        handleSettingsAccountOpen();
      } else {
        handleRootOpen(menu);
      }
    } else if (e.key === "Escape") {
      handleCloseAll();
    }
  }

  // Accessibility: close subdropdown if its parent closes
  React.useEffect(() => {
    if (!dropdownOpen.settings && dropdownOpen.settingsAccount) {
      setDropdownOpen(d => ({ ...d, settingsAccount: false }));
    }
  }, [dropdownOpen.settings, dropdownOpen.settingsAccount]);

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
        </div>
        <ul className="fc-nav-horizontal-list">
          {/* Dashboard – not in dropdown */}
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
              (dropdownOpen.myPets ? " open" : "")
            }
            onMouseEnter={() => handleRootOpen("myPets")}
            onFocus={() => handleRootOpen("myPets")}
            onMouseLeave={handleCloseAll}
          >
            <button
              className="fc-nav-horizontal-section"
              aria-expanded={dropdownOpen.myPets}
              aria-haspopup="true"
              onClick={() => handleRootOpen("myPets")}
              tabIndex={0}
              onKeyDown={e => onNavKeyDown(e, "myPets")}
              type="button"
            >
              <span className="fc-nav-icon" style={{ color: "var(--fc-primary)" }}>🐶</span>
              My Pets
              <span className="fc-nav-chevron">{dropdownOpen.myPets ? "▲" : "▼"}</span>
            </button>
            <ul className={"fc-nav-horizontal-dropdown" + (dropdownOpen.myPets ? " open" : "")}>
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
              (dropdownOpen.appointments ? " open" : "")
            }
            onMouseEnter={() => handleRootOpen("appointments")}
            onFocus={() => handleRootOpen("appointments")}
            onMouseLeave={handleCloseAll}
          >
            <button
              className="fc-nav-horizontal-section"
              aria-expanded={dropdownOpen.appointments}
              aria-haspopup="true"
              onClick={() => handleRootOpen("appointments")}
              tabIndex={0}
              onKeyDown={e => onNavKeyDown(e, "appointments")}
              type="button"
            >
              <span className="fc-nav-icon" style={{ color: "var(--fc-secondary)" }}>📅</span>
              Appointments
              <span className="fc-nav-chevron">{dropdownOpen.appointments ? "▲" : "▼"}</span>
            </button>
            <ul className={"fc-nav-horizontal-dropdown" + (dropdownOpen.appointments ? " open" : "")}>
              <li><a href="#appointments-manage">Manage</a></li>
            </ul>
          </li>

          {/* Settings and sub-dropdown for Account (Login/Signup), plus other direct subitems */}
          <li
            className={
              "fc-nav-horizontal-item" +
              (dropdownOpen.settings ? " open" : "")
            }
            onMouseEnter={handleSettingsRootHover}
            onFocus={handleSettingsRootHover}
            onMouseLeave={handleCloseAll}
          >
            <button
              className="fc-nav-horizontal-section"
              aria-expanded={dropdownOpen.settings}
              aria-haspopup="true"
              onClick={() => handleRootOpen("settings")}
              tabIndex={0}
              onKeyDown={e => onNavKeyDown(e, "settings")}
              type="button"
            >
              <span className="fc-nav-icon" style={{ color: "var(--fc-accent)" }}>⚙️</span>
              Settings
              <span className="fc-nav-chevron">{dropdownOpen.settings ? "▲" : "▼"}</span>
            </button>
            <ul className={"fc-nav-horizontal-dropdown" + (dropdownOpen.settings ? " open" : "")}>
              {/* Account > Login/Signup */}
              <li
                className={
                  "fc-nav-horiz-subitem" +
                  (dropdownOpen.settingsAccount ? " open" : "")
                }
                onMouseEnter={handleSettingsAccountOpen}
                onFocus={handleSettingsAccountOpen}
                onMouseLeave={() =>
                  setDropdownOpen(d => ({ ...d, settingsAccount: false }))
                }
              >
                <button
                  className="fc-nav-horizontal-subsection"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen.settingsAccount}
                  onClick={e => {
                    e.stopPropagation();
                    setDropdownOpen(d => ({
                      ...d,
                      settingsAccount: !d.settingsAccount,
                      settings: true,
                    }));
                  }}
                  tabIndex={0}
                  onKeyDown={e => onNavKeyDown(e, "settingsAccount")}
                  type="button"
                >
                  Account
                  <span className="fc-nav-chevron-sm">{dropdownOpen.settingsAccount ? "▼" : "▶"}</span>
                </button>
                <ul
                  className={
                    "fc-nav-horizontal-supdropdown" +
                    (dropdownOpen.settingsAccount ? " open" : "")
                  }
                >
                  <li>
                    <a href="#account-login">Login</a>
                  </li>
                  <li>
                    <a href="#account-signup">Signup</a>
                  </li>
                </ul>
              </li>
              {/* Settings direct items (not submenus) */}
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
