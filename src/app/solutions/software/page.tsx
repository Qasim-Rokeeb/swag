"use client"

import { Code2, Layout, Layers, Terminal, CheckCircle2 } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const softwareItems = [
  {
    title: "Custom App Development",
    icon: <Code2 className="w-8 h-8" />,
    features: [
      "Modern Web Applications",
      "Native & Cross-Platform Mobile",
      "API-First Architecture",
      "Microservices Migration",
      "UI/UX Design Systems"
    ]
  },
  {
    title: "Enterprise Software",
    icon: <Layers className="w-8 h-8" />,
    features: [
      "ERP & CRM Customization",
      "Workflow Automation",
      "Business Intelligence Dashboards",
      "Inventory Management Systems",
      "Legacy System Modernization"
    ]
  },
  {
    title: "Web & Mobile Applications",
    icon: <Layout className="w-8 h-8" />,
    features: [
      "Progressive Web Apps (PWA)",
      "iOS & Android Development",
      "React Native & Flutter",
      "Real-time Collaboration Tools",
      "E-commerce Platforms"
    ]
  },
  {
    title: "System Integration",
    icon: <Terminal className="w-8 h-8" />,
    features: [
      "Third-party API Integration",
      "Data Synchronization",
      "SSO & Identity Management",
      "Legacy-to-Cloud Bridging",
      "Middleware Development"
    ]
  }
]

export default function SoftwareSolutions() {
  return (
    <div className="flex flex-col w-full pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">Software Solutions</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Intelligent <span className="text-primary">Software</span> Ecosystems</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We build high-performance software that solves complex business problems and provides a seamless user experience across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareItems.map((item) => (
              <GlassCard key={item.title} className="flex flex-col space-y-6 group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 flex-1">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-muted-foreground text-sm">
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
          <h2 className="text-4xl font-bold mb-8">Build Your Vision</h2>
          <p className="text-muted-foreground mb-10">Start your next software project with a team that understands your business goals.</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-10 h-16 text-lg rounded-xl">
            <Link href="/contact">Talk to an Architect</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
