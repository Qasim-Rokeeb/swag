import LegalLayout from "@/components/layout/LegalLayout"

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="October 2025">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Information Collection</h2>
        <p>We collect information you provide directly to us, such as when you fill out a contact form or subscribe to our newsletter.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Use of Information</h2>
        <p>We use your information to respond to inquiries, provide services, and send you relevant industry insights if you have opted in.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Data Security</h2>
        <p>We implement advanced technical and organizational measures to protect your data against unauthorized access or disclosure.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Third Parties</h2>
        <p>We do not sell your personal data. We only share data with trusted partners necessary for service delivery under strict confidentiality agreements.</p>
      </section>
    </LegalLayout>
  )
}
