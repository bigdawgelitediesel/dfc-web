const STATS = [
  {
    value: "$30,000+",
    label: "Compliance Tax",
    desc: "Added to every new 2027 Class 8 truck for federally mandated emissions hardware. Industry consensus. EPA's own estimate is 4x–6x lower.",
    source: "ACT Research, Overdrive, Fleet Owner",
  },
  {
    value: "$42,800",
    label: "Lifetime Repairs",
    desc: "Worst-case out-of-pocket to replace the aftertreatment stack at a dealer. DPF, DOC, SCR, DEF system, NOx, EGR, 7th injector. Parts plus install.",
    source: "Dealer OEM pricing, 2026-04-23",
  },
  {
    value: "$25,000",
    label: "Per Year, Per Truck",
    desc: "What the average owner-operator pays out of pocket each year for emissions-driven downtime, DEF fluid, regen fuel burn, and parts replacement.",
    source: "ATRI 2024 + dealer data",
  },
  {
    value: "650 LBS",
    label: "Dead Weight",
    desc: "Every Class 8 hauls this in emissions hardware. Aftertreatment box, DEF tank, urea, doser, sensors, heated lines. Weight you cannot bill for.",
    source: "SAE, OEM spec sheets",
  },
  {
    value: "4–8%",
    label: "MPG Penalty",
    desc: "Fuel economy lost to DEF injection, active regens, and exhaust backpressure. At 120,000 miles a year, that is 600+ gallons a truck never needed to burn.",
    source: "Integer Research, NACFE",
  },
  {
    value: "125M",
    label: "Gallons of DEF",
    desc: "Poured into American trucks every year. Manufactured from natural gas reformed into ammonia, then converted to urea, then shipped in plastic jugs.",
    source: "Integer Research 2024",
  },
];

const MANDATE = [
  { num: "1", part: "DPF", name: "Diesel Particulate Filter", cost: "$11,000+", note: "Plugs with soot. Fails on regen cycles. Cordierite or silicon carbide monolith." },
  { num: "2", part: "DOC", name: "Diesel Oxidation Catalyst", cost: "$4,500+", note: "Platinum and palladium. Priced off the mine, not the market." },
  { num: "3", part: "SCR", name: "Selective Catalytic Reduction", cost: "$9,000+", note: "Vanadium or copper-zeolite. Needs DEF to function. Fails from contamination." },
  { num: "4", part: "DEF", name: "Diesel Exhaust Fluid System", cost: "$7,500+", note: "Pump, heated tank, lines, doser. Freezes at 12°F. Crystallizes in the summer." },
  { num: "5", part: "NOx", name: "Nitrogen Oxide Sensors (pair)", cost: "$2,500+", note: "$1,100 each at OEM. Known failure mode. Kicks truck into limp mode." },
  { num: "6", part: "EGR", name: "Exhaust Gas Recirculation", cost: "$6,500+", note: "Cooler and valve. Soot-clogged from day one. 9 to 11 hours of dealer labor." },
  { num: "7", part: "HC", name: "7th Injector / Hydrocarbon Doser", cost: "$1,800+", note: "Dumps raw fuel into the exhaust to force regens. Only exists because of regulation." },
  { num: "8", part: "LBR", name: "Dealer Shop Labor (full cycle)", cost: "$19,000+", note: "69.5 hours at $275/hr metro dealer rate. Before parts." },
];

const TIMELINE = [
  { year: "1983", title: "Troy starts in the trade", desc: "Decades of Caterpillar background. Time inside the company and years with their engineering teams." },
  { year: "1996", title: "Elite Diesel Service founded", desc: "Troy opens the shop out of a pickup in Dubois, Wyoming. Mobile repair for ranchers, loggers, and owner-operators." },
  { year: "2022", title: "Cheyenne shop opens", desc: "Elite Diesel plants its flag in Cheyenne after stops in Elko and Windsor. Full-service heavy diesel for the mountain west." },
  { year: "2024", title: "Federal prosecution", desc: "Troy is charged under the Clean Air Act for conspiracy to disable emissions controls on commercial trucks. Work done for customers who asked for it." },
  { year: "2025", title: "Full presidential pardon", desc: "November 7, 2025. President Trump grants Troy a full and unconditional pardon. Civil rights restored." },
  { year: "2026", title: "The shop is pardoned", desc: "February 12, 2026. Elite Diesel Service itself is pardoned. Rare second action for the company. Troy becomes a national voice for diesel reform." },
];

