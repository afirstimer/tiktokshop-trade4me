import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { value: "5 stars", label: "on Trustpilot" },
    { value: "50,000+", label: "trades per day" },
    { value: "10,000+", label: "investors" },
    { value: "99.9%", label: "uptime" },
    { value: "24/7", label: "support" },
  ];

  return (
    <section className="relative min-h-screen hero-gradient hero-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-40 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Automated Trading Platform
            <br />
            <span className="opacity-90">for Every Investor</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Trade 4 Me is the leading automated trading solution, providing a friendly environment 
            for creating all investment experiences for B2C and B2B operating in the most demanding models.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-200">
            <Button variant="hero" size="xl">
              Explore Products
            </Button>
            <Button variant="heroOutline" size="xl">
              Trade 4 Me Pro
            </Button>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-primary-foreground animate-fade-in-up delay-300">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {index === 0 && (
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" className="text-yellow-300" />
                      ))}
                    </div>
                  )}
                  <span className="text-xl md:text-2xl font-bold">{stat.value}</span>
                </div>
                <span className="text-sm text-primary-foreground/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mt-16 relative animate-fade-in-up delay-400">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-xl shadow-2xl overflow-hidden border border-border/50">
              {/* Browser header */}
              <div className="bg-secondary/80 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded-md px-4 py-1.5 text-sm text-muted-foreground max-w-md mx-auto">
                    dashboard.trade4me.com
                  </div>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="bg-background p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Dashboard</h3>
                  <span className="text-sm text-muted-foreground">Account Overview</span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Total Profit</p>
                    <p className="text-2xl font-bold text-primary">$81,189,713.61</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Trades</p>
                    <p className="text-2xl font-bold text-foreground">592,323</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Customers</p>
                    <p className="text-2xl font-bold text-foreground">240,945</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Avg/Trade</p>
                    <p className="text-2xl font-bold text-foreground">$137.07</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating labels */}
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12">
              <div className="bg-card/90 backdrop-blur rounded-full px-4 py-2 shadow-lg border border-border animate-float">
                <span className="text-sm font-medium text-foreground">PIM</span>
              </div>
            </div>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12">
              <div className="bg-card/90 backdrop-blur rounded-full px-4 py-2 shadow-lg border border-border animate-float delay-500">
                <span className="text-sm font-medium text-foreground">PWA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative dots pattern */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="grid grid-cols-8 gap-2">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary-foreground/20" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="grid grid-cols-8 gap-2">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary-foreground/20" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
