"use client";

import { useState } from "react";
import "./advocacy.css";

const PAGE_URL = "https://dieselfreedomcoalition.org/advocacy";
const EMAIL = "info@dieselfreedomcoalition.com";
const DONATE = "https://secure.anedot.com/diesel-freedom-coalition/freedom_donation";

/* ---------- the five boxes of the cycle ---------- */
const NODES = {
  position: { lead: "An advocacy", word: "Position", tone: "gold" },
  rule: { lead: "became a", word: "Rule", tone: "orange" },
  crime: { lead: "which became a", word: "Crime", tone: "red" },
  prison: { lead: "which resulted in", word: "Prison", tone: "red" },
  pardons: { lead: "which required", word: "Pardons", tone: "green" },
} as const;

function Node({
  k,
  style,
}: {
  k: keyof typeof NODES;
  style?: React.CSSProperties;
}) {
  const n = NODES[k];
  return (
    <div className={`adv-node ${n.tone}`} style={style}>
      <div className="adv-node-lead">{n.lead}</div>
      <div className="adv-node-word">{n.word}</div>
    </div>
  );
}

/* ---------- step-by-step explainer ---------- */
const STEPS = [
  {
    n: "1",
    title: "An Advocacy Position",
    body:
      "It starts as an opinion. Activist groups and agency staff decide that the internal combustion engine should go away. That is a political position, not a law. Nobody in Congress voted on it.",
  },
  {
    n: "2",
    title: "The Position Became a Rule",
    body:
      "The EPA wrote the position into technology-forcing mandates: EGR in 2004, diesel particulate filters in 2007, SCR and DEF in 2010. The agency projected modest costs. The real invoices ran two to five times higher, and the trucks derate, regen, and limp home. See the 20-Year Audit for the full record.",
  },
  {
    n: "3",
    title: "The Rule Became a Crime",
    body:
      "Once the hardware was mandated, touching it became tampering under the Clean Air Act. A repair decision made in a shop, at a customer's request, turned into a federal felony. No new law was passed to do this. The rule did it.",
  },
  {
    n: "4",
    title: "The Crime Resulted in Prison",
    body:
      "Troy Lake, founder of Elite Diesel Service in Cheyenne, Wyoming, was prosecuted in 2024 for fixing trucks the way his customers asked him to fix them. He served seven months in federal custody. Owner-operators, farmers, and shop owners across the country face the same exposure.",
  },
  {
    n: "5",
    title: "Which Required Pardons",
    body:
      "On November 7, 2025, President Trump granted Troy a full and unconditional pardon. On February 12, 2026, Elite Diesel Service itself was pardoned, a rare second action for a company. It took two acts of presidential clemency to undo what one regulatory position set in motion.",
  },
  {
    n: "6",
    title: "This Must Stop",
    body:
      "A pardon fixes one case. It does not fix the machine that produced it. The cycle keeps running until the mandate itself is replaced. That is the laundering of American regulatory policy: an opinion goes in one end, and a prison sentence comes out the other, with no vote in between.",
  },
];

