import React, { useState } from "react";
import styles from "./FurEverCareLandingPage.module.css";

/* ===== Inline SVG Icons (Soft Pastels) ===== */
const PawIcon = ({ size = 38, color = "#B2EBF2" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
    <ellipse cx="9.7" cy="12" rx="3" ry="4.2" fill={color} />
    <ellipse cx="22.3" cy="12" rx="3" ry="4.2" fill={color} />
    <ellipse cx="16" cy="8.4" rx="2.3" ry="3" fill={color} />
    <ellipse cx="28.2" cy="18" rx="1.8" ry="2.7" fill={color} />
    <ellipse cx="3.8" cy="17.7" rx="1.8" ry="2.7" fill={color} />
    <ellipse cx="16" cy="19" rx="8.6" ry="6.7" fill={color} />
  </svg>
);
const StethoscopeIcon = ({ size = 28, color = "#A7D3BE" }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden>
    <ellipse cx="14" cy="16" rx="9" ry="8" fill={color} opacity="0.40"/>
    <path d="M7 5v6.5c0 4.3 2.94 7 7 7s7-2.7 7-7V5" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
    <circle cx="22" cy="4" r="2" fill={color} />
  </svg>
);
const BoneIcon = ({ size = 26, color = "#F7C873" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
    <rect x="5" y="13" width="22" height="6" rx="3" fill={color} />
    <circle cx="5.5" cy="16" r="3.5" fill={color} />
    <circle cx="26.5" cy="16" r="3.5" fill={color} />
  </svg>
);
const HeartIcon = ({ size = 24, color="#F26B6B" }) => (
  <svg width={size} height={size} viewBox="0 0 24 22" fill="none" aria-hidden>
    <path d="M12 21.2s-8.5-6.7-9.5-10.74A5.25 5.25 0 0 1 12 4.25a5.25 5.25 0 0 1 9.5 6.21C20.5 14.5 12 21.2 12 21.2z" fill={color}/>
  </svg>
);
const CalendarIcon = ({ size = 22, color = "#E6E6FA" }) => (
  <svg width={size} height={size} viewBox="0 0 26 26" fill="none" aria-hidden>
    <rect x="3" y="6" width="20" height="17" rx="4.5" fill={color}/>
    <rect x="7.5" y="11" width="11" height="5" rx="2.5" fill="#D1C4E9"/>
  </svg>
);

/* ====== Demo Data ====== */
const FEATURES = [
  {
    title: "Vet Appointment Tracking",
    icon: <StethoscopeIcon size={32} color="#A7D3BE"/>,
    desc: "Schedule and manage vet visits. Never miss annual check-ups or vaccines for your furry family.",
  },
  {
    title: "Diet & Nutrition Logging",
    icon: <BoneIcon size={30} color="#F7C873"/>,
    desc: "Log feeding times and track nutrition. Ensure a balanced, healthy diet for every pet.",
  },
  {
    title: "Exercise & Wellness",
    icon: <PawIcon size={32} color="#B2EBF2"/>,
    desc: "Monitor daily walks, play, and activities. Keep pets happy and fit with guided routines.",
  },
  {
    title: "Grooming & Reminders",
    icon: <HeartIcon size={30} color="#F26B6B"/>,
    desc: "Track grooming, baths, and smart reminders for all wellness routines.",
  }
];

const WHY_ICONS = [
  {
    icon: <PawIcon size={25} color="#4E8D7C"/>,
    label: "Pet-centric, always",
    desc: "Designed for real pet parents by pet parents."
  },
  {
    icon: <StethoscopeIcon size={25} color="#B2EBF2"/>,
    label: "Holistic Health",
    desc: "All health, diet, & activity in one place."
  },
  {
    icon: <BoneIcon size={25} color="#F7C873"/>,
    label: "Reminders & Tips",
    desc: "From vet to playtime—never forget a thing."
  },
  {
    icon: <HeartIcon size={22} color="#F26B6B"/>,
    label: "Free to Start",
    desc: "No commitment. Easy, friendly onboarding."
  }
];

const TESTIMONIALS = [
  {
    stars: 5,
    quote: "FurEverCare keeps all my dog's info, vet visits, and reminders in one beautiful place. It's adorable—and so easy to update.",
    user: "Maria G.",
    pet: "Bella (Golden Retriever)",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    stars: 4,
    quote: "Managing both my cats' health and grooming is a breeze. I especially love the smart reminders for appointments!",
    user: "Lisa K.",
    pet: "Chester & Luna (Tabby Cats)",
    avatar: "https://randomuser.me/api/portraits/women/36.jpg"
  },
  {
    stars: 5,
    quote: "Finally a pet health app that's actually beautiful to use—and my vet loves the clean tracking for visits.",
    user: "Daniel R.",
    pet: "Milo (Cockatiel)",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  }
];

/* ===== Components ===== */
function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroInner}>
        <div className={styles.heroTextBlock}>
          <h1 className={styles.heroTitle}>
            Caring for Your Pets, <span className={styles.textAccent}>FurEver</span>
          </h1>
          <p className={styles.heroDesc}>
            The all-in-one wellness dashboard for pet parents to track health, happiness, and every tail wag. <span style={{opacity:0.6}}>Beautifully organized. Effortless. Free to start.</span>
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.heroBtnPrimary}>Get Started</button>
            <button className={styles.heroBtnAlt}>Explore Features</button>
          </div>
        </div>
        <div className={styles.heroImgWrap} role="presentation" aria-label="Happy pets illustration">
          <div className={styles.heroGradientCircle}></div>
          <img
            src="https://cdn.pixabay.com/photo/2016/02/19/10/00/dog-1209764_1280.jpg"
            className={styles.heroImg}
            alt=""
            width="380"
            height="250"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

