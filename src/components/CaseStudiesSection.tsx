import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Textile Manufacturing Company",
      description: "Large-scale textile export to EU market",
      quote: "Trade 4 Me helped us export thousands of textile shipments to Europe smoothly. Fast procedures, reasonable costs, and professional service.",
      author: "John Smith",
      role: "Business Director",
      company: "ABC Textile Company",
      logo: "ABC",
      link: "/case-studies",
    },
    {
      title: "Food Processing Company",
      description: "Importing food ingredients from multiple countries",
      quote: "We need to import ingredients from many countries. Trade 4 Me supported us in handling procedures professionally, ensuring goods arrived on time.",
      author: "Sarah Johnson",
      role: "Procurement Manager",
      company: "XYZ Food Company",
      logo: "XYZ",
      link: "/case-studies",
    },
    {
      title: "Industrial Manufacturing",
      description: "Exporting industrial products to US market",
      quote: "Trade 4 Me's service is very professional. They understand US export regulations well and helped us save a lot of time and costs.",
      author: "Michael Chen",
      role: "CEO",
      company: "DEF Industrial Factory",
      logo: "DEF",
      link: "/case-studies",
    },
    {
      title: "Trading Company",
      description: "Import and distribution of consumer goods",
      quote: "With a wide network of partners, Trade 4 Me helps us import goods from many countries with the most optimal costs.",
      author: "Emily Davis",
      role: "Business Director",
      company: "GHI Trading Company",
      logo: "GHI",
      link: "/case-studies",
    },
    {
      title: "Agricultural Company",
      description: "Exporting agricultural products to Japanese market",
      quote: "Export procedures for agricultural products to Japan are very complex, but Trade 4 Me supported us in handling them smoothly. Very satisfied with the service.",
      author: "David Wilson",
      role: "Director",
      company: "JKL Agricultural Company",
      logo: "JKL",
      link: "/case-studies",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how businesses have succeeded with our import-export services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Logo */}
              <div className="mb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{study.logo}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {study.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{study.description}</p>

              <blockquote className="text-sm text-foreground/80 italic mb-4 border-l-2 border-primary pl-4">
                "{study.quote}"
              </blockquote>

              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground">{study.author}</p>
                <p className="text-xs text-muted-foreground">
                  {study.role}, {study.company}
                </p>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-between group-hover:text-primary"
                asChild
              >
                <Link to={study.link}>
                  View Case Study
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/case-studies">
              View All Case Studies
              <ExternalLink size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
