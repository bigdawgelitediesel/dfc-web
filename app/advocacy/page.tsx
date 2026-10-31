import type { Metadata } from "next";
import AdvocacyPoster from "./AdvocacyPoster";

export const metadata: Metadata = {
  title: "Make Diesels Great Again | The Laundering of American Regulatory Policy",
  description:
    "How an advocacy position became a rule, the rule became a crime, the crime put a mechanic in prison, and it took two presidential pardons to undo. This must stop, with a return to common sense regulations: NOx 2.5, PM 0.10. Scan, share, and join the Diesel Freedom Coalition.",
  openGraph: {
    title: "Make Diesels Great Again | Diesel Freedom Coalition",
    description:
      "The Laundering of American Regulatory Policy. Position, rule, crime, prison, pardons. This must stop. Common sense regulations: NOx 2.5, PM 0.10.",
    url: "https://dieselfreedomcoalition.com/advocacy",
    images: [{ url: "/advocacy-poster.png", width: 1183, height: 1900, alt: "Make Diesels Great Again poster" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Make Diesels Great Again | Diesel Freedom Coalition",
    description: "The Laundering of American Regulatory Policy. This must stop.",
    images: ["/advocacy-poster.png"],
  },
};

export default function AdvocacyPage() {
  return <AdvocacyPoster />;
}
