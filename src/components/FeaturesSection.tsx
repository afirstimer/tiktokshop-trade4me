import { Button } from "@/components/ui/button";
import { Zap, Globe, Shield, TestTube } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Headless & PWA Ready",
      description:
        "Trade 4 Me comes with a powerful customizable REST API that works well with your frontend of choice or your microservices architecture.",
    },
    {
      icon: Globe,
      title: "Easy to Host & Scale",
      description:
        "Trade 4 Me will accelerate your business growth and adapt to your evolving needs. It works great on standard VPS but can be used with Docker and Kubernetes.",
    },
    {
      icon: Shield,
      title: "Quality Standards & No Technical Debt",
      description:
        "With the pace of change in the commerce world, you can't afford a revolution every few years. You need an evolutionary approach and the highest quality standards.",
    },
    {
      icon: TestTube,
      title: "Tested & Testable",
      description:
        "Detect and fix issues before they affect your customers and revenue. Trade 4 Me is a pioneer in automated testing for trading platforms.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Modern Software
            <br />
            <span className="text-primary">and Development Methodology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why Trade 4 Me is widely recognized by the community of CTOs, architects, 
            and developers from leading companies and agencies as the best trading platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-card border border-border rounded-xl group"
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
          <Button variant="default" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
