import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Refund Policy - ArianaInsta",
  description: "Refund Policy for ArianaInsta Instagram management platform.",
}

export default function RefundPolicyPage() {
  return (
    <main className="w-full bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6">← Back to Home</Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Refund Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ArianaInsta is committed to customer satisfaction. This refund policy outlines the terms and conditions under which customers may request refunds for subscription purchases.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Refund Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Refund requests are eligible under the following conditions:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>The request is made within 14 days of the initial purchase or subscription start date</li>
              <li>The customer has not utilized the service excessively (reasonable usage limits apply)</li>
              <li>The request is for a legitimate reason related to service quality or technical issues</li>
              <li>No prior refund has been issued for this subscription period</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Refund Ineligibility</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Refund requests will not be approved for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Change of mind or buyer's remorse</li>
              <li>Cancellations requested more than 14 days after purchase</li>
              <li>Disputes related to Instagram's policies or account suspensions</li>
              <li>Issues arising from third-party services or integrations</li>
              <li>Non-payment of outstanding balances</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How to Request a Refund</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To request a refund, please contact our support team at support@arianainsta.com with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Your account email address</li>
              <li>The transaction ID or invoice number</li>
              <li>A detailed explanation of the refund request</li>
              <li>Supporting documentation if applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Refund Processing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Once a refund request is approved, the refund will be processed through the original payment method. Please allow 5-10 business days for the funds to appear in your account, depending on your financial institution.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Subscription Cancellation</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cancelling your subscription does not automatically entitle you to a refund. Cancellations take effect at the end of your current billing period. To cancel your subscription, please visit your account settings or contact support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Policy Changes</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ArianaInsta reserves the right to modify this refund policy at any time. Changes will be effective immediately upon posting to the website. Continued use of the service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Support</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about this refund policy, please contact support@arianainsta.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
