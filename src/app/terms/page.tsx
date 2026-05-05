import LegalLayout from "@/components/layout/LegalLayout"

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="October 2025">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
        <p>By accessing and using swaddigitalsolutions.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Services Description</h2>
        <p>SWAD Digital Solutions provides enterprise software, cloud infrastructure, and cybersecurity services. All services are subject to specific project contracts which take precedence over these general terms.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Intellectual Property</h2>
        <p>All content, trademarks, and data on this website are the property of SWAD Digital Solutions Ltd. unless otherwise stated.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Limitation of Liability</h2>
        <p>SWAD Digital Solutions shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our website or services.</p>
      </section>
    </LegalLayout>
  )
}
