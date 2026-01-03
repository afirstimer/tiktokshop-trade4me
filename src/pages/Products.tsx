import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Code, 
  Globe, 
  TrendingUp, 
  Shield, 
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Star,
  Quote
} from "lucide-react";

const Products = () => {
  const features = [
    {
      icon: Globe,
      title: "Multi-everything trading",
      description: "It does not matter if you are testing a new trading strategy locally or expanding internationally. Trade 4 Me comes with a flexible framework that can cover cross-border trading, multiple currencies, exchanges, countries… you name it.",
    },
    {
      icon: BarChart3,
      title: "Manage orders and positions",
      description: "Trade 4 Me comes with a flexible order management and position tracking system that allows for easy customization and integration with other systems. No matter where your traders are, Trade 4 Me can facilitate the trading and handle the entire lifecycle of orders.",
    },
    {
      icon: TrendingUp,
      title: "Flexible strategies and automation",
      description: "In addition to plenty of out-of-the-box trading strategies, you have the ability to easily introduce your own rules and actions. Import or generate custom strategies and configure automated trading that increases efficiency and profitability.",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Merchants" },
    { value: "5,000+", label: "Github Stars" },
    { value: "650+", label: "Contributors" },
    { value: "100K+", label: "Downloads in last 30 days" },
    { value: "92+", label: "Partners" },
    { value: "350+", label: "Plugins" },
    { value: "7,000+", label: "Slack users" },
  ];

  const paymentPartners = [
    {
      name: "PayPal",
      description: "Thanks to the integration with PayPal Commerce Platform, you can scale quickly and let your customers accept and make payments in over 100 currencies across 200+ markets, while PayPal takes care of payment complexity.",
    },
    {
      name: "Mollie",
      description: "Mollie provides a simple payment API that enables trading platform and app builders to implement all relevant international but also local payment methods. The official plugin can handle subscriptions and much more!",
    },
    {
      name: "Adyen",
      description: "Adyen is one of the leading world-class payment service providers, and it is highly recommended for the enterprise segment. Their rich offer enhances all the recent payment trends covering multiple markets simultaneously.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 py-4">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">Open Source Automated Trading Platform</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Open Source Automated Trading Platform
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trade 4 Me is designed to be at the heart of your modern trading stack and connect all the dots into a delightful experience for your traders. Without reinventing the wheel all over again.
              </p>
            </div>
          </div>
        </section>

        {/* Best of Breed Architecture */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Best of breed architecture
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Trade 4 Me is designed to be at the heart of your modern trading stack and connect all the dots into a delightful experience for your Customers. Without reinventing the wheel all over again.
              </p>
              <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                You can use the functionality provided out-of-the-box or replace individual puzzles with the integration to your existing or desired PIM, CRM, or Marketing Automation software. Choose the best in each category and don't be vendor-locked in legacy, centralized solutions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Architecture</h3>
                  <p className="text-muted-foreground">
                    Built with modern technologies and best practices, ensuring scalability and maintainability.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">API</h3>
                  <p className="text-muted-foreground">
                    RESTful API-first approach for seamless integration with any frontend or third-party services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API First Solution */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="default" className="mb-4">API</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    The real API-first solution
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    To be at the top of the backend trading technology race, we have decided to build Trade 4 Me APIs with modern frameworks beloved by developers. Build unique trading experiences through any channel and interface with PWA, SPA, or Native Mobile Apps. Whether it is a digital kiosk or a screen in an airplane headrest, there are no limits.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Multi-everything commerce</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Manage checkout and order flow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Flexible promotions and discounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">+ More</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/30 rounded-xl p-8">
                  <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                    <Code className="w-24 h-24 text-muted-foreground/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="bg-card border border-border rounded-xl p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Great performance and scalability
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                Trade 4 Me will adapt to your pace. You can start small and then scale to thousands of trades per hour. It is designed to play well with the most modern and scalable infrastructure.
              </p>
              
              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Adaptable administration panel
                </h3>
                <p className="text-muted-foreground mb-6">
                  Trade 4 Me comes with a flexible administration panel that can be easily adapted to your custom needs and serve as the control panel for your trading stack.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg">
                    Check Trade 4 Me Plus for even more features
                  </Button>
                  <Button variant="default" size="lg">
                    Or compare Trade 4 Me to competitors
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Enterprise Open Source software for professional development teams
              </h2>
              <p className="text-lg text-center mb-12 opacity-90">
                Trade 4 Me is the #1 alternative for professional in-house or agency teams that have enough of corporate, over-engineered software and praise freedom of development.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-primary-foreground/10 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">Trade 4 Me Standard</h3>
                  <p className="mb-6 opacity-90">
                    Trade 4 Me believes in collaborative and sharing-economy, that's why we grow an Open Source product and Community filled with passionates who help us shape innovation.
                  </p>
                  <Button variant="heroOutline" size="lg">
                    Learn More
                  </Button>
                </div>

                <div className="bg-primary-foreground/10 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">Trade 4 Me Plus</h3>
                  <p className="mb-6 opacity-90">
                    To better support challenging projects, we promote the Plus version, saving you time with features tailored to complex implementations.
                  </p>
                  <ul className="space-y-2 mb-6 opacity-90">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Nine Trade 4 Me Plus modules for your own project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Enterprise-grade features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Flexible, modular trading (buy what's needed)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>SLA-backed technical support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Dedicated customer service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Project Success Assistance</span>
                    </li>
                  </ul>
                  <Button variant="hero" size="lg">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                7000+ businesses use Trade 4 Me
              </h2>
              <div className="bg-secondary/30 rounded-xl p-8 md:p-12">
                <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed mb-6">
                  "We have decided to use Trade 4 Me because today it is one of the most used trading platforms in the mid-market sector. This has given us greater agility to advance and improve both the front and the back of our trading platform."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Toni Milián Artigas</p>
                    <p className="text-sm text-muted-foreground">IT Director, Natura Selection</p>
                  </div>
                </div>
              </div>
              <Button variant="default" size="lg" className="mt-8">
                FREE DEMO
              </Button>
            </div>
          </div>
        </section>

        {/* Case Studies Logos */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <p className="text-center text-muted-foreground mb-8">Trade 4 Me case studies</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {["Jagermeister", "Dr. Oetker", "Relais&Chateaux", "HBX", "Reiss"].map((brand, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-card border border-border rounded-lg text-muted-foreground font-medium hover:bg-secondary transition-colors"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Evolution Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Evolution over revolution
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                No one can afford to make a big and costly revolution in their technology every few years. The market is speeding up and won't wait. At Trade 4 Me we live and breathe agile and evolutionary approaches to business, people, and technology. We encode this philosophy in our products and services to replace painful re-platforming projects with graceful and frequent upgrades. Our release cycle and roadmap are fully transparent and we enjoy working with the customers that help shape us the Trade 4 Me as a whole.
              </p>
              <div className="text-center">
                <Button variant="outline" size="lg">
                  Strategic project? Check Trade 4 Me Plus, which can include Project Success Assistance
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Stats */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Flourishing ecosystem
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Trade 4 Me ecosystem is growing fast with its community of passionate developers and merchants that work hard to provide the best technology on the market. Leverage a network of system integrators, technology partners, plugins and community events to upgrade your trading game.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Payment Partners */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Cutting edge payments out of the box
              </h2>
              <div className="space-y-8 mt-12">
                {paymentPartners.map((partner, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{partner.name}</h3>
                    <p className="text-muted-foreground mb-4">{partner.description}</p>
                    <Button variant="link" className="p-0 h-auto">
                      Read more <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tested Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Tested and testing friendly
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Detect and fix problems before they hit your customers and revenues thanks to Continuous Integration and Delivery. Trade 4 Me is a pioneer in automated testing of trading platforms and encodes this approach in your projects.
              </p>
              <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
                Behavior Driven Development makes your team focused on the value for your Customers and not just fancy code. Also, a bonus, better communication between business and engineers in the whole company.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg">
                  Explore how to start your project
                </Button>
                <Button variant="outline" size="lg">
                  Or maybe do some digging if Trade 4 Me is built for your needs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="heroOutline" size="lg">
                  Get a live demo
                </Button>
                <Button variant="hero" size="lg">
                  Learn more about Trade 4 Me Plus
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;

