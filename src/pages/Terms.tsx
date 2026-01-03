import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 py-4">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">Terms of Use</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Terms of Use
              </h1>
              <p className="text-sm text-muted-foreground mb-12">
                Last updated: January 1, 2025
              </p>

              <div className="prose prose-slate max-w-none">
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    By accessing and using Trade 4 Me ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Permission is granted to temporarily download one copy of Trade 4 Me for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the Platform</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The materials on Trade 4 Me's website are provided on an 'as is' basis. Trade 4 Me makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitations</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In no event shall Trade 4 Me or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Trade 4 Me's website, even if Trade 4 Me or a Trade 4 Me authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Accuracy of Materials</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The materials appearing on Trade 4 Me's website could include technical, typographical, or photographic errors. Trade 4 Me does not warrant that any of the materials on its website are accurate, complete, or current. Trade 4 Me may make changes to the materials contained on its website at any time without notice.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Links</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Trade 4 Me has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Trade 4 Me of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Modifications</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Trade 4 Me may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about these Terms of Use, please contact us at:
                  </p>
                  <div className="bg-secondary/30 rounded-lg p-6">
                    <p className="text-foreground mb-2">
                      <strong>Email:</strong> legal@trade4me.com
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Address:</strong> 123 Trading Street, 10001 New York, USA
                    </p>
                    <p className="text-foreground">
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

