import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-bold text-lg">
                S
              </div>
              <span className="font-bold text-xl tracking-tight">
                SWAD <span className="text-primary">Digital</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Building intelligent systems and resilient infrastructure that accelerate business transformation across global markets.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                <Facebook size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/news" className="text-muted-foreground hover:text-white transition-colors">News & Insights</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><Link href="/solutions/hardware" className="text-muted-foreground hover:text-white transition-colors">Hardware Solutions</Link></li>
              <li><Link href="/solutions/software" className="text-muted-foreground hover:text-white transition-colors">Software Solutions</Link></li>
              <li><Link href="/solutions/services" className="text-muted-foreground hover:text-white transition-colors">Professional Services</Link></li>
              <li><Link href="/solutions" className="text-muted-foreground hover:text-white transition-colors">Cloud Infrastructure</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Mail className="mt-1 text-primary" size={18} />
                <span>info@swaddigitalsolutions.com</span>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Phone className="mt-1 text-primary" size={18} />
                <span>+234 701 191 4628</span>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="mt-1 text-primary" size={18} />
                <span>Landmark Towers, VI, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
          <p>© 2026 SWAD Digital Solutions Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
