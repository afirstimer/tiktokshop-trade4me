import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@trade4me.com",
      link: "mailto:info@trade4me.com",
    },
    {
      icon: Phone,
      title: "Hotline",
      content: "+84 90 123 4567",
      link: "tel:+84901234567",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Trade Street, District 1, Ho Chi Minh City",
      link: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 8:00 - 17:30 | Sat: 8:00 - 12:00",
      link: "#",
    },
  ];

  const departments = [
    {
      title: "Sales Department",
      email: "sales@trade4me.com",
      description: "Request a quote or consultation on import-export services?",
    },
    {
      title: "Customer Support",
      email: "support@trade4me.com",
      description: "Need support with procedures or have questions?",
    },
    {
      title: "Media & Press",
      email: "media@trade4me.com",
      description: "Media inquiries and press releases",
    },
    {
      title: "Careers",
      email: "careers@trade4me.com",
      description: "Join our team",
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
                <li className="text-foreground">Contact</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a question or want to learn more about our import-export services? 
                We're always ready to help. Contact us and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Departments */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="e.g., Export quote request"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="mt-2"
                        placeholder="Describe your import-export needs in detail..."
                      />
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="gap-2">
                      <Send size={18} />
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Departments */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Contact by Department
                  </h2>
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <div
                        key={index}
                        className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                      >
                        <h3 className="font-semibold text-foreground mb-2">{dept.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{dept.description}</p>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-primary hover:underline text-sm font-medium"
                        >
                          {dept.email}
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Office Location */}
                  <div className="mt-8 bg-secondary/30 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-4">Visit Our Office</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>123 Trade Street</p>
                      <p>District 1, Ho Chi Minh City, Vietnam</p>
                      <p className="mt-4">
                        <strong className="text-foreground">Business Hours:</strong>
                      </p>
                      <p>Monday - Friday: 8:00 - 17:30</p>
                      <p>Saturday: 8:00 - 12:00</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
