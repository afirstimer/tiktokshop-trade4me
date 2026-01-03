import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Ship, Plane, Warehouse, FileCheck, Globe, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Ship,
      title: "International Shipping",
      description:
        "Sea, air, and road transportation services with a global partner network. Ensuring goods are transported safely and on time.",
    },
    {
      icon: FileCheck,
      title: "Professional Customs Procedures",
      description:
        "Expert team well-versed in import-export regulations, supporting fast and accurate customs procedures. Consultation on taxes, fees, and related regulations.",
    },
    {
      icon: Warehouse,
      title: "Warehousing & Distribution",
      description:
        "Modern warehouse system ensuring safety and proper storage of goods. Domestic and international distribution services at reasonable costs.",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "Commitment to transparency in costs, timelines, and processes. Comprehensive cargo insurance ensuring maximum benefits for customers.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core Services
            <br />
            <span className="text-primary">Import & Export & Logistics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Providing comprehensive solutions for all your import-export and logistics needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-card border border-border rounded-xl p-6 group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
