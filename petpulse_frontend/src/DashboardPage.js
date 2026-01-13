import React, { useState, useEffect } from "react";
import styles from "./DashboardPage.module.css";

/**
 * SVG ICONS — Soft, pastel-like, refer to color palette
 */
const PawIcon = ({ size = 26, color = "#B2EBF2" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
    <ellipse cx="9.7" cy="12" rx="3" ry="4.2" fill={color} />
    <ellipse cx="22.3" cy="12" rx="3" ry="4.2" fill={color} />
    <ellipse cx="16" cy="8.4" rx="2.3" ry="3" fill={color} />
    <ellipse cx="28.2" cy="18" rx="1.8" ry="2.7" fill={color} />
    <ellipse cx="3.8" cy="17.7" rx="1.8" ry="2.7" fill={color} />
    <ellipse cx="16" cy="19" rx="8.6" ry="6.7" fill={color} />
  </svg>
);
const BoneIcon = ({ size = 26, color = "#F7C873" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
    <rect x="5" y="13" width="22" height="6" rx="3" fill={color} />
    <circle cx="5.5" cy="16" r="3.5" fill={color} />
    <circle cx="26.5" cy="16" r="3.5" fill={color} />
  </svg>
);
const HeartIcon = ({ size = 22, color = "#F26B6B" }) => (
  <svg width={size} height={size} viewBox="0 0 24 22" fill="none" aria-hidden>
    <path d="M12 21.2s-8.5-6.7-9.5-10.74A5.25 5.25 0 0 1 12 4.25a5.25 5.25 0 0 1 9.5 6.21C20.5 14.5 12 21.2 12 21.2z" fill={color}/>
  </svg>
);
const CalendarIcon = ({ size = 20, color = "#E6E6FA" }) => (
  <svg width={size} height={size} viewBox="0 0 26 26" fill="none" aria-hidden>
    <rect x="3" y="6" width="20" height="17" rx="4.5" fill={color}/>
    <rect x="7.5" y="11" width="11" height="5" rx="2.5" fill="#D1C4E9"/>
  </svg>
);
const ActivityIcon = ({ size=22, color="#B2EBF2" }) => (
  <svg width={size} height={size} viewBox="0 0 25 25" fill="none" aria-hidden>
    <circle cx="12.5" cy="12.5" r="12.5" fill={color} />
    <path d="M9 14l2-4.5 3 7.5L17 11" stroke="#4E8D7C" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

/**
 * DEMO DATA: User, pets, summary, reminders, timeline, tips, chart demo
 */
const demoUser = {
  name: "Jamie",
  avatar: "https://randomuser.me/api/portraits/women/82.jpg"
};
const demoPets = [
  {
    name: "Bella",
    breed: "Golden Retriever",
    img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=facearea&w=128&q=80",
    color: "#B2EBF2"
  },
  {
    name: "Chester",
    breed: "Tabby Cat",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=128&q=80",
    color: "#E6E6FA"
  },
  {
    name: "Milo",
    breed: "Cockatiel",
    img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=facearea&w=128&q=80",
    color: "#F7C873"
  }
];
const demoCards = [
  {
    label: "Health",
    val: "98",
    max: 100,
    icon: <HeartIcon size={20} color="#F26B6B"/>,
    desc: "Wellness score",
    color: "#F26B6B"
  },
  {
    label: "Diet",
    val: 72,
    max: 100,
    icon: <BoneIcon size={21} color="#F7C873"/>,
    desc: "Meals tracked",
    color: "#F7C873"
  },
  {
    label: "Activity",
    val: 51,
    max: 60,
    icon: <ActivityIcon size={20} color="#B2EBF2"/>,
    desc: "Minutes today",
    color: "#B2EBF2"
  },
  {
    label: "Appointments",
    val: 1,
    max: 2,
    icon: <CalendarIcon size={20} color="#E6E6FA"/>,
    desc: "Upcoming",
    color: "#E6E6FA"
  }
];
const demoReminders = [
  {
    type: "Vet",
    text: "Annual checkup for Bella, July 23, 11:00am",
    action: "View",
    icon: <CalendarIcon size={16} color="#B2EBF2"/>,
    accent: "#B2EBF2"
  },
  {
    type: "Feeding",
    text: "Chester’s lunch: Wet food @ 2pm",
    action: "Mark done",
    icon: <BoneIcon size={16} color="#F7C873"/>,
    accent: "#F7C873"
  },
  {
    type: "Walk",
    text: "Evening walk for Bella, 6:30pm",
    action: "Start",
    icon: <PawIcon size={14} color="#A7D3BE"/>,
    accent: "#A7D3BE"
  }
];
const demoActivity = [
  { dt: "10:15am", icon: <BoneIcon size={16}/>, desc: "Fed breakfast to Chester" },
  { dt: "08:46am", icon: <HeartIcon size={15}/>, desc: "Milo new weight logged: 80g" },
  { dt: "06:55am", icon: <ActivityIcon size={14}/>, desc: "Bella walked 1.5 miles" }
];
const demoTips = [
  {
    quote: "Bring water for your dog on summer walks to prevent dehydration.",
    author: "FurEverCare Vets"
  },
  {
    quote: "Brush your cat with gentle strokes to reduce shedding.",
    author: "Your Daily Pet Tip"
  }
];
// Simulated chart data; simple bar for calories, line for activity, etc
const demoCharts = {
  calories: [310, 420, 390, 320, 385, 432, 390],
  activity: [32, 48, 40, 51, 25, 55, 38],
  sleep: [8.2, 7.4, 8.1, 7.9, 8.4, 8.0, 7.7]
};
const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

/**
 * PUBLIC_INTERFACE
 * Themed pastel dashboard for pet care management
 */
function DashboardPage() {
  const [petIdx, setPetIdx] = useState(0);
  const [time, setTime] = useState(new Date());
  // Soft timer for date/time
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(id);
  }, []);
  const thisPet = demoPets[petIdx];

  return (
    <div className={styles.dashboardWrap}>
      <header className={styles.headerWrap}>
        <div className={styles.headerLeft}>
          <div className={styles.petSwitcherWrap}>
            <select
              title="Switch Pet"
              value={petIdx}
              className={styles.petSwitcher}
              onChange={e => setPetIdx(Number(e.target.value))}
            >
              {demoPets.map((p, i) => (
                <option value={i} key={p.name}>{p.name} ({p.breed})</option>
              ))}
            </select>
            <img
              src={thisPet.img}
              alt={`Profile of ${thisPet.name}`}
              className={styles.petSwitcherImg}
              style={{ borderColor: thisPet.color }}
            />
          </div>
          <div className={styles.headerGreeting}>
            <span className={styles.headerHi}>Welcome back,</span>
            <div className={styles.headerPetInfo}>
              <span className={styles.headerPetName}>{demoUser.name}</span>
              <span className={styles.headerPetSep}>•</span>
              <span className={styles.headerPetBreed}>{thisPet.name} ({thisPet.breed})</span>
            </div>
            <span className={styles.headerDate}>
              {time.toLocaleDateString(undefined, {weekday: "long", month: "short", day: "numeric"})}
              <span className={styles.headerTime}>{" "}{time.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</span>
            </span>
          </div>
        </div>
        <div className={styles.profileWrap}>
          <img src={demoUser.avatar} alt="Your profile" className={styles.profileAvatar} />
        </div>
        <div className={styles.headerGradient}/>
      </header>

      <main className={styles.mainContent}>
        {/* Summary Cards */}
        <section className={styles.summaryGrid}>
          {demoCards.map((card, i) => (
            <div className={styles.summaryCard} key={i} style={{ borderColor: card.color }}>
              <span className={styles.summaryCardIcon} style={{ background: `${card.color}22` }}>{card.icon}</span>
              <span className={styles.summaryCardLabel}>{card.label}</span>
              <span className={styles.summaryCardValue} style={{ color: card.color }}>{card.val} <span className={styles.summaryCardMax}>/ {card.max}</span></span>
              <span className={styles.summaryCardDesc}>{card.desc}</span>
              <ProgressBar value={card.val} max={card.max} color={card.color} />
            </div>
          ))}
        </section>

        <section className={styles.dashboardPanels}>
          {/* Reminders Panel */}
          <aside className={styles.remindersPanel}>
            <h4 className={styles.panelTitle}>Reminders</h4>
            <div className={styles.remindersList}>
              {demoReminders.map((r, i) => (
                <div className={styles.reminderItem} key={i} style={{ borderLeftColor: r.accent }}>
                  <span className={styles.reminderIcon}>{r.icon}</span>
                  <span className={styles.reminderText}>{r.text}</span>
                  <button className={styles.reminderActionBtn}>{r.action}</button>
                </div>
              ))}
            </div>
          </aside>
          {/* Analytics/Charts + Timeline */}
          <div className={styles.centerStack}>
            <AnimatedChartsSection data={demoCharts} />
            <TimelineList data={demoActivity} />
          </div>
          {/* Floating Quick Actions */}
          <QuickActionsPanel />
        </section>
        {/* Pet Tip Block (quote/care) */}
        <section className={styles.tipBlockWrap}>
          <TipOfDayCard tips={demoTips} />
        </section>
      </main>
    </div>
  );
}

/**
 * PROGRESS BAR COMPONENT with soft animation
 */
function ProgressBar({ value, max, color }) {
  const percent = Math.max(0, Math.min(100, (100 * value / max)));
  return (
    <div className={styles.progressBarBase}>
      <div
        className={styles.progressBarFill}
        style={{
          width: percent + "%",
          background: `linear-gradient(90deg, ${color} 80%, #E6E6FA 100%)`
        }}
        aria-valuenow={value}
        aria-valuemax={max}
      />
    </div>
  );
}

/**
 * CHARTS — Simplified animated bar and line charts using CSS
 */
function AnimatedChartsSection({ data }) {
  // Animate bars on mount
  const [anim, setAnim] = useState(false);
  useEffect(() => { setAnim(true); }, []);
  return (
    <section className={styles.chartsSection}>
      <div className={styles.chartPanel}>
        <span className={styles.chartLabel}><BoneIcon size={16}/> Calories (KCal)</span>
        <BarChart data={data.calories} labels={daysOfWeek} color="#F7C873" animate={anim}/>
      </div>
      <div className={styles.chartPanel}>
        <span className={styles.chartLabel}><PawIcon size={15}/> Activity (min)</span>
        <LineChart data={data.activity} labels={daysOfWeek} color="#B2EBF2" animate={anim}/>
      </div>
      <div className={styles.chartPanel}>
        <span className={styles.chartLabel}><HeartIcon size={12}/> Sleep (h)</span>
        <BarChart data={data.sleep} labels={daysOfWeek} color="#E6E6FA" animate={anim}/>
      </div>
    </section>
  );
}
function BarChart({ data, labels, color, animate }) {
  const max = Math.max(...data, 1);
  return (
    <div className={styles.chartBarBase}>
      {data.map((v, i) => (
        <div key={i} className={styles.chartBarCol}>
          <div
            className={styles.chartBar}
            style={{
              height: animate ? `${Math.round(56 * v / max)}px` : 0,
              background: `linear-gradient(180deg, ${color} 59%, #D1C4E922)`
            }}
          />
          <div className={styles.chartBarLabel}>{labels[i]}</div>
        </div>
      ))}
    </div>
  );
}
function LineChart({ data, labels, color, animate }) {
  const max = Math.max(...data, 1);
  // SVG line path calc
  const width = 136, height = 56, n = data.length;
  const points = data.map((v, idx) => [
    8 + (width - 16) * idx/(n-1),
    height - 8 - (v / max) * (height - 16)
  ]);
  const d = points.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");
  return (
    <div className={styles.chartLineBase}>
      <svg width={width} height={height}>
        <path
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="3"
          style={{
            strokeDasharray: 350,
            strokeDashoffset: animate ? 0 : 350,
            transition: "stroke-dashoffset .8s"
          }}
        />
        {points.map((p, i) => (
          <circle cx={p[0]} cy={p[1]} r="3.2" fill={color} key={i} />
        ))}
      </svg>
      <div className={styles.chartLineLabels}>
        {labels.map((l, i) => (
          <span key={l + i} className={styles.chartLineLabel}>{l}</span>
        ))}
      </div>
    </div>
  );
}

/**
 * TIMELINE — Vertical recent activity
 */
function TimelineList({ data }) {
  return (
    <section className={styles.timelinePanel}>
      <h4 className={styles.panelTitle}>Recent Activity</h4>
      <ul className={styles.timelineList}>
        {data.map((a, i) => (
          <li key={i} className={styles.timelineItem}>
            <span className={styles.timelineDot}>{a.icon}</span>
            <span className={styles.timelineText}>{a.desc}</span>
            <span className={styles.timelineTime}>{a.dt}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * QUICK ACTIONS — Floating right sidebar
 */
function QuickActionsPanel() {
  const actions = [
    { label: "Add Health Log", icon: <HeartIcon size={18}/> },
    { label: "Log Activity", icon: <ActivityIcon size={18}/> },
    { label: "Log Meal", icon: <BoneIcon size={18}/> },
    { label: "Add Appointment", icon: <CalendarIcon size={17}/> }
  ];
  return (
    <aside className={styles.quickActionsPanel} aria-label="Quick actions">
      {actions.map((a,i) => (
        <button className={styles.quickActionBtn} key={i} title={a.label}>
          {a.icon}
          <span>{a.label}</span>
        </button>
      ))}
    </aside>
  );
}

/**
 * TIP OF DAY — Pastel block with tip/quote
 */
function TipOfDayCard({ tips }) {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  return (
    <div className={styles.tipCard}>
      <span className={styles.tipIcon}><PawIcon size={24} color="#B2EBF2" /></span>
      <span className={styles.tipText}>"{tip.quote}"</span>
      <span className={styles.tipAuthor}>{tip.author}</span>
    </div>
  );
}

export default DashboardPage;
