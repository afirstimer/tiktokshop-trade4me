import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Code, 
  Users, 
  Briefcase, 
  GraduationCap,
  MessageSquare,
  Mail
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: CheckCircle2,
      title: "Migration Audit",
      description: "If you're planning to upgrade your trading platform, our migration audit offers everything you need to prepare for a smooth transition. We conduct a detailed analysis of your codebase, infrastructure, and modules to identify potential challenges and areas for improvement.",
      features: [
        "Detailed codebase analysis",
        "Infrastructure review",
        "Comprehensive migration report",
        "Step-by-step migration plan"
      ]
    },
    {
      icon: MessageSquare,
      title: "Professional Consulting Services",
      description: "Our expert consultants provide valuable guidance and support across various aspects of your trading projects. We conduct architecture workshops to help you design scalable and efficient trading solutions.",
      features: [
        "Architecture workshops",
        "Code review services",
        "Team coaching",
        "Best practices guidance"
      ]
    },
    {
      icon: Briefcase,
      title: "Project Development Takeover",
      description: "If you have an ongoing project that needs a fresh perspective or just more manpower, we're here to help. We seamlessly integrate into your existing development process, taking over the project to ensure smooth progress and successful completion.",
      features: [
        "Seamless project integration",
        "Code review & optimization",
        "Troubleshooting services",
        "Project management"
      ]
    },
    {
      icon: Code,
      title: "Fresh Trading Project Development Assistance",
      description: "Whether you're starting a new trading project or looking to revamp your existing platform, our dedicated team is here to support you. We offer comprehensive assistance in every phase of your project.",
      features: [
        "Requirements gathering",
        "Architecture design",
        "Implementation & testing",
        "Deployment support"
      ]
    },
    {
      icon: Users,
      title: "Extra Developer(s) for an Agency",
      description: "At Trade 4 Me we understand the importance of having the right resources to execute successful projects. That's why we will help you find the specialists that you require, so you can scale up your development team as needed.",
      features: [
        "Scalable team resources",
        "Expert developers",
        "Flexible engagement",
        "Project-specific expertise"
      ]
    },
    {
      icon: Users,
      title: "Extra Developer(s) for a Merchant",
      description: "We understand your needs and want your trading platforms to succeed by providing the necessary resources on time. Whether you need short-term assistance or long-term support, we're here to help you maximize the potential of your trading business.",
      features: [
        "Short-term & long-term support",
        "Dedicated developers",
        "Timely resource allocation",
        "Business growth support"
      ]
    },
    {
      icon: GraduationCap,
      title: "Professional Trainings",
      description: "Whether you prefer remote or on-site training, our experienced trainers deliver comprehensive programs tailored to your team's needs. We cover a wide range of topics, including platform architecture, customization, module development, and best practices.",
      features: [
        "Remote & on-site options",
        "Comprehensive programs",
        "Architecture & customization",
        "Best practices training"
      ]
    }
  ];

  const stats = [
    { value: "78", label: "Partners" },
    { value: "6000+", label: "Developers" },
    { value: "2850+", label: "Projects" }
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
                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                <li>/</li>
                <li className="text-foreground">Professional Services</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Professional Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Trade 4 Me, we understand that trading platform projects are complex and often challenging. 
                That's why we offer a comprehensive range of services to support you at every stage of your journey, 
                ensuring a smooth and successful implementation. From initial consultations and strategic planning to 
                design, development, and ongoing support, we've got your back!
              </p>
              <Button size="lg">
                Ask for details
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Introduction */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We would like to provide you with a variety of services to support your trading endeavours. 
                Our expert team offers tailored solutions and support to help you achieve success. Whether you need 
                consulting, project development assistance, extra developer(s), or professional training for your teams, 
                we are here to assist you. With our deep understanding of trading platforms, we strive to deliver 
                exceptional services that meet your unique requirements and drive growth for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Contact Us
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To learn more about how our services can benefit your trading business, get in touch with us today. 
                Contact our team to discuss your project requirements and explore how we can assist you. We look forward 
                to helping you achieve your trading goals and skyrocket your business!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero">
                  <Mail className="mr-2" size={18} />
                  Contact Us
                </Button>
                <Button size="lg" variant="outline">
                  Get a live demo
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

export default Services;

