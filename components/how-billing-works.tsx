export function HowBillingWorks() {
  return (
    <section className="w-full bg-muted/30 border-y border-border py-12 md:py-16">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">How Billing Works</h2>
          <p className="text-muted-foreground text-lg">
            Clear, straightforward pricing with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What You Buy */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
              What You&apos;re Buying
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A software subscription that gives you access to ArianaInsta&apos;s platform. You use our tools to schedule posts, view Instagram analytics, and manage your account—but you retain full control of your Instagram account and content.
            </p>
          </div>

          {/* When Billing Happens */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
              When Billing Happens
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Billing occurs at the start of each subscription period (monthly or annually, depending on your choice). You will receive a billing confirmation email from Stripe before each charge is processed.
            </p>
          </div>

          {/* Auto-Renewal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
              Auto-Renewal
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Your subscription renews automatically at the end of each billing period unless you cancel. You can cancel anytime by logging into your account or emailing support@arianainsta.com. Cancellation takes effect at the end of your current billing period.
            </p>
          </div>

          {/* Refunds */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">4</span>
              Refunds & Cancellation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Refund requests must be made within 14 days of purchase. If you cancel mid-period, no prorated refund is provided. See our Refund Policy for full details and the cancellation process.
            </p>
          </div>

          {/* Payment Processing */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">5</span>
              Payment Processor
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              All payments are processed securely by Stripe. Your card details are never stored on our servers. Stripe is a PCI-DSS Level 1 certified payment processor trusted by millions of businesses.
            </p>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">6</span>
              Questions?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Contact support@arianainsta.com with billing questions, refund requests, or cancellation inquiries. We aim to respond within 24-48 business hours.
            </p>
          </div>
        </div>

        {/* Trust Block */}
        <div className="mt-12 pt-12 border-t border-border">
          <div className="bg-background border border-border rounded-lg p-6 md:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Trust & Security</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-foreground text-sm">SSL Encrypted</p>
                  <p className="text-xs text-muted-foreground">Secure data transmission</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.372a3.066 3.066 0 01-2.812 3.062 3.066 3.066 0 01-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 01-1.745-.723 3.066 3.066 0 01-2.812-3.062V6.517a3.066 3.066 0 012.812-3.062zm7.958 5.28a.75.75 0 00-1.064-1.06L9 10.893 7.854 9.747a.75.75 0 10-1.06 1.061l1.5 1.5a.75.75 0 001.06 0l3.462-3.461z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-foreground text-sm">PCI Compliant</p>
                  <p className="text-xs text-muted-foreground">Card data never stored on our servers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H5.625A1.625 1.625 0 004 3.125v13.75A1.625 1.625 0 005.625 18.5h8.75a1.625 1.625 0 001.625-1.625V6.5m-11-5v3.75m7.5-3.75v3.75M4.5 9.5h11" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <div>
                  <p className="font-semibold text-foreground text-sm">Stripe Payments</p>
                  <p className="text-xs text-muted-foreground">Trusted payment processor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
