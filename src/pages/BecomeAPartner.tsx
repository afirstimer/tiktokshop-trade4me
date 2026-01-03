import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Download, 
  Mail, 
  Users, 
  Award, 
  TrendingUp,
  Code,
  BookOpen,
  Globe
} from "lucide-react";

const BecomeAPartner = () => {
  const benefits = [
    {
      icon: Users,
      title: "Access to Expert Network",
      description: "Connect with other top-tier agencies and developers in the Trade 4 Me ecosystem. Share knowledge, collaborate on projects, and grow together.",
    },
    {
      icon: Award,
      title: "Official Certification",
      description: "Get recognized as an official Trade 4 Me partner with badges, certifications, and listing on our partner directory.",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Increase your visibility and credibility. Get featured in our marketing materials, case studies, and partner showcases.",
    },
    {
      icon: Code,
      title: "Early Access",
      description: "Get early access to new features, beta releases, and exclusive technical resources to stay ahead of the curve.",
    },
    {
      icon: BookOpen,
      title: "Training & Support",
      description: "Receive comprehensive training, documentation, and dedicated support from our team to help you succeed.",
    },
    {
      icon: Globe,
      title: "Marketing Support",
      description: "Leverage our marketing resources, co-marketing opportunities, and joint events to expand your reach.",
    },
  ];

  const partnerTypes = [
    {
      title: "Implementation Partner",
      description: "Agencies that build and implement Trade 4 Me solutions for clients. Perfect for web development agencies and e-commerce specialists.",
      requirements: [
        "Minimum 3 completed Trade 4 Me projects",
        "At least 2 certified developers",
        "Active GitHub contributions",
        "Client references",
      ],
    },
    {
      title: "Technology Partner",
      description: "Companies providing complementary technologies, integrations, or services that enhance Trade 4 Me capabilities.",
      requirements: [
        "Integration with Trade 4 Me API",
        "Active maintenance and support",
        "Documentation and user guides",
        "Customer success stories",
      ],
    },
    {
      title: "Training Partner",
      description: "Organizations offering Trade 4 Me training, courses, and certification programs to developers and businesses.",
      requirements: [
        "Certified trainers",
        "Structured curriculum",
        "Training materials and resources",
        "Student success metrics",
      ],
    },
    {
      title: "Extension Partner",
      description: "Developers and agencies creating and maintaining Trade 4 Me plugins, extensions, and integrations.",
      requirements: [
        "Published plugins on marketplace",
        "Active maintenance",
        "User reviews and ratings",
        "Documentation and support",
      ],
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Review Requirements",
      description: "Check if you meet the requirements for your desired partner type. Download our partner guide for detailed information.",
    },
    {
      step: "2",
      title: "Submit Application",
      description: "Fill out the partner application form with your company details, portfolio, and relevant experience.",
    },
    {
      step: "3",
      title: "Evaluation Process",
      description: "Our team will review your application, check references, and evaluate your technical capabilities.",
    },
    {
      step: "4",
      title: "Onboarding",
      description: "Once approved, you'll receive training, resources, and access to partner benefits and support.",
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
                <li className="text-foreground">Become a Partner</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Become a Trade 4 Me Partner
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Join our global network of certified partners and help businesses succeed with Trade 4 Me. 
                Whether you're an agency, technology provider, or training organization, there's a partner program for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="gap-2">
                  <Download size={18} />
                  Download Partner Guide
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Partner Benefits
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Why join the Trade 4 Me Partner Program?
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Partner Types Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Partner Types
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Choose the partner type that best fits your business
              </p>

              <div className="space-y-8">
                {partnerTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <Badge variant="default" className="text-sm">
                        {type.title}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {type.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {type.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                How to Become a Partner
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Simple steps to join our partner network
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
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
                Ready to Become a Partner?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Download our partner guide to learn more about the program, requirements, and benefits. 
                Then submit your application and join our growing network of experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="heroOutline" size="lg" className="gap-2">
                  <Download size={18} />
                  Download Partner Guide
                </Button>
                <Button variant="hero" size="lg" className="gap-2" asChild>
                  <Link to="/contact">
                    <Mail size={18} />
                    Apply Now
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

export default BecomeAPartner;

