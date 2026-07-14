"use client";

import { useEffect, useRef } from "react";
import CountUp from "./CountUp";

/* ---------- scroll reveal wrapper ---------- */
function Reveal({
  children,
  as = "div",
  className = "",
  style,
  id,
}: {
  children: React.ReactNode;
  as?: "div" | "section" | "li";
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as as "div";
  return (
    <Tag ref={ref} id={id} className={`rise-in ${className}`} style={style}>
      {children}
    </Tag>
  );
}

/* ---------- content data ---------- */
const CHAPTERS = [
  { id: "ch01", n: "01", t: "The Projection" },
  { id: "ch02", n: "02", t: "The Invoice" },
  { id: "ch03", n: "03", t: "The Fluid" },
  { id: "ch04", n: "04", t: "The Market Verdict" },
  { id: "ch05", n: "05", t: "The Record" },
  { id: "ch06", n: "06", t: "The Other Column" },
  { id: "ch07", n: "07", t: "The Economics" },
  { id: "ch08", n: "08", t: "The Missed Off-Ramp" },
  { id: "ch09", n: "09", t: "The Path Forward" },
  { id: "sources", n: "—", t: "The Record" },
];

const PROJECTION_LEDGER = [
  ["Class 8 hardware, cumulative (2004+2007+2010)", "$5,136"],
  ["Added lifetime operating cost, Class 8", "$4,600"],
  ["Fuel-economy penalty", "0%"],
  ["ULSD (15 ppm) fuel premium", "modest, as projected"],
  ["NOx control technology assumed", "NOx adsorbers"],
  ["Fixed compliance cost recovery", "expires after 5 model years"],
  ["Fleet scrappage of older trucks", "on schedule"],
];

const PER_TRUCK = [
  ["MY 2004 standards (EGR)", "$922", "~5×", "≈$4,600"],
  ["MY 2007 standards (DPF)", "$4,300", "1.8×", "$7,743"],
  ["MY 2010 standards (SCR)", "$3,600", "2.6×", "$9,000–9,600"],
  ["Cumulative (2025$)", "$5,136", "4.2×", "$21,596"],
];

const OPERATING = [
  [
    "DEF fluid, fleet-wide",
    "≈800 extra gal/yr ≈ $3,200/truck/yr @ $4/gal — EPA projected zero",
  ],
  [
    "DEF over a 714k-mi life",
    "≈$10,500+ per truck — alone exceeding EPA's entire operating estimate",
  ],
  ["EGR-era fuel penalty (2004–2010)", "Projected 0%; reality 5–9%"],
  ["Major aftertreatment failure", "Recurring; vocational duty cycles worst"],
  [
    "DPF cleaning, regens, sensors, coolers",
    "Fleets report aftertreatment now rivals tires as the top maintenance line item",
  ],
];

const TIMELINE = [
  {
    date: "Jan 2001",
    title: "The Rules Are Written",
    body: "EPA publishes technology-forcing mandates (62 FR 54694; 65 FR 59896; 66 FR 5002). The Dec 2000 RIA (EPA420-R-00-026) projects modest costs, zero fuel penalty, and NOx-adsorber technology.",
  },
  {
    date: "Oct 2002",
    title: "EGR Arrives Early",
    body: "Consent-decree pull-ahead forces EGR in Oct 2002. Invoice surcharges run ~5× EPA's $922 estimate. First pre-buy / sales-cliff cycle; Volvo lays off 600.",
  },
  {
    date: "2005–06",
    title: "The Great Pre-Buy",
    body: "Fleets buy ~104,000 extra pre-DPF trucks in 2005–06 (NERA). Sales collapse 45% in 2007–08. MY2007 DPF surcharges average $7,743 — 1.8× projection.",
  },
  {
    date: "2010",
    title: "SCR — The Tech EPA Never Costed",
    body: "Industry adopts SCR + DEF, not NOx adsorbers. Surcharges hit $9,000–9,600 (2.6× projection). DEF fluid, tanks, sensors, heaters: all absent from the 2000 RIA.",
  },
  {
    date: "Feb 2012",
    title: "The Missed Off-Ramp (§610)",
    body: "NADA's Look-Back study and ATA comments document 2–5× cost overruns in docket EPA-HQ-OAR-2012-0313. EPA concludes no amendment warranted. The RFA's one-time review window closes.",
  },
  {
    date: "Aug 2014",
    title: "EPA Admits It — For Emergency Vehicles",
    body: "Emergency Vehicle Rule grants aftertreatment relief for fire apparatus & ambulances: tacit acknowledgment that derates and regens compromise mission-critical operations (79 FR 46356).",
  },
  {
    date: "Jan 2026",
    title: "EPA Stops Monetizing PM2.5 Benefits",
    body: "In the combustion-turbines EIA (EPA-452/R-26-002), EPA abandons monetization of PM2.5/ozone health benefits — the very category that supplied ~89% of the 2000 rule's $70.4B justification.",
  },
  {
    date: "Jul 2026",
    title: "The Reckoning",
    body: "EPA proposes eliminating DEF deratements entirely and rolling back the 450k-mile warranty — claiming $12B savings ($4,130–6,152/engine) and calling prior requirements 'unworkable.'",
  },
];

const CURVE = [
  {
    era: "Uncontrolled → early standards (1988–1998)",
    tag: "Large marginal gains",
    body: "Engine design, injection timing, combustion optimization, fuel quality. Massive NOx/PM reductions at manageable incremental cost — the steep part of the curve.",
  },
  {
    era: "Tier 2-equivalent era (1998–2004)",
    tag: "The big cuts",
    body: "EGR and early controls secure the overwhelming majority of reductions relative to pre-regulatory baselines. Benefits still large relative to costs.",
  },
  {
    era: "2007/2010 aftertreatment (DPF + SCR)",
    tag: "Smaller increments",
    body: "2–3× aggregate cost for roughly 90% benefit realization. The knee of the curve — where every added ton removed starts costing far more.",
  },
  {
    era: "Beyond, toward Tier 4+",
    tag: "+11.6% NOx — negative return",
    body: "Diminishing since Tier 2; negative by EPA's own 2026 model. Past this point, added stringency manufactures the non-compliance that erodes the remaining benefits.",
  },
];

const SECTION610 = [
  ["Need for amendment", "Not identified as requiring change"],
  [
    "Small-entity impacts",
    "Dramatic documented effects on small fleets, owner-operators, dealerships",
  ],
  [
    "Operational & repair burdens",
    "Elevated failures, derates, disruptions to refrigerated / time-sensitive freight",
  ],
  ["Original flexibilities", "Deemed adequate"],
  ["Implementation challenges", "“no widespread inability to comply”"],
  [
    "Evidence already in the docket",
    "NADA/ATA data: integration, calibration, warranty and maintenance costs far above 2000 RIA projections",
  ],
];

const PILLARS = [
  {
    n: "01",
    title: "CAA Authorizes Revision",
    body: "CAA §202(a)(1) directs EPA to prescribe — and 'from time to time revise' — standards. §202(a)(3)(B) expressly authorizes revising heavy-duty standards taking cost into account; §213(a)(3) is the nonroad parallel. Post-Loper Bright, courts read this text independently.",
  },
  {
    n: "02",
    title: "The Justification Pillar Is Gone",
    body: "With EPA's January 2026 refusal to monetize PM2.5/ozone benefits, the marginal-benefit side of the equation is now officially unquantified — while SBA Advocacy pegs the cost side at ~$195B annually. A marginal analysis with no benefit numerator cannot justify more stringency.",
  },
  {
    n: "03",
    title: "Evidence Already in the Docket",
    body: "Two categories of significant new information: (1) EPA's Jan 2026 abandonment of PM2.5/ozone benefit monetization — the dominant justification for the standards; (2) two decades of real-world cost, reliability, derate, and safety data far exceeding projections. Ignoring either risks arbitrary-and-capricious review.",
  },
  {
    n: "04",
    title: "Technology-Neutral Pathway Has Precedent",
    body: "The CAA sets emission-performance standards, not perpetual hardware mandates. EPA already authorized alternatives where records showed operational harm: the 2012/2014 Emergency Vehicle Rules and recent urea-quality-sensor guidance. A Tier 2-equivalent, performance-based pathway follows that precedent.",
  },
];

const SOURCES = [
  {
    label:
      "Regulatory Impact Analysis: Heavy-Duty Engine & Vehicle Standards and Highway Diesel Fuel Sulfur Control Requirements (EPA420-R-00-026)",
    href: "https://nepis.epa.gov/Exe/ZyPDF.cgi/P1001CXZ.PDF?Dockey=P1001CXZ.pdf",
  },
  {
    label: "Final Rule: Control of Air Pollution from New Motor Vehicles (2007 Heavy-Duty Highway Rule)",
    href: "https://www.govinfo.gov/content/pkg/FR-2001-01-18/pdf/01-2.pdf",
  },
  {
    label: "Regulatory Announcement: Heavy-Duty Engine and Vehicle Standards (Fact Sheet)",
    href: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100K576.TXT",
  },
  {
    label:
      "A Look Back at EPA's Cost & Other Impact Projections for MY 2004–2010 HD Truck Standards (NADA/ATD, 2012)",
    href: "https://www.nada.org/media/2173/download?inline",
  },
  {
    label: "Docket EPA-HQ-OAR-2012-0313 (§610 Look-Back review record)",
    href: "https://www.regulations.gov/docket/EPA-HQ-OAR-2012-0313",
  },
  {
    label: "Advanced Collaborative Emissions Study — Executive Summary (HEI ACES)",
    href: "https://www.healtheffects.org/publication/executive-summary-advanced-collaborative-emissions-study-aces",
  },
  {
    label: "An Analysis of the Operational Costs of Trucking, 2025 Update (ATRI)",
    href: "https://truckingresearch.org/2025/07/new-atri-report-shows-trucking-profitability-severly-squeezed-by-high-costs-low-rates/",
  },
  {
    label: "Aftertreatment System: A New System Not to be Overlooked (Work Truck)",
    href: "https://www.worktruckonline.com/articles/aftertreatment-system-a-new-system-not-to-be-overlooked",
  },
  {
    label: "EPA MOVES Model — Open-Source Emissions Simulator (GitHub)",
    href: "https://github.com/USEPA/EPA_MOVES_Model",
  },
  {
    label: "EPA, Economic Impact Analysis for NSPS Combustion Turbines (EPA-452/R-26-002), Jan 2026",
    href: "https://www.epa.gov/system/files/documents/2026-01/combustion_turbines_eia_final_2026-01.pdf",
  },
  {
    label:
      "Emergency Vehicle / Tier 3 Amendments — Aftertreatment Relief for Fire Apparatus & Ambulances (79 FR 46356)",
    href: "https://www.federalregister.gov/documents/2014/08/08/2014-18161/amendments-related-to-tier-3-motor-vehicle-emission-and-fuel-standards",
  },
  {
    label: "SBA Office of Advocacy — Priority Regulations for Reform (Diesel Emission Standards, ~$195B)",
    href: "https://advocacy.sba.gov/",
  },
  {
    label: "Trump EPA Unveils Proposal to Save Truckers $12 Billion, Revising 'Unworkable' Biden-Era Rule (Jul 2026)",
    href: "https://www.epa.gov/newsreleases/trump-epa-unveils-proposal-save-truckers-12-billion-revising-unworkable-biden-era-rule",
  },
  {
    label: "Retrospective on HD diesel standards & real-world outcomes (RFF, 2025)",
    href: "https://www.sciencedirect.com/science/article/abs/pii/S1361920925004754",
  },
];

/* small helpers */
function Kicker({ children }: { children: React.ReactNode }) {
  return <div className="audit-kicker">{children}</div>;
}

export default function AuditReport() {
  return (
    <main style={{ background: "var(--dfc-cream)", color: "var(--dfc-navy)" }}>
      {/* ===== brand nav ===== */}
      <nav
        style={{
          background: "var(--dfc-navy-3)",
          color: "var(--dfc-cream)",
          borderBottom: "2px solid var(--dfc-gold)",
          padding: "1rem 0",
        }}
      >
        <div className="container flex items-center justify-between gap-6 flex-wrap">
          <a
            href="/"
            className="font-stencil"
            style={{
              fontSize: "1.35rem",
              color: "var(--dfc-cream)",
              letterSpacing: "0.08em",
              textDecoration: "none",
            }}
          >
            ★ DIESEL FREEDOM COALITION
          </a>
          <div
            className="flex items-center gap-6 font-stencil"
            style={{ fontSize: "0.82rem", letterSpacing: "0.18em" }}
          >
            <a href="/" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
              Home
            </a>
            <a href="/share" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
              Share The Fight
            </a>
            <a
              href="https://secure.anedot.com/diesel-freedom-coalition/freedom_donation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: "0.6rem 1.1rem", fontSize: "0.8rem", boxShadow: "3px 3px 0 var(--dfc-oxblood)" }}
            >
              Take Action
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header className="audit-hero grain-overlay">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Kicker>The 20-Year Audit · Diesel Freedom Coalition · July 2026</Kicker>
          <div
            className="audit-mono"
            style={{ marginTop: "0.75rem", fontSize: "0.8rem", letterSpacing: "0.2em", color: "rgba(245,237,216,0.65)" }}
          >
            CASE FILE: EPA420-R-00-026
          </div>
          <h1
            className="font-stencil"
            style={{
              marginTop: "1.25rem",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              lineHeight: 0.95,
              maxWidth: "18ch",
              color: "var(--dfc-cream)",
            }}
          >
            The EPA Priced the Cleanest Diesel Program in History
          </h1>
          <p
            style={{
              marginTop: "1.75rem",
              maxWidth: "60ch",
              fontSize: "1.15rem",
              lineHeight: 1.6,
              color: "rgba(245,237,216,0.9)",
            }}
          >
            In December 2000, EPA projected the 2007–2010 heavy-duty aftertreatment mandates — DPF, then SCR —
            would cost roughly <strong style={{ color: "var(--dfc-gold)" }}>$4,600</strong> in added lifetime
            operating costs. Twenty years of dealer invoices, fleet ledgers, and EPA&rsquo;s own reversals tell a
            different story. This is the complete record, compiled.
          </p>
          <div
            className="audit-mono"
            style={{ marginTop: "1rem", fontSize: "0.78rem", letterSpacing: "0.06em", color: "rgba(245,237,216,0.55)" }}
          >
            Docket: EPA420-R-00-026 · EPA-HQ-OAR-2012-0313
          </div>

          {/* hero counters */}
          <div
            style={{
              marginTop: "3rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "1.5rem",
              maxWidth: "820px",
            }}
          >
            {[
              { v: 10, prefix: "", suffix: "×", label: "operating-cost miss" },
              { v: 4.2, prefix: "", suffix: "×", label: "hardware-cost miss", dec: 1 },
              { v: 80, prefix: "", suffix: "%", label: "HD NOx delivered" },
              { v: 195, prefix: "$", suffix: "B", label: "annual cost side (SBA)" },
            ].map((c) => (
              <div key={c.label}>
                <div
                  className="font-stencil"
                  style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", color: "var(--dfc-gold)", lineHeight: 1 }}
                >
                  <CountUp value={c.v} prefix={c.prefix} suffix={c.suffix} decimals={c.dec || 0} />
                </div>
                <div
                  style={{
                    marginTop: "0.4rem",
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "rgba(245,237,216,0.7)",
                    fontFamily: "var(--font-display), Oswald, sans-serif",
                  }}
                >
                  {c.label}
                </div>
              </div>
            ))}
          </div>

          <div
            className="audit-mono"
            style={{ marginTop: "2.5rem", fontSize: "0.8rem", letterSpacing: "0.2em", color: "var(--dfc-gold)" }}
          >
            SCROLL THE RECORD ↓
          </div>
        </div>
      </header>

      {/* ===== sticky chapter nav ===== */}
      <div className="audit-chapnav">
        <div className="container" style={{ padding: 0 }}>
          <div className="audit-chapnav-inner">
            {CHAPTERS.map((c) => (
              <a key={c.id} href={`#${c.id}`}>
                {c.n} · {c.t}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CH 01 — THE PROJECTION ===== */}
      <section className="section section-cream grain-overlay" id="ch01">
        <div className="container" style={{ maxWidth: "980px" }}>
          <Reveal>
            <span className="section-eyebrow">Chapter 01 · The Projection</span>
            <h2 className="section-title" style={{ marginTop: "1.25rem" }}>
              What the December 2000 RIA Promised
            </h2>
            <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: "68ch" }}>
              EPA420-R-00-026 supported the most far-reaching mobile-source rule since the 1970 Clean Air Act:
              0.01 g/bhp-hr PM (2007) and 0.20 g/bhp-hr NOx (2010), enabled by 15 ppm ultra-low-sulfur diesel.
              Its central-case assumptions became the baseline every truck buyer would live with.
            </p>
            <blockquote className="pull-quote" style={{ marginTop: "2rem", maxWidth: "60ch" }}>
              &ldquo;In the absence of changes to gasoline specifications and with no decrease in fuel economy
              expected, we do not expect any increase in vehicle operating costs.&rdquo;
              <footer
                className="audit-mono"
                style={{ marginTop: "0.75rem", fontSize: "0.8rem", opacity: 0.7, fontStyle: "normal" }}
              >
                — EPA Regulatory Impact Analysis, December 2000
              </footer>
            </blockquote>
          </Reveal>
          <Reveal style={{ marginTop: "3rem" }}>
            <div className="audit-mono" style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.7 }}>
              The promises, itemized
            </div>
            <div className="audit-ledger" style={{ marginTop: "1rem" }}>
              {PROJECTION_LEDGER.map(([label, val]) => (
                <div className="audit-ledger-row" key={label}>
                  <div className="audit-ledger-label">{label}</div>
                  <div className="audit-ledger-value" style={{ color: "var(--dfc-navy)" }}>
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CH 02 — THE INVOICE ===== */}
      <section className="section section-navy grain-overlay" id="ch02">
        <div className="container" style={{ maxWidth: "1040px" }}>
          <Reveal>
            <span className="section-eyebrow">Chapter 02 · The Invoice</span>
            <h2 className="section-title section-title-cream" style={{ marginTop: "1.25rem" }}>
              Hardware Costs Missed by 2–5×, Every Round
            </h2>
            <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: "70ch", color: "rgba(245,237,216,0.9)" }}>
              Dealer invoices carried explicit EPA-compliance surcharges. Western Star line items read
              &ldquo;2002/2004 Engine Emissions Escalator&hellip; $4,148.&rdquo; Volvo invoices read
              &ldquo;2007 EPA surcharge net/net no discount&hellip; $7,500.&rdquo; A 2009 Peterbilt bulletin set
              the 2010 ISX surcharge at $9,250 — non-discountable.
            </p>
          </Reveal>
          <Reveal style={{ marginTop: "2.5rem", overflowX: "auto" }}>
            <table className="audit-table" style={{ color: "var(--dfc-cream)", minWidth: "560px" }}>
              <thead>
                <tr>
                  <th>Standards round</th>
                  <th style={{ textAlign: "right" }}>EPA projection</th>
                  <th style={{ textAlign: "right" }}>Actual surcharge</th>
                  <th style={{ textAlign: "right" }}>Miss</th>
                </tr>
              </thead>
              <tbody>
                {PER_TRUCK.map((r) => (
                  <tr key={r[0]}>
                    <td>{r[0]}</td>
                    <td className="num" style={{ color: "var(--dfc-gold)" }}>{r[1]}</td>
                    <td className="num" style={{ color: "#E8836F" }}>{r[3]}</td>
                    <td className="num">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal style={{ marginTop: "1.5rem" }}>
            <p className="audit-mono" style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "rgba(245,237,216,0.6)", maxWidth: "72ch" }}>
              All figures inflation-adjusted; Class 8 heavy heavy-duty. Cumulative surcharge ran{" "}
              <strong style={{ color: "#E8836F" }}>$21,596</strong> against EPA&rsquo;s{" "}
              <strong style={{ color: "var(--dfc-gold)" }}>$5,136</strong> projection. OOIDA (MSRP + warranty
              basis) put the total increase at $20,000–30,000 per truck.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== CH 03 — THE FLUID ===== */}
      <section className="section section-cream grain-overlay" id="ch03">
        <div className="container" style={{ maxWidth: "980px" }}>
          <Reveal>
            <span className="section-eyebrow">Chapter 03 · The Fluid They Never Priced</span>
            <h2 className="section-title" style={{ marginTop: "1.25rem" }}>
              Operating Costs Ran ~10× the Projection
            </h2>
            <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: "68ch" }}>
              EPA projected $4,600 in added lifetime operating costs for a Class 8 truck — and zero
              fuel-economy penalty. Then the industry adopted SCR, and every mile began consuming a fluid the
              RIA never mentioned: DEF. Add regens, cleanings, cooler failures, sensors, and derates.
            </p>
          </Reveal>

          {/* comparison bars */}
          <Reveal style={{ marginTop: "2.5rem" }}>
            <div className="audit-mono" style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.7, marginBottom: "1rem" }}>
              Lifetime operating increase · 714,000-mi Class 8 life · 2025$
            </div>
            {[
              { label: "EPA projection", val: 8.9, pct: 10, color: "var(--dfc-navy)", display: "$8.9k" },
              { label: "Actual — low estimate", val: 68, pct: 76, color: "var(--dfc-oxblood)", display: "$68k" },
              { label: "Actual — high estimate", val: 90, pct: 100, color: "var(--dfc-oxblood)", display: "$90k" },
            ].map((b) => (
              <div key={b.label} style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{b.label}</span>
                  <span className="audit-mono" style={{ fontWeight: 700, color: b.color }}>{b.display}</span>
                </div>
                <div className="audit-bar-track">
                  <div className="audit-bar-fill" style={{ width: `${b.pct}%`, background: b.color }} />
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal style={{ marginTop: "2.5rem" }}>
            <div className="audit-ledger">
              {OPERATING.map(([label, val]) => (
                <div className="audit-ledger-row" key={label} style={{ gridTemplateColumns: "minmax(140px,0.7fr) 1.3fr" }}>
                  <div className="audit-ledger-label" style={{ fontWeight: 700 }}>{label}</div>
                  <div className="audit-ledger-label" style={{ textAlign: "right", opacity: 0.85 }}>{val}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CH 04 — THE MARKET VERDICT ===== */}
      <section className="section section-navy grain-overlay" id="ch04">
        <div className="container" style={{ maxWidth: "1000px" }}>
          <Reveal>
            <span className="section-eyebrow">Chapter 04 · The Market Verdict</span>
            <h2 className="section-title section-title-cream" style={{ marginTop: "1.25rem" }}>
              Buyers Saw the Price and Fled
            </h2>
            <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: "70ch", color: "rgba(245,237,216,0.9)" }}>
              Every standards round triggered the same rational response: buy the old truck before the new cost
              arrives. The result was boom-bust whiplash through manufacturing towns, an aging national fleet, a
              glider-kit surge — and cleaner air arriving years late.
            </p>
          </Reveal>
          <Reveal
            style={{
              marginTop: "2.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              { n: "104,000", l: "extra pre-DPF trucks pre-bought in 2005–06 (NERA)" },
              { n: "−45%", l: "truck sales collapse, 2007–08" },
              { n: "Oldest since 1979", l: "average Class 8 fleet age" },
            ].map((s) => (
              <div
                key={s.l}
                style={{
                  border: "1px solid rgba(200,151,58,0.4)",
                  padding: "1.5rem",
                  background: "rgba(10,18,38,0.4)",
                }}
              >
                <div className="font-stencil" style={{ fontSize: "1.9rem", color: "var(--dfc-gold)", lineHeight: 1 }}>
                  {s.n}
                </div>
                <div style={{ marginTop: "0.6rem", fontSize: "0.85rem", color: "rgba(245,237,216,0.8)" }}>{s.l}</div>
              </div>
            ))}
          </Reveal>
          <Reveal style={{ marginTop: "2rem" }}>
            <p style={{ fontSize: "0.98rem", lineHeight: 1.65, maxWidth: "72ch", color: "rgba(245,237,216,0.82)" }}>
              Caterpillar, Sterling, GM Medium-Duty, Mitsubishi-Fuso, and UD Trucks exited or retreated from the
              market. Volvo laid off ~600 (2006), Peterbilt cut nearly half its workforce (2006), and
              Freightliner shed 1,800 then 2,100 more and closed a plant (2007–09).
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== CH 05 — THE RECORD (timeline) ===== */}
      <section className="section section-cream grain-overlay" id="ch05">
        <div className="container" style={{ maxWidth: "900px" }}>
          <Reveal>
            <span className="section-eyebrow">Chapter 05 · The Record</span>
            <h2 className="section-title" style={{ marginTop: "1.25rem" }}>
              EPA HD Diesel · 2000–2026
            </h2>
            <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: "68ch" }}>
              From technology-forcing optimism to EPA&rsquo;s own 2026 reversals — every entry below is
              documented in federal dockets, court filings, or the agency&rsquo;s own publications.
            </p>
          </Reveal>
          <Reveal style={{ marginTop: "3rem" }}>
            <div className="timeline">
              {TIMELINE.map((t) => (
                <div className="timeline-item" key={t.date}>
                  <div className="timeline-year">{t.date}</div>
                  <div className="timeline-title">{t.title}</div>
                  <div className="timeline-desc">{t.body}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CH 06 — THE OTHER COLUMN ===== */}
      <section className="section section-navy grain-overlay" id="ch06">
        <div className="container" style={{ maxWidth: "1000px" }}>
          <Reveal>
            <span className="section-eyebrow">Chapter 06 · The Other Column</span>
            <h2 className="section-title section-title-cream" style={{ marginTop: "1.25rem" }}>
              The Air Did Get Cleaner — and That Cuts Both Ways
            </h2>
            <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: "70ch", color: "rgba(245,237,216,0.9)" }}>
              An honest audit records both columns. The physical emission goals were largely delivered: HD NOx
              down ~80%, PM down ~99% on compliant engines, with no cancer signal in lifetime exposure studies.
              But the monetized case for the rule rested on assumptions EPA itself has now walked away from.
            </p>
          </Reveal>
          <Reveal
            style={{
              marginTop: "2.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              { n: "−80%", l: "HD NOx, 2002–2022 (delivered, delayed)" },
              { n: "−99%", l: "PM on 2007+ engines (ACES lab)" },
              { n: "$70.4B", l: "monetized benefits claimed (2030)" },
              { n: "$4.2B", l: "total annual program cost (2030)" },
            ].map((s) => (
              <div key={s.l} style={{ borderLeft: "2px solid var(--dfc-gold)", paddingLeft: "1rem" }}>
                <div className="font-stencil" style={{ fontSize: "1.9rem", color: "var(--dfc-cream)", lineHeight: 1 }}>
                  {s.n}
                </div>
                <div style={{ marginTop: "0.5rem", fontSize: "0.82rem", color: "rgba(245,237,216,0.75)" }}>{s.l}</div>
              </div>
            ))}
          </Reveal>
          <Reveal style={{ marginTop: "2.5rem", maxWidth: "72ch", borderLeft: "2px solid var(--dfc-oxblood)", paddingLeft: "1.5rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(245,237,216,0.9)" }}>
              Roughly <strong style={{ color: "var(--dfc-gold)" }}>89%</strong> of the 2000 rule&rsquo;s $70.4B
              annual benefit figure came from VSL-monetized PM2.5 mortality — the exact category EPA now
              declines to monetize. Under the agency&rsquo;s current method, the original justification could not
              be written today.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== CH 07 — THE ECONOMICS ===== */}
      <section className="section section-cream grain-overlay" id="ch07">
        <div className="container" style={{ maxWidth: "980px" }}>
          <Reveal>
            <span className="section-eyebrow">Chapter 07 · The Economics</span>
            <h2 className="section-title" style={{ marginTop: "1.25rem" }}>
              Diminishing Returns: The Optimum Passed Decades Ago
            </h2>
            <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: "68ch" }}>
              Each stringency increment requires exponentially more hardware: filters, catalysts, DEF dosing,
              sensors. The marginal cost curve turns sharply upward while the marginal tons removed shrink.
            </p>
          </Reveal>
          <Reveal style={{ marginTop: "2.5rem", display: "grid", gap: "1rem" }}>
            {CURVE.map((c, i) => (
              <div
                key={c.era}
                style={{
                  border: "2px solid var(--dfc-navy)",
                  borderLeft: `6px solid ${i >= 3 ? "var(--dfc-oxblood)" : i === 2 ? "var(--dfc-gold)" : "var(--dfc-navy)"}`,
                  padding: "1.25rem 1.5rem",
                  background: "var(--dfc-cream)",
                  boxShadow: "4px 4px 0 var(--dfc-navy)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span className="font-stencil" style={{ fontSize: "1rem", color: "var(--dfc-navy)" }}>{c.era}</span>
                  <span
                    className="audit-mono"
                    style={{ fontSize: "0.78rem", fontWeight: 700, color: i >= 3 ? "var(--dfc-oxblood)" : "var(--dfc-gold-2)" }}
                  >
                    {c.tag}
                  </span>
                </div>
                <p style={{ marginTop: "0.6rem", fontSize: "0.95rem", lineHeight: 1.55, opacity: 0.85 }}>{c.body}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="pull-quote" style={{ marginTop: "2.5rem", maxWidth: "64ch" }}>
            The record — 2–5× hardware overruns, ~10× operating overruns, single-digit remaining fleet gains —
            indicates equilibrium was largely reached at Tier 2-equivalent stringency. Past the optimum,
            stringency doesn&rsquo;t just waste money; it manufactures the non-compliance that erodes the
            remaining benefits.
          </Reveal>
        </div>
      </section>

      {/* ===== CH 08 — THE MISSED OFF-RAMP ===== */}
      <section className="section section-navy grain-overlay" id="ch08">
        <div className="container" style={{ maxWidth: "1000px" }}>
          <Reveal>
            <span className="section-eyebrow">Chapter 08 · The Missed Off-Ramp</span>
            <h2 className="section-title section-title-cream" style={{ marginTop: "1.25rem" }}>
              Section 610: The Window That Closed
            </h2>
            <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: "72ch", color: "rgba(245,237,216,0.9)" }}>
              Section 610 of the Regulatory Flexibility Act required EPA to review the rule&rsquo;s small-business
              impact within ten years. By 2012, NADA&rsquo;s Look-Back study and ATA comments sat in the docket
              documenting 2–5× cost overruns. EPA concluded &ldquo;no changes warranted.&rdquo; The one-time
              review window closed, and the trajectory continued toward Tier 4.
            </p>
          </Reveal>
          <Reveal style={{ marginTop: "2.5rem" }}>
            <div className="audit-ledger" style={{ borderTopColor: "var(--dfc-gold)" }}>
              {SECTION610.map(([label, val]) => (
                <div className="audit-ledger-row" key={label} style={{ gridTemplateColumns: "minmax(160px,0.65fr) 1.35fr" }}>
                  <div className="audit-ledger-label" style={{ fontWeight: 700, color: "var(--dfc-gold)" }}>{label}</div>
                  <div className="audit-ledger-label" style={{ textAlign: "right", color: "rgba(245,237,216,0.85)" }}>{val}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal style={{ marginTop: "2.5rem", maxWidth: "72ch" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(245,237,216,0.85)" }}>
              Two years after the review closed, EPA&rsquo;s own 2014 Emergency Vehicle Rule conceded that
              aftertreatment could compromise fire apparatus and ambulances — establishing DEF maintenance
              intervals and emergency derate relief. The agency had, in effect, validated the
              operational-reliability record it had declined to act on in 2012, just for a narrower class of
              vehicles.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== CH 09 — THE PATH FORWARD ===== */}
      <section className="section section-cream grain-overlay" id="ch09">
        <div className="container" style={{ maxWidth: "1040px" }}>
          <Reveal>
            <span className="section-eyebrow">Chapter 09 · The Path Forward</span>
            <h2 className="section-title" style={{ marginTop: "1.25rem" }}>
              The Legal Architecture Is Already in Place
            </h2>
            <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: "72ch" }}>
              The advocacy brief prepared for the SBA Office of Advocacy (July 2026) rests on four pillars — each
              grounded in statute, precedent, and EPA&rsquo;s own recent actions. The requested remedy: evaluate
              Tier 2-equivalent criteria-pollutant standards for on-road medium/heavy-duty diesels and earlier
              nonroad tiers, with a technology-neutral compliance pathway.
            </p>
          </Reveal>
          <Reveal
            style={{
              marginTop: "2.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {PILLARS.map((p) => (
              <div
                key={p.n}
                style={{
                  border: "3px solid var(--dfc-navy)",
                  padding: "1.75rem",
                  background: "var(--dfc-cream)",
                  boxShadow: "6px 6px 0 var(--dfc-oxblood)",
                }}
              >
                <div className="font-stencil" style={{ fontSize: "2rem", color: "var(--dfc-oxblood)", lineHeight: 1 }}>
                  {p.n}
                </div>
                <h3 className="font-stencil" style={{ fontSize: "1.15rem", marginTop: "0.5rem", color: "var(--dfc-navy)" }}>
                  {p.title}
                </h3>
                <p style={{ marginTop: "0.75rem", fontSize: "0.92rem", lineHeight: 1.6, opacity: 0.88 }}>{p.body}</p>
              </div>
            ))}
          </Reveal>
          <Reveal style={{ marginTop: "2.5rem", maxWidth: "72ch", borderLeft: "4px solid var(--dfc-oxblood)", paddingLeft: "1.5rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.7 }}>
              The June 29, 2026 Presidential Memorandum&rsquo;s repair guidance offers near-term relief, but as
              long as standards stay at current levels, aftertreatment remains part of the certified
              configuration. Only revising the standards themselves makes hardware removal lawful compliance
              instead of §203(a)(3) tampering.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== VERDICT ===== */}
      <section className="section section-navy grain-overlay">
        <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
          <Reveal>
            <div className="audit-kicker">The Audit Concludes</div>
            <p
              className="font-serif-display"
              style={{
                marginTop: "1.5rem",
                fontStyle: "italic",
                fontSize: "clamp(1.4rem, 3vw, 2.1rem)",
                lineHeight: 1.4,
                color: "var(--dfc-cream)",
              }}
            >
              The 2007/2010 mandates forced technologies that genuinely cleaned America&rsquo;s diesel fleet —
              and did it on the back of cost projections that missed by multiples, operating assumptions that
              ignored the dominant technology, and a review process that declined to correct course when the
              evidence arrived. Twenty-six years later, EPA&rsquo;s own reversals have reopened the question the
              2012 review closed.
            </p>
            <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/share" className="btn-gold">
                Share The Fight
              </a>
              <a
                href="https://www.epa.gov/newsreleases/trump-epa-unveils-proposal-save-truckers-12-billion-revising-unworkable-biden-era-rule"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-cream"
              >
                Read the July 2026 Proposal
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SOURCES ===== */}
      <section className="section-sm section-cream grain-overlay" id="sources" style={{ paddingBottom: "5rem" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <Reveal>
            <span className="section-eyebrow">The Record — All Sources</span>
            <h2 className="section-title" style={{ marginTop: "1.25rem", fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>
              Every Figure Traces to a Public Document
            </h2>
            <p style={{ marginTop: "1rem", fontSize: "1rem", opacity: 0.85, maxWidth: "60ch" }}>
              Click any entry to open the original. Retrospective estimates combine EPA&rsquo;s own RIA structure
              with documented invoice, fleet, and market data; inflation adjustments use BLS CPI-U. This
              compilation is for research and advocacy analysis.
            </p>
          </Reveal>
          <Reveal style={{ marginTop: "2rem" }}>
            <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {SOURCES.map((s, i) => (
                <li key={s.href} style={{ borderBottom: "1px solid var(--dfc-border)" }}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr auto",
                      gap: "1rem",
                      alignItems: "baseline",
                      padding: "0.9rem 0",
                      color: "var(--dfc-navy)",
                      textDecoration: "none",
                    }}
                  >
                    <span className="audit-mono" style={{ color: "var(--dfc-oxblood)", fontWeight: 700, fontSize: "0.85rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: "0.95rem", lineHeight: 1.45 }}>{s.label}</span>
                    <span className="audit-mono" style={{ color: "var(--dfc-gold-2)", fontSize: "0.8rem" }}>OPEN ↗</span>
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ===== footer ===== */}
      <footer className="footer-dfc">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="font-stencil" style={{ fontSize: "1.1rem", letterSpacing: "0.1em" }}>
            ★ DIESEL FREEDOM COALITION
          </div>
          <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", opacity: 0.7, maxWidth: "56ch", margin: "0.75rem auto 0" }}>
            The 20-Year Audit is a compiled evidentiary record supporting reform of heavy-duty diesel emission
            standards. American diesel keeps America fed, built, and moving.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <a href="/" className="audit-mono" style={{ color: "var(--dfc-gold)", fontSize: "0.8rem", textDecoration: "none", letterSpacing: "0.15em" }}>
              ← BACK TO DIESELFREEDOMCOALITION
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
