"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Mail, Phone, Send, CheckCircle2, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type FormData = z.infer<typeof formSchema>

export default function ContactContent() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    console.log(data)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitted(true)
    reset()
  }

  return (
    <div className="flex flex-col w-full pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary">Get In Touch</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact <span className="text-primary">Sales</span> & Support</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to start your transformation? Our team of experts is here to help you navigate your digital journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 rounded-3xl bg-primary/10 border border-primary/20 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary/40">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Message Sent!</h3>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    Thank you for reaching out. One of our specialists will get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-white/10">
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold">Send us a Message</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name*</label>
                      <Input {...register("fullName")} placeholder="John Doe" className={errors.fullName ? "border-red-500" : ""} />
                      {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address*</label>
                      <Input {...register("email")} placeholder="john@company.com" className={errors.email ? "border-red-500" : ""} />
                      {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company Name</label>
                      <Input {...register("company")} placeholder="Acme Inc." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input {...register("phone")} placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <label className="text-sm font-medium">Subject*</label>
                      <select 
                        {...register("subject")} 
                        className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:outline-none focus:border-primary/50 text-sm"
                      >
                        <option value="">Select a subject</option>
                        <option value="Enterprise Software">Enterprise Software</option>
                        <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                        <option value="Cybersecurity">Cybersecurity & Data Protection</option>
                        <option value="Managed IT">Managed IT Services</option>
                        <option value="Partnership">Partnership Opportunities</option>
                        <option value="General">General Inquiry</option>
                      </select>
                      {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <label className="text-sm font-medium">Message*</label>
                      <textarea 
                        {...register("message")} 
                        placeholder="Tell us about your project or requirements..."
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:outline-none focus:border-primary/50 text-sm resize-none"
                      />
                      {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                    </div>
                    <div className="sm:col-span-2 pt-4">
                      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 px-12 rounded-xl h-14 font-bold">
                        {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Global Presence</h2>
                <div className="space-y-6">
                  <ContactInfoItem icon={<Mail className="text-primary" />} label="Email Us" value="info@swaddigitalsolutions.com" />
                  <ContactInfoItem icon={<Phone className="text-primary" />} label="Nigeria Office" value="+234 701 191 4628" />
                  <ContactInfoItem icon={<Phone className="text-primary" />} label="UK Office" value="+44 7400 727165" />
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-bold flex items-center"><Globe className="mr-2 text-primary" /> Our Locations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <LocationItem city="Lagos" address="Landmark Towers, VI, Lagos, Nigeria" />
                  <LocationItem city="Owerri" address="Road 1, House 18b FHE, Imo, Nigeria" />
                  <LocationItem city="London" address="40 Bank St, Canary Wharf, London, UK" />
                  <LocationItem city="New York" address="447 Broadway, 7th Floor, NYC, NY, USA" />
                </div>
              </div>

              {/* Socials */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h4 className="font-bold mb-4">Follow Our Updates</h4>
                <div className="flex gap-4">
                  {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map(social => (
                    <div key={social} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 cursor-pointer transition-colors border border-white/10">
                      <div className="text-[10px] font-bold uppercase">{social[0]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactInfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-primary/5 transition-colors">
      <div className="shrink-0">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">{label}</div>
        <div className="text-lg font-medium">{value}</div>
      </div>
    </div>
  )
}

function LocationItem({ city, address }: { city: string; address: string }) {
  return (
    <div className="space-y-2">
      <div className="font-bold text-primary">{city}</div>
      <p className="text-sm text-muted-foreground leading-relaxed">{address}</p>
    </div>
  )
}
