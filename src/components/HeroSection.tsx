import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { value: "5 stars", label: "on Capterra" },
    { value: "100K+", label: "downloads in last 30 days" },
    { value: "10,000+", label: "merchants" },
    { value: "10,000+", label: "online stores" },
    { value: "650+", label: "contributors" },
  ];

  return (
    <section className="relative hero-gradient hero-pattern overflow-hidden">
      {/* Background Image Layer - Lớp cuối cùng */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(164 60% 42%)" stopOpacity="0.25" />
              <stop offset="50%" stopColor="hsl(170 55% 38%)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(175 50% 32%)" stopOpacity="0.25" />
            </linearGradient>
            <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(164 60% 42%)" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          
          {/* Background gradient */}
          <rect width="100%" height="100%" fill="url(#bgGradient)" />
          
          {/* Grid pattern */}
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
          
          {/* Abstract shapes - Trading/Tech theme */}
          {/* Large circles */}
          <circle cx="100" cy="150" r="120" fill="hsl(164 60% 42%)" opacity="0.15" />
          <circle cx="1100" cy="650" r="150" fill="hsl(170 55% 38%)" opacity="0.15" />
          <circle cx="600" cy="400" r="200" fill="hsl(175 50% 32%)" opacity="0.1" />
          
          {/* Chart-like lines */}
          <path
            d="M 0,400 Q 300,200 600,300 T 1200,250"
            fill="none"
            stroke="hsl(164 60% 42%)"
            strokeWidth="3"
            opacity="0.2"
          />
          <path
            d="M 0,500 Q 300,350 600,450 T 1200,400"
            fill="none"
            stroke="hsl(170 55% 38%)"
            strokeWidth="2.5"
            opacity="0.15"
          />
          <path
            d="M 0,300 Q 400,150 800,200 T 1200,100"
            fill="none"
            stroke="hsl(175 50% 32%)"
            strokeWidth="2"
            opacity="0.12"
          />
          
          {/* Abstract geometric shapes */}
          <polygon
            points="200,100 350,100 275,200"
            fill="hsl(164 60% 42%)"
            opacity="0.12"
          />
          <polygon
            points="900,600 1050,600 975,700"
            fill="hsl(170 55% 38%)"
            opacity="0.12"
          />
          <polygon
            points="500,50 650,50 575,150"
            fill="hsl(175 50% 32%)"
            opacity="0.1"
          />
          
          {/* Dots pattern - More visible */}
          {Array.from({ length: 80 }).map((_, i) => {
            const x = (i * 137) % 1200;
            const y = Math.floor((i * 137) / 1200) * 80;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill="hsl(164 60% 42%)"
                opacity="0.15"
              />
            );
          })}
          
          {/* Connection lines (network-like) */}
          <line x1="150" y1="200" x2="300" y2="350" stroke="hsl(164 60% 42%)" strokeWidth="2" opacity="0.15" />
          <line x1="850" y1="500" x2="1000" y2="650" stroke="hsl(170 55% 38%)" strokeWidth="2" opacity="0.15" />
          <line x1="500" y1="300" x2="700" y2="450" stroke="hsl(175 50% 32%)" strokeWidth="2" opacity="0.12" />
          <line x1="200" y1="500" x2="400" y2="600" stroke="hsl(164 60% 42%)" strokeWidth="1.5" opacity="0.12" />
          <line x1="800" y1="200" x2="950" y2="300" stroke="hsl(170 55% 38%)" strokeWidth="1.5" opacity="0.12" />
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
            Automated Trading Platform
            <br />
            <span className="opacity-95">for Every Investor</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_6px_rgba(0,0,0,0.35)]">
            The leading automated trading solution, providing a friendly environment 
            for creating all investment experiences for B2C and B2B operating in the most demanding models.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up delay-200">
            <Button variant="hero" size="xl">
              Explore Products
            </Button>
            <Button variant="heroOutline" size="xl">
              Product Tour
            </Button>
          </div>
        </div>

        {/* Large Dashboard preview - Cover Image */}
        <div className="relative animate-fade-in-up delay-300">
          <div className="max-w-6xl mx-auto">
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
              
              {/* Dashboard content with sidebar */}
              <div className="bg-background flex">
                {/* Sidebar */}
                <div className="w-64 bg-secondary/30 border-r border-border p-4 hidden md:block">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Trading</h4>
                      <ul className="space-y-1">
                        <li className="text-sm text-foreground px-2 py-1 rounded hover:bg-secondary cursor-pointer">Portfolio</li>
                        <li className="text-sm text-foreground px-2 py-1 rounded hover:bg-secondary cursor-pointer">Orders</li>
                        <li className="text-sm text-foreground px-2 py-1 rounded hover:bg-secondary cursor-pointer">Positions</li>
                        <li className="text-sm text-foreground px-2 py-1 rounded hover:bg-secondary cursor-pointer">History</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Analytics</h4>
                      <ul className="space-y-1">
                        <li className="text-sm text-foreground px-2 py-1 rounded hover:bg-secondary cursor-pointer">Performance</li>
                        <li className="text-sm text-foreground px-2 py-1 rounded hover:bg-secondary cursor-pointer">Reports</li>
                        <li className="text-sm text-foreground px-2 py-1 rounded hover:bg-secondary cursor-pointer">Strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-foreground">Dashboard</h3>
                    <span className="text-sm text-muted-foreground">Overview of your trading account</span>
                  </div>
                  
                  {/* Stats cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-secondary rounded-lg p-4">
                      <p className="text-xs text-muted-foreground uppercase mb-1">Total Profit</p>
                      <p className="text-2xl font-bold text-primary">$81,189,713.61</p>
                    </div>
                    <div className="bg-secondary rounded-lg p-4">
                      <p className="text-xs text-muted-foreground uppercase mb-1">Trades</p>
                      <p className="text-2xl font-bold text-foreground">592,323</p>
                    </div>
                    <div className="bg-secondary rounded-lg p-4">
                      <p className="text-xs text-muted-foreground uppercase mb-1">Customers</p>
                      <p className="text-2xl font-bold text-foreground">240,945</p>
                    </div>
                    <div className="bg-secondary rounded-lg p-4">
                      <p className="text-xs text-muted-foreground uppercase mb-1">Avg/Trade</p>
                      <p className="text-2xl font-bold text-foreground">$137.07</p>
                    </div>
                  </div>

                  {/* Large Chart */}
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 border border-primary/20">
                    <h4 className="text-sm font-semibold text-foreground mb-4">Trading Performance Summary</h4>
                    
                    {/* Large chart visualization */}
                    <div className="relative h-64 bg-background/50 rounded-md overflow-hidden">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="largeChartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="hsl(164 60% 42%)" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="hsl(164 60% 42%)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        
                        {/* Grid lines */}
                        {[1, 2, 3, 4, 5].map((i) => (
                          <line
                            key={`grid-${i}`}
                            x1="0"
                            y1={i * 50}
                            x2="600"
                            y2={i * 50}
                            stroke="currentColor"
                            strokeWidth="0.5"
                            className="text-border opacity-20"
                          />
                        ))}
                        
                        {/* Chart area with multiple lines */}
                        <path
                          d="M 0,250 Q 150,200 300,150 T 600,80"
                          fill="url(#largeChartGradient)"
                          stroke="hsl(164 60% 42%)"
                          strokeWidth="3"
                          className="opacity-90"
                        />
                        
                        {/* Secondary line */}
                        <path
                          d="M 0,240 Q 150,190 300,140 T 600,70"
                          fill="none"
                          stroke="hsl(164 60% 50%)"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          className="opacity-60"
                        />
                        
                        {/* Data points */}
                        {[
                          { x: 50, y: 240 },
                          { x: 120, y: 220 },
                          { x: 190, y: 200 },
                          { x: 260, y: 180 },
                          { x: 330, y: 150 },
                          { x: 400, y: 120 },
                          { x: 470, y: 100 },
                          { x: 540, y: 85 },
                        ].map((point, i) => (
                          <circle
                            key={i}
                            cx={point.x}
                            cy={point.y}
                            r="5"
                            fill="hsl(164 60% 42%)"
                            className="opacity-90"
                          />
                        ))}
                      </svg>
                      
                      {/* Chart labels */}
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between text-xs text-muted-foreground">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                        <span>Aug</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Stats bar below dashboard */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-12 text-white animate-fade-in-up delay-400">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="flex items-center justify-center gap-1 mb-1">
                {index === 0 && (
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" className="text-yellow-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                    ))}
                  </div>
                )}
                <span className="text-xl md:text-2xl font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_1px_6px_rgba(0,0,0,0.35)]">{stat.value}</span>
              </div>
              <span className="text-sm text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{stat.label}</span>
            </div>
          ))}
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

