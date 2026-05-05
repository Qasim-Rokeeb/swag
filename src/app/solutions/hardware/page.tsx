"use client"

import { Server, Network, Database, Monitor, CheckCircle2 } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const hardwareItems = [
  {
    title: "Server Infrastructure",
    icon: <Server className="w-8 h-8" />,
    features: [
      "High-Performance Computing (HPC)",
      "Edge Server Deployment",
      "Virtualization-Ready Hardware",
      "Redundant Power Systems",
      "Remote Management Tools"
    ]
  },
  {
    title: "Networking Equipment",
    icon: <Network className="w-8 h-8" />,
    features: [
      "Enterprise-Grade Routers & Switches",
      "Advanced Firewall Appliances",
      "Load Balancing Hardware",
      "Wireless Mesh Solutions",
      "SD-WAN Infrastructure"
    ]
  },
  {
    title: "Storage Solutions",
    icon: <Database className="w-8 h-8" />,
    features: [
      "All-Flash Storage Arrays",
      "Scalable NAS/SAN Systems",
      "Archival Tape Storage",
      "Hybrid Cloud Gateways",
      "NVMe Storage Optimization"
    ]
  },
  {
    title: "Workstations & Endpoints",
    icon: <Monitor className="w-8 h-8" />,
    features: [
      "Precision Workstations",
      "Secure Thin Clients",
      "High-Resolution Displays",
      "Ergonomic Enterprise Kits",
      "Endpoint Security Hardware"
    ]
  }
]

export default function HardwareSolutions() {
  return (
    <div className="flex flex-col w-full pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">Hardware Solutions</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Mission-Critical <span className="text-primary">Infrastructure</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide the robust hardware foundations that power world-class digital experiences. From high-performance servers to global networking fabrics.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hardwareItems.map((item) => (
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
          <h2 className="text-4xl font-bold mb-8">Optimize Your Hardware Today</h2>
          <p className="text-muted-foreground mb-10">Get a custom quote for your infrastructure needs from our specialist engineers.</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-10 h-16 text-lg rounded-xl">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
