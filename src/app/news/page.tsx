import NewsContent from "@/components/pages/NewsContent"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Insights | SWAD Digital Solutions",
  description: "Stay updated with the latest trends and analysis in digital transformation and enterprise technology.",
}

export default function NewsPage() {
  return <NewsContent />
}
