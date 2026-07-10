import type { Metadata } from "next";
import ShareGallery from "./ShareGallery";

export const metadata: Metadata = {
  title: "Share The Fight",
  description:
    "Download-ready graphics and suggested captions to share the Diesel Freedom Coalition's message. Save an image, copy a caption, and post it.",
};

export default function SharePage() {
  return <ShareGallery />;
}
