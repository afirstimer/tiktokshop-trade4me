import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const TrustedBySection = () => {
  const brands = [
    "Manufacturing Company A",
    "Trading Company B",
    "Factory C",
    "Logistics Company D",
    "Merchant E",
    "Import-Export Company F",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          Trusted by Our Clients
        </h2>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 relative">
            <Quote className="w-12 h-12 text-primary/30 absolute top-6 left-6" />
            <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed pl-8">
              "We have been working with Trade 4 Me for many years and are very satisfied with their services. 
              Professional team, fast procedures, transparent costs. 
              We have exported thousands of shipments through their services."
            </blockquote>
            <div className="mt-6 pl-8 flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">John Smith</p>
                <p className="text-sm text-muted-foreground">Director, ABC Manufacturing Company</p>
              </div>
              <Button variant="link" className="text-primary p-0 h-auto" asChild>
                <a href="/case-studies">View Case Study →</a>
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