export default function HomePage() {
  return (
    <>
      {/* =========== TOP BANNER =========== */}
      <div className="footer-star-band">
        <span>★</span>
        <span>We Provide America</span>
        <span>★</span>
        <span className="hidden sm:inline">Support H.R. 8079</span>
        <span className="hidden sm:inline">★</span>
      </div>

      {/* =========== NAV =========== */}
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
            href="#top"
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
            <a href="#mandate" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
              The Mandate
            </a>
            <a href="#story" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
              Troy&rsquo;s Story
            </a>
            <a href="#bill" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
              H.R. 8079
            </a>
            <a
              href="#act"
              className="btn-gold"
              style={{ padding: "0.6rem 1.1rem", fontSize: "0.8rem", boxShadow: "3px 3px 0 var(--dfc-oxblood)" }}
            >
              Take Action
            </a>
          </div>
        </div>
      </nav>

      {/* =========== HERO =========== */}
      <section className="hero-dfc" id="top">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="stars-divider mb-8">★ ★ ★</div>

            <p
              className="font-stencil mb-4"
              style={{
                color: "var(--dfc-gold)",
                letterSpacing: "0.28em",
                fontSize: "0.95rem",
              }}
            >
              The Diesel Freedom Coalition
            </p>

            <h1 className="hero-headline mb-8">
              We Provide
              <br />
              <span style={{ color: "var(--dfc-gold)" }}>America.</span>
            </h1>

            <p
              className="hero-subhead mb-10"
              style={{ color: "var(--dfc-cream)", opacity: 0.92 }}
            >
              Every gallon of milk. Every loaf of bread. Every beam,
              <br className="hidden md:inline" /> barrel, and bushel moves on American diesel.
            </p>

            <p
              className="mx-auto mb-12"
              style={{
                maxWidth: "46rem",
                fontSize: "1.15rem",
                lineHeight: 1.6,
                color: "var(--dfc-cream)",
                opacity: 0.85,
              }}
            >
              Washington loaded our trucks with $30,000 of federally mandated hardware, 650 pounds of dead weight, and a lifetime of repair bills. The owner-operators, farmers, and fleets paying for it built this country. It is time to push back.
            </p>

            <div className="stars-divider mb-10" style={{ maxWidth: "360px", margin: "0 auto 2.5rem" }}>
              ★ ★ ★
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#act" className="btn-gold">
                ★ Take Action
              </a>
              <a href="#bill" className="btn-outline-cream">
                Read H.R. 8079
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========== OXBLOOD BANNER =========== */}
      <div className="banner-oxblood">
        <div className="container text-center">
          <p
            className="font-stencil"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              letterSpacing: "0.25em",
              margin: 0,
            }}
          >
            ★ American Diesel Feeds, Builds, and Moves America ★
          </p>
        </div>
      </div>

      {/* =========== STATS GRID =========== */}
      <section className="section section-cream">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-eyebrow mb-6 inline-flex">The Bill Comes Due</span>
            <h2 className="section-title mt-6">
              The True Cost of
              <br />
              <span style={{ color: "var(--dfc-oxblood)" }}>EPA Compliance.</span>
            </h2>
            <p
              className="mx-auto mt-6"
              style={{
                maxWidth: "48rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: "var(--dfc-navy)",
                opacity: 0.8,
              }}
            >
              Every figure below comes from dealer quotes, OEM sources, or published research. This is what American truckers actually pay. Not what the EPA claims.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-card-number">{s.value}</div>
                <div className="stat-card-label">{s.label}</div>
                <p className="stat-card-desc">{s.desc}</p>
                <p
                  className="font-stencil"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.16em",
                    color: "var(--dfc-oxblood)",
                    marginTop: "1rem",
                    borderTop: "1px solid var(--dfc-border)",
                    paddingTop: "0.75rem",
                  }}
                >
                  Source: {s.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========== MANDATE BREAKDOWN =========== */}
      <section className="section section-navy" id="mandate">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-eyebrow mb-6 inline-flex">The Mandate</span>
            <h2 className="section-title section-title-cream mt-6">
              Eight Components.
              <br />
              <span style={{ color: "var(--dfc-gold)" }}>One Federal Bill.</span>
            </h2>
            <p
              className="mx-auto mt-6"
              style={{
                maxWidth: "48rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: "var(--dfc-cream)",
                opacity: 0.82,
              }}
            >
              This is the aftertreatment stack bolted onto every modern Class 8 diesel. None of it makes the truck haul more freight. All of it fails. And every component is paid for by the operator.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {MANDATE.map((m) => (
              <div key={m.num} className="data-row">
                <div className="flex items-start gap-5">
                  <div
                    className="font-stencil shrink-0"
                    style={{
                      fontSize: "2rem",
                      color: "var(--dfc-gold)",
                      lineHeight: 1,
                      minWidth: "2.5rem",
                    }}
                  >
                    {m.num.padStart(2, "0")}
                  </div>
                  <div>
                    <div
                      className="font-stencil"
                      style={{
                        fontSize: "1.35rem",
                        color: "var(--dfc-cream)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {m.part} · {m.name}
                    </div>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: 1.5,
                        color: "var(--dfc-cream)",
                        opacity: 0.75,
                        marginTop: "0.35rem",
                      }}
                    >
                      {m.note}
                    </p>
                  </div>
                </div>
                <div className="data-big text-right md:text-right">{m.cost}</div>
              </div>
            ))}
          </div>

          <div
            className="mt-14 text-center mx-auto"
            style={{
              maxWidth: "42rem",
              border: "2px solid var(--dfc-gold)",
              padding: "2rem",
              background: "rgba(200,151,58,0.08)",
            }}
          >
            <p
              className="font-stencil"
              style={{ color: "var(--dfc-gold)", letterSpacing: "0.22em", fontSize: "0.85rem" }}
            >
              Lifetime Dealer Total
            </p>
            <p
              className="font-stencil"
              style={{
                fontSize: "clamp(3rem, 6vw, 4.5rem)",
                color: "var(--dfc-cream)",
                lineHeight: 1,
                margin: "0.75rem 0",
              }}
            >
              $60,800+
            </p>
            <p style={{ color: "var(--dfc-cream)", opacity: 0.78, fontSize: "0.95rem" }}>
              Worst case, OEM dealer, parts plus labor across the ownership lifecycle. Not what keeps America fed. What keeps Washington paid.
            </p>
          </div>
        </div>
      </section>

      {/* =========== DEF PROCESS =========== */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-eyebrow mb-6 inline-flex">Dirt to Dead Metal</span>
              <h2 className="section-title mt-6 mb-6">
                Where DEF Actually
                <br />
                <span style={{ color: "var(--dfc-oxblood)" }}>Comes From.</span>
              </h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                Diesel Exhaust Fluid is sold as an environmental solution. The supply chain tells a different story.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                <li style={{ padding: "0.75rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>Step 1.</strong> Natural gas extracted from American and overseas fields.
                </li>
                <li style={{ padding: "0.75rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>Step 2.</strong> Reformed into ammonia at industrial plants burning more natural gas.
                </li>
                <li style={{ padding: "0.75rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>Step 3.</strong> Ammonia converted to urea with CO2 injected at pressure.
                </li>
                <li style={{ padding: "0.75rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>Step 4.</strong> Urea mixed with deionized water to 32.5%. That is DEF.
                </li>
                <li style={{ padding: "0.75rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>Step 5.</strong> Bottled in single-use plastic jugs. 125 million gallons a year.
                </li>
                <li style={{ padding: "0.75rem 0" }}>
                  <strong>Step 6.</strong> Trucked to every state, burned in an exhaust stream, vented as nitrogen and water.
                </li>
              </ul>
            </div>

            <div className="bill-card">
              <div className="section-eyebrow mb-4 inline-flex">Read The Label</div>
              <h3
                className="font-stencil"
                style={{
                  fontSize: "1.8rem",
                  color: "var(--dfc-oxblood)",
                  marginTop: "1rem",
                  lineHeight: 1.1,
                }}
              >
                DEF Is Not Harmless.
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  fontSize: "0.98rem",
                  lineHeight: 1.6,
                  marginTop: "1rem",
                }}
              >
                <li style={{ padding: "0.6rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>Eye:</strong> Causes serious irritation on direct contact. Flush 15+ minutes.
                </li>
                <li style={{ padding: "0.6rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>Skin:</strong> Prolonged exposure causes dermatitis and chemical burns.
                </li>
                <li style={{ padding: "0.6rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>Inhalation:</strong> Ammonia release irritates the respiratory tract.
                </li>
                <li style={{ padding: "0.6rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>Ingestion:</strong> Toxic. Induces nausea, vomiting, kidney stress.
                </li>
                <li style={{ padding: "0.6rem 0" }}>
                  <strong>Spill:</strong> Corrodes steel, aluminum, copper, and zinc when dried.
                </li>
              </ul>
              <p
                className="font-stencil"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  color: "var(--dfc-oxblood)",
                  marginTop: "1.25rem",
                  paddingTop: "1rem",
                  borderTop: "2px solid var(--dfc-oxblood)",
                }}
              >
                Source: OSHA, NIOSH, Manufacturer SDS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========== TROY STORY =========== */}
      <section className="section section-navy" id="story">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-eyebrow mb-6 inline-flex">The Human Story</span>
            <h2 className="section-title section-title-cream mt-6">
              Troy Lake.
              <br />
              <span style={{ color: "var(--dfc-gold)" }}>Pardoned by a President.</span>
            </h2>
            <p
              className="mx-auto mt-6"
              style={{
                maxWidth: "48rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: "var(--dfc-cream)",
                opacity: 0.82,
              }}
            >
              Four decades in the trade. A federal case over emissions controls. Two full presidential pardons. Now a national voice for common-sense diesel reform.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="timeline">
              {TIMELINE.map((t) => (
                <div key={t.year} className="timeline-item">
                  <div className="timeline-year" style={{ color: "var(--dfc-gold)" }}>
                    {t.year}
                  </div>
                  <div
                    className="timeline-title"
                    style={{ color: "var(--dfc-cream)" }}
                  >
                    {t.title}
                  </div>
                  <p
                    className="timeline-desc"
                    style={{ color: "var(--dfc-cream)", opacity: 0.78 }}
                  >
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-12"
              style={{
                background: "rgba(245,237,216,0.06)",
                border: "1px solid var(--dfc-gold)",
                padding: "2rem",
              }}
            >
              <p
                className="font-serif-display"
                style={{
                  fontFamily: 'var(--font-serif), "Playfair Display", Georgia, serif',
                  fontStyle: "italic",
                  fontSize: "clamp(1.25rem, 2.2vw, 1.65rem)",
                  lineHeight: 1.45,
                  color: "var(--dfc-cream)",
                }}
              >
                &ldquo;I served seven months for fixing trucks the way my customers asked me to fix them. Two pardons later, I am still in this fight. Not for me. For every owner-operator who gets buried every time Washington writes another rule.&rdquo;
              </p>
              <p
                className="font-stencil mt-5"
                style={{
                  color: "var(--dfc-gold)",
                  letterSpacing: "0.22em",
                  fontSize: "0.8rem",
                }}
              >
                Troy Lake · Elite Diesel Service · Cheyenne, Wyoming
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========== BILL CARD =========== */}
      <section className="section section-cream" id="bill">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bill-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="section-eyebrow">The Bill</span>
                <span
                  className="font-stencil"
                  style={{
                    color: "var(--dfc-navy)",
                    opacity: 0.7,
                    letterSpacing: "0.2em",
                    fontSize: "0.72rem",
                  }}
                >
                  Introduced March 25, 2026
                </span>
              </div>

              <h2 className="bill-card-title">H.R. 8079</h2>
              <p className="bill-card-sub">The Diesel Truck Liberation Act</p>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div>
                  <p
                    className="font-stencil"
                    style={{
                      color: "var(--dfc-oxblood)",
                      letterSpacing: "0.18em",
                      fontSize: "0.75rem",
                    }}
                  >
                    House Sponsor
                  </p>
                  <p
                    className="font-stencil"
                    style={{ color: "var(--dfc-navy)", fontSize: "1.25rem", marginTop: "0.35rem" }}
                  >
                    Rep. Mike Collins
                  </p>
                  <p style={{ fontSize: "0.9rem", opacity: 0.75 }}>R-GA-10</p>
                </div>
                <div>
                  <p
                    className="font-stencil"
                    style={{
                      color: "var(--dfc-oxblood)",
                      letterSpacing: "0.18em",
                      fontSize: "0.75rem",
                    }}
                  >
                    Senate Companion
                  </p>
                  <p
                    className="font-stencil"
                    style={{ color: "var(--dfc-navy)", fontSize: "1.25rem", marginTop: "0.35rem" }}
                  >
                    Sen. Cynthia Lummis
                  </p>
                  <p style={{ fontSize: "0.9rem", opacity: 0.75 }}>R-WY</p>
                </div>
              </div>

              <div
                className="mt-8 pt-8"
                style={{ borderTop: "2px solid var(--dfc-navy)" }}
              >
                <p className="font-stencil mb-3" style={{ fontSize: "0.85rem", letterSpacing: "0.18em" }}>
                  What It Does
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    fontSize: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  <li style={{ padding: "0.5rem 0" }}>
                    <strong>1.</strong> Rolls back EPA 2027 emissions rule on Class 8 trucks
                  </li>
                  <li style={{ padding: "0.5rem 0" }}>
                    <strong>2.</strong> Protects repair shops from Clean Air Act liability on owner-requested work
                  </li>
                  <li style={{ padding: "0.5rem 0" }}>
                    <strong>3.</strong> Ends the DEF mandate on new commercial diesel chassis
                  </li>
                  <li style={{ padding: "0.5rem 0" }}>
                    <strong>4.</strong> Requires an independent cost review before any future diesel rule
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#act" className="btn-oxblood">
                  ★ Contact Your Rep
                </a>
                <a
                  href="https://www.congress.gov/bill/119th-congress/house-bill/8079"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ boxShadow: "4px 4px 0 var(--dfc-navy)" }}
                >
                  Read The Bill
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== TAKE ACTION CTAs =========== */}
      <section className="section section-cream" id="act" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-eyebrow mb-6 inline-flex">★ Take Action</span>
            <h2 className="section-title mt-6">
              Three Ways to
              <br />
              <span style={{ color: "var(--dfc-oxblood)" }}>Push Back.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="cta-card">
              <div className="cta-card-number">01</div>
              <h3 className="cta-card-title">Donate</h3>
              <p className="cta-card-body">
                Fund billboards, fund ads, fund the fight. Every dollar goes to advocacy, legal defense, and getting Troy and other owner-operators in front of Congress. No salaries. No overhead skimming.
              </p>
              <a href="#donate-form" className="btn-oxblood">
                ★ Give Now
              </a>
            </div>

            <div className="cta-card">
              <div className="cta-card-number">02</div>
              <h3 className="cta-card-title">Support H.R. 8079</h3>
              <p className="cta-card-body">
                Contact your House Representative and your Senators. Ask them to co-sponsor H.R. 8079 and the Senate companion. We make the call easy. We write the script. You dial.
              </p>
              <a href="#contact-form" className="btn-oxblood">
                ★ Contact My Rep
              </a>
            </div>

            <div className="cta-card">
              <div className="cta-card-number">03</div>
              <h3 className="cta-card-title">Sign The Petition</h3>
              <p className="cta-card-body">
                Add your name to the growing list of truckers, farmers, ranchers, shop owners, and Americans who are done paying the compliance tax. Public. Delivered to Congress monthly.
              </p>
              <a href="#petition-form" className="btn-oxblood">
                ★ Sign The Petition
              </a>
            </div>
          </div>

          {/* PETITION FORM */}
          <div className="mt-20 max-w-3xl mx-auto" id="petition-form">
            <div className="bill-card">
              <span className="section-eyebrow mb-5 inline-flex">Sign The Petition</span>
              <h3
                className="font-stencil mt-5 mb-2"
                style={{ fontSize: "1.75rem", color: "var(--dfc-navy)" }}
              >
                Add Your Name.
              </h3>
              <p style={{ marginBottom: "1.75rem", opacity: 0.85 }}>
                Delivered monthly to the House Energy and Commerce Committee and every co-sponsor office. Your name, your state, your reason. That is it.
              </p>

              <form className="grid gap-4" action="#petition-form" method="post">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="dfc-label" htmlFor="first">First Name</label>
                    <input id="first" name="first" className="dfc-input" required />
                  </div>
                  <div>
                    <label className="dfc-label" htmlFor="last">Last Name</label>
                    <input id="last" name="last" className="dfc-input" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="dfc-label" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" className="dfc-input" required />
                  </div>
                  <div>
                    <label className="dfc-label" htmlFor="state">State</label>
                    <input id="state" name="state" placeholder="WY" className="dfc-input" required />
                  </div>
                </div>
                <div>
                  <label className="dfc-label" htmlFor="reason">Why You Signed (optional)</label>
                  <textarea id="reason" name="reason" rows={3} className="dfc-input" />
                </div>
                <div className="mt-2">
                  <button type="submit" className="btn-oxblood">
                    ★ Sign The Petition
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========== CLOSING BANNER =========== */}
      <div className="banner-oxblood">
        <div className="container text-center">
          <p
            className="font-stencil"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              letterSpacing: "0.25em",
              margin: 0,
            }}
          >
            ★ The Road Runs on Diesel. So Does America. ★
          </p>
        </div>
      </div>

      {/* =========== FOOTER =========== */}
      <footer className="footer-dfc">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <p
                className="font-stencil mb-4"
                style={{
                  fontSize: "1.15rem",
                  color: "var(--dfc-gold)",
                  letterSpacing: "0.1em",
                }}
              >
                ★ Diesel Freedom Coalition
              </p>
              <p style={{ opacity: 0.78, lineHeight: 1.6, fontSize: "0.95rem" }}>
                Founded by truckers, farmers, and shop owners who are done watching Washington bury American diesel. We fight for the people who haul the country.
              </p>
            </div>

            <div>
              <p
                className="font-stencil mb-4"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--dfc-gold)",
                  letterSpacing: "0.22em",
                }}
              >
                The Cause
              </p>
              <ul style={{ listStyle: "none", padding: 0, opacity: 0.82 }}>
                <li style={{ padding: "0.35rem 0" }}>
                  <a href="#mandate" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
                    The Mandate Breakdown
                  </a>
                </li>
                <li style={{ padding: "0.35rem 0" }}>
                  <a href="#story" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
                    Troy Lake&rsquo;s Story
                  </a>
                </li>
                <li style={{ padding: "0.35rem 0" }}>
                  <a href="#bill" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
                    H.R. 8079
                  </a>
                </li>
                <li style={{ padding: "0.35rem 0" }}>
                  <a href="#act" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
                    Take Action
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p
                className="font-stencil mb-4"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--dfc-gold)",
                  letterSpacing: "0.22em",
                }}
              >
                Contact
              </p>
              <p style={{ opacity: 0.82, lineHeight: 1.6, fontSize: "0.95rem" }}>
                Press and partnership inquiries
                <br />
                <a
                  href="mailto:info@dieselfreedomcoalition.com"
                  style={{ color: "var(--dfc-gold)", textDecoration: "none" }}
                >
                  info@dieselfreedomcoalition.com
                </a>
              </p>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(245,237,216,0.18)",
              paddingTop: "1.5rem",
              opacity: 0.6,
              fontSize: "0.8rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <span>© 2026 Diesel Freedom Coalition. All rights reserved.</span>
            <span>Paid for by the Diesel Freedom Coalition. Not authorized by any candidate or candidate&rsquo;s committee.</span>
          </div>
        </div>

        <div className="footer-star-band" style={{ marginTop: "2.5rem" }}>
          <span>★</span>
          <span>We Provide America</span>
          <span>★</span>
          <span className="hidden sm:inline">Support H.R. 8079</span>
          <span className="hidden sm:inline">★</span>
        </div>
      </footer>
    </>
  );
}
