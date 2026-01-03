import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Code, 
  FileText, 
  Search,
  Construction,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const Documentation = () => {
  const docSections = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics and get your first trading platform up and running",
      topics: ["Installation", "Quick Start Guide", "Basic Concepts", "First Steps"],
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation for developers",
      topics: ["REST API", "Authentication", "Endpoints", "Examples"],
    },
    {
      icon: FileText,
      title: "Guides",
      description: "Step-by-step guides for common tasks and workflows",
      topics: ["Configuration", "Customization", "Deployment", "Best Practices"],
    },
    {
      icon: Search,
      title: "Tutorials",
      description: "Hands-on tutorials to help you build real-world solutions",
      topics: ["Building Strategies", "API Integration", "Advanced Features", "Case Studies"],
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
                <li className="text-foreground">Documentation</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Construction className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Documentation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Comprehensive documentation for Trade 4 Me is currently under development. 
                We're working hard to provide you with the best possible resources.
              </p>
              <div className="bg-secondary/30 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Coming Soon
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our documentation team is building comprehensive guides, API references, and tutorials. 
                  In the meantime, you can:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <Link to="/contact">
                      <ExternalLink size={18} />
                      Contact Support
                    </Link>
                  </Button>
                  <Button variant="default" size="lg" className="gap-2" asChild>
                    <Link to="/training">
                      <BookOpen size={18} />
                      Check Training Programs
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Sections Preview */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                What's Coming
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Here's what you can expect in our documentation
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {docSections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-8"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {section.description}
                      </p>
                      <ul className="space-y-2">
                        {section.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ArrowRight size={14} className="text-primary" />
                            <span>{topic}</span>
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

        {/* Alternative Resources */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Alternative Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Training</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn from our expert trainers
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/training">View Training</Link>
                  </Button>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <Code className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore our codebase
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Visit GitHub
                    </a>
                  </Button>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get help from our team
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;

