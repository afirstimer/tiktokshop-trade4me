import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Ship, Plane, Package, FileCheck, Phone, Mail } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "5000+", label: "Shipments Processed" },
    { value: "50+", label: "Partner Countries" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="relative hero-gradient hero-pattern overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(217 91% 40%)" stopOpacity="0.25" />
              <stop offset="50%" stopColor="hsl(217 85% 35%)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(217 95% 30%)" stopOpacity="0.25" />
            </linearGradient>
            <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(217 91% 40%)" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          
          {/* Background gradient */}
          <rect width="100%" height="100%" fill="url(#bgGradient)" />
          
          {/* Grid pattern */}
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
          
          {/* Logistics shapes - Container, Ship, Plane */}
          {/* Container shapes */}
          <rect x="100" y="150" width="120" height="80" rx="4" fill="hsl(217 91% 40%)" opacity="0.15" />
          <rect x="1100" y="650" width="150" height="100" rx="4" fill="hsl(217 85% 35%)" opacity="0.15" />
          
          {/* Ship silhouette */}
          <path
            d="M 200,500 L 250,480 L 300,500 L 300,520 L 200,520 Z"
            fill="hsl(217 91% 40%)"
            opacity="0.2"
          />
          <path
            d="M 900,300 L 950,280 L 1000,300 L 1000,320 L 900,320 Z"
            fill="hsl(217 85% 35%)"
            opacity="0.2"
          />
          
          {/* Plane silhouette */}
          <path
            d="M 500,200 L 550,190 L 600,200 L 580,220 L 520,220 Z"
            fill="hsl(217 95% 30%)"
            opacity="0.15"
          />
          
          {/* Connection lines (logistics routes) */}
          <line x1="150" y1="200" x2="300" y2="350" stroke="hsl(217 91% 40%)" strokeWidth="2" opacity="0.15" />
          <line x1="850" y1="500" x2="1000" y2="650" stroke="hsl(217 85% 35%)" strokeWidth="2" opacity="0.15" />
          <line x1="500" y1="300" x2="700" y2="450" stroke="hsl(217 95% 30%)" strokeWidth="2" opacity="0.12" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-12 relative z-[2]">
        <div className="max-w-4xl mx-auto text-center mb-8">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.4)]">
            Complete Import & Export
            <br />
            <span className="opacity-95">& Logistics Solutions</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_6px_rgba(0,0,0,0.35)]">
            Supporting businesses with fast, transparent, and cost-optimized import-export services. 
            Professional logistics services with an experienced team.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up delay-200">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request a Quote
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>

        {/* Services Preview Cards */}
        <div className="relative animate-fade-in-up delay-300">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-border/50 hover:shadow-3xl transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Ship className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Export Services</h3>
                <p className="text-sm text-muted-foreground text-center">Professional export services with full procedure support</p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-border/50 hover:shadow-3xl transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Import Services</h3>
                <p className="text-sm text-muted-foreground text-center">Import raw materials and products with optimized costs</p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-border/50 hover:shadow-3xl transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Customs Services</h3>
                <p className="text-sm text-muted-foreground text-center">Fast and accurate customs procedures</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12 text-white animate-fade-in-up delay-400">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="text-xl md:text-2xl font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_6px_rgba(0,0,0,0.35)]">{stat.value}</div>
              <span className="text-sm text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Quick Contact */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
          <a href="tel:+84901234567" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
            <Phone size={18} />
            <span className="font-medium">Hotline: +84 90 123 4567</span>
          </a>
          <span className="text-white/50 hidden sm:inline">|</span>
          <a href="mailto:info@trade4me.com" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
            <Mail size={18} />
            <span className="font-medium">info@trade4me.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
