import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const TrustedBySection = () => {
  const brands = [
    "Goldman Sachs",
    "JP Morgan",
    "Morgan Stanley",
    "Citadel",
    "Blackrock",
    "Fidelity",
    "Vanguard",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          Leading Brands Trust Trade 4 Me
        </h2>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 relative">
            <Quote className="w-12 h-12 text-primary/30 absolute top-6 left-6" />
            <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed pl-8">
              "We decided to use Trade 4 Me because today it is one of the most 
              widely used automated trading platforms in the mid-market sector. 
              This has given us more flexibility to develop and improve 
              both the front-end and back-end of our online store."
            </blockquote>
            <div className="mt-6 pl-8">
              <Button variant="link" className="text-primary p-0 h-auto">
                Read Case Study →
              </Button>
            </div>
          </div>
        </div>

        {/* Brand logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-secondary/50 rounded-lg text-muted-foreground font-medium hover:bg-secondary transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
