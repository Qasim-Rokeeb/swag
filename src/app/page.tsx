"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Rocket, Shield, Globe, Users, Zap, Cloud, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] radial-glow z-0" />
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Badge variant="outline" className="px-4 py-1 border-primary/50 text-primary bg-primary/5 rounded-full">
                Powering Digital Transformation
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                Powering the Future Through <span className="text-primary">Technology</span> and Innovation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Building intelligent systems and resilient infrastructure that accelerate business transformation across emerging and developed markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg rounded-xl group">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 h-14 text-lg rounded-xl px-8">
                  Contact Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main Image Container */}
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
                <div className="relative z-10 glass border-white/20 rounded-3xl p-4 shadow-2xl backdrop-blur-2xl overflow-hidden aspect-square group">
                  <Image 
                    src="/images/hero-tech.png" 
                    alt="Technology Innovation" 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                  
                  {/* System Status Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass border-white/10 z-20">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-3">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "88%" }}
                        transition={{ duration: 2, delay: 1 }}
                        className="h-full bg-primary" 
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-white/70 tracking-widest uppercase">
                      <span>Neural Engine Active</span>
                      <span>88% Efficiency</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 glass p-4 rounded-2xl border-white/20 z-20 shadow-xl"
                >
                  <Shield className="text-primary w-8 h-8" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl border-white/20 z-20 shadow-xl"
                >
                  <Globe className="text-primary w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="text-muted-foreground w-6 h-6" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 border-y border-white/5 bg-[#050508]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem label="Projects Delivered" value="100+" />
            <StatItem label="Enterprise Clients" value="50+" />
            <StatItem label="Uptime SLA" value="99.9%" />
            <StatItem label="Global Support" value="24/7" />
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Connecting Technology with Business Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We bridge the gap between complex technological challenges and practical business outcomes. Our global presence allows us to bring world-class expertise to every local partnership.
              </p>
              <div className="space-y-6">
                <FeatureItem icon={<Globe className="text-primary" />} title="Global Presence" description="Operating across multiple continents to provide localized expertise." />
                <FeatureItem icon={<Rocket className="text-primary" />} title="Innovation Focus" description="Constantly exploring emerging tech to keep our clients ahead." />
                <FeatureItem icon={<Users className="text-primary" />} title="Trusted Partnership" description="We don't just deliver; we grow together with our clients." />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group">
                <Image 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team collaboration" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-[#050508]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary">Our Solutions</Badge>
            <h2 className="text-4xl md:text-6xl font-bold">Comprehensive Tech Ecosystem</h2>
            <p className="text-lg text-muted-foreground">Tailored solutions designed to solve the most pressing challenges of the modern enterprise.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={<Cpu className="w-8 h-8" />} 
              title="Enterprise Software" 
              description="Custom applications built for scale and performance."
              href="/solutions/software"
            />
            <ServiceCard 
              icon={<Cloud className="w-8 h-8" />} 
              title="Cloud Infrastructure" 
              description="Resilient and scalable cloud environments for your data."
              href="/solutions/services"
            />
            <ServiceCard 
              icon={<Shield className="w-8 h-8" />} 
              title="Cybersecurity" 
              description="Advanced protection against evolving digital threats."
              href="/solutions/services"
            />
            <ServiceCard 
              icon={<Zap className="w-8 h-8" />} 
              title="Hardware Solutions" 
              description="Robust hardware components for mission-critical tasks."
              href="/solutions/hardware"
            />
          </div>
        </div>
      </section>

      {/* Why Choose SWAD */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative">
                 <Image 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                  alt="Global network" 
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6 glass px-4 py-2 rounded-lg text-sm font-bold flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>ISO 27001 CERTIFIED</span>
                </div>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold">Why Leading Enterprises Choose SWAD</h2>
              <div className="space-y-8 pt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Proven Track Record</h4>
                    <p className="text-muted-foreground">Over a decade of delivering high-stakes technology projects for global leaders.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">24/7 Global Support</h4>
                    <p className="text-muted-foreground">Round-the-clock monitoring and technical assistance across all time zones.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Scalable Architecture</h4>
                    <p className="text-muted-foreground">Systems designed to grow with your business, from startup to global enterprise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full radial-glow opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Ahead of the Curve</h2>
          <p className="text-muted-foreground mb-10 text-lg">Join 5,000+ tech leaders receiving our monthly insights on emerging tech and digital transformation.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-xl bg-background border border-white/10 focus:outline-none focus:border-primary/50 transition-colors"
            />
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-xl px-8">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">No spam. Just high-quality insights. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how our intelligent systems can accelerate your growth and secure your digital future.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-16 text-lg rounded-xl">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 px-10 h-16 text-lg rounded-xl">
              View Our Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center space-y-2">
      <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter">{value}</div>
      <div className="text-sm uppercase tracking-widest text-muted-foreground font-medium">{label}</div>
    </div>
  )
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <GlassCard className="flex flex-col h-full group hover:translate-y-[-8px]">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">{description}</p>
      <Link href={href} className="text-primary font-bold flex items-center group/link">
        Learn more 
        <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </GlassCard>
  )
}
