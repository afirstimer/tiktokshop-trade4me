import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Natura Selection",
      description: "Leading beauty retailer transformed their trading operations with Trade 4 Me",
      quote: "We have decided to use Trade 4 Me because today it is one of the most used automated trading platforms in the mid-market sector. This has given us greater agility to advance and improve both the front and the back of our online store.",
      author: "Toni Milián Artigas",
      role: "IT Director",
      company: "Natura Selection",
      logo: "Natura",
      logoImage: null, // "/logos/natura.png" - add when available
      link: "#",
    },
    {
      title: "Jagermeister",
      description: "Premium spirits brand enhanced their trading capabilities",
      quote: "Trade 4 Me has revolutionized how we approach automated trading, giving us the flexibility and power we needed.",
      author: "John Smith",
      role: "Trading Director",
      company: "Jagermeister",
      logo: "Jagermeister",
      logoImage: null, // "/logos/jagermeister.png" - add when available
      link: "#",
    },
    {
      title: "Relais & Châteaux",
      description: "Luxury hospitality group streamlined their investment operations",
      quote: "The platform's scalability and reliability have been game-changers for our business model.",
      author: "Marie Dubois",
      role: "CFO",
      company: "Relais & Châteaux",
      logo: "R&C",
      logoImage: null, // "/logos/relais-chateaux.png" - add when available
      link: "#",
    },
    {
      title: "HBX",
      description: "Fashion e-commerce platform optimized their trading strategy",
      quote: "Trade 4 Me's headless architecture perfectly fits our modern tech stack and business needs.",
      author: "David Chen",
      role: "CTO",
      company: "HBX",
      logo: "HBX",
      logoImage: null, // "/logos/hbx.png" - add when available
      link: "#",
    },
    {
      title: "Reiss",
      description: "British fashion brand accelerated their digital transformation",
      quote: "We've seen significant improvements in our trading efficiency since implementing Trade 4 Me.",
      author: "Sarah Williams",
      role: "Head of Digital",
      company: "Reiss",
      logo: "Reiss",
      logoImage: null, // "/logos/reiss.png" - add when available
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trade 4 Me Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how leading brands have transformed their trading operations with Trade 4 Me
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
                {study.logoImage ? (
                  <img
                    src={study.logoImage}
                    alt={`${study.company} logo`}
                    className="h-16 w-auto object-contain mb-4"
                  />
                ) : (
                  <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{study.logo}</span>
                  </div>
                )}
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
                <a href={study.link}>
                  Read Case Study
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <a href="#">
              View All Case Studies
              <ExternalLink size={16} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

