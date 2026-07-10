"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Shareable = {
  id: number;
  w: number;
  h: number;
  title: string;
  caption: string;
};

const SHAREABLES: Shareable[] = [
  {
    id: 1,
    w: 941,
    h: 1672,
    title: `The EPA's own math no longer adds up`,
    caption: `The EPA spent years justifying strict diesel rules with health benefits it now admits it can't reliably measure. In January 2026 they stopped counting them. When the agency's own math falls apart, the rule built on it deserves a second look. #DieselFreedom #EPA #TruckLife`,
  },
  {
    id: 2,
    w: 941,
    h: 1672,
    title: `$13,300 per semi-truck`,
    caption: `That's not our number. That's the SBA's estimate of what every semi could save each year if these diesel rules got reformed. Multiply that across your fleet and tell us it isn't worth fighting for. #Diesel #SmallBusiness #Trucking`,
  },
  {
    id: 3,
    w: 1122,
    h: 1402,
    title: `$195 Billion`,
    caption: `The total the SBA says American small businesses could save if these diesel emission rules were revised. This isn't fringe. The government's own small-business watchdog put this on paper. #DieselFreedom #195Billion #Trucking`,
  },
  {
    id: 4,
    w: 1122,
    h: 1402,
    title: `Only one actually makes it legal`,
    caption: `A lot of folks think the June memo already made deleting emissions gear legal. It didn't. Guidance is a suggestion. Revising the standards is the law. Know the difference before you touch a truck. #Diesel #EPA #CleanAirAct`,
  },
  {
    id: 5,
    w: 1122,
    h: 1402,
    title: `How we got here`,
    caption: `This fight didn't start yesterday. The EPA was handed the cost data back in 2012 and waved it off. Here's the full timeline of how we got to today's brief. Swipe through and see for yourself. #DieselHistory #EPA #Trucking`,
  },
  {
    id: 6,
    w: 1122,
    h: 1402,
    title: `The EPA was warned in 2012`,
    caption: `Real cost data landed on the EPA's desk in 2012. Their response was basically "not our problem." Fourteen more years of proof later, that answer doesn't hold up. #Accountability #Diesel #EPA`,
  },
  {
    id: 7,
    w: 1122,
    h: 1402,
    title: `20 years of real-world diesel data`,
    caption: `Every owner-operator already knows this list by heart. Regens, derates, DEF failures, no-starts in the cold. Two decades of it. The only people acting surprised are the ones who wrote the rules. #DEF #DPF #TruckProblems`,
  },
  {
    id: 8,
    w: 1122,
    h: 1402,
    title: `The justification is gone`,
    caption: `The entire case for forcing DPF and DEF onto every diesel rested on health benefits the EPA now says it can't stand behind. Pull that out and what's left holding the rule up? #Diesel #EPA #DieselFreedom`,
  },
  {
    id: 9,
    w: 1122,
    h: 1402,
    title: `What is a technology-neutral pathway?`,
    caption: `Simple idea: prove your engine is clean by testing it, not by being forced to keep a specific box of hardware bolted on forever. Standards should measure results, not mandate parts. #TechNeutral #Diesel #CleanAir`,
  },
  {
    id: 10,
    w: 1122,
    h: 1402,
    title: `Myth vs Fact`,
    caption: `MYTH: The memo made deletes legal. FACT: It's still illegal until the standards actually change. Don't let a headline get you a fine. Here's the real story. #MythVsFact #Diesel #EPA`,
  },
  {
    id: 11,
    w: 1122,
    h: 1402,
    title: `The EPA's numbers were wrong`,
    caption: `They projected the costs low and the reliability high. Twenty years of receipts say the opposite. When the projections miss this badly, the rule needs to be reopened. #Diesel #EPA #Trucking`,
  },
  {
    id: 12,
    w: 1122,
    h: 1402,
    title: `Both are affected`,
    caption: `This isn't just a highway trucking issue. Farmers and construction crews are living the same nightmare with nonroad diesel. Same tech, same failures, same fight. #Ag #Construction #Diesel`,
  },
  {
    id: 13,
    w: 1122,
    h: 1402,
    title: `The law already allows it`,
    caption: `People assume changing these rules would take an act of Congress. It won't. The Clean Air Act already says the EPA can revise these standards over time. The authority is right there in the text. #CleanAirAct #Diesel #EPA`,
  },
  {
    id: 14,
    w: 1122,
    h: 1402,
    title: `30 days`,
    caption: `The Presidential Memo gave the EPA 30 days to issue guidance. Good start. But guidance runs out. Only revising the actual standards makes the change stick. #Diesel #EPA #30Days`,
  },
  {
    id: 15,
    w: 1122,
    h: 1402,
    title: `Both pillars are gone`,
    caption: `The rule stood on two legs: the health benefits and the cost projections. The EPA kicked out one in January. Real-world data knocked out the other. It can't keep standing on nothing. #Diesel #EPA #Reform`,
  },
  {
    id: 16,
    w: 1122,
    h: 1402,
    title: `Guidance isn't law`,
    caption: `Say it louder for the people in the back. Guidance isn't law. Only revising the standards is. That's the whole point of the brief the Diesel Freedom Coalition just filed. #DieselFreedom #EPA #CleanAirAct`,
  },
  {
    id: 17,
    w: 1122,
    h: 1402,
    title: `Why go to the SBA?`,
    caption: `Because the SBA already calls these rules a top target for reform, and their job is to fight for small business. Get them in EPA's ear and the whole conversation changes. #SBA #SmallBusiness #Diesel`,
  },
  {
    id: 18,
    w: 1122,
    h: 1402,
    title: `What reform could mean for you`,
    caption: `Lower costs. Less downtime. Better mileage. Longer engine life. This is what's on the table if these rules get revised. This is why it matters to your bottom line. #OwnerOperator #Diesel #Trucking`,
  },
  {
    id: 19,
    w: 1122,
    h: 1402,
    title: `Where things stand`,
    caption: `Straight talk: nothing is final. A brief has been filed asking the EPA to evaluate change. This is the stage where pressure matters most. Pay attention and stay loud. #Diesel #EPA #StayInformed`,
  },
  {
    id: 20,
    w: 1122,
    h: 1402,
    title: `5 things to know`,
    caption: `New to this fight? Start here. Five things that explain why the case to reform diesel emission rules is stronger than it's ever been. Save this one and share it. #DieselFreedom #Diesel #Trucking`,
  },
];

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export default function ShareGallery() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  async function copyCaption(item: Shareable) {
    try {
      await navigator.clipboard.writeText(item.caption);
      setCopiedId(item.id);
      window.setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Clipboard blocked; select-and-copy fallback
      window.prompt("Copy this caption:", item.caption);
    }
  }

  return (
    <main style={{ background: "var(--dfc-navy-3)", minHeight: "100vh", color: "var(--dfc-cream)" }}>
      {/* Header */}
      <header
        style={{
          background: "var(--dfc-navy-3)",
          borderBottom: "2px solid var(--dfc-gold)",
          padding: "1rem 0",
        }}
      >
        <div className="container flex items-center justify-between gap-6 flex-wrap">
          <Link
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
          </Link>
          <Link
            href="/"
            className="font-stencil"
            style={{
              fontSize: "0.82rem",
              letterSpacing: "0.18em",
              color: "var(--dfc-cream)",
              textDecoration: "none",
            }}
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Intro */}
      <section style={{ padding: "3.5rem 0 1.5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="stars-divider" style={{ marginBottom: "1.5rem" }}>
            ★ ★ ★
          </div>
          <p
            className="font-stencil"
            style={{ color: "var(--dfc-gold)", letterSpacing: "0.28em", fontSize: "0.95rem", marginBottom: "1rem" }}
          >
            Share The Fight
          </p>
          <h1
            className="font-stencil"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
              lineHeight: 1.05,
              color: "var(--dfc-cream)",
              margin: "0 auto 1.25rem",
              maxWidth: "50rem",
            }}
          >
            SPREAD THE WORD.<br />
            <span style={{ color: "var(--dfc-gold)" }}>ONE POST AT A TIME.</span>
          </h1>
          <p
            style={{
              maxWidth: "42rem",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "var(--dfc-cream)",
              opacity: 0.9,
            }}
          >
            Pick a graphic, tap <strong>Download</strong> to save it to your phone, then <strong>Copy</strong> the
            caption and post it. That&rsquo;s it. Every share puts this fight in front of more people.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: "1.5rem 0 4rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {SHAREABLES.map((item) => {
              const file = `/share-${pad(item.id)}.png`;
              const copied = copiedId === item.id;
              return (
                <article
                  key={item.id}
                  style={{
                    background: "var(--dfc-cream)",
                    color: "var(--dfc-navy)",
                    border: "3px solid var(--dfc-navy)",
                    boxShadow: "6px 6px 0 var(--dfc-oxblood)",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  <a href={file} target="_blank" rel="noopener noreferrer" style={{ display: "block", lineHeight: 0 }}>
                    <Image
                      src={file}
                      alt={item.title}
                      width={item.w}
                      height={item.h}
                      sizes="(max-width: 640px) 100vw, 320px"
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </a>

                  <div style={{ padding: "1.1rem 1.1rem 1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h2
                      className="font-stencil"
                      style={{ fontSize: "1.15rem", lineHeight: 1.15, color: "var(--dfc-navy)", margin: "0 0 0.6rem" }}
                    >
                      {item.title}
                    </h2>
                    <p style={{ fontSize: "0.92rem", lineHeight: 1.5, color: "var(--dfc-navy)", margin: "0 0 1.1rem", flex: 1 }}>
                      {item.caption}
                    </p>

                    <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                      <a
                        href={file}
                        download={`diesel-freedom-${pad(item.id)}.png`}
                        className="btn-gold"
                        style={{ flex: 1, justifyContent: "center", padding: "0.7rem 0.9rem", fontSize: "0.8rem", boxShadow: "3px 3px 0 var(--dfc-navy)", textAlign: "center" }}
                      >
                        Download
                      </a>
                      <button
                        type="button"
                        onClick={() => copyCaption(item)}
                        className="btn-oxblood"
                        style={{ flex: 1, justifyContent: "center", padding: "0.7rem 0.9rem", fontSize: "0.8rem", boxShadow: "3px 3px 0 var(--dfc-navy)" }}
                      >
                        {copied ? "Copied!" : "Copy Caption"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
