import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Ship, 
  Package, 
  FileCheck, 
  Plane,
  Warehouse,
  MessageSquare,
  Mail,
  Phone
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: "Export Services",
      description: "Professional export services with full procedure support from document preparation to delivery. We support exporting various types of goods with fast processing times.",
      features: [
        "Export procedure consultation",
        "Export document preparation",
        "Customs procedure handling",
        "International shipping",
        "Shipment tracking"
      ]
    },
    {
      icon: Package,
      title: "Import Services",
      description: "Import services for raw materials and products with optimized costs. Support importing from multiple countries with transparent and clear procedures.",
      features: [
        "Import consultation",
        "Import procedure handling",
        "Tax and fee calculation",
        "Transportation from port/warehouse",
        "Goods delivery"
      ]
    },
    {
      icon: FileCheck,
      title: "Customs Services",
      description: "Fast and accurate customs procedures with a team of experts well-versed in import-export regulations. Support handling all issues arising during customs clearance.",
      features: [
        "Customs declaration",
        "Customs clearance procedure handling",
        "Tax and fee consultation",
        "Issue resolution",
        "Cargo inspection support"
      ],
      link: "/consulting"
    },
    {
      icon: Plane,
      title: "International Shipping",
      description: "Sea, air, and road transportation services with a global partner network. Ensuring goods are transported safely and on time.",
      features: [
        "Sea freight",
        "Air freight",
        "Road freight",
        "Real-time shipment tracking",
        "Cargo insurance"
      ]
    },
    {
      icon: Warehouse,
      title: "Warehousing & Distribution",
      description: "Modern warehouse system ensuring safety and proper storage of goods. Domestic and international distribution services at reasonable costs.",
      features: [
        "Modern warehouses",
        "Goods storage",
        "Domestic distribution",
        "International distribution",
        "Inventory management"
      ]
    },
    {
      icon: MessageSquare,
      title: "Import-Export Procedure Consultation",
      description: "In-depth consultation on import-export regulations and procedures. Support businesses understand the process and prepare all necessary documents.",
      features: [
        "Legal regulation consultation",
        "Document preparation guidance",
        "Tax and fee consultation",
        "Incoterms consultation",
        "Issue resolution support"
      ],
      link: "/consulting"
    }
  ];

  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "5000+", label: "Shipments Processed" },
    { value: "50+", label: "Partner Countries" },
  ];

  const process = [
    {
      step: "1",
      title: "Receive Request",
      description: "Customer contacts and provides information about import-export needs",
    },
    {
      step: "2",
      title: "Consultation & Proposal",
      description: "We consult and propose the optimal solution for each specific case",
    },
    {
      step: "3",
      title: "Quote & Contract",
      description: "Detailed, transparent quote and service contract signing",
    },
    {
      step: "4",
      title: "Execute Shipping & Procedures",
      description: "Handle customs procedures and ship goods according to commitments",
    },
    {
      step: "5",
      title: "Delivery & After-sales",
      description: "Deliver goods and support customers after completion",
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
                <li className="text-foreground">Services</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Import & Export Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We provide comprehensive solutions for all your import-export and logistics needs. 
                With over 15 years of experience, our professional team is committed to delivering high-quality, 
                transparent, and cost-optimized services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+84901234567">
                    <Phone className="mr-2" size={18} />
                    Hotline: +84 90 123 4567
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Introduction */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Core Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide complete import-export and logistics services to meet all business needs. 
                From customs procedures to international shipping, we support you at every step.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {service.link && (
                      <Button variant="outline" size="sm" asChild>
                        <Link to={service.link}>Learn More</Link>
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Our Work Process
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Professional, transparent, and efficient process
              </p>

              <div className="grid md:grid-cols-5 gap-6">
                {process.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
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

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Why Choose Us
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {[
                  {
                    title: "Years of Experience",
                    description: "Over 15 years operating in import-export"
                  },
                  {
                    title: "Deep Regulatory Knowledge",
                    description: "Expert team with deep understanding of legal regulations"
                  },
                  {
                    title: "Global Shipping Partners",
                    description: "Wide network of partners across 50+ countries"
                  },
                  {
                    title: "Transparent Costs",
                    description: "Detailed quotes, no hidden fees"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Request a Quote
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Fill in the information below, and we will contact you as soon as possible
              </p>
              <div className="bg-card border border-border rounded-xl p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                        placeholder="+84 90 123 4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Requirements *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                      placeholder="Describe your import-export needs in detail..."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Mail className="mr-2" size={18} />
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
