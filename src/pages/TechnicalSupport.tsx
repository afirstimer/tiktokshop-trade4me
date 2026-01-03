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
  BookOpen,
  Users
} from "lucide-react";

const TechnicalSupport = () => {
  const supportTiers = [
    {
      title: "Community Support",
      description: "Free support through our community channels. Get help from fellow developers and community members.",
      features: [
        "Community forums",
        "Slack channel access",
        "GitHub discussions",
        "Community-driven solutions",
      ],
      price: "Free",
    },
    {
      title: "Standard Support",
      description: "Email-based support with response times suitable for most projects.",
      features: [
        "Email support",
        "Business hours response",
        "Documentation access",
        "Bug reporting",
      ],
      price: "Included with Trade 4 Me Plus",
    },
    {
      title: "Premium Support",
      description: "Priority support with faster response times and dedicated support channels.",
      features: [
        "Priority email support",
        "Faster response times",
        "Phone support option",
        "Dedicated support engineer",
      ],
      price: "Contact Sales",
    },
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Community Forums",
      description: "Get help from the community and share your knowledge",
      link: "#",
    },
    {
      icon: Users,
      title: "Slack Channel",
      description: "Join our Slack workspace for real-time discussions",
      link: "#",
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive documentation and guides",
      link: "/documentation",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Contact our support team directly",
      link: "/contact",
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
                Technical Support
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Get the help you need when you need it. Our support team is here to assist you with technical questions, 
                troubleshooting, and guidance on using Trade 4 Me effectively.
              </p>
              <Button variant="hero" size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  <Mail size={18} />
                  Contact Support
                </Link>
              </Button>
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
                Multiple ways to get the help you need
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportChannels.map((channel, index) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={index}
                      href={channel.link}
                      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {channel.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {channel.description}
                      </p>
                    </a>
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
                Support Tiers
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Choose the support level that fits your needs
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {supportTiers.map((tier, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {tier.title}
                      </h3>
                      <div className="text-2xl font-bold text-primary mb-4">
                        {tier.price}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 text-center">
                      {tier.description}
                    </p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-6" asChild>
                      <Link to="/contact">Get Started</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What are the support response times?",
                    a: "Response times vary by support tier. Community support is peer-to-peer, Standard Support responds within 24-48 business hours, and Premium Support offers faster response times.",
                  },
                  {
                    q: "Do you provide phone support?",
                    a: "Phone support is available with Premium Support plans. Contact us to learn more about Premium Support options.",
                  },
                  {
                    q: "Can I upgrade my support tier?",
                    a: "Yes, you can upgrade your support tier at any time. Contact our sales team to discuss upgrade options.",
                  },
                  {
                    q: "What information should I include in a support request?",
                    a: "Include your Trade 4 Me version, error messages, steps to reproduce the issue, and any relevant logs or screenshots.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
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
                Need Help? We're Here for You
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Contact our support team and get the assistance you need to succeed with Trade 4 Me.
              </p>
              <Button variant="heroOutline" size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  <Mail size={18} />
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnicalSupport;

