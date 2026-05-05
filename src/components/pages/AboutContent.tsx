"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Target, Users, Rocket, Zap, Award } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AboutContent() {
  return (
    <div className="flex flex-col w-full pt-20">
      {/* Hero Banner */}
      <section className="py-24 relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary">About SWAD</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Mission & <span className="text-primary">Vision</span></h1>
          <nav className="flex justify-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">About</span>
          </nav>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Who We Are</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  SWAD Digital Solutions is a premier technology firm dedicated to architecting the digital backbone of tomorrow&apos;s industry leaders. Founded with a vision to democratize high-end tech infrastructure, we&apos;ve grown into a global partner for enterprises navigating the complexities of digital transformation.
                </p>
                <p>
                  We combine deep technical expertise with a sharp business focus, ensuring that every line of code and every server deployed contributes directly to our clients&apos; strategic goals.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Tech Experts</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Our team" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-24 bg-[#050508]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold">Our Mission</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To empower organizations with intelligent, secure, and scalable technology solutions that drive sustainable growth and innovation in a rapidly evolving digital landscape.
              </p>
            </GlassCard>
            <GlassCard className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Shield size={32} />
              </div>
              <h3 className="text-3xl font-bold">Our Vision</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To be the global benchmark for digital excellence, recognized for our commitment to building the resilient infrastructure that powers the future of world commerce.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide every decision we make and every project we undertake.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <ValueCard icon={<Rocket />} title="Innovation" />
            <ValueCard icon={<Shield />} title="Integrity" />
            <ValueCard icon={<Award />} title="Excellence" />
            <ValueCard icon={<Zap />} title="Reliability" />
            <ValueCard icon={<Users />} title="Partnership" />
          </div>
        </div>
      </section>

      {/* Group Relationship */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl font-bold">Part of SWAD Holdings</h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                As a subsidiary of SWAD Holdings, SWAD Digital Solutions benefits from a vast network of resources and industry expertise. This relationship allows us to offer uniquely integrated solutions that span across multiple sectors, from financial services to logistics and renewable energy.
              </p>
              <p>
                Our alignment with the Group&apos;s core philosophy of &quot;Excellence Through Synergy&quot; ensures that we provide more than just technical services — we provide comprehensive business empowerment.
              </p>
            </div>
            <div className="pt-10">
              <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-full mx-auto flex items-center justify-center font-bold text-2xl text-primary">
                SH
              </div>
              <p className="mt-4 font-bold tracking-widest uppercase text-sm">SWAD HOLDINGS GROUP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-[#050508]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Join Our Journey</h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 h-16 text-lg rounded-xl">
            View Career Opportunities
          </Button>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center space-y-4 hover:bg-primary/5 hover:border-primary/50 transition-all group">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="font-bold text-lg">{title}</h4>
    </div>
  )
}
