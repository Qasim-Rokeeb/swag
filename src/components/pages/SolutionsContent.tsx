"use client"

import Image from "next/image"
import Link from "next/link"
import { Cloud, Cpu, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const solutionCategories = [
  {
    title: "Digital Infrastructure & Cloud",
    description: "Build a resilient foundation with our state-of-the-art cloud and physical infrastructure solutions.",
    icon: <Cloud className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    benefits: ["99.9% Uptime Guarantee", "Scalable on Demand", "Automated Backups", "Multi-region Deployment"],
    href: "/solutions/services"
  },
  {
    title: "Enterprise Software",
    description: "Streamline your operations with custom-built software tailored to your specific business logic.",
    icon: <Cpu className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000",
    benefits: ["Custom Workflow Integration", "Real-time Analytics", "Secure API Endpoints", "Cross-platform Compatibility"],
    href: "/solutions/software"
  },
  {
    title: "Cybersecurity & Data Protection",
    description: "Protect your most valuable assets with military-grade security and proactive threat monitoring.",
    icon: <Shield className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    benefits: ["Zero-Trust Architecture", "24/7 SOC Monitoring", "Incident Response", "Compliance Auditing"],
    href: "/solutions/services"
  },
  {
    title: "Hardware Solutions",
    description: "Mission-critical hardware components designed for durability and performance in high-stakes environments.",
    icon: <Zap className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1000",
    benefits: ["Server Infrastructure", "Networking Equipment", "Storage Systems", "Workstations"],
    href: "/solutions/hardware"
  }
]

export default function SolutionsContent() {
  return (
    <div className="flex flex-col w-full pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary">Our Expertise</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Innovative <span className="text-primary">Solutions</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From cloud infrastructure to custom software, we provide the tools and expertise to power your digital future.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 space-y-32">
        {solutionCategories.map((category, index) => (
          <div key={category.title} className="container mx-auto px-6">
            <div className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center",
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            )}>
              <div className={cn("space-y-8", index % 2 === 1 ? "lg:order-2" : "")}>
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <h2 className="text-4xl font-bold">{category.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center space-x-3 text-muted-foreground">
                      <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-xl px-8">
                  <Link href={category.href}>
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <div className={cn("relative group", index % 2 === 1 ? "lg:order-1" : "")}>
                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image 
                    src={category.image} 
                    alt={category.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full -z-10" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Our Approach */}
      <section className="py-32 bg-[#050508] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold">Our Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A systematic process designed to deliver excellence at every stage of the project lifecycle.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Horizontal Line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />
            
            <StepCard number="01" title="Discovery" description="We dive deep into your business goals and technical requirements to define the optimal path." />
            <StepCard number="02" title="Design" description="Our architects create a blueprint for a scalable, secure, and performant solution." />
            <StepCard number="03" title="Deploy" description="We execute with precision, ensuring a seamless transition to the new infrastructure." />
            <StepCard number="04" title="Support" description="Continuous monitoring and optimization to ensure long-term success and reliability." />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Have a Specific Requirement?</h2>
          <Button asChild size="lg" variant="outline" className="border-white/10 hover:bg-white/5 px-10 h-16 text-lg rounded-xl">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative z-10 p-8 rounded-3xl bg-background border border-white/10 text-center space-y-4 hover:border-primary/50 transition-colors group">
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto text-xl font-bold group-hover:scale-110 transition-transform">
        {number}
      </div>
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
