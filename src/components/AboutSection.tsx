import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const features = [
    {
      title: "#1 Trading Platform",
      description: "Industry Leading",
    },
    {
      title: "Unlimited",
      description: "Scalability",
    },
    {
      title: "Flexible Design",
      description: "Customizable to your needs",
    },
    {
      title: "Powerful API",
      description: "Headless Commerce",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What is Trade 4 Me?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trade 4 Me is an open-source automated trading platform for mid-market brands 
            and enterprises requiring customized solutions. With a modern approach 
            to professional project development, it enables the growth of your digital 
            toolkit at a pace that surpasses competitors and delivers the experience 
            your customers deserve.
          </p>
          <Button variant="default" size="lg" className="mt-8">
            Learn More
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
