import ContactContent from "@/components/pages/ContactContent"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | SWAD Digital Solutions",
  description: "Get in touch with our team for sales, support, or partnership opportunities.",
}

export default function ContactPage() {
  return <ContactContent />
}