function FeaturesCards() {
  return (
    <section className={styles.featuresSection} id="features">
      <h2 className={styles.sectionHeader}>
        <span><PawIcon size={24} color="#4E8D7C"/></span> Key Features
      </h2>
      <div className={styles.featuresGrid}>
        {FEATURES.map((ft, i) => (
          <div className={styles.featureCard} tabIndex={0} key={i}>
            <div className={styles.featureIcon}>{ft.icon}</div>
            <div className={styles.featureTitle}>{ft.title}</div>
            <div className={styles.featureDesc}>{ft.desc}</div>
            <button className={styles.featureLearnBtn}>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyStrip() {
  return (
    <section className={styles.whySection}>
      <div className={styles.whyHeader}>
        <span className={styles.whyTitle}>
          <PawIcon size={20} color="#4E8D7C"/>
          Why Choose FurEverCare?
        </span>
      </div>
      <div className={styles.whyGrid}>
        {WHY_ICONS.map((w, i) => (
          <div className={styles.whyCard} key={i}>
            <div className={styles.whyIcon}>{w.icon}</div>
            <div className={styles.whyLabel}>{w.label}</div>
            <div className={styles.whyDesc}>{w.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stars({ count = 5 }) {
  return (
    <span className={styles.starsRow}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} height="20" width="20" viewBox="0 0 20 20">
          <polygon
            points="10,2 12.4,7.5 18.2,8 13.7,11.8 15.1,17.5 10,14.5 4.9,17.5 6.3,11.8 1.8,8 7.6,7.5"
            fill="#F7C873"
            stroke="#F1BA68"
            strokeWidth="0.7"
          />
        </svg>
      ))}
    </span>
  );
}

function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const active = TESTIMONIALS[idx];
  const prev = () => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((idx + 1) % TESTIMONIALS.length);

  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <h2 className={styles.sectionHeader}><HeartIcon size={20}/> What Pet Parents Say</h2>
      <div className={styles.testimonialCarousel}>
        <button className={styles.carouselNav} aria-label="Previous testimonial" onClick={prev}>&lt;</button>
        <div className={styles.testimonialCard}>
          <Stars count={active.stars}/>
          <p className={styles.testimonialQuote}>
            “{active.quote}”
          </p>
          <div className={styles.testimonialPerson}>
            <img src={active.avatar} alt={`${active.user} avatar`} className={styles.testimonialAvatar}/>
            <div className={styles.testimonialMeta}>
              <div className={styles.testimonialName}>{active.user}</div>
              <div className={styles.testimonialPet}>{active.pet}</div>
            </div>
          </div>
        </div>
        <button className={styles.carouselNav} aria-label="Next testimonial" onClick={next}>&gt;</button>
      </div>
      <div className={styles.carouselDots} aria-label="Testimonial slide navigation">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            tabIndex={0}
            aria-label={`Go to testimonial ${i + 1}`}
            className={idx === i ? styles.dotActive : styles.dot}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </section>
  );
}

function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={styles.newsletterSection}>
      <div className={styles.newsletterWrap}>
        <h3 className={styles.newsletterHeader}>
          <PawIcon size={18} color="#B2EBF2"/> Join Our Pet Parent Community!
        </h3>
        <p className={styles.newsletterDesc}>
          Sign up for news, wellness guides, and pet parent tips. Get a welcome digital kit—free!
        </p>
        {submitted
          ? <div className={styles.newsletterThankYou}>Thank you for joining FurEverCare! 🐾</div>
          : <form className={styles.newsletterForm} onSubmit={handleSubmit} autoComplete="off">
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Your email"
                aria-label="Your email address"
                required
              />
              <button className={styles.newsletterBtn} type="submit">Sign Up</button>
            </form>
        }
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site Footer">
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <span className={styles.logo}>
            <PawIcon size={22} color="#fff" />
          </span>
          <span className={styles.footerBrandTitle}>FurEverCare</span>
        </div>
        <nav className={styles.footerLinks}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Stories</a>
          <a href="#signup">Newsletter</a>
        </nav>
        <nav className={styles.footerSocial}>
          {/* Pastel icons as above - Twitter, Insta, Facebook */}
          <a href="#" aria-label="Twitter">
            <svg width="21" height="21" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="11" fill="#468459"/><path d="M16 8.6c-.3.2-.7.3-1 .4.2-.2.4-.5.5-.9-.3.2-.8.4-1.1.5-.3-.3-.7-.6-1.2-.6-.8 0-1.4.6-1.4 1.3 0 .1 0 .3.1.4-1.1 0-2.1-.5-2.7-1.3 0 .1.1.3.1.4 0 .6.4 1.1 1 1.2-.2 0-.3-.1-.5-.1.1.5.6.9 1.1 1-.1 0-.2 0-.3-.1.2.5.7.9 1.3.9-.5.4-1.1.7-1.7.7-.1 0-.2 0-.3-.01.6.4 1.2.6 2 .6 2.4 0 3.6-1.9 3.6-3.5v-.1c.2-.2.4-.5.5-.7z" fill="#fff"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="21" height="21" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="11" fill="#8ADED7"/><rect x="6.5" y="6.5" width="9" height="9" rx="3" fill="#fff"/><circle cx="15.2" cy="7.1" r="0.7" fill="#8ADED7"/></svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="21" height="21" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="11" fill="#275538"/><path d="M13.9 7.9h1.4V6h-1.7C11.4 6 11.2 7.3 11.2 8v1.1H10V11h1.2v4h2.1v-4h1.4l.2-1.9h-1.6V8c0-.2.2-.1.3-.1z" fill="#fff"/></svg>
          </a>
        </nav>
      </div>
      <div className={styles.footerCopyright}>
        © {new Date().getFullYear()} FurEverCare. All rights reserved.
      </div>
    </footer>
  );
}

/* ===== PUBLIC_INTERFACE FurEverCareLandingPage ===== */
function FurEverCareLandingPage() {
  return (
    <div className={styles.fecLandingWrap}>
      <HeroSection />
      <FeaturesCards />
      <WhyStrip />
      <TestimonialsCarousel />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default FurEverCareLandingPage;
