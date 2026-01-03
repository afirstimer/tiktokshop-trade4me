import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  FileCheck, 
  Users, 
  Target,
  CheckCircle2,
  Mail,
  Phone
} from "lucide-react";

const Consulting = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Import-Export Procedure Consultation",
      description: "Receive in-depth consultation on import-export regulations and procedures. We help you understand the process and prepare all necessary documents.",
      features: [
        "Legal regulation consultation",
        "Document preparation guidance",
        "Tax and fee consultation",
        "Incoterms consultation",
      ],
    },
    {
      icon: Users,
      title: "Import-Export Strategy Consultation",
      description: "Consultation on import-export strategies suitable for your business. We help you plan and optimize processes.",
      features: [
        "Needs analysis",
        "Import-export planning",
        "Cost optimization",
        "Risk assessment",
      ],
    },
    {
      icon: Target,
      title: "Market Consultation",
      description: "Consultation on import-export markets, helping you identify opportunities and challenges when expanding international business.",
      features: [
        "Market analysis",
        "Opportunity assessment",
        "Product suitability consultation",
        "Expansion strategy",
      ],
    },
    {
      icon: MessageSquare,
      title: "Legal Consultation",
      description: "Consultation on legal issues related to import-export, helping businesses comply with regulations.",
      features: [
        "Legal regulation consultation",
        "Legal risk assessment",
        "Issue resolution support",
        "New regulation updates",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Receive Request",
      description: "We listen to your needs and challenges in a free consultation.",
    },
    {
      step: "2",
      title: "Analysis & Proposal",
      description: "We analyze the situation and create a customized proposal with timeline and expected outcomes.",
    },
    {
      step: "3",
      title: "Execute Consultation",
      description: "Our consulting experts work closely with you to achieve results.",
    },
    {
      step: "4",
      title: "Follow-up & Support",
      description: "We ensure you have everything needed to succeed independently.",
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
                <li className="text-foreground">Consulting</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Professional Consulting Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our expert consultants provide valuable guidance and support across various aspects 
                of your import-export projects. We conduct consultation sessions to help you design 
                efficient and scalable import-export solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="gap-2" asChild>
                  <Link to="/contact">
                    <Mail size={18} />
                    Contact Us Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+84901234567">
                    <Phone size={18} />
                    Hotline: +84 90 123 4567
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Our Consulting Services
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Comprehensive consultation to help you succeed with import-export
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Consulting Process
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Simple steps to get started with our consulting services
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
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
                Ready for Professional Consultation?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Contact our consulting team to discuss how we can help you succeed with import-export.
              </p>
              <Button variant="heroOutline" size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  <Mail size={18} />
                  Contact for Consultation
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

export default Consulting;