export default function AdvocacyPoster() {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(PAGE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt("Copy this link:", PAGE_URL);
    }
  }

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
            style={{ fontSize: "1.35rem", color: "var(--dfc-cream)", letterSpacing: "0.08em", textDecoration: "none" }}
          >
            ★ DIESEL FREEDOM COALITION
          </a>
          <div className="flex items-center gap-6 font-stencil" style={{ fontSize: "0.82rem", letterSpacing: "0.18em" }}>
            <a href="/" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
              Home
            </a>
            <a href="/audit" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
              The Audit
            </a>
            <a href="/share" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
              Share The Fight
            </a>
            <a
              href={DONATE}
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

      {/* ===== THE POSTER ===== */}
      <section className="adv-poster" id="poster">
        <div className="container">
          <div className="adv-frame">
            <h1 className="adv-title">
              Make Diesels
              <br />
              Great Again
            </h1>
            <p className="adv-subtitle">The Laundering of American Regulatory Policy</p>

            {/* ---- desktop cycle ---- */}
            <div className="adv-cycle" aria-hidden="false" role="img" aria-label="Cycle diagram: an advocacy position became a rule, which became a crime, which resulted in prison, which required pardons. This must stop, with a return to common sense regulations.">
              <svg className="adv-arrows" viewBox="0 0 1183 880" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <marker id="adv-grey" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="#BDBDBD" />
                  </marker>
                  <marker id="adv-white" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="#FFFFFF" />
                  </marker>
                </defs>
                {/* Position -> Rule */}
                <path d="M 760 120 Q 870 140 880 215" fill="none" stroke="#BDBDBD" strokeWidth="9" strokeLinecap="round" markerEnd="url(#adv-grey)" />
                {/* Rule -> Crime */}
                <path d="M 940 445 Q 950 560 885 620" fill="none" stroke="#BDBDBD" strokeWidth="9" strokeLinecap="round" markerEnd="url(#adv-grey)" />
                {/* Crime -> Prison (white elbow) */}
                <path d="M 797 775 L 797 825 L 383 825 L 383 790" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinejoin="miter" markerEnd="url(#adv-white)" />
                {/* Prison -> Pardons */}
                <path d="M 300 625 Q 225 560 235 420" fill="none" stroke="#BDBDBD" strokeWidth="9" strokeLinecap="round" markerEnd="url(#adv-grey)" />
                {/* Pardons -> STOP (white) */}
                <path d="M 250 262 L 178 206" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" markerEnd="url(#adv-white)" />
                {/* STOP -> down to outcome (white) */}
                <path d="M 58 215 L 58 835" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="butt" markerEnd="url(#adv-white)" />
              </svg>

              <div className="adv-stop-label">This must</div>
              <div className="adv-stop-wrap">
                <div className="adv-stop-inner">STOP</div>
              </div>

              <Node k="position" style={{ left: "49.9%", top: "8.75%" }} />
              <Node k="rule" style={{ left: "78.2%", top: "36%" }} />
              <Node k="crime" style={{ left: "67.4%", top: "80.7%" }} />
              <Node k="prison" style={{ left: "32.4%", top: "80.7%" }} />
              <Node k="pardons" style={{ left: "21.6%", top: "36%" }} />

              <div className="adv-center">
                Killing
                <br />
                Combustion
                <br />
                Engines
              </div>
            </div>

            {/* ---- mobile vertical flow ---- */}
            <div className="adv-flow">
              <Node k="position" />
              <div className="adv-flow-arrow">↓</div>
              <Node k="rule" />
              <div className="adv-flow-arrow">↓</div>
              <div className="adv-flow-center">
                Killing
                <br />
                Combustion
                <br />
                Engines
              </div>
              <div className="adv-flow-arrow">↓</div>
              <Node k="crime" />
              <div className="adv-flow-arrow">↓</div>
              <Node k="prison" />
              <div className="adv-flow-arrow">↓</div>
              <Node k="pardons" />
              <div className="adv-flow-arrow">↓</div>
              <div style={{ textAlign: "center", fontWeight: 700, color: "var(--adv-cream)" }}>This must</div>
              <div className="adv-flow-stop">
                <div className="adv-stop-inner">STOP</div>
              </div>
              <div className="adv-flow-arrow">↓</div>
            </div>

            {/* ---- outcome ---- */}
            <div className="adv-outcome">
              <div className="adv-outcome-lead">with a return to</div>
              <div className="adv-outcome-word">Common Sense Regulations</div>
              <div className="adv-outcome-nums">
                NOx 2.5 <span style={{ display: "inline-block", width: "1.5em" }} /> PM 0.10
              </div>
            </div>

            {/* ---- QR ---- */}
            <div className="adv-qr">
              <a href={PAGE_URL} aria-label="QR code linking to this page">
                <img src="/advocacy-qr.png" alt="QR code for dieselfreedomcoalition.org/advocacy" width={800} height={800} />
              </a>
              <div>
                <div className="adv-qr-scan">Scan to Learn More</div>
                <div className="adv-qr-links">
                  <a href={PAGE_URL}>dieselfreedomcoalition.org/advocacy</a>
                  <br />
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
              </div>
            </div>
          </div>

          {/* ---- share bar ---- */}
          <div
            className="flex items-center justify-center gap-4 flex-wrap"
            style={{ marginTop: "2.25rem", position: "relative", zIndex: 1 }}
          >
            <a href="/advocacy-poster.png" download="make-diesels-great-again.png" className="btn-gold" style={{ boxShadow: "4px 4px 0 #000" }}>
              Download The Poster
            </a>
            <button type="button" onClick={copyLink} className="btn-outline-cream">
              {copied ? "Link Copied ✓" : "Copy Page Link"}
            </button>
            <a href="/advocacy-qr.png" download="dfc-advocacy-qr.png" className="btn-outline-cream">
              Download QR Code
            </a>
          </div>
        </div>
      </section>

      {/* ===== HOW THE LAUNDERING WORKS ===== */}
      <section className="section section-cream grain-overlay" id="how">
        <div className="container">
          <div className="section-eyebrow">The Cycle, Step by Step</div>
          <h2 className="section-title">How a Position Becomes a Prison Sentence</h2>
          <p style={{ marginTop: "1rem", maxWidth: "64ch", fontSize: "1.1rem", lineHeight: 1.65 }}>
            Money laundering takes dirty cash and runs it through enough hands that it comes out looking
            clean. Regulatory laundering does the same thing with an opinion. It goes in as advocacy and
            comes out as a felony, and at no point does anyone who answers to voters sign off on it.
          </p>

          <div style={{ marginTop: "2.5rem" }}>
            {STEPS.map((s) => (
              <div className="adv-step" key={s.n}>
                <div className="adv-step-num">{s.n}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMON SENSE NUMBERS ===== */}
      <section className="section section-navy grain-overlay" id="standards">
        <div className="container">
          <div className="section-eyebrow" style={{ color: "var(--dfc-gold)" }}>
            The Fix
          </div>
          <h2 className="section-title section-title-cream">What Common Sense Regulations Look Like</h2>
          <p style={{ marginTop: "1rem", maxWidth: "64ch", fontSize: "1.1rem", lineHeight: 1.65, color: "rgba(245,237,216,0.9)" }}>
            Nobody is asking for zero rules. The coalition is asking for performance standards instead
            of hardware mandates: tell the engine what it has to put out, measure it in the real world,
            and let engineers and mechanics decide how to get there.
          </p>

          <div className="grid md:grid-cols-2 gap-6" style={{ marginTop: "2.5rem" }}>
            <div className="stat-card">
              <div className="stat-card-number">NOx 2.5</div>
              <div className="stat-card-label">Grams per brake-horsepower-hour</div>
              <div className="stat-card-desc">
                The pre-2007 performance level for nitrogen oxides. The big emission cuts in diesel history came
                before this line, through engine design, injection timing, and fuel quality. Everything after it
                bought smaller gains at far higher cost.
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card-number">PM 0.10</div>
              <div className="stat-card-label">Grams per brake-horsepower-hour</div>
              <div className="stat-card-desc">
                The particulate matter level that modern diesels can meet without a filter that clogs, a
                regen cycle that strands trucks, or a fluid the EPA never priced into its own projections.
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6" style={{ marginTop: "1.5rem" }}>
            {[
              ["30 Days", "National enforcement discretion guidance for existing engines during the transition."],
              ["90 Days", "Interim performance-based standards, measured with portable emissions equipment on the road."],
              ["6 Months", "A joint working group of mechanics, fleets, and manufacturers to finalize the targets."],
            ].map(([t, d]) => (
              <div
                key={t}
                style={{
                  border: "2px solid rgba(245,237,216,0.35)",
                  padding: "1.5rem",
                  background: "rgba(10,18,38,0.5)",
                }}
              >
                <div className="font-stencil" style={{ color: "var(--dfc-gold)", fontSize: "1.5rem" }}>
                  {t}
                </div>
                <p style={{ marginTop: "0.5rem", lineHeight: 1.6, color: "rgba(245,237,216,0.88)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TAKE ACTION ===== */}
      <section className="section section-cream grain-overlay" id="act">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="stars-divider mb-6">★ ★ ★</div>
          <h2 className="section-title">Break the Cycle</h2>
          <p style={{ margin: "1rem auto 0", maxWidth: "58ch", fontSize: "1.1rem", lineHeight: 1.65 }}>
            Share the poster. Back H.R. 8079, the Diesel Truck Liberation Act. Fund the fight. Every scan
            of that QR code is one more person who understands how this machine works.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap" style={{ marginTop: "2rem" }}>
            <a href={DONATE} target="_blank" rel="noopener noreferrer" className="btn-oxblood">
              Fund The Fight
            </a>
            <a
              href="https://www.congress.gov/bill/119th-congress/house-bill/8079"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Read H.R. 8079
            </a>
            <a href="/audit" className="btn-gold">
              The 20-Year Audit
            </a>
          </div>
          <div style={{ marginTop: "2rem", fontSize: "0.95rem", opacity: 0.8 }}>
            Source documents:{" "}
            <a href="/dfc-brief-to-sba.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "var(--dfc-oxblood)", fontWeight: 700 }}>
              DFC Brief to the SBA Office of Advocacy
            </a>{" "}
            ·{" "}
            <a href="/dfc-brief-summary.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "var(--dfc-oxblood)", fontWeight: 700 }}>
              Brief Summary
            </a>
          </div>
        </div>
      </section>

      {/* ===== footer ===== */}
      <footer className="footer-dfc">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="font-stencil" style={{ fontSize: "1.1rem", letterSpacing: "0.1em" }}>
            ★ DIESEL FREEDOM COALITION
          </div>
          <p style={{ fontSize: "0.85rem", opacity: 0.7, maxWidth: "56ch", margin: "0.75rem auto 0" }}>
            American diesel keeps America fed, built, and moving. Questions, press, and coalition inquiries:{" "}
            <a href={`mailto:${EMAIL}`} style={{ color: "var(--dfc-gold)" }}>
              {EMAIL}
            </a>
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <a href="/" className="font-stencil" style={{ color: "var(--dfc-gold)", fontSize: "0.8rem", textDecoration: "none", letterSpacing: "0.15em" }}>
              ← BACK TO DIESELFREEDOMCOALITION
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
