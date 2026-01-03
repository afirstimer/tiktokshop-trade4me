import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Heart, Code, Globe } from "lucide-react";

const About = () => {
  const history = [
    {
      year: "2010",
      event: "The foundation of Trade 4 Me began when our founder developed the first automated trading platform for a small trading company.",
    },
    {
      year: "2011",
      event: "The platform has been rewritten on top of modern technologies and published as Open Source on GitHub, which marks the beginning of the 'Trade 4 Me' Open Source project.",
    },
    {
      year: "2013",
      event: "With the help of the community, the first pre-ALPHA versions of Trade 4 Me have been developed.",
    },
    {
      year: "2014",
      event: "A software house has been co-founded, which developed custom trading applications on top of Trade 4 Me and supported the Open Source platform itself.",
    },
    {
      year: "2015",
      event: "The team of the software house has expanded and become the foundation for the future Trade 4 Me Team.",
    },
    {
      year: "2016",
      event: "A major rewrite of the platform began, and the first ALPHA & BETA versions have been released.",
    },
    {
      year: "2017",
      event: "The Trade 4 Me Organization has been kickstarted, and the first stable version (v1.0.0) of the platform has been released.",
    },
    {
      year: "2018",
      event: "We have clarified our purpose and ratified our core values. The Trade 4 Me Solution Partner Program launched, and the first agencies joined. Our business tripled, and the team expanded.",
    },
    {
      year: "2019",
      event: "We have evolved our business model and introduced a commercial edition called Trade 4 Me Plus, which was quickly adopted by first Customers!",
    },
    {
      year: "2021",
      event: "We have reached 1 million of installs of the 'trade4me/trade4me' package.",
    },
    {
      year: "2022",
      event: "We have launched Trade 4 Me Conference, a first ever conference fully dedicated to automated trading platforms, attracting a diverse and engaged audience from around the world.",
    },
    {
      year: "2023",
      event: "New management joins Trade 4 Me continuing its vision started in 2011, into the trading platform of 2020s.",
    },
  ];

  const teamMembers = [
    { name: "John Smith", role: "CEO & Founder" },
    { name: "Sarah Johnson", role: "CTO" },
    { name: "Michael Chen", role: "Lead Developer" },
    { name: "Emily Davis", role: "Product Manager" },
    { name: "David Wilson", role: "Senior Developer" },
    { name: "Lisa Anderson", role: "UX Designer" },
    { name: "Robert Brown", role: "DevOps Engineer" },
    { name: "Jennifer Lee", role: "Marketing Director" },
    { name: "James Taylor", role: "Backend Developer" },
    { name: "Maria Garcia", role: "Frontend Developer" },
    { name: "Thomas Martinez", role: "QA Engineer" },
    { name: "Anna White", role: "Community Manager" },
  ];

  const values = [
    {
      icon: Code,
      title: "Open Source and Transparency",
      description: "Our core values center around openness and transparency. Through open-source development, we ensure that our codebase remains accessible to all, encouraging collaboration and innovation. But our commitment to open source extends beyond just the code itself. We promote an open culture where ideas are freely exchanged, knowledge is shared, and challenges are tackled together.",
    },
    {
      icon: Users,
      title: "Power of the Community",
      description: "Trade 4 Me is not just about cutting-edge technology but also about fostering a thriving community. We believe that the collective expertise and diverse perspectives of our community members are the driving force behind our success. We actively involve the community in decision-making processes, roadmap discussions, and development updates. Whether you're a seasoned developer or just starting, you are welcome to join our community and contribute in any way you can.",
    },
    {
      icon: Globe,
      title: "Innovation and Excellence",
      description: "We are committed to providing a transparent development process, welcoming feedback and ideas from everyone involved. Together, we strive to build a modern, user-friendly, and customizable trading solution that empowers businesses of all sizes to succeed in the ever-evolving digital landscape.",
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
                <li className="text-foreground">About</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="text-lg text-muted-foreground mb-6">
                As an organization we have a clear purpose that drives all our activity. It is to create an
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Trading platform for any investment experience
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We aim to shape the future of automated trading, leveraging the strength of open source and the power of community-driven development. Our team ensures that Trade 4 Me as a platform stays up-to-date, innovative, and tailored to the ever-changing needs of modern trading, making it a leading choice for those seeking a customizable and powerful solution.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                History
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Let's go over the timeline of the key events:
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

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
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
                  Meet the team
                </Button>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Want to join?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We are always looking for passionate and entrepreneurial people who can contribute to our purpose!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/careers">View Current Openings</Link>
                    </Button>
                    <Button variant="default" size="lg" asChild>
                      <Link to="/become-a-partner">General Partner Application</Link>
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
                Trade 4 Me HQ
              </h2>
              <div className="space-y-2 mb-8">
                <p className="text-lg">123 Trading Street</p>
                <p className="text-lg">10001 New York, USA</p>
                <p className="text-lg">+1 (555) 123-4567</p>
                <p className="text-lg">
                  <a href="mailto:contact@trade4me.com" className="hover:underline">
                    contact@trade4me.com
                  </a>
                </p>
              </div>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
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

