import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Code, 
  Users, 
  Target,
  CheckCircle2,
  ArrowRight,
  Mail
} from "lucide-react";

const Consulting = () => {
  const services = [
    {
      icon: Code,
      title: "Architecture Consulting",
      description: "Get expert guidance on designing scalable and maintainable trading platform architectures. Our consultants help you make the right technical decisions from the start.",
      features: [
        "System architecture design",
        "Technology stack recommendations",
        "Scalability planning",
        "Performance optimization strategies",
      ],
    },
    {
      icon: Users,
      title: "Team Coaching",
      description: "Empower your development team with best practices, code reviews, and hands-on training. We help your team become Trade 4 Me experts.",
      features: [
        "Code review sessions",
        "Best practices workshops",
        "Pair programming sessions",
        "Team knowledge transfer",
      ],
    },
    {
      icon: Target,
      title: "Project Strategy",
      description: "Plan your trading platform project with confidence. Our consultants help you define requirements, set realistic timelines, and avoid common pitfalls.",
      features: [
        "Requirements gathering",
        "Project planning",
        "Risk assessment",
        "Migration strategies",
      ],
    },
    {
      icon: MessageSquare,
      title: "Technical Audits",
      description: "Get a comprehensive review of your existing trading platform. We identify issues, suggest improvements, and help you optimize your setup.",
      features: [
        "Code quality assessment",
        "Security audit",
        "Performance analysis",
        "Optimization recommendations",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your needs, challenges, and goals in a free consultation call.",
    },
    {
      step: "2",
      title: "Proposal & Planning",
      description: "We create a customized proposal with timeline and deliverables.",
    },
    {
      step: "3",
      title: "Engagement",
      description: "Our consultants work closely with your team to deliver results.",
    },
    {
      step: "4",
      title: "Follow-up",
      description: "We ensure you have everything you need to succeed independently.",
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
                Our expert consultants provide valuable guidance and support across various aspects of your trading projects. 
                We conduct architecture workshops to help you design scalable and efficient trading solutions.
              </p>
              <Button variant="hero" size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  <Mail size={18} />
                  Get in Touch
                </Link>
              </Button>
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
                Comprehensive consulting to help you succeed with Trade 4 Me
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
                Our Consulting Process
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
                Ready to Get Expert Guidance?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Contact our consulting team to discuss how we can help you succeed with Trade 4 Me.
              </p>
              <Button variant="heroOutline" size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  <Mail size={18} />
                  Contact Our Consultants
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

