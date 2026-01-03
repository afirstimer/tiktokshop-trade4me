import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Code,
  ArrowRight,
  Mail
} from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Backend Developer",
      department: "Engineering",
      location: "New York, USA / Remote",
      type: "Full-time",
      description: "We're looking for an experienced backend developer to join our team and help build the next generation of trading platforms.",
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our frontend team to create beautiful and intuitive user interfaces for our trading platform.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "New York, USA / Remote",
      type: "Full-time",
      description: "Help us scale our infrastructure and ensure our platform runs smoothly for thousands of users.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "New York, USA",
      type: "Full-time",
      description: "Lead product strategy and work closely with engineering and design teams to deliver exceptional products.",
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create user-centered designs that make trading accessible and enjoyable for everyone.",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "New York, USA / Remote",
      type: "Full-time",
      description: "Drive our marketing efforts and help grow our community of traders and developers.",
    },
  ];

  const values = [
    {
      icon: Code,
      title: "Innovation",
      description: "We encourage creative thinking and experimentation. Your ideas matter here.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Work with talented people from around the world in a supportive environment.",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We believe in sustainable work practices and flexible schedules.",
    },
    {
      icon: Briefcase,
      title: "Growth",
      description: "Continuous learning opportunities and career development support.",
    },
  ];

  const benefits = [
    "Competitive salary and equity",
    "Health, dental, and vision insurance",
    "Flexible working hours and remote work",
    "Professional development budget",
    "Generous vacation and sick leave",
    "Latest hardware and software tools",
    "Team building events and retreats",
    "Open source contribution time",
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
                <li className="text-foreground">Careers</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Join the Trade 4 Me Team
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We're building the future of automated trading platforms. If you're passionate about technology, 
                open source, and making trading accessible to everyone, we'd love to hear from you.
              </p>
              <Button variant="hero" size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  <Mail size={18} />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Why Work at Trade 4 Me?
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                We're not just building software—we're building a community
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 text-center"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Benefits & Perks
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-card border border-border rounded-lg p-4"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Open Positions
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Check out our current job openings
              </p>

              <div className="space-y-6">
                {openPositions.map((position, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge variant="default">{position.department}</Badge>
                          <Badge variant="outline">{position.type}</Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{position.type}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {position.description}
                        </p>
                        <Button variant="outline" size="sm" className="gap-2">
                          View Details
                          <ArrowRight size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {openPositions.length === 0 && (
                <div className="text-center py-12">
                  <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground mb-4">
                    No open positions at the moment
                  </p>
                  <p className="text-muted-foreground mb-6">
                    But we're always looking for talented people! Send us your resume and we'll keep you in mind for future opportunities.
                  </p>
                  <Button variant="default" size="lg" asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See a Role That Fits?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                We're always looking for passionate and entrepreneurial people who can contribute to our purpose. 
                Even if there's no specific role listed, we'd love to hear from you!
              </p>
              <Button variant="heroOutline" size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  <Mail size={18} />
                  Send Us Your Resume
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;

