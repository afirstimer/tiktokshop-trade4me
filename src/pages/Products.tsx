import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Ship, 
  Package, 
  Globe, 
  FileCheck, 
  Shield, 
  Warehouse,
  Users,
  CheckCircle2,
  ArrowRight,
  Quote
} from "lucide-react";

const Products = () => {
  const services = [
    {
      icon: Ship,
      title: "Multi-market Export",
      description: "Whether you're exporting to Asian markets or expanding to Europe and the US. Trade 4 Me provides flexible solutions that can cover cross-border exports, multiple types of goods, countries... you name it.",
    },
    {
      icon: FileCheck,
      title: "Procedure & Document Management",
      description: "Trade 4 Me comes with a flexible procedure and document management system that allows easy customization and integration with other systems. No matter where your customers are, Trade 4 Me can support processing and managing the entire lifecycle of shipments.",
    },
    {
      icon: Globe,
      title: "Flexible Logistics Solutions",
      description: "In addition to many available logistics services, you have the ability to easily introduce your own rules and actions. Customize and configure automated logistics to increase efficiency and reduce costs.",
    },
  ];

  const stats = [
    { value: "5000+", label: "Shipments Processed" },
    { value: "50+", label: "Partner Countries" },
    { value: "15+", label: "Years of Experience" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "100+", label: "Employees" },
    { value: "24/7", label: "Support" },
    { value: "500+", label: "Clients" },
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
                <li className="text-foreground">Import & Export Services</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Complete Import & Export Solutions
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trade 4 Me is designed to be at the heart of your modern import-export system 
                and connect all the dots into a delightful experience for your customers. 
                Without reinventing the wheel.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Professional Architecture
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Trade 4 Me is designed to be at the heart of your modern import-export system 
                and connect all the dots into a delightful experience for your customers.
              </p>
              <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                You can use the functionality provided out-of-the-box or replace individual components with integration 
                to your existing or desired systems. Choose the best solution in each category.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Process</h3>
                  <p className="text-muted-foreground">
                    Built with modern processes and best practices, ensuring scalability and maintainability.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Reliable</h3>
                  <p className="text-muted-foreground">
                    Reliable system with professional team and global partner network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Core Services
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Comprehensive solutions for all import-export needs
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="bg-card border border-border rounded-xl p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Great Performance and Scalability
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                Trade 4 Me will adapt to your pace. You can start small and then scale 
                up to thousands of shipments per month. It is designed to work well with the most 
                modern and scalable infrastructure.
              </p>
              
              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Professional Management
                </h3>
                <p className="text-muted-foreground mb-6">
                  Trade 4 Me comes with a flexible management system that can easily adapt to your 
                  custom needs and serve as the control panel for your import-export system.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/services">View All Services</Link>
                  </Button>
                  <Button variant="default" size="lg" asChild>
                    <Link to="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Comparison */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Professional Import & Export Services for Enterprises
              </h2>
              <p className="text-lg text-center mb-12 opacity-90">
                Trade 4 Me is the top choice for professional in-house teams or agencies 
                needing reliable and efficient import-export solutions.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-primary-foreground/10 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">Standard Service</h3>
                  <p className="mb-6 opacity-90">
                    Trade 4 Me believes in collaboration and sharing, which is why we develop 
                    a product and community filled with passion that helps us shape innovation.
                  </p>
                  <Button variant="heroOutline" size="lg" asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>

                <div className="bg-primary-foreground/10 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">Premium Service</h3>
                  <p className="mb-6 opacity-90">
                    To better support challenging projects, we provide the premium version, 
                    saving your time with features tailored for complex implementations.
                  </p>
                  <ul className="space-y-2 mb-6 opacity-90">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive import-export services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Enterprise-grade features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>SLA-backed technical support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Dedicated customer service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Project success assistance</span>
                    </li>
                  </ul>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                500+ Businesses Trust Trade 4 Me
              </h2>
              <div className="bg-secondary/30 rounded-xl p-8 md:p-12">
                <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed mb-6">
                  "We decided to use Trade 4 Me because today it is one of the most used 
                  import-export companies in the international trade sector. 
                  This has given us greater flexibility to develop and improve 
                  both the front and back of our import-export system."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-left">
                    <p className="font-semibold text-foreground">John Smith</p>
                    <p className="text-sm text-muted-foreground">Director, ABC Company</p>
                  </div>
                </div>
              </div>
              <Button variant="default" size="lg" className="mt-8" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Growing Ecosystem
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                The Trade 4 Me ecosystem is growing rapidly with a community of passionate developers 
                and merchants working hard to provide the best technology on the market.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">View All Services</Link>
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

export default Products;
