import ArticleDetailContent from "@/components/pages/ArticleDetailContent"
import newsData from "@/data/news.json"
import { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = newsData.find((a) => a.slug === slug)
  
  return {
    title: article ? `${article.title} | SWAD News` : "Article Not Found",
    description: article?.excerpt || "Read the latest insights from SWAD Digital Solutions.",
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  return <ArticleDetailContent slug={slug} />
}
