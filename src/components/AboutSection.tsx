import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const features = [
    {
      title: "15+ Years",
      description: "of Experience",
    },
    {
      title: "5000+",
      description: "Shipments Processed",
    },
    {
      title: "50+",
      description: "Partner Countries",
    },
    {
      title: "98%",
      description: "Satisfaction Rate",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a company specializing in comprehensive import-export and logistics services, 
            with over 15 years of experience in international trade. Our professional team 
            is committed to delivering optimal, transparent, and efficient solutions for all 
            your import-export needs.
          </p>
          <Button variant="default" size="lg" className="mt-8" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>

        {/* Feature badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-secondary rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
