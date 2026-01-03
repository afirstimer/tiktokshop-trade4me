import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
                <li className="text-foreground">Privacy Policy</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Privacy Policy
              </h1>
              <p className="text-sm text-muted-foreground mb-12">
                Last updated: January 1, 2025
              </p>

              <div className="prose prose-slate max-w-none">
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Trade 4 Me ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect information about you in a variety of ways. The information we may collect includes:
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.1 Personal Data</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Personally identifiable information that you voluntarily provide to us when you register with the Platform, express an interest in obtaining information about us or our products and services, or otherwise when you contact us, such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name</li>
                    <li>Mailing address</li>
                    <li>Payment information</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.2 Derivative Data</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Information our servers automatically collect when you access the Platform, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Platform.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.3 Financial Data</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Platform.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Platform to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Create and manage your account</li>
                    <li>Process your transactions and send you related information</li>
                    <li>Email you regarding your account or order</li>
                    <li>Fulfill and manage purchases, orders, payments, and other transactions</li>
                    <li>Generate a personal profile about you to make future visits more personalized</li>
                    <li>Increase the efficiency and operation of the Platform</li>
                    <li>Monitor and analyze usage and trends to improve your experience</li>
                    <li>Notify you of updates to the Platform</li>
                    <li>Perform other business activities as needed</li>
                    <li>Request feedback and contact you about your use of the Platform</li>
                    <li>Resolve disputes and troubleshoot problems</li>
                    <li>Respond to product and customer service requests</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Disclosure of Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.1 By Law or to Protect Rights</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.2 Third-Party Service Providers</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.3 Business Transfers</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Security of Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Policy for Children</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>The right to access – You have the right to request copies of your personal data</li>
                    <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate</li>
                    <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions</li>
                    <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data</li>
                    <li>The right to object to processing – You have the right to object to our processing of your personal data</li>
                    <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Platform to help customize the Platform and improve your experience. When you access the Platform, your personal information is not collected through the use of tracking technology.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have questions or comments about this Privacy Policy, please contact us at:
                  </p>
                  <div className="bg-secondary/30 rounded-lg p-6">
                    <p className="text-foreground mb-2">
                      <strong>Email:</strong> privacy@trade4me.com
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

export default PrivacyPolicy;

