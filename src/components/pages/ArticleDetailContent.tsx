"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import newsData from "@/data/news.json"

export default function ArticleDetailContent({ slug }: { slug: string }) {
  const article = newsData.find((a) => a.slug === slug)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Button asChild variant="outline">
            <Link href="/news">Back to News</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <article className="flex flex-col w-full pt-20">
      {/* Header */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image 
          src={article.image} 
          alt={article.title} 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 container mx-auto px-6 flex flex-col justify-end pb-12">
          <div className="max-w-4xl space-y-6">
            <Badge className="bg-primary text-white">{article.category}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center"><User className="mr-2 w-4 h-4" /> {article.author}</div>
              <div className="flex items-center"><Calendar className="mr-2 w-4 h-4" /> {article.date}</div>
              <div className="flex items-center"><Clock className="mr-2 w-4 h-4" /> {article.readTime}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Body */}
          <div className="lg:col-span-8">
            <Link href="/news" className="inline-flex items-center text-primary mb-10 hover:translate-x-[-4px] transition-transform font-medium">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to News
            </Link>
            
            <div className="prose prose-invert prose-lg max-w-none space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-xl text-white font-medium italic border-l-4 border-primary pl-6 py-2">
                {article.excerpt}
              </p>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              
              <h2 className="text-3xl font-bold text-white pt-8">The Evolution of Digital Transformation</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              
              <div className="relative aspect-video rounded-2xl overflow-hidden my-12 border border-white/10">
                <Image 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Technology in action" 
                  fill
                  className="object-cover"
                />
              </div>

              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>

              <h3 className="text-2xl font-bold text-white pt-6">Looking Ahead</h3>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </div>

            {/* Share & Tags */}
            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Technology</Badge>
                <Badge variant="outline">Global</Badge>
                <Badge variant="outline">Future</Badge>
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Share2 className="mr-2 w-4 h-4" /> Share Article
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6 sticky top-28">
              <h4 className="font-bold text-xl">Related Articles</h4>
              <div className="space-y-6">
                {newsData.filter(a => a.slug !== article.slug).slice(0, 3).map(related => (
                  <Link key={related.slug} href={`/news/${related.slug}`} className="group flex gap-4">
                    <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-white/10">
                      <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-bold text-sm line-clamp-2 group-hover:text-primary transition-colors">{related.title}</h5>
                      <p className="text-xs text-muted-foreground">{related.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Button asChild variant="link" className="text-primary p-0 h-auto">
                <Link href="/news">View all insights</Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
