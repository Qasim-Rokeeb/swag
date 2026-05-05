import LegalLayout from "@/components/layout/LegalLayout"

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="October 2025">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Service Refunds</h2>
        <p>Due to the nature of professional services and custom software development, refunds are governed by individual Service Level Agreements (SLAs) and project contracts.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Deposit Policies</h2>
        <p>Project deposits are generally non-refundable once work has commenced, as specified in the project engagement letter.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Subscription Services</h2>
        <p>Managed services billed on a monthly basis may be cancelled with 30 days notice, unless a long-term commitment has been agreed upon.</p>
      </section>
    </LegalLayout>
  )
}
