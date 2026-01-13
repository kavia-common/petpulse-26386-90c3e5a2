import React from "react";
import styles from "./FurEverCareHomePage.module.css";

/* === SVG Inline Icons for Soft Pastel Look === */
const PawIcon = ({ size = 26, color = "#B2EBF2" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none"><ellipse cx="9.7" cy="12" rx="3" ry="4.2" fill={color}/><ellipse cx="22.3" cy="12" rx="3" ry="4.2" fill={color}/><ellipse cx="16" cy="8.4" rx="2.3" ry="3" fill={color}/><ellipse cx="28.2" cy="18" rx="1.8" ry="2.7" fill={color}/><ellipse cx="3.8" cy="17.7" rx="1.8" ry="2.7" fill={color}/><ellipse cx="16" cy="19" rx="8.6" ry="6.7" fill={color}/></svg>
);
const BoneIcon = ({ size = 24, color = "#F7C873" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none"><rect x="5" y="13" width="22" height="6" rx="3" fill={color}/><circle cx="5.5" cy="16" r="3.5" fill={color}/><circle cx="26.5" cy="16" r="3.5" fill={color}/></svg>
);
const HeartIcon = ({ size = 22, color = "#F26B6B" }) => (
  <svg width={size} height={size} viewBox="0 0 24 22" fill="none"><path d="M12 21.2s-8.5-6.7-9.5-10.74A5.25 5.25 0 0 1 12 4.25a5.25 5.25 0 0 1 9.5 6.21C20.5 14.5 12 21.2 12 21.2z" fill={color}/></svg>
);
const StethoscopeIcon = ({ size = 24, color = "#A7D3BE" }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none"><ellipse cx="14" cy="16" rx="9" ry="8" fill={color} opacity="0.40"/><path d="M7 5v6.5c0 4.3 2.94 7 7 7s7-2.7 7-7V5" stroke={color} strokeWidth="1.7" strokeLinecap="round"/><circle cx="22" cy="4" r="2" fill={color} /></svg>
);
const CalendarIcon = ({ size = 23, color = "#E6E6FA" }) => (
  <svg width={size} height={size} viewBox="0 0 26 26" fill="none"><rect x="3" y="6" width="20" height="17" rx="4.5" fill={color}/><rect x="7.5" y="11" width="11" height="5" rx="2.5" fill="#D1C4E9"/></svg>
);

/* === Demo Data (could be replaced by API later) === */
const pets = [
  {
    name: "Bella",
    breed: "Golden Retriever",
    img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=facearea&w=256&q=80",
    bg: "linear-gradient(135deg,#B2EBF2 80%,#E6E6FA 100%)",
    actions: ["Edit", "Log Health", "Feed"],
  },
  {
    name: "Chester",
    breed: "Tabby Cat",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&q=80",
    bg: "linear-gradient(135deg,#E6E6FA 65%,#CEFAF5 100%)",
    actions: ["Edit", "Feed", "Activity"],
  },
  {
    name: "Milo",
    breed: "Cockatiel",
    img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=facearea&w=256&q=80",
    bg: "linear-gradient(140deg,#fffde4 60%,#fdeff9 100%)",
    actions: ["Edit", "Vet", "Treat"],
  },
];

const healthTiles = [
  { label: "Vet Visits", value: "Next: Jul 22", icon: <StethoscopeIcon/>, color: "#A7D3BE" },
  { label: "Food & Nutrition", value: "Track Meals", icon: <BoneIcon/>, color: "#F7C873" },
  { label: "Exercise", value: "30 min Today", icon: <PawIcon/>, color: "#B2EBF2" },
  { label: "Mood", value: "Happy", icon: <HeartIcon/>, color: "#F26B6B" },
];

const reminders = [
  { type: "Appointment", text: "Vet Checkup for Bella - Jul 22, 10am", icon: <CalendarIcon/>, color: "#B2EBF2" },
  { type: "Feeding", text: "Chester: Snack time - 3pm", icon: <BoneIcon size={16} color="#F7C873"/> , color: "#F7C873" },
  { type: "Walk", text: "Bella: Evening walk scheduled", icon: <PawIcon size={14} color="#A7D3BE"/>, color: "#A7D3BE" },
  { type: "Grooming", text: "Milo: Nail trim upcoming", icon: <StethoscopeIcon size={15} color="#E6E6FA" />, color: "#E6E6FA"},
];

const tips = [
  { title: "How to brush your dog's teeth", icon: <PawIcon size={18}/>, desc: "Brushing 2-3 times per week helps prevent tartar." },
  { title: "Cat anxiety during storms", icon: <HeartIcon size={16}/>, desc: "Create safe spaces and play soothing sounds." },
  { title: "Summer walk hydration", icon: <BoneIcon size={17}/>, desc: "Bring water on longer walks to avoid dehydration." },
];

/* === Modular UI Components === */
function DemoAvatarMenu() {
  return (
    <div className={styles.avatarMenu}>
      <img
        src="https://randomuser.me/api/portraits/women/82.jpg"
        alt="User"
        className={styles.avatarImg}
      />
      <span className={styles.avatarChevron}>▼</span>
      {/* No real dropdown; placeholder */}
    </div>
  );
}

function Header() {
  return (
    <header className={styles.headerBg}>
      <div className={styles.headerInner}>
        <div className={styles.logoArea}>
          <span className={styles.logoSymbol}><PawIcon size={28} color="#4E8D7C" /></span>
          <span className={styles.logoText}>FurEverCare</span>
        </div>
        <nav className={styles.topNav}>
          <a href="#dashboard" className={styles.navLink}>Dashboard</a>
          <a href="#pets" className={styles.navLink}>Pets</a>
          <a href="#appointments" className={styles.navLink}>Appointments</a>
          <a href="#tips" className={styles.navLink}>Pet Tips</a>
          <DemoAvatarMenu />
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroTextWrap}>
          <h2 className={styles.heroWelcome}>Welcome back, Jamie! <span>🐾</span></h2>
          <p className={styles.heroSubtitle}>
            Your pets' health, happiness, and care, all in one beautiful place.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.primaryBtn}>Add Pet</button>
            <button className={styles.secondaryBtn}>Log Activity</button>
            <button className={styles.ghostBtn}>Explore Tips</button>
          </div>
        </div>
        <div className={styles.heroImage}/>
      </div>
    </section>
  );
}

function PetCard({ pet }) {
  return (
    <div className={styles.petCard} style={{ background: pet.bg }}>
      <img src={pet.img} className={styles.petImg} alt={pet.name} />
      <div className={styles.petInfo}>
        <div className={styles.petName}>{pet.name}</div>
        <div className={styles.petBreed}>{pet.breed}</div>
        <div className={styles.petQuickActions}>
          {pet.actions.map(a => (
            <button key={a} className={styles.quickActionBtn}>{a}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function PetSummaryGrid() {
  return (
    <section className={styles.petGridSection}>
      <h3 className={styles.sectionTitle}><PawIcon size={21} color="#4E8D7C" /> Your Pets</h3>
      <div className={styles.petGrid}>
        {pets.map((pet, i) => <PetCard key={i} pet={pet} />)}
      </div>
    </section>
  );
}

function HealthSummaryTiles() {
  return (
    <section className={styles.healthSummarySection}>
      {healthTiles.map((t, i) => (
        <div key={i} className={styles.healthTile} style={{ background: `${t.color}16` }}>
          <span className={styles.healthTileIcon}>{t.icon}</span>
          <span className={styles.healthTileLabel}>{t.label}</span>
          <span className={styles.healthTileValue}>{t.value}</span>
        </div>
      ))}
    </section>
  );
}

function RemindersPanel() {
  return (
    <aside className={styles.remindersPanel}>
      <h4 className={styles.sectionTitleSmall}>Reminders &amp; Notifications</h4>
      <div className={styles.remindersList}>
        {reminders.map((r, i) => (
          <div key={i} className={styles.reminderCard} style={{ background: `${r.color}14` }}>
            <span className={styles.reminderIcon}>{r.icon}</span>
            <span className={styles.reminderText}>{r.text}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

function TipsHighlights() {
  return (
    <section className={styles.tipsCarouselSection}>
      <h4 className={styles.sectionTitleSmall}>Pet Care Tips &amp; Highlights</h4>
      <div className={styles.tipsCarouselList}>
        {tips.map((t, i) => (
          <div className={styles.tipsCard} key={i}>
            <span className={styles.tipsCardIcon}>{t.icon}</span>
            <span className={styles.tipsCardTitle}>{t.title}</span>
            <span className={styles.tipsCardDesc}>{t.desc}</span>
          </div>
        ))}
        <div className={styles.tipsCard}>
          <span className={styles.tipsCardVideo}>
            <svg width="90" height="64"><rect width="90" height="64" rx="16" fill="#B2EBF2"/><polygon points="34,21 62,32 34,43" fill="#E6E6FA"/><rect x="16" y="4" width="58" height="8" rx="3" fill="#fff" opacity=".2"/></svg>
          </span>
          <span className={styles.tipsCardTitle}>See Grooming Demos</span>
          <span className={styles.tipsCardDesc}>Watch quick video guides for at-home care.</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <span className={styles.logoSymbol}><PawIcon size={24} color="#4E8D7C" /></span>
          <span className={styles.footerBrandTitle}>FurEverCare</span>
        </div>
        <nav className={styles.footerLinks}>
          <a href="#dashboard">Home</a>
          <a href="#pets">My Pets</a>
          <a href="#appointments">Schedule</a>
          <a href="#help">Help/FAQ</a>
        </nav>
        <nav className={styles.footerSocial}>
          <a href="#" aria-label="Twitter">
            <svg width="21" height="21" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="11" fill="#E6E6FA"/><path d="M16 8.6c-.3.2-.7.3-1 .4.2-.2.4-.5.5-.9-.3.2-.8.4-1.1.5-.3-.3-.7-.6-1.2-.6-.8 0-1.4.6-1.4 1.3 0 .1 0 .3.1.4-1.1 0-2.1-.5-2.7-1.3 0 .1.1.3.1.4 0 .6.4 1.1 1 1.2-.2 0-.3-.1-.5-.1.1.5.6.9 1.1 1-.1 0-.2 0-.3-.1.2.5.7.9 1.3.9-.5.4-1.1.7-1.7.7-.1 0-.2 0-.3-.01.6.4 1.2.6 2 .6 2.4 0 3.6-1.9 3.6-3.5v-.1c.2-.2.4-.5.5-.7z" fill="#4E8D7C"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="21" height="21" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="11" fill="#CEFAF5"/><rect x="6.5" y="6.5" width="9" height="9" rx="3" fill="#F26B6B"/><circle cx="15.2" cy="7.1" r="0.7" fill="#fff"/></svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="21" height="21" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="11" fill="#B2EBF2"/><path d="M13.9 7.9h1.4V6h-1.7C11.4 6 11.2 7.3 11.2 8v1.1H10V11h1.2v4h2.1v-4h1.4l.2-1.9h-1.6V8c0-.2.2-.1.3-.1z" fill="#4E8D7C"/></svg>
          </a>
        </nav>
      </div>
      <div className={styles.footerCopyright}>
        © {new Date().getFullYear()} FurEverCare. All rights reserved.
      </div>
    </footer>
  );
}

/* === Main Page Layout === */
// PUBLIC_INTERFACE
function FurEverCareHomePage() {
  return (
    <div className={styles.fecHomePageWrap}>
      <Header />
      <main className={styles.mainContent}>
        <HeroSection />
        <div className={styles.layoutRow}>
          <div className={styles.mainLeftCol}>
            <PetSummaryGrid />
            <HealthSummaryTiles />
            <TipsHighlights />
          </div>
          <div className={styles.mainRightCol}>
            <RemindersPanel />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FurEverCareHomePage;
