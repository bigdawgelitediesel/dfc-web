import RepFinder from "./components/RepFinder";

const WHITE_PAPER_URL =
  "https://docs.google.com/document/u/0/d/19uFDcfguCnQX5ERSFsZp0_eCygRuYk06YojRwG72TG4/mobilebasic";

const SUPPLY_STATS = [
  {
    value: "72.7%",
    label: "Of American Freight",
    desc: "Share of U.S. freight tonnage moved by trucks. Every link in the supply chain ends with a diesel engine.",
    source: "American Trucking Associations, 2024",
  },
  {
    value: "14M+",
    label: "Class 8 & Medium Trucks",
    desc: "Heavy and medium-duty diesel trucks registered in America. The circulatory system of the U.S. economy.",
    source: "FHWA Vehicle Registration Data, 2024",
  },
  {
    value: "30M+",
    label: "Diesel Powered Assets",
    desc: "Tractors, combines, generators, locomotives, school buses, and trucks. America runs on diesel, full stop.",
    source: "Diesel Technology Forum, 2024",
  },
];

const MANDATE_PARTS = [
  { part: "DPF", name: "Diesel Particulate Filter", cost: "$11,000+" },
  { part: "DOC", name: "Diesel Oxidation Catalyst", cost: "$4,500+" },
  { part: "SCR", name: "Selective Catalytic Reduction", cost: "$9,000+" },
  { part: "DEF", name: "Diesel Exhaust Fluid System", cost: "$7,500+" },
  { part: "NOx", name: "Nitrogen Oxide Sensors (pair)", cost: "$2,500+" },
  { part: "EGR", name: "Exhaust Gas Recirculation", cost: "$6,500+" },
  { part: "HC", name: "7th Injector / Hydrocarbon Doser", cost: "$1,800+" },
  { part: "LBR", name: "Dealer Shop Labor (full cycle)", cost: "$19,000+" },
];

const PLASTIC_STATS = [
  { value: "125M", label: "DEF Jugs Per Year", source: "Integer Research 2024" },
  { value: "47K", label: "Tons of Plastic", source: "EPA Plastic Waste Data" },
  { value: "85K", label: "Tons of CO2 from Production", source: "EIA Urea Life-Cycle" },
  { value: "90%", label: "Landfilled, Not Recycled", source: "NAPCOR Recovery Report" },
];

const TIMELINE = [
  {
    year: "1983",
    title: "Troy Starts in the Trade",
    desc: "Years inside Caterpillar. Time with their engineering teams. A foundation built on big iron and harder customers.",
  },
  {
    year: "1996",
    title: "Elite Diesel Service Founded",
    desc: "Opens the shop out of a pickup in Dubois, Wyoming. Mobile repair for ranchers, loggers, and owner-operators.",
  },
  {
    year: "2022",
    title: "Cheyenne Shop Opens",
    desc: "Elite Diesel plants its flag in Cheyenne after stops in Elko and Windsor. Full-service heavy diesel for the mountain west.",
  },
  {
    year: "2024",
    title: "Federal Prosecution",
    desc: "Charged under the Clean Air Act for conspiracy to disable emissions controls. Work done for customers who asked for it.",
  },
  {
    year: "Nov 2025",
    title: "Full Presidential Pardon",
    desc: "November 7, 2025. President Trump grants Troy a full and unconditional pardon. Civil rights restored.",
  },
  {
    year: "Feb 2026",
    title: "The Shop Is Pardoned",
    desc: "February 12, 2026. Elite Diesel Service itself is pardoned. Rare second action for the company. Troy becomes a national voice for diesel reform.",
  },
];

