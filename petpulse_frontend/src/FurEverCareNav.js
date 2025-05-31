import React, { useState } from "react";
import "./FurEverCareNav.css";

/*
  FurEverCareNav Navigation Component – Updated for strict dropdown hierarchy

  Required Nav Structure:
    - My Pets (dropdown): Pet Profiles, Health Tracker, Diet & Nutrition, Activity
    - Appointments (dropdown): Manage
    - Settings (dropdown):
        - Account (submenu, downward): Login, Signup
        - Support
        - Contact
        - Help
        - About & Privacy
  Only the specified items should appear. Behaviors/structure must strictly match.
*/

// PUBLIC_INTERFACE
function FurEverCareNav() {
  // Dropdown state
  const [dropdown, setDropdown] = useState({
    myPets: false,
    appointments: false,
    settings: false,
    account: false,
  });

  function closeAll() {
    setDropdown({
      myPets: false,
      appointments: false,
      settings: false,
      account: false,
    });
  }

  function openMain(menu) {
    setDropdown(d => ({
      myPets: menu === "myPets",
      appointments: menu === "appointments",
      settings: menu === "settings",
      account: (menu === "account" || (menu === "settings" && d.account)),
    }));
  }

  function openAccountSubmenu() {
    setDropdown(d => ({
      ...d,
      settings: true,
      account: true,
      myPets: false,
      appointments: false,
    }));
  }

  // Handle "Settings" root hover/focus: open only main, not account sub
  function openSettingsRoot() {
    setDropdown({
      myPets: false,
      appointments: false,
      settings: true,
      account: false,
    });
  }

  // Keyboard support for main and account submenus
  function onNavKeyDown(e, menu) {
    if (["Enter", " ", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
      if (menu === "account") openAccountSubmenu();
      else openMain(menu);
    } else if (e.key === "Escape") {
      closeAll();
    }
  }

  // If settings closes, close account as well
  React.useEffect(() => {
    if (!dropdown.settings && dropdown.account) {
      setDropdown(d => ({ ...d, account: false }));
    }
  }, [dropdown.settings, dropdown.account]);

  // Essential NAV structure and correct dropdowns
  return (
    <nav
      className="furevercare-nav furevercare-nav-horizontal"
      role="navigation"
      aria-label="Primary"
      onMouseLeave={closeAll}
    >
      <div className="fc-navbar-content">
        <div className="fc-nav-horizontal-header">
          <a href="#main" className="fc-logo" aria-label="FurEverCare Logo" style={{ textDecoration: "none" }}>🐾</a>
          <a href="#main" className="fc-title" style={{ color: "var(--fc-primary)", textDecoration: "none" }}>FurEverCare</a>
        </div>
        {/* The navigation bar structure strictly as specified */}
        <ul className="fc-nav-horizontal-list">
          {/* My Pets dropdown */}
          <li
            className={
              "fc-nav-horizontal-item" + (dropdown.myPets ? " open" : "")
            }
            onMouseEnter={() => openMain("myPets")}
            onFocus={() => openMain("myPets")}
            onMouseLeave={closeAll}
          >
            <button
              className="fc-nav-horizontal-section"
              aria-expanded={dropdown.myPets}
              aria-haspopup="true"
              onClick={() => openMain("myPets")}
              tabIndex={0}
              onKeyDown={e => onNavKeyDown(e, "myPets")}
              type="button"
            >
              <span className="fc-nav-icon" style={{ color: "var(--fc-primary)" }}>🐾</span>
              My Pets
              <span className="fc-nav-chevron">{dropdown.myPets ? "▲" : "▼"}</span>
            </button>
            <ul className={"fc-nav-horizontal-dropdown" + (dropdown.myPets ? " open" : "")}>
              <li><a href="#pet-profiles">Pet Profiles</a></li>
              <li><a href="#health-tracker">Health Tracker</a></li>
              <li><a href="#diet-nutrition">Diet &amp; Nutrition</a></li>
              <li><a href="#activity">Activity</a></li>
            </ul>
          </li>
          {/* Appointments dropdown */}
          <li
            className={
              "fc-nav-horizontal-item" + (dropdown.appointments ? " open" : "")
            }
            onMouseEnter={() => openMain("appointments")}
            onFocus={() => openMain("appointments")}
            onMouseLeave={closeAll}
          >
            <button
              className="fc-nav-horizontal-section"
              aria-expanded={dropdown.appointments}
              aria-haspopup="true"
              onClick={() => openMain("appointments")}
              tabIndex={0}
              onKeyDown={e => onNavKeyDown(e, "appointments")}
              type="button"
            >
              <span className="fc-nav-icon" style={{ color: "var(--fc-secondary)" }}>📅</span>
              Appointments
              <span className="fc-nav-chevron">{dropdown.appointments ? "▲" : "▼"}</span>
            </button>
            <ul className={"fc-nav-horizontal-dropdown" + (dropdown.appointments ? " open" : "")}>
              <li><a href="#appointments-manage">Manage</a></li>
            </ul>
          </li>
          {/* Settings dropdown with sub-dropdown for Account */}
          <li
            className={
              "fc-nav-horizontal-item" + (dropdown.settings ? " open" : "")
            }
            onMouseEnter={openSettingsRoot}
            onFocus={openSettingsRoot}
            onMouseLeave={closeAll}
          >
            <button
              className="fc-nav-horizontal-section"
              aria-expanded={dropdown.settings}
              aria-haspopup="true"
              onClick={() => openMain("settings")}
              tabIndex={0}
              onKeyDown={e => onNavKeyDown(e, "settings")}
              type="button"
            >
              <span className="fc-nav-icon" style={{ color: "var(--fc-accent)" }}>⚙️</span>
              Settings
              <span className="fc-nav-chevron">{dropdown.settings ? "▲" : "▼"}</span>
            </button>
            <ul className={"fc-nav-horizontal-dropdown" + (dropdown.settings ? " open" : "")}>
              {/* Account (vertical sub-dropdown) */}
              <li
                className={
                  "fc-nav-horiz-subitem" + (dropdown.account ? " open" : "")
                }
                onMouseEnter={openAccountSubmenu}
                onFocus={openAccountSubmenu}
                onMouseLeave={() => setDropdown(d => ({ ...d, account: false }))}
              >
                <button
                  className="fc-nav-horizontal-subsection"
                  aria-haspopup="true"
                  aria-expanded={dropdown.account}
                  onClick={e => {
                    e.stopPropagation();
                    setDropdown(d => ({
                      ...d,
                      account: !d.account,
                      settings: true,
                    }));
                  }}
                  tabIndex={0}
                  onKeyDown={e => onNavKeyDown(e, "account")}
                  type="button"
                >
                  Account
                  <span className="fc-nav-chevron-sm">{dropdown.account ? "▼" : "▶"}</span>
                </button>
                <ul
                  className={
                    "fc-nav-horizontal-supdropdown" +
                    (dropdown.account ? " open" : "")
                  }
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
      </div>
    </nav>
  );
}

export default FurEverCareNav;
