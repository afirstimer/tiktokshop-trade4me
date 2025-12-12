import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: {
      title: "Product",
      links: [
        { label: "Automated Trading", href: "#" },
        { label: "Copy Trade", href: "#" },
        { label: "API Trading", href: "#" },
      ],
    },
    services: {
      title: "Services",
      links: [
        { label: "Professional Services", href: "/services" },
        { label: "Consulting", href: "/services" },
        { label: "Training", href: "/services" },
        { label: "Technical Support", href: "/services" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Events", href: "#" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Partners", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/trade4me_logo.png" 
                alt="Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6">
              The leading automated trading platform for modern investors.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2025 Trade 4 Me. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
