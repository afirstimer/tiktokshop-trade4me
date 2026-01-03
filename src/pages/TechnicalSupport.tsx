import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Headphones, 
  MessageCircle, 
  Clock, 
  Shield,
  CheckCircle2,
  Mail,
  Phone,
  FileText
} from "lucide-react";

const TechnicalSupport = () => {
  const supportTiers = [
    {
      title: "Basic Support",
      description: "Free support via email and hotline. Get help from our expert team.",
      features: [
        "Email support",
        "Hotline consultation",
        "Documentation",
        "Question answering",
      ],
      price: "Free",
    },
    {
      title: "Standard Support",
      description: "Email support with response times suitable for most projects.",
      features: [
        "Priority email support",
        "Business hours response",
        "Documentation access",
        "Issue reporting",
      ],
      price: "Included with service package",
    },
    {
      title: "Premium Support",
      description: "Priority support with faster response times and dedicated support channels.",
      features: [
        "High priority email support",
        "Fast response times",
        "Phone support",
        "Dedicated support specialist",
      ],
      price: "Contact Sales",
    },
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: "Hotline",
      description: "Call directly for quick consultation",
      link: "tel:+84901234567",
      contact: "+84 90 123 4567",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email and receive a response within 24 hours",
      link: "mailto:support@trade4me.com",
      contact: "support@trade4me.com",
    },
    {
      icon: MessageCircle,
      title: "Direct Consultation",
      description: "Visit our office for direct consultation",
      link: "/contact",
      contact: "123 Trade Street, District 1, Ho Chi Minh City",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Access documentation and frequently asked questions",
      link: "/documentation",
      contact: "View Documentation",
    },
  ];

  const faqs = [
    {
      question: "How long does import-export procedure processing take?",
      answer: "Processing time depends on the type of goods and market. Typically 3-7 business days for basic procedures.",
    },
    {
      question: "How are service costs calculated?",
      answer: "Costs are calculated based on goods value, type of goods, market, and required services. We will provide a detailed quote after receiving information.",
    },
    {
      question: "Do you support cargo insurance?",
      answer: "Yes, we provide cargo insurance services for all import-export shipments to ensure maximum safety.",
    },
    {
      question: "Do you support handling special goods?",
      answer: "Yes, we have experience handling various special goods such as dangerous goods, fragile items, and goods requiring special storage conditions.",
    },
  ];

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
                <li>
                  <Link to="/services" className="hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">Technical Support</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Technical & Customer Support
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Get the help you need when you need it. Our support team is always ready to assist you 
                with technical questions, troubleshooting, and guidance on using Trade 4 Me services effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="gap-2" asChild>
                  <a href="tel:+84901234567">
                    <Phone size={18} />
                    Call Now: +84 90 123 4567
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    <Mail size={18} />
                    Submit Support Request
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Support Channels
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Choose the contact method that works best for you
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {supportChannels.map((channel, index) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {channel.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {channel.description}
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <a href={channel.link}>
                              {channel.contact}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Support Packages
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Choose the support package that fits your needs
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {supportTiers.map((tier, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {tier.title}
                      </h3>
                      <p className="text-primary font-semibold text-lg mb-4">
                        {tier.price}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {tier.description}
                      </p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact">Contact</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Find answers to common questions
              </p>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Need Support?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Our support team is always ready to help you. Contact us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="heroOutline" size="lg" className="gap-2" asChild>
                  <a href="tel:+84901234567">
                    <Phone size={18} />
                    Call: +84 90 123 4567
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" className="gap-2" asChild>
                  <Link to="/contact">
                    <Mail size={18} />
                    Send Email
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnicalSupport;
