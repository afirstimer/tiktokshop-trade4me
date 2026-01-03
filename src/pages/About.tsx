import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Shield, Globe, Award } from "lucide-react";

const About = () => {
  const history = [
    {
      year: "2010",
      event: "Trade 4 Me company was founded, beginning operations in import-export and logistics.",
    },
    {
      year: "2012",
      event: "Expanded services to Southeast Asian market, establishing first partner network.",
    },
    {
      year: "2015",
      event: "Achieved ISO certification for quality management and expanded customs specialist team.",
    },
    {
      year: "2017",
      event: "Expanded services to European and US markets, increasing shipments processed to 1000+ per year.",
    },
    {
      year: "2019",
      event: "Invested in modern warehouse system and advanced logistics management technology.",
    },
    {
      year: "2021",
      event: "Reached milestone of 5000+ shipments processed successfully, expanded services to 50+ countries.",
    },
    {
      year: "2023",
      event: "Received 'Excellence in Logistics Company' award and expanded team to 100+ employees.",
    },
    {
      year: "2024",
      event: "Continued growth, achieved 98% customer satisfaction rate and expanded import-export consulting services.",
    },
  ];

  const teamMembers = [
    { name: "John Smith", role: "CEO" },
    { name: "Sarah Johnson", role: "Deputy CEO" },
    { name: "Michael Chen", role: "Import-Export Manager" },
    { name: "Emily Davis", role: "Logistics Manager" },
    { name: "David Wilson", role: "Customs Manager" },
    { name: "Lisa Anderson", role: "Warehouse Manager" },
    { name: "Robert Brown", role: "Shipping Manager" },
    { name: "Jennifer Lee", role: "Consulting Manager" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We commit to transparency in costs, timelines, and processes. All information is clearly disclosed, ensuring customers understand every step in the import-export process.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "With a wide network of partners across 50+ countries, we can support businesses importing and exporting goods to and from anywhere in the world efficiently.",
    },
    {
      icon: Award,
      title: "Professional & Experienced",
      description: "Over 15 years of experience in import-export, our expert team has deep understanding of legal regulations and customs procedures, ensuring fast and accurate processing.",
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
                <li className="text-foreground">About Us</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="text-lg text-muted-foreground mb-6">
                As an organization, we have a clear purpose that drives all our activities. That is to create
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Import-export solutions for every business
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We aim to shape the future of international trade, leveraging the power of experience and 
                professionalism. Our team ensures Trade 4 Me is always updated, innovative, and aligned with 
                the changing needs of modern international trade, becoming the top choice for those seeking 
                professional and efficient import-export solutions.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Development History
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Review the timeline of important events:
              </p>

              <div className="space-y-8">
                {history.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 text-2xl font-bold text-primary">{item.year}</div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-foreground leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="bg-card border border-border rounded-xl p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Trade 4 Me Team
              </h2>
              <p className="text-muted-foreground text-center mb-12">
                Meet the passionate people behind Trade 4 Me
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="default" size="lg" className="mb-4">
                  Meet the Team
                </Button>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Want to Join?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We are always looking for passionate and entrepreneurial people who can contribute to our purpose!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/careers">View Open Positions</Link>
                    </Button>
                    <Button variant="default" size="lg" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trade 4 Me Headquarters
              </h2>
              <div className="space-y-2 mb-8">
                <p className="text-lg">123 Trade Street</p>
                <p className="text-lg">District 1, Ho Chi Minh City, Vietnam</p>
                <p className="text-lg">+84 90 123 4567</p>
                <p className="text-lg">
                  <a href="mailto:info@trade4me.com" className="hover:underline">
                    info@trade4me.com
                  </a>
                </p>
              </div>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
