"use client"

import { Cpu, Cloud, Shield, Lightbulb, CheckCircle2 } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const serviceItems = [
  {
    title: "Managed IT Services",
    icon: <Cpu className="w-8 h-8" />,
    features: [
      "24/7 Infrastructure Monitoring",
      "Proactive System Maintenance",
      "Help Desk & Technical Support",
      "Patch Management & Updates",
      "IT Asset Management"
    ]
  },
  {
    title: "Cloud Services",
    icon: <Cloud className="w-8 h-8" />,
    features: [
      "Cloud Strategy & Migration",
      "Multi-Cloud Management",
      "Serverless Architecture",
      "Cost Optimization",
      "Cloud Disaster Recovery"
    ]
  },
  {
    title: "Cybersecurity Services",
    icon: <Shield className="w-8 h-8" />,
    features: [
      "Vulnerability Assessments",
      "Penetration Testing",
      "Identity & Access Management",
      "Endpoint Protection",
      "Security Awareness Training"
    ]
  },
  {
    title: "Consulting & Strategy",
    icon: <Lightbulb className="w-8 h-8" />,
    features: [
      "Digital Transformation Roadmap",
      "Technology Audit",
      "Compliance Consulting",
      "Business Continuity Planning",
      "Virtual CTO Services"
    ]
  }
]

export default function ProfessionalServices() {
  return (
    <div className="flex flex-col w-full pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">Professional Services</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Expert <span className="text-primary">Managed</span> Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide the strategic guidance and technical management needed to navigate the complexities of modern IT.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceItems.map((item) => (
              <GlassCard key={item.title} className="flex flex-col space-y-6 group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 flex-1">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-muted-foreground text-sm">
                      <CheckCircle2 className="text-primary w-4 h-4 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-[#050508] border-t border-white/5">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-8">Optimize Your Operations</h2>
          <p className="text-muted-foreground mb-10">Partner with our certified experts to streamline your IT and focus on your core business.</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-10 h-16 text-lg rounded-xl">
            <Link href="/contact">Book a Strategy Session</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
