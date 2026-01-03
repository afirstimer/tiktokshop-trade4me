import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  Video,
  Mail
} from "lucide-react";

const Training = () => {
  const trainingTypes = [
    {
      icon: Users,
      title: "On-site Training",
      description: "Bring our trainers to your location for hands-on, personalized training sessions tailored to your team's needs.",
      features: [
        "Customized curriculum",
        "Hands-on exercises",
        "Team-specific focus",
        "Direct Q&A sessions",
      ],
    },
    {
      icon: Video,
      title: "Remote Training",
      description: "Join our online training sessions from anywhere in the world. Interactive sessions with live demonstrations and Q&A.",
      features: [
        "Live interactive sessions",
        "Recorded sessions available",
        "Global accessibility",
        "Flexible scheduling",
      ],
    },
    {
      icon: BookOpen,
      title: "Online Course",
      description: "Self-paced online courses covering Trade 4 Me fundamentals to advanced topics. Learn at your own pace.",
      features: [
        "Self-paced learning",
        "Comprehensive materials",
        "Practical exercises",
        "Certificate of completion",
      ],
    },
    {
      icon: Award,
      title: "Certification Program",
      description: "Become a certified Trade 4 Me developer or architect. Validate your expertise with industry-recognized certification.",
      features: [
        "Official certification",
        "Exam preparation",
        "Industry recognition",
        "Career advancement",
      ],
    },
  ];

  const courses = [
    {
      title: "Trade 4 Me Fundamentals",
      duration: "2 days",
      level: "Beginner",
      description: "Learn the basics of Trade 4 Me platform, architecture, and core concepts.",
    },
    {
      title: "Advanced Trading Strategies",
      duration: "3 days",
      level: "Advanced",
      description: "Deep dive into advanced trading strategies, automation, and optimization techniques.",
    },
    {
      title: "API Development",
      duration: "2 days",
      level: "Intermediate",
      description: "Master Trade 4 Me API development and integration patterns.",
    },
    {
      title: "Platform Customization",
      duration: "3 days",
      level: "Advanced",
      description: "Learn how to customize and extend Trade 4 Me to meet your specific requirements.",
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
                <li>
                  <Link to="/services" className="hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">Training</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Professional Training Programs
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you prefer remote or on-site training, our experienced trainers deliver comprehensive programs tailored to your team's needs. 
                We cover a wide range of topics, including platform architecture, customization, module development, and best practices.
              </p>
              <Button variant="hero" size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  <Mail size={18} />
                  Request Training
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Training Types */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Training Formats
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Choose the training format that works best for your team
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {trainingTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {type.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {type.description}
                      </p>
                      <ul className="space-y-2">
                        {type.features.map((feature, featureIndex) => (
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
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Available Courses
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Comprehensive training programs for all skill levels
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-foreground">{course.title}</h3>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Team's Skills?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Contact us to discuss your training needs and find the perfect program for your team.
              </p>
              <Button variant="heroOutline" size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  <Mail size={18} />
                  Request Training Information
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

export default Training;

