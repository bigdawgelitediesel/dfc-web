"use client";

import { useState } from "react";

const CALL_SCRIPT = `Hi, my name is [Your Name] from [City, State]. I am calling to ask [Representative Name] to co-sponsor H.R. 8079, the Diesel Truck Liberation Act.

American diesel moves 72 percent of every good this country buys. The current EPA mandate bolts $30,000 of unnecessary hardware onto every new Class 8 truck, costs owner-operators more than $25,000 a year in repairs and downtime, and adds 650 pounds of dead weight to every load. That cost flows directly into the price of everything on every shelf.

H.R. 8079 ends the hardware mandate and replaces it with performance-based standards. Regulate the result, not the engine. Please co-sponsor H.R. 8079 and support American truckers. Thank you.`;

export default function RepFinder() {
  const [zip, setZip] = useState("");
  const [copied, setCopied] = useState(false);

  const handleHouseFind = (e: React.FormEvent) => {
    e.preventDefault();
    if (zip.length !== 5) return;
    window.open(
      `https://www.house.gov/representatives/find-your-representative?zip=${zip}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSenate = () => {
    window.open(
      "https://www.senate.gov/senators/senators-contact.htm",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CALL_SCRIPT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore — clipboard unavailable
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

      {/* ZIP + buttons */}
      <form
        onSubmit={handleHouseFind}
        style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "flex-end" }}
      >
        <div style={{ flex: "1 1 180px", maxWidth: "260px" }}>
          <label className="dfc-label" htmlFor="rep-zip">Your ZIP Code</label>
          <input
            id="rep-zip"
            type="text"
            inputMode="numeric"
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
            placeholder="82001"
            className="dfc-input"
            required
            pattern="[0-9]{5}"
          />
        </div>
        <button type="submit" className="btn-oxblood" style={{ whiteSpace: "nowrap" }}>
          ★ Find My House Rep
        </button>
        <button
          type="button"
          onClick={handleSenate}
          className="btn-gold"
          style={{ whiteSpace: "nowrap" }}
        >
          Find My Senators
        </button>
      </form>

      {/* Call script */}
      <div
        style={{
          background: "rgba(27,42,74,0.06)",
          border: "2px solid var(--dfc-navy)",
          padding: "1.75rem",
          boxShadow: "4px 4px 0 var(--dfc-oxblood)",
        }}
      >
        <p
          className="font-stencil mb-3"
          style={{ color: "var(--dfc-navy)", fontSize: "0.78rem", letterSpacing: "0.22em" }}
        >
          ★ Call Script — Copy and Use
        </p>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            fontFamily: "inherit",
            fontSize: "0.92rem",
            lineHeight: 1.65,
            color: "var(--dfc-navy)",
            opacity: 0.88,
            margin: 0,
          }}
        >
          {CALL_SCRIPT}
        </pre>
        <button
          onClick={handleCopy}
          className="btn-oxblood"
          style={{ marginTop: "1.25rem", fontSize: "0.8rem", padding: "0.6rem 1.4rem" }}
        >
          {copied ? "✓ Copied to Clipboard" : "Copy Script"}
        </button>
      </div>

      {/* Tips */}
      <div
        className="font-stencil"
        style={{ fontSize: "0.72rem", letterSpacing: "0.14em", color: "var(--dfc-navy)", opacity: 0.65, lineHeight: 1.7 }}
      >
        TIP: Calls carry more weight than emails. Visit in person when Congress is in recess.
        Ask specifically to co-sponsor H.R. 8079. Ask for a staffer if the Rep is unavailable.
      </div>
    </div>
  );
}
