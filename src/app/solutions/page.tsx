import SolutionsContent from "@/components/pages/SolutionsContent"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Solutions | SWAD Digital Solutions",
  description: "Explore our range of digital infrastructure, enterprise software, and cybersecurity solutions.",
}

export default function SolutionsPage() {
  return <SolutionsContent />
}
