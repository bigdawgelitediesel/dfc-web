import type { Metadata, Viewport } from "next";
import { Oswald, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const DESCRIPTION =
  "The Diesel Freedom Coalition. American diesel keeps America fed, built, and moving. We fight for the owner-operators, farmers, and fleets paying the EPA compliance tax. Support H.R. 8079, the Diesel Truck Liberation Act.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dieselfreedomcoalition.com"),
  title: {
    default: "Diesel Freedom Coalition | We Provide America",
    template: "%s | Diesel Freedom Coalition",
  },
  description: DESCRIPTION,
  keywords: [
    "Diesel Freedom Coalition",
    "DFC",
    "H.R. 8079",
    "Diesel Truck Liberation Act",
    "EPA 2027 emissions rule",
    "diesel emissions reform",
    "owner-operator trucking",
    "aftertreatment DPF SCR DEF",
    "Troy Lake",
    "Rep. Mike Collins",
    "Sen. Cynthia Lummis",
    "American trucking",
    "Clean Air Act diesel",
    "diesel deletes",
  ],
  authors: [{ name: "Diesel Freedom Coalition" }],
  creator: "Diesel Freedom Coalition",
  publisher: "Diesel Freedom Coalition",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dieselfreedomcoalition.com",
    siteName: "Diesel Freedom Coalition",
    title: "Diesel Freedom Coalition | We Provide America",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Diesel Freedom Coalition | We Provide America",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
