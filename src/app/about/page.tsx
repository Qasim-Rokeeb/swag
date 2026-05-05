import AboutContent from "@/components/pages/AboutContent"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | SWAD Digital Solutions",
  description: "Learn about our mission, vision, and the core values that drive our commitment to digital excellence.",
}

export default function AboutPage() {
  return <AboutContent />
}
