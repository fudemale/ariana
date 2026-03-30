export function BillingDisclosure() {
  return (
    <div className="w-full bg-muted/50 border-t border-b border-border py-8 px-4">
      <div className="max-w-[1060px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* What You're Buying */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">What You&apos;re Buying</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ArianaInsta is a subscription software platform that provides tools for scheduling content, tracking analytics, and managing Instagram accounts. You gain access to our platform features for the duration of your subscription.
            </p>
          </div>

          {/* Payment Processing */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Payment Processing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All payments are securely processed by <strong>Stripe</strong>, a PCI-DSS Level 1 compliant payment processor. Your card details are never stored on our servers. You'll receive billing confirmation emails from Stripe before each charge. Billing occurs at the start of each subscription period (monthly or annually).
            </p>
          </div>

          {/* Support & Refunds */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Support & Refunds</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Questions? Contact support@arianainsta.com. Your subscription auto-renews unless cancelled. Refund requests are available within 14 days of purchase. See our <a href="/refund-policy" className="text-primary hover:underline">Refund Policy</a> for full details and cancellation instructions.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            Operated by FalkTech LTD. By subscribing, you agree to our <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
