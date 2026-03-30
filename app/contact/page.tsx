import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export const metadata = {
  title: "Contact Us - ArianaInsta",
  description: "Get in touch with the ArianaInsta support team.",
}

export default function ContactPage() {
  return (
    <main className="w-full bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6">← Back to Home</Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Have questions? We&apos;re here to help. Get in touch with our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Support Email</h2>
              <p className="text-muted-foreground mb-2">
                For general inquiries and support requests
              </p>
              <a
                href="mailto:support@arianainsta.com"
                className="text-primary hover:underline font-medium"
              >
                support@arianainsta.com
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Business Information</h2>
              <p className="text-muted-foreground space-y-2">
                <div><strong>Company:</strong> FalkTech LTD</div>
                <div><strong>Service:</strong> Instagram Management Platform</div>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Response Time</h2>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within 24-48 business hours. Please provide as much detail as possible about your issue to help us assist you faster.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Useful Links</h2>
              <div className="space-y-2">
                <Link href="/terms" className="block text-primary hover:underline">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="block text-primary hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/refund-policy" className="block text-primary hover:underline">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted/50 p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What is this about?"
                  required
                  className="w-full bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us more..."
                  rows={5}
                  required
                  className="w-full bg-background border border-border rounded-md px-3 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center pt-4">
                We&apos;ll get back to you as soon as possible
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