const EPA_ACTIONS = [
  {
    num: "1",
    timing: "30 Days",
    title: "National Enforcement Discretion Guidance",
    desc: "Direct EPA field offices to exercise discretion on emissions tampering enforcement for existing diesel engines during the transition. Stop the raids. Stop the prosecutions.",
  },
  {
    num: "2",
    timing: "90 Days",
    title: "Interim Performance-Based Standards",
    desc: "Set clear health-based limits at or below pre-2012 levels. Approximately 2.4 g/bhp-hr NMHC plus NOx and 0.10 g/bhp-hr PM, measured via PEMS in real-world operation. Let the market decide how to hit the targets. Stop using California ARB as a national benchmark.",
  },
  {
    num: "3",
    timing: "6 Months",
    title: "Joint Industry-Government Working Group",
    desc: "Mechanics, fleet operators, owner-operators, and manufacturers at the table with EPA. Finalize long-term targets with the people who actually turn wrenches.",
  },
  {
    num: "4",
    timing: "Codify",
    title: "Approve Delete Kits and Tunes",
    desc: "Legalize modifications that meet performance-based pollution standards. End the black-market economy created by mandated failure-prone hardware.",
  },
  {
    num: "5",
    timing: "SBA List",
    title: "Aftertreatment Relief for Small Businesses",
    desc: "Fast-track the reform already identified on the SBA list. The coalition projects $195 to $200 billion a year in direct small-business savings.",
  },
  {
    num: "6",
    timing: "Permanent",
    title: "Mandate Well-to-Wheel Reporting",
    desc: "Require EPA to publish comprehensive environmental data across the full lifecycle. Measure what is really burned, shipped, and buried. Not just the tailpipe.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* =========== TOP STAR BAND =========== */}
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
            <a href="#supply" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
              Supply Chain
            </a>
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
          <div className="max-w-6xl mx-auto text-center">
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
                maxWidth: "48rem",
                fontSize: "1.15rem",
                lineHeight: 1.6,
                color: "var(--dfc-cream)",
                opacity: 0.88,
              }}
            >
              Washington loaded our trucks with $30,000 of federally mandated hardware, 650 pounds of dead weight, and a lifetime of repair bills. The owner-operators, farmers, and fleets paying for it built this country. It is time to push back.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#petition-form" className="btn-gold">
                ★ Sign The Petition
              </a>
              <a href="#rep-finder" className="btn-oxblood">
                ★ Contact Your Rep
              </a>
              <a href="#donate-form" className="btn-outline-cream">
                Donate
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
              letterSpacing: "0.22em",
              margin: 0,
            }}
          >
            ★ 72.7% of American Freight. One Fuel. One Mandate. One Bill. ★
          </p>
        </div>
      </div>

      {/* =========== SUPPLY CHAINS =========== */}
      <section className="section section-cream" id="supply">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-eyebrow mb-6 inline-flex">Every Link In The Chain</span>
            <h2 className="section-title mt-6">
              Every Step Runs
              <br />
              <span style={{ color: "var(--dfc-oxblood)" }}>On Diesel.</span>
            </h2>
            <p
              className="mx-auto mt-6"
              style={{
                maxWidth: "52rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: "var(--dfc-navy)",
                opacity: 0.82,
              }}
            >
              Field to fridge. Well to pump. The food on your table and the fuel in your tank both get there the same way. An American diesel engine moves them, every single link of the chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-14">
            {[
              {
                title: "Field To Fridge",
                subtitle: "Every step runs on diesel.",
                steps: [
                  { n: 1, label: "Hay Cutting", pct: "5%" },
                  { n: 2, label: "Baling", pct: "11%" },
                  { n: 3, label: "Hauling", pct: "18%" },
                  { n: 4, label: "Dairy Farm", pct: "26%" },
                  { n: 5, label: "Milk Transport", pct: "34%" },
                  { n: 6, label: "Pasteurization", pct: "42%" },
                  { n: 7, label: "Bottling", pct: "49%" },
                  { n: 8, label: "Distribution", pct: "56%" },
                  { n: 9, label: "At The Store", pct: "63%" },
                ],
                footer: "By the time a gallon of milk hits the shelf, 63% of its cost has been diesel.",
              },
              {
                title: "Well To Pump",
                subtitle: "Every step runs on diesel.",
                steps: [
                  { n: 1, label: "Exploration", pct: "7%" },
                  { n: 2, label: "Drilling", pct: "16%" },
                  { n: 3, label: "Hauling Crude", pct: "27%" },
                  { n: 4, label: "Refining", pct: "38%" },
                  { n: 5, label: "Distribution", pct: "49%" },
                  { n: 6, label: "At The Pump", pct: "58%" },
                ],
                footer: "Diesel even powers the fuel that ends up in your tank. 58% at the pump.",
              },
            ].map((block) => (
              <div
                key={block.title}
                style={{
                  border: "3px solid var(--dfc-navy)",
                  background: "var(--dfc-cream)",
                  padding: "1.75rem 1.5rem",
                  boxShadow: "6px 6px 0 var(--dfc-oxblood)",
                }}
              >
                <p
                  className="font-stencil"
                  style={{
                    color: "var(--dfc-oxblood)",
                    letterSpacing: "0.22em",
                    fontSize: "0.78rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {block.subtitle}
                </p>
                <h3
                  className="font-stencil"
                  style={{
                    color: "var(--dfc-navy)",
                    fontSize: "clamp(1.6rem, 3vw, 2rem)",
                    lineHeight: 1.1,
                    marginBottom: "1.25rem",
                  }}
                >
                  {block.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {block.steps.map((s, i) => (
                    <li
                      key={s.n}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "1rem",
                        padding: "0.55rem 0",
                        borderBottom:
                          i === block.steps.length - 1
                            ? "none"
                            : "1px solid var(--dfc-border)",
                      }}
                    >
                      <span
                        className="font-stencil"
                        style={{
                          color: "var(--dfc-oxblood)",
                          fontSize: "0.85rem",
                          letterSpacing: "0.1em",
                          minWidth: "1.75rem",
                        }}
                      >
                        {s.n}.
                      </span>
                      <span style={{ flex: 1, fontSize: "1rem", color: "var(--dfc-navy)" }}>
                        {s.label}
                      </span>
                      <span
                        className="font-stencil"
                        style={{
                          color: "var(--dfc-navy)",
                          fontSize: "1rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {s.pct}
                      </span>
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    marginTop: "1.25rem",
                    fontSize: "0.92rem",
                    lineHeight: 1.5,
                    color: "var(--dfc-navy)",
                    opacity: 0.82,
                    borderTop: "2px solid var(--dfc-navy)",
                    paddingTop: "1rem",
                  }}
                >
                  {block.footer}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {SUPPLY_STATS.map((s) => (
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

      {/* =========== COMPLIANCE TAX =========== */}
      <section className="section section-navy section-compliance-ghost">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div>
              <span className="section-eyebrow mb-6 inline-flex">The Compliance Tax</span>
              <h2 className="section-title section-title-cream mt-6 mb-5">
                Washington Put A Meter
                <br />
                <span style={{ color: "var(--dfc-gold)" }}>On Every Truck.</span>
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.65,
                  color: "var(--dfc-cream)",
                  opacity: 0.88,
                  marginBottom: "1.5rem",
                }}
              >
                Every Class 8 on the road pays a federal compliance tax. Not a tax on fuel. Not a tax on income. A tax on the hardware bolted to the truck and the fuel that hardware forces it to burn. Owner-operators eat it. Fleets price it in. Families pay for it in the checkout line.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "var(--dfc-cream)",
                  opacity: 0.78,
                  marginBottom: "2rem",
                }}
              >
                The weight is DEF fluid, aftertreatment boxes, dosers, and sensors. The burn is active regens, fuel penalties, and downtime at the dealer. It never stops adding up.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                <div
                  style={{
                    border: "2px solid var(--dfc-gold)",
                    padding: "1.5rem",
                    background: "rgba(200,151,58,0.05)",
                  }}
                >
                  <p
                    className="font-stencil"
                    style={{
                      color: "var(--dfc-gold)",
                      letterSpacing: "0.22em",
                      fontSize: "0.75rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    The Weight
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "0.95rem",
                      lineHeight: 1.55,
                      color: "var(--dfc-cream)",
                    }}
                  >
                    <li style={{ padding: "0.35rem 0" }}>~650 LB of aftertreatment and DEF on every new Class 8.</li>
                    <li style={{ padding: "0.35rem 0" }}>720+ LB on legacy pre-2017 trucks.</li>
                    <li style={{ padding: "0.35rem 0" }}>Equal to a full pallet of freight you cannot haul, every trip, every day.</li>
                  </ul>
                </div>
                <div
                  style={{
                    border: "2px solid var(--dfc-gold)",
                    padding: "1.5rem",
                    background: "rgba(200,151,58,0.05)",
                  }}
                >
                  <p
                    className="font-stencil"
                    style={{
                      color: "var(--dfc-gold)",
                      letterSpacing: "0.22em",
                      fontSize: "0.75rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    The Burn
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "0.95rem",
                      lineHeight: 1.55,
                      color: "var(--dfc-cream)",
                    }}
                  >
                    <li style={{ padding: "0.35rem 0" }}>Up to 3 MPG lost to aftertreatment drag.</li>
                    <li style={{ padding: "0.35rem 0" }}>2 to 3 percent of every gallon burned as DEF.</li>
                    <li style={{ padding: "0.35rem 0" }}>0.5 to 1.5 gallons of diesel torched per regen, every 300 to 500 miles.</li>
                  </ul>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div
                  style={{
                    border: "2px solid var(--dfc-gold)",
                    padding: "1.5rem",
                    background: "rgba(200,151,58,0.08)",
                  }}
                >
                  <p
                    className="font-stencil"
                    style={{
                      color: "var(--dfc-gold)",
                      letterSpacing: "0.2em",
                      fontSize: "0.72rem",
                    }}
                  >
                    Per Year, Per Truck
                  </p>
                  <p
                    className="font-stencil"
                    style={{
                      color: "var(--dfc-cream)",
                      fontSize: "clamp(2rem, 4vw, 2.75rem)",
                      lineHeight: 1,
                      margin: "0.5rem 0",
                    }}
                  >
                    $25,000
                  </p>
                  <p
                    className="font-stencil"
                    style={{
                      color: "var(--dfc-gold)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.16em",
                      opacity: 0.85,
                    }}
                  >
                    Source: ATRI 2024, Dealer Data
                  </p>
                </div>
                <div
                  style={{
                    border: "2px solid var(--dfc-gold)",
                    padding: "1.5rem",
                    background: "rgba(200,151,58,0.08)",
                  }}
                >
                  <p
                    className="font-stencil"
                    style={{
                      color: "var(--dfc-gold)",
                      letterSpacing: "0.2em",
                      fontSize: "0.72rem",
                    }}
                  >
                    Over Five Years
                  </p>
                  <p
                    className="font-stencil"
                    style={{
                      color: "var(--dfc-cream)",
                      fontSize: "clamp(2rem, 4vw, 2.75rem)",
                      lineHeight: 1,
                      margin: "0.5rem 0",
                    }}
                  >
                    $125,000
                  </p>
                  <p
                    className="font-stencil"
                    style={{
                      color: "var(--dfc-gold)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.16em",
                      opacity: 0.85,
                    }}
                  >
                    Source: DFC White Paper, April 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== NONE OF THIS IS NEEDED. TRUCK =========== */}
      <section className="section section-cream" id="mandate">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div>
              <span className="section-eyebrow mb-6 inline-flex">None Of This Is Needed</span>
              <h2 className="section-title mt-6 mb-5">
                Eight Components.
                <br />
                <span style={{ color: "var(--dfc-oxblood)" }}>$60,800 Lifetime.</span>
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                  color: "var(--dfc-navy)",
                  opacity: 0.88,
                }}
              >
                This is the aftertreatment stack bolted onto every new Class 8 diesel. None of it makes the truck haul more freight. All of it fails. Every component is paid for by the operator, not the agency that mandated it.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {MANDATE_PARTS.map((m, i) => (
                  <li
                    key={m.part}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "1rem",
                      padding: "0.7rem 0",
                      borderBottom:
                        i === MANDATE_PARTS.length - 1
                          ? "none"
                          : "1px solid var(--dfc-border)",
                    }}
                  >
                    <span>
                      <span
                        className="font-stencil"
                        style={{
                          color: "var(--dfc-oxblood)",
                          letterSpacing: "0.08em",
                          fontSize: "1rem",
                          marginRight: "0.6rem",
                        }}
                      >
                        {m.part}
                      </span>
                      <span style={{ fontSize: "0.98rem", opacity: 0.85 }}>{m.name}</span>
                    </span>
                    <span
                      className="font-stencil"
                      style={{
                        color: "var(--dfc-navy)",
                        fontSize: "1.05rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {m.cost}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-8"
                style={{
                  border: "2px solid var(--dfc-oxblood)",
                  padding: "1.5rem",
                  background: "rgba(139,26,26,0.06)",
                }}
              >
                <p
                  className="font-stencil"
                  style={{
                    color: "var(--dfc-oxblood)",
                    letterSpacing: "0.22em",
                    fontSize: "0.75rem",
                  }}
                >
                  Lifetime Dealer Total
                </p>
                <p
                  className="font-stencil"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    color: "var(--dfc-navy)",
                    lineHeight: 1,
                    margin: "0.5rem 0",
                  }}
                >
                  $60,800+
                </p>
                <p
                  className="font-stencil"
                  style={{
                    color: "var(--dfc-oxblood)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.16em",
                    opacity: 0.85,
                  }}
                >
                  Source: OEM Dealer Pricing, Parts + Labor, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== LIMP HOME =========== */}
      <section className="section section-navy section-limp-ghost">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div>
              <span className="section-eyebrow mb-6 inline-flex">Limp Home Mode</span>
              <h2 className="section-title section-title-cream mt-6 mb-5">
                One Bad Sensor.
                <br />
                <span style={{ color: "var(--dfc-gold)" }}>Dead On The Interstate.</span>
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.65,
                  color: "var(--dfc-cream)",
                  opacity: 0.88,
                  marginBottom: "1.25rem",
                }}
              >
                A single $1,100 NOx sensor. That is all it takes. The ECM throws a code, the truck derates to 5 MPH inside 150 miles, and a loaded Class 8 becomes a road closure. Not a theoretical problem. A nightly one.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "var(--dfc-cream)",
                  opacity: 0.78,
                  marginBottom: "1.5rem",
                }}
              >
                This is what the mandate actually produces. A truck that shuts itself down to protect a part the government said had to be there in the first place.
              </p>

              <div
                style={{
                  border: "2px solid var(--dfc-gold)",
                  padding: "1.5rem",
                  background: "rgba(200,151,58,0.05)",
                  marginBottom: "2rem",
                }}
              >
                <p
                  className="font-stencil"
                  style={{
                    color: "var(--dfc-gold)",
                    letterSpacing: "0.22em",
                    fontSize: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  The Rule. 40 CFR 1036.111.
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: "var(--dfc-cream)",
                    opacity: 0.9,
                    marginBottom: "0.75rem",
                  }}
                >
                  Federal law forces a progressive engine de-rate on any DEF fault. It is not a manufacturer decision. It is a rule the EPA wrote and bolted to every Class 8 ECU.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    fontSize: "0.95rem",
                    lineHeight: 1.55,
                    color: "var(--dfc-cream)",
                    opacity: 0.88,
                  }}
                >
                  <li style={{ padding: "0.35rem 0" }}>Warning lamp at the first fault.</li>
                  <li style={{ padding: "0.35rem 0" }}>25 percent torque cut next.</li>
                  <li style={{ padding: "0.35rem 0" }}>5 MPH limp mode in as little as 150 miles.</li>
                </ul>
                <p
                  className="font-serif-display"
                  style={{
                    fontStyle: "italic",
                    color: "var(--dfc-gold)",
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    marginTop: "1rem",
                    opacity: 0.95,
                  }}
                >
                  Federal law treats the truck as guilty until proven innocent. So it pulls you over for them.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { val: "$2,500", lbl: "Highway Tow" },
                  { val: "$91/hr", lbl: "Downtime Cost" },
                  { val: "$6,000", lbl: "Per Incident" },
                ].map((b) => (
                  <div
                    key={b.lbl}
                    style={{
                      border: "2px solid var(--dfc-gold)",
                      padding: "1.25rem 1rem",
                      background: "rgba(200,151,58,0.08)",
                      textAlign: "center",
                    }}
                  >
                    <p
                      className="font-stencil"
                      style={{
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        color: "var(--dfc-cream)",
                        lineHeight: 1,
                      }}
                    >
                      {b.val}
                    </p>
                    <p
                      className="font-stencil mt-2"
                      style={{
                        color: "var(--dfc-gold)",
                        letterSpacing: "0.18em",
                        fontSize: "0.68rem",
                      }}
                    >
                      {b.lbl}
                    </p>
                  </div>
                ))}
              </div>
              <p
                className="font-stencil mt-4"
                style={{
                  color: "var(--dfc-gold)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.16em",
                  opacity: 0.78,
                }}
              >
                Source: ATRI Operational Cost Study, Owner-Operator Surveys 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========== PLASTIC FOR A CLEANER PLANET =========== */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div>
              <span className="section-eyebrow mb-6 inline-flex">Plastic For A Cleaner Planet</span>
              <h2 className="section-title mt-6 mb-5">
                125 Million Jugs.
                <br />
                <span style={{ color: "var(--dfc-oxblood)" }}>For The Planet.</span>
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.65,
                  marginBottom: "1.25rem",
                  color: "var(--dfc-navy)",
                  opacity: 0.88,
                }}
              >
                DEF is sold as an environmental solution. The checkout counter tells a different story. 125 million plastic jugs of urea water a year, manufactured from natural gas, trucked cross-country, poured into exhaust streams, and thrown away. Ninety percent never get recycled. Americans throw out enough empty DEF containers every year to pave 1,100 football fields.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "var(--dfc-navy)",
                  opacity: 0.78,
                  marginBottom: "2rem",
                }}
              >
                End the mandate and every jug on that pallet disappears with it. No new technology. No subsidy. Just the repeal of the rule that put it on the shelf.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {PLASTIC_STATS.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      border: "2px solid var(--dfc-navy)",
                      padding: "1.25rem 1rem",
                      background: "var(--dfc-cream-2)",
                      boxShadow: "3px 3px 0 var(--dfc-oxblood)",
                    }}
                  >
                    <p
                      className="font-stencil"
                      style={{
                        fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                        color: "var(--dfc-oxblood)",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="font-stencil mt-2"
                      style={{
                        color: "var(--dfc-navy)",
                        letterSpacing: "0.14em",
                        fontSize: "0.72rem",
                      }}
                    >
                      {s.label}
                    </p>
                    <p
                      className="font-stencil mt-2"
                      style={{
                        color: "var(--dfc-oxblood)",
                        fontSize: "0.58rem",
                        letterSpacing: "0.14em",
                        opacity: 0.8,
                      }}
                    >
                      {s.source}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== DIRT TO DEAD METAL =========== */}
      <section className="section section-navy section-mines-ghost">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div>
              <span className="section-eyebrow mb-6 inline-flex">Dirt To Dead Metal</span>
              <h2 className="section-title section-title-cream mt-6 mb-5">
                Foreign Mines.
                <br />
                <span style={{ color: "var(--dfc-gold)" }}>American Bills.</span>
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.65,
                  color: "var(--dfc-cream)",
                  opacity: 0.88,
                  marginBottom: "1.25rem",
                }}
              >
                Every aftertreatment system the EPA mandates starts thousands of miles from an American shop. Platinum, palladium, vanadium, cerium, copper-zeolite. The rare earth materials that make catalysts and sensors possible come out of foreign mines. China controls 60 to 70 percent of the global supply.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "var(--dfc-cream)",
                  opacity: 0.78,
                  marginBottom: "1.5rem",
                }}
              >
                Mandated compliance means mandated foreign dependence. The part that enters the truck is already owned by a supply chain the United States does not control. Every DPF, every DOC, every SCR brick on every new Class 8 ships American money overseas.
              </p>

              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
              >
                {[
                  { metal: "Platinum", country: "South Africa", share: "71%" },
                  { metal: "Palladium", country: "Russia", share: "38%" },
                  { metal: "Rhodium", country: "South Africa", share: "~80%" },
                  { metal: "Rare Earths", country: "China", share: "~90%" },
                ].map((m) => (
                  <div
                    key={m.metal}
                    style={{
                      border: "2px solid var(--dfc-gold)",
                      background: "rgba(200,151,58,0.08)",
                      padding: "1rem 0.85rem",
                      textAlign: "center",
                    }}
                  >
                    <p
                      className="font-stencil"
                      style={{
                        color: "var(--dfc-gold)",
                        fontSize: "0.68rem",
                        letterSpacing: "0.18em",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {m.metal}
                    </p>
                    <p
                      className="font-stencil"
                      style={{
                        color: "var(--dfc-cream)",
                        fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
                        lineHeight: 1,
                      }}
                    >
                      {m.share}
                    </p>
                    <p
                      className="font-stencil mt-2"
                      style={{
                        color: "var(--dfc-gold)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.14em",
                        opacity: 0.88,
                      }}
                    >
                      {m.country}
                    </p>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.55,
                  color: "var(--dfc-cream)",
                  opacity: 0.82,
                  marginBottom: "1.5rem",
                }}
              >
                Refinery and factory: precious-metal washcoat sprayed onto ceramic, sintered, boxed, shipped. Then bolted onto the truck as DPF, DOC, SCR, and a DEF injector. Sticker hit per new truck, $30,000+. Average life: 200,000 to 400,000 miles before something fails. Then it starts over.
              </p>

              <div
                style={{
                  border: "2px solid var(--dfc-gold)",
                  padding: "1.5rem",
                  background: "rgba(200,151,58,0.08)",
                }}
              >
                <p
                  className="font-stencil"
                  style={{
                    color: "var(--dfc-gold)",
                    letterSpacing: "0.22em",
                    fontSize: "0.72rem",
                  }}
                >
                  Replacement Cost Across The Stack
                </p>
                <p
                  className="font-stencil"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    color: "var(--dfc-cream)",
                    lineHeight: 1,
                    margin: "0.5rem 0",
                  }}
                >
                  $42,800+
                </p>
                <p
                  className="font-stencil"
                  style={{
                    color: "var(--dfc-gold)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.16em",
                    opacity: 0.85,
                  }}
                >
                  $11,000+ per DPF alone. Source: OEM Dealer Pricing, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== ELIMINATE THE MANDATE =========== */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div>
              <span className="section-eyebrow mb-6 inline-flex">Eliminate The Mandate</span>
              <h2 className="section-title mt-6 mb-5">
                None Of It Needed.
                <br />
                <span style={{ color: "var(--dfc-oxblood)" }}>Delete The Rule.</span>
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.65,
                  marginBottom: "1.25rem",
                  color: "var(--dfc-navy)",
                  opacity: 0.88,
                }}
              >
                Natural gas to ammonia to urea to plastic jug to heated tank to exhaust stream. Every step of the DEF supply chain exists only because the federal government picked a technology and wrote it into law. Remove that rule and the entire chain goes dark the next morning.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "var(--dfc-navy)",
                  opacity: 0.78,
                  marginBottom: "1.75rem",
                }}
              >
                No new refineries to shut down. No factories to close. No infrastructure to retire. Just a ruling gone, and with it the pallets of urea, the heated lines, the dosers, the crystals, the tow bills, the downtime, and the 125 million gallons a year.
              </p>

              <div
                style={{
                  border: "3px solid var(--dfc-oxblood)",
                  padding: "1.75rem",
                  background: "rgba(139,26,26,0.06)",
                }}
              >
                <p
                  className="font-serif-display"
                  style={{
                    fontStyle: "italic",
                    fontSize: "clamp(1.25rem, 2.3vw, 1.6rem)",
                    lineHeight: 1.4,
                    color: "var(--dfc-navy)",
                  }}
                >
                  &ldquo;Regulate the what, not the how.&rdquo;
                </p>
                <p
                  className="font-stencil mt-4"
                  style={{
                    color: "var(--dfc-oxblood)",
                    letterSpacing: "0.22em",
                    fontSize: "0.75rem",
                  }}
                >
                  Diesel Freedom Coalition White Paper, April 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== THE FALSE CHOICE / WELL-TO-WHEEL =========== */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-eyebrow mb-6 inline-flex">The Real Math</span>
              <h2 className="section-title mt-6">
                It Is A False Choice.
                <br />
                <span style={{ color: "var(--dfc-oxblood)" }}>We Get Both.</span>
              </h2>
              <p
                className="mx-auto mt-6"
                style={{
                  maxWidth: "52rem",
                  fontSize: "1.1rem",
                  lineHeight: 1.65,
                  color: "var(--dfc-navy)",
                  opacity: 0.85,
                }}
              >
                Critics say cleaner air or operable trucks. Pick one. That is a false dichotomy. Clean air and reliable, durable, productive American diesel are fully compatible goals when the regulator measures the right thing.
              </p>
            </div>

            <div
              style={{
                background: "var(--dfc-navy)",
                color: "var(--dfc-cream)",
                padding: "2.5rem",
                border: "3px solid var(--dfc-navy)",
                boxShadow: "8px 8px 0 var(--dfc-oxblood)",
              }}
            >
              <p
                className="font-stencil"
                style={{
                  color: "var(--dfc-gold)",
                  letterSpacing: "0.22em",
                  fontSize: "0.78rem",
                  marginBottom: "0.75rem",
                }}
              >
                Tailpipe Symbolism vs. Well-To-Wheel Reality
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.65,
                  opacity: 0.92,
                  marginBottom: "1.5rem",
                }}
              >
                EPA measures pollution at the tailpipe. That ignores the upstream cost of mining rare earths, refining DEF feedstock, manufacturing aftertreatment hardware, hauling replacement parts, and burning extra diesel to push 650 pounds of dead weight every mile of every trip. Measured well-to-wheel across the full lifecycle, post-2007 mandate-compliant engines actually emit more total pollutants than the pre-2007 designs they replaced.
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.65,
                  opacity: 0.92,
                }}
              >
                Reform delivers a real environmental win. Less fuel burned, fewer engine replacements, fewer DEF jugs in landfills, less foreign mining, less idling, less limp-mode stranding. Smarter engineering beats symbolic rules every time.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                {
                  val: "17%",
                  label: "Fewer Lifetime Pollutants",
                  desc: "Net well-to-wheel reduction vs current mandate-compliant baseline.",
                },
                {
                  val: "20-25%",
                  label: "Better Fuel Economy",
                  desc: "Real-world MPG gain when the aftertreatment burden is removed.",
                },
                {
                  val: "50%",
                  label: "Longer Engine Life",
                  desc: "Pre-2007: 600,000 to 1,000,000+ miles. Post-2007: ~350,000 miles.",
                },
                {
                  val: "10-20%",
                  label: "More Horsepower",
                  desc: "Power gain from removing EGR pumping losses and exhaust backpressure.",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    border: "2px solid var(--dfc-navy)",
                    background: "var(--dfc-cream)",
                    padding: "1.25rem 1rem",
                    boxShadow: "4px 4px 0 var(--dfc-oxblood)",
                  }}
                >
                  <p
                    className="font-stencil"
                    style={{
                      fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                      color: "var(--dfc-oxblood)",
                      lineHeight: 1,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {s.val}
                  </p>
                  <p
                    className="font-stencil"
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.14em",
                      color: "var(--dfc-navy)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {s.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      lineHeight: 1.45,
                      color: "var(--dfc-navy)",
                      opacity: 0.78,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="font-stencil text-center mt-6"
              style={{
                color: "var(--dfc-oxblood)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
              }}
            >
              Source: Diesel Freedom Coalition White Paper, April 2026
            </p>
          </div>
        </div>
      </section>

      {/* =========== WHAT WE WON / WHAT IS LEFT =========== */}
      <section className="section section-navy section-farm-ghost">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-eyebrow mb-6 inline-flex">Gratitude And Unfinished Work</span>
            <h2 className="section-title section-title-cream mt-6">
              Thank You,
              <br />
              <span style={{ color: "var(--dfc-gold)" }}>President Trump.</span>
            </h2>
            <p
              className="mx-auto mt-6"
              style={{
                maxWidth: "56rem",
                fontSize: "1.1rem",
                lineHeight: 1.65,
                color: "var(--dfc-cream)",
                opacity: 0.88,
              }}
            >
              The Trump Administration and EPA have taken historic steps. The February 2026 rescission of the 2009 Greenhouse Gas Endangerment Finding. The March 2026 repeal of the DEF sensor mandate. President Trump and Administrator Zeldin deserve the diesel community&rsquo;s deepest gratitude. They ended weaponized prosecutions of mechanics, delivered $13.79 billion a year in DEF sensor relief, and restored common sense to emissions regulation. We thank you. And we are not finished.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bill-card" style={{ borderColor: "var(--dfc-gold)" }}>
              <div
                className="font-stencil mb-4 inline-flex"
                style={{
                  color: "var(--dfc-gold)",
                  letterSpacing: "0.22em",
                  fontSize: "0.78rem",
                  borderBottom: "2px solid var(--dfc-gold)",
                  paddingBottom: "0.5rem",
                }}
              >
                ✓ Already Won
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  fontSize: "1rem",
                  lineHeight: 1.55,
                  marginTop: "1rem",
                }}
              >
                <li style={{ padding: "0.7rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>Feb 2026.</strong> The 2009 Greenhouse Gas Endangerment Finding rescinded.
                </li>
                <li style={{ padding: "0.7rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>Mar 2026.</strong> DEF sensor mandate repealed.
                </li>
                <li style={{ padding: "0.7rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>$13.79 billion a year.</strong> Combined savings from both actions.
                </li>
                <li style={{ padding: "0.7rem 0" }}>
                  <strong>Mechanics.</strong> No more Clean Air Act prosecutions for owner-authorized work.
                </li>
              </ul>
            </div>

            <div className="bill-card">
              <div className="section-eyebrow mb-4 inline-flex">Still Unfinished</div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  fontSize: "1rem",
                  lineHeight: 1.55,
                  marginTop: "1rem",
                }}
              >
                <li style={{ padding: "0.7rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>EGR.</strong> Still federally mandated on every Class 8 diesel.
                </li>
                <li style={{ padding: "0.7rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>DPF.</strong> Still mandated. Still plugs with soot. Still fails.
                </li>
                <li style={{ padding: "0.7rem 0", borderBottom: "1px solid var(--dfc-border)" }}>
                  <strong>SCR and DEF.</strong> Still mandated. 125 million gallons a year.
                </li>
                <li style={{ padding: "0.7rem 0" }}>
                  <strong>Hardware mandates.</strong> Still override performance. Still pick the technology instead of the outcome.
                </li>
              </ul>
            </div>
          </div>

          {/* EXECUTIVE ORDERS STRIP */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <span
                className="font-stencil"
                style={{
                  color: "var(--dfc-gold)",
                  letterSpacing: "0.22em",
                  fontSize: "0.78rem",
                  borderTop: "2px solid var(--dfc-gold)",
                  borderBottom: "2px solid var(--dfc-gold)",
                  padding: "0.6rem 1.5rem",
                  display: "inline-block",
                }}
              >
                ★ Built On Executive Action ★
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {[
                {
                  tag: "EO 14147",
                  date: "Jan 20, 2025",
                  title: "End Weaponization",
                  desc: "Directs the federal government to correct past weaponization of law enforcement against political opponents.",
                },
                {
                  tag: "EO 14219",
                  date: "Feb 19, 2025",
                  title: "Repeal Burdensome Rules",
                  desc: "Implements the mandate to repeal unlawful or burdensome regulations that exceed authority or harm small businesses.",
                },
                {
                  tag: "DOJ Memo",
                  date: "2025",
                  title: "Blanche Halt",
                  desc: "Todd Blanche (ODAG) Memo halted Department of Justice prosecutions of diesel defeat-device cases nationwide.",
                },
                {
                  tag: "EPA Action",
                  date: "Feb 2026",
                  title: "Zeldin Rescinds",
                  desc: "Administrator Zeldin removed the 2009 Endangerment Finding on which every prosecution rested. The legal foundation is gone.",
                },
              ].map((eo) => (
                <div
                  key={eo.tag}
                  style={{
                    border: "2px solid var(--dfc-gold)",
                    background: "rgba(200,151,58,0.08)",
                    padding: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <p
                    className="font-stencil"
                    style={{
                      color: "var(--dfc-gold)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.18em",
                    }}
                  >
                    {eo.tag} · {eo.date}
                  </p>
                  <p
                    className="font-stencil"
                    style={{
                      color: "var(--dfc-cream)",
                      fontSize: "1.1rem",
                      lineHeight: 1.15,
                    }}
                  >
                    {eo.title}
                  </p>
                  <p
                    style={{
                      color: "var(--dfc-cream)",
                      opacity: 0.78,
                      fontSize: "0.88rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {eo.desc}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="text-center font-stencil mt-8 mx-auto"
              style={{
                color: "var(--dfc-cream)",
                opacity: 0.7,
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                maxWidth: "44rem",
              }}
            >
              The runway is clear. Performance-based reform is now legally and politically open.
            </p>
          </div>
        </div>
      </section>

      {/* =========== TROY STORY =========== */}
      <section className="section section-cream" id="story">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-eyebrow mb-6 inline-flex">The Human Story</span>
            <h2 className="section-title mt-6">
              Troy Lake.
              <br />
              <span style={{ color: "var(--dfc-oxblood)" }}>Pardoned By A President.</span>
            </h2>
            <p
              className="mx-auto mt-6"
              style={{
                maxWidth: "48rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: "var(--dfc-navy)",
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
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-title">{t.title}</div>
                  <p className="timeline-desc">{t.desc}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-12"
              style={{
                background: "var(--dfc-cream-2)",
                border: "2px solid var(--dfc-oxblood)",
                padding: "2rem",
                boxShadow: "6px 6px 0 var(--dfc-navy)",
              }}
            >
              <p
                className="font-serif-display"
                style={{
                  fontStyle: "italic",
                  fontSize: "clamp(1.25rem, 2.2vw, 1.65rem)",
                  lineHeight: 1.45,
                  color: "var(--dfc-navy)",
                }}
              >
                &ldquo;I served seven months for fixing trucks the way my customers asked me to fix them. Two pardons later, I am still in this fight. Not for me. For every owner-operator who gets buried every time Washington writes another rule.&rdquo;
              </p>
              <p
                className="font-stencil mt-5"
                style={{
                  color: "var(--dfc-oxblood)",
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

      {/* =========== H.R. 8079 BILL CARD =========== */}
      <section className="section section-navy section-capitol-ghost" id="bill">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bill-card">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
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

              <div className="mt-8 pt-8" style={{ borderTop: "2px solid var(--dfc-navy)" }}>
                <p
                  className="font-stencil mb-3"
                  style={{ fontSize: "0.85rem", letterSpacing: "0.18em" }}
                >
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
                    <strong>1.</strong> Rolls back EPA 2027 emissions rule on Class 8 trucks.
                  </li>
                  <li style={{ padding: "0.5rem 0" }}>
                    <strong>2.</strong> Protects repair shops from Clean Air Act liability on owner-requested work.
                  </li>
                  <li style={{ padding: "0.5rem 0" }}>
                    <strong>3.</strong> Ends the DEF mandate on new commercial diesel chassis.
                  </li>
                  <li style={{ padding: "0.5rem 0" }}>
                    <strong>4.</strong> Requires an independent cost review before any future diesel rule.
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#rep-finder" className="btn-oxblood">
                  ★ Contact Your Rep
                </a>
                <a
                  href="https://www.congress.gov/bill/119th-congress/house-bill/8079"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ boxShadow: "4px 4px 0 var(--dfc-navy)" }}
                >
                  Read The Bill ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== SIX EPA ACTIONS =========== */}
      <section className="section section-cream" id="epa-actions">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-eyebrow mb-6 inline-flex">The Full Plan</span>
            <h2 className="section-title mt-6">
              Six Actions For EPA.
              <br />
              <span style={{ color: "var(--dfc-oxblood)" }}>Performance, Not Hardware.</span>
            </h2>
            <p
              className="mx-auto mt-6"
              style={{
                maxWidth: "52rem",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: "var(--dfc-navy)",
                opacity: 0.82,
              }}
            >
              H.R. 8079 is one front. The Diesel Freedom Coalition is asking EPA for full-stack reform. Enforcement discretion now. Performance-based standards next. No more hardware mandates. Clear pollution limits. Market solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {EPA_ACTIONS.map((a) => (
              <div
                key={a.num}
                className="data-row"
                style={{ borderBottom: "1px solid var(--dfc-border)" }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="font-stencil shrink-0"
                    style={{
                      fontSize: "2rem",
                      color: "var(--dfc-oxblood)",
                      lineHeight: 1,
                      minWidth: "2.5rem",
                    }}
                  >
                    {a.num.padStart(2, "0")}
                  </div>
                  <div>
                    <div
                      className="font-stencil"
                      style={{
                        fontSize: "1.2rem",
                        color: "var(--dfc-navy)",
                        letterSpacing: "0.04em",
                        lineHeight: 1.25,
                      }}
                    >
                      {a.title}
                    </div>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: 1.5,
                        color: "var(--dfc-navy)",
                        opacity: 0.82,
                        marginTop: "0.5rem",
                      }}
                    >
                      {a.desc}
                    </p>
                  </div>
                </div>
                <div
                  className="font-stencil text-right"
                  style={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.2em",
                    color: "var(--dfc-oxblood)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {a.timing}
                </div>
              </div>
            ))}
          </div>

          {/* SAVED FUEL → STRATEGIC RESERVE / ALLIES */}
          <div
            className="mt-14 mx-auto"
            style={{
              maxWidth: "60rem",
              border: "3px solid var(--dfc-navy)",
              background: "rgba(27,42,74,0.05)",
              padding: "2rem",
              boxShadow: "8px 8px 0 var(--dfc-oxblood)",
            }}
          >
            <p
              className="font-stencil"
              style={{
                color: "var(--dfc-oxblood)",
                letterSpacing: "0.22em",
                fontSize: "0.78rem",
              }}
            >
              ★ Where The Saved Fuel Goes
            </p>
            <p
              className="mt-3"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.65,
                color: "var(--dfc-navy)",
                opacity: 0.88,
              }}
            >
              The world is scrambling for affordable energy. America is voluntarily discarding 25 percent of its diesel fleet&rsquo;s efficiency. Reform delivers a national windfall. Lower prices at every checkout, recovered fuel directed into the Strategic Petroleum Reserve, and surplus exports sold to allies who need American energy more than China does.
            </p>
            <p
              className="font-stencil mt-4"
              style={{
                color: "var(--dfc-oxblood)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
              }}
            >
              Source: Diesel Freedom Coalition White Paper, April 2026
            </p>
          </div>

          <div className="mt-12 text-center flex flex-wrap gap-4 justify-center">
            <a
              href={WHITE_PAPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-oxblood"
            >
              ★ Read The Full White Paper
            </a>
            <a href="#act" className="btn-gold" style={{ boxShadow: "4px 4px 0 var(--dfc-navy)" }}>
              Take Action
            </a>
          </div>
        </div>
      </section>

      {/* =========== TAKE ACTION =========== */}
      <section className="section section-cream" id="act">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-eyebrow mb-6 inline-flex">★ Take Action</span>
            <h2 className="section-title mt-6">
              Three Ways To
              <br />
              <span style={{ color: "var(--dfc-oxblood)" }}>Push Back.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <div className="cta-card">
              <div className="cta-card-number">01</div>
              <h3 className="cta-card-title">Sign The Petition</h3>
              <p className="cta-card-body">
                Add your name to the growing list of truckers, farmers, ranchers, shop owners, and Americans who are done paying the compliance tax. Delivered to Congress monthly.
              </p>
              <a href="#petition-form" className="btn-oxblood">
                ★ Sign Now
              </a>
            </div>

            <div className="cta-card">
              <div className="cta-card-number">02</div>
              <h3 className="cta-card-title">Donate</h3>
              <p className="cta-card-body">
                Fund billboards, fund ads, fund the fight. Every dollar goes to advocacy, legal defense, and getting Troy and other owner-operators in front of Congress. No salaries, no overhead skimming.
              </p>
              <a href="#donate-form" className="btn-oxblood">
                ★ Give
              </a>
            </div>

            <div className="cta-card">
              <div className="cta-card-number">03</div>
              <h3 className="cta-card-title">Contact Your Rep</h3>
              <p className="cta-card-body">
                Ask your House Representative and your Senators to co-sponsor H.R. 8079 and the Senate companion. We make the call easy. We write the script. You dial.
              </p>
              <a href="#rep-finder" className="btn-oxblood">
                ★ Find My Rep
              </a>
            </div>
          </div>

          {/* PETITION FORM */}
          <div className="max-w-3xl mx-auto mb-16" id="petition-form">
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
                  <label className="dfc-label" htmlFor="occupation">Occupation</label>
                  <select id="occupation" name="occupation" className="dfc-input" required defaultValue="">
                    <option value="" disabled>Select your role</option>
                    <option value="trucker">Trucker</option>
                    <option value="owner-operator">Owner-Operator</option>
                    <option value="farmer">Farmer</option>
                    <option value="rancher">Rancher</option>
                    <option value="fleet-manager">Fleet Manager</option>
                    <option value="shop-owner">Shop Owner</option>
                    <option value="mechanic">Mechanic</option>
                    <option value="concerned-citizen">Concerned Citizen</option>
                    <option value="other">Other</option>
                  </select>
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

          {/* DONATE */}
          <div className="max-w-3xl mx-auto mb-16" id="donate-form">
            <div className="bill-card">
              <span className="section-eyebrow mb-5 inline-flex">Donate</span>
              <h3
                className="font-stencil mt-5 mb-2"
                style={{ fontSize: "1.75rem", color: "var(--dfc-navy)" }}
              >
                Fund The Fight.
              </h3>
              <p style={{ marginBottom: "1.25rem", opacity: 0.85, fontSize: "1rem", lineHeight: 1.6 }}>
                Online payment processing is being stood up. In the meantime, contact the coalition directly to discuss donations, sponsorships, and event partnerships. Every dollar funds advocacy, legal defense, billboards, and getting owner-operators in front of Congress.
              </p>
              <div
                style={{
                  borderTop: "2px solid var(--dfc-navy)",
                  paddingTop: "1.25rem",
                  marginTop: "1.25rem",
                }}
              >
                <p
                  className="font-stencil"
                  style={{
                    color: "var(--dfc-oxblood)",
                    letterSpacing: "0.2em",
                    fontSize: "0.72rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Contact To Give
                </p>
                <a
                  href="mailto:info@dieselfreedomcoalition.com"
                  className="font-stencil"
                  style={{
                    color: "var(--dfc-navy)",
                    fontSize: "1.15rem",
                    letterSpacing: "0.05em",
                    textDecoration: "underline",
                  }}
                >
                  info@dieselfreedomcoalition.com
                </a>
              </div>
              <p
                className="font-stencil mt-5"
                style={{
                  color: "var(--dfc-navy)",
                  opacity: 0.7,
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                }}
              >
                Paid for by the Diesel Freedom Coalition. Not deductible as a charitable contribution for federal income tax purposes.
              </p>
            </div>
          </div>

          {/* REP FINDER */}
          <div className="max-w-3xl mx-auto" id="rep-finder">
            <div className="bill-card">
              <span className="section-eyebrow mb-5 inline-flex">Contact Your Rep</span>
              <h3
                className="font-stencil mt-5 mb-2"
                style={{ fontSize: "1.75rem", color: "var(--dfc-navy)" }}
              >
                Make The Call.
              </h3>
              <p style={{ marginBottom: "1.75rem", opacity: 0.85 }}>
                Enter your ZIP, open your House Rep&rsquo;s contact page, copy the script, and dial. Calls carry more weight than emails every time.
              </p>
              <RepFinder />
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
            ★ The Road Runs On Diesel. So Does America. ★
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
                  <a href="#supply" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
                    Supply Chain
                  </a>
                </li>
                <li style={{ padding: "0.35rem 0" }}>
                  <a href="#mandate" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
                    The Mandate
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
                  <a href="#epa-actions" style={{ color: "var(--dfc-cream)", textDecoration: "none" }}>
                    Six Actions For EPA
                  </a>
                </li>
                <li style={{ padding: "0.35rem 0" }}>
                  <a
                    href={WHITE_PAPER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--dfc-gold)", textDecoration: "none" }}
                  >
                    White Paper ↗
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
