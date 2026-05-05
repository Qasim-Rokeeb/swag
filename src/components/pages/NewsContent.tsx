"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import newsData from "@/data/news.json"

export default function NewsContent() {
  return (
    <div className="flex flex-col w-full pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary">News & Insights</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Latest <span className="text-primary">Perspectives</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stay informed with the latest trends, analysis, and success stories from the front lines of digital transformation.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsData.map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`}>
                <GlassCard className="h-full flex flex-col p-0 overflow-hidden group border-white/5 hover:border-primary/50">
                  <div className="relative aspect-video overflow-hidden">
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-white backdrop-blur-md border-none">{article.category}</Badge>
                    </div>
                  </div>
                  <div className="p-8 space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center"><Calendar className="mr-1 w-3 h-3" /> {article.date}</span>
                      <span className="flex items-center"><Clock className="mr-1 w-3 h-3" /> {article.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="pt-4 mt-auto flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <User size={14} />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">{article.author}</span>
                      </div>
                      <span className="text-primary font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                        Read more <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center space-x-4">
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground cursor-not-allowed">Previous</button>
            <span className="text-sm">Page 1 / Page 1</span>
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground cursor-not-allowed">Next</button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-[#050508] border-t border-white/5">
        <div className="container mx-auto px-6 text-center max-w-xl">
          <h2 className="text-3xl font-bold mb-6">Never Miss an Update</h2>
          <p className="text-muted-foreground mb-8">Subscribe to our newsletter and get the latest insights delivered directly to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-xl bg-background border border-white/10 focus:outline-none focus:border-primary/50"
            />
            <button className="px-8 py-4 bg-primary rounded-xl font-bold">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}
