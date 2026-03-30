import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service - ArianaInsta",
  description: "Terms of Service for ArianaInsta Instagram management platform.",
}

export default function TermsPage() {
  return (
    <main className="w-full bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6">← Back to Home</Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing and using ArianaInsta (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on ArianaInsta for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the Service</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Use the Service to violate any applicable laws or regulations</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The materials on ArianaInsta's web site are provided "as is". ArianaInsta makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In no event shall ArianaInsta or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ArianaInsta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The materials appearing on ArianaInsta's web site could include technical, typographical, or photographic errors. ArianaInsta does not warrant that any of the materials on the Service are accurate, complete, or current. ArianaInsta may make changes to the materials contained on the Service at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Links</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ArianaInsta has not reviewed all of the sites linked to its web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ArianaInsta of the site. Use of any such linked web site is at the user's own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ArianaInsta may revise these terms of service for the Service at any time without notice. By using this Service, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us at support@arianainsta.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
