import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Mail, Download } from "lucide-react";

interface Partner {
  id: number;
  name: string;
  location: string;
  badges: string[];
  description: string;
  type: "Global Solution Partner" | "Leading Solution Partner" | "Premium Solution Partner" | "Strategic Technology Partner";
  countries: string[];
  partnerTypes: string[];
  certifications: string[];
}

const FindAPartner = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedPartnerType, setSelectedPartnerType] = useState<string>("all");
  const [selectedCertification, setSelectedCertification] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const partnersPerPage = 9;

  // Mock data - in real app, this would come from API
  const allPartners: Partner[] = [
    {
      id: 1,
      name: "BitBag",
      location: "Global",
      badges: ["Global Solution Partner", "Leading Solution Partner", "Officially Trained", "Core Contributor", "Extension Artisan", "Active Open Source Contributor"],
      description: "BitBag is the leading and largest Trade 4 Me partner, having worked with the platform since its early stages in 2016. Over the years, they have successfully delivered over 100 projects worldwide…",
      type: "Global Solution Partner",
      countries: ["Global"],
      partnerTypes: ["Implementation Partner", "Extension Partner"],
      certifications: ["Core Contributor", "Extension Artisan", "Active Open Source Contributor", "Officially Trained"],
    },
    {
      id: 2,
      name: "WIDE",
      location: "France, Switzerland",
      badges: ["Leading Solution Partner"],
      description: "We help brands and companies to better understand their customers, prospects, and employees expectations. To do so, we use data and field and sociologic studies. Based on these informations, we explore…",
      type: "Leading Solution Partner",
      countries: ["France", "Switzerland"],
      partnerTypes: ["Implementation Partner"],
      certifications: [],
    },
    {
      id: 3,
      name: "Mollie",
      location: "Austria, Belgium, France, Germany, Netherlands, Poland, Switzerland",
      badges: ["Strategic Technology Partner"],
      description: "As the Trade 4 Me Strategic Technology Partner, Mollie is our preferred payment solution provider for merchants in Benelux, Germany, and France. Mollie is the most popular (installed over 6000 times) and…",
      type: "Strategic Technology Partner",
      countries: ["Austria", "Belgium", "France", "Germany", "Netherlands", "Poland", "Switzerland"],
      partnerTypes: ["Technology Partner"],
      certifications: [],
    },
    {
      id: 4,
      name: "Upsun",
      location: "Global",
      badges: ["Strategic Technology Partner"],
      description: "Upsun is a modern Platform-as-a-Service (PaaS) solution that empowers businesses to leverage the cloud environment while maintaining full control over their code and data. It enables seamless project deployment and…",
      type: "Strategic Technology Partner",
      countries: ["Global"],
      partnerTypes: ["Hosting partner", "Technology Partner"],
      certifications: [],
    },
    {
      id: 5,
      name: "PayPal",
      location: "Global",
      badges: ["Strategic Technology Partner"],
      description: "Thanks to the Strategic Partnership with PayPal, Trade 4 Me Core Team has developed and now maintains an official plugin for PayPal Commerce Platform – the newest and most advanced of PayPal…",
      type: "Strategic Technology Partner",
      countries: ["Global"],
      partnerTypes: ["Technology Partner"],
      certifications: [],
    },
    {
      id: 6,
      name: "Monsieur Biz",
      location: "France",
      badges: ["Officially Trained", "Extension Artisan", "Premium Solution Partner", "Active Open Source Contributor"],
      description: "Monsieur Biz, an expert web agency in PHP that focuses on delivering high-quality e-commerce websites. Our specialization in e-commerce allows us to carry out technical audit, migration, and maintenance missions…",
      type: "Premium Solution Partner",
      countries: ["France"],
      partnerTypes: ["Implementation Partner", "Extension Partner"],
      certifications: ["Officially Trained", "Extension Artisan", "Active Open Source Contributor"],
    },
    {
      id: 7,
      name: "EMAGMA",
      location: "France",
      badges: ["Officially Trained", "Core Contributor", "Extension Artisan", "Premium Solution Partner", "Official Training Partner"],
      description: "EMAGMA is a Premium Trade 4 Me Agency since the very beginning: our first project has been delivered in 2017, even before Trade 4 Me being officially released! We are a small, agile and…",
      type: "Premium Solution Partner",
      countries: ["France"],
      partnerTypes: ["Implementation Partner", "Training Partner", "Extension Partner"],
      certifications: ["Officially Trained", "Core Contributor", "Extension Artisan", "Official Training Partner"],
    },
    {
      id: 8,
      name: "AKAWAKA",
      location: "France",
      badges: ["Officially Trained", "Core Contributor", "Extension Artisan", "Premium Solution Partner"],
      description: "Akawaka is a PHP, Symfony and JS expertise firm. We deliver high quality project using DDD and clean architecture. Trade 4 Me is our main framework for e-commerce which we use on…",
      type: "Premium Solution Partner",
      countries: ["France"],
      partnerTypes: ["Implementation Partner", "Extension Partner"],
      certifications: ["Officially Trained", "Core Contributor", "Extension Artisan"],
    },
    {
      id: 9,
      name: "ACSEO",
      location: "France",
      badges: ["Premium Solution Partner"],
      description: "ACSEO is a French development studio created in 2009 specialized in Web and Mobile development. Our team, based in south of France (Aix-en-Provence, Montpellier) created business app or e-commerce platform…",
      type: "Premium Solution Partner",
      countries: ["France"],
      partnerTypes: ["Implementation Partner"],
      certifications: [],
    },
    {
      id: 10,
      name: "Datasolution",
      location: "France",
      badges: ["Premium Solution Partner"],
      description: "A Trade 4 Me partner since 2019, DATASOLUTION is the B2C/B2B e-Commerce and PIM expert on the market. Our agile approach combines digital, IT, creative, webdesign and digital marketing know-how to serve…",
      type: "Premium Solution Partner",
      countries: ["France"],
      partnerTypes: ["Implementation Partner"],
      certifications: [],
    },
  ];

  const countries = [
    "All Countries",
    "Argentina",
    "Asia",
    "Australia",
    "Austria",
    "Belarus",
    "Belgium",
    "Bulgaria",
    "Canada",
    "Croatia",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "France",
    "Germany",
    "Global",
    "Hong Kong",
    "Hungary",
    "Israel",
    "Italy",
    "Latvia",
    "Lithuania",
    "Mexico",
    "Netherlands",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Romania",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Ukraine",
    "United Kingdom",
    "USA",
    "Worldwide",
  ];

  const partnerTypes = [
    "All Types",
    "Training Partner",
    "Technology Partner",
    "Hosting partner",
    "Implementation Partner",
    "Extension Partner",
  ];

  const certifications = [
    "All Certifications",
    "Active Open Source Contributor",
    "Community Initiative",
    "Community Voice",
    "Core Contributor",
    "Impactful Go-lives",
    "Meetup Hoster",
    "Officially Trained",
    "Plugin Maintainer",
    "Trade 4 Me Plus Expert",
    "Extension Artisan",
    "Official Training Partner",
  ];

  // Filter partners
  const filteredPartners = allPartners.filter((partner) => {
    const countryMatch =
      selectedCountry === "all" ||
      selectedCountry === "All Countries" ||
      partner.countries.includes(selectedCountry) ||
      partner.countries.some((c) => c.toLowerCase().includes(selectedCountry.toLowerCase()));

    const typeMatch =
      selectedPartnerType === "all" ||
      selectedPartnerType === "All Types" ||
      partner.partnerTypes.includes(selectedPartnerType);

    const certMatch =
      selectedCertification === "all" ||
      selectedCertification === "All Certifications" ||
      partner.certifications.includes(selectedCertification) ||
      partner.badges.some((b) => b === selectedCertification);

    return countryMatch && typeMatch && certMatch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPartners.length / partnersPerPage);
  const startIndex = (currentPage - 1) * partnersPerPage;
  const endIndex = startIndex + partnersPerPage;
  const currentPartners = filteredPartners.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getBadgeVariant = (badge: string) => {
    if (badge.includes("Global") || badge.includes("Strategic")) {
      return "default";
    }
    if (badge.includes("Leading") || badge.includes("Premium")) {
      return "secondary";
    }
    return "outline";
  };

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
                <li className="text-foreground">Find a partner</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Find a partner
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Select and contact a partner from our Partner Network and make sure your Trade 4 Me challenge will be taken care of by the most experienced Trade 4 Me devs in the world.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl">
              <h2 className="text-lg font-semibold text-foreground mb-6">FILTERS</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Country
                  </label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger>
                      <SelectValue placeholder="choose" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country === "All Countries" ? "all" : country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Partner type
                  </label>
                  <Select value={selectedPartnerType} onValueChange={setSelectedPartnerType}>
                    <SelectTrigger>
                      <SelectValue placeholder="choose" />
                    </SelectTrigger>
                    <SelectContent>
                      {partnerTypes.map((type) => (
                        <SelectItem key={type} value={type === "All Types" ? "all" : type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Certification
                  </label>
                  <Select value={selectedCertification} onValueChange={setSelectedCertification}>
                    <SelectTrigger>
                      <SelectValue placeholder="choose" />
                    </SelectTrigger>
                    <SelectContent>
                      {certifications.map((cert) => (
                        <SelectItem key={cert} value={cert === "All Certifications" ? "all" : cert}>
                          {cert}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners List */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Partners ({filteredPartners.length})
              </h2>

              <div className="space-y-6">
                {currentPartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {partner.badges.map((badge, index) => (
                            <Badge
                              key={index}
                              variant={getBadgeVariant(badge)}
                              className="text-xs"
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {partner.name} / {partner.location}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {partner.description}
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <a href="#">Details</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft size={16} />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </Button>
                      );
                    } else if (page === currentPage - 2 || page === currentPage + 2) {
                      return <span key={page} className="px-2">…</span>;
                    }
                    return null;
                  })}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight size={16} />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Sections */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Can't choose a Partner */}
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Can't choose a Partner?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Want to discuss more with the vendor?
                </p>
                <Button variant="hero" size="lg">
                  Get in touch
                </Button>
              </div>

              {/* Become a Partner */}
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Want to be among the Trade 4 Me experts listed here?
                </h3>
                <Button variant="outline" size="lg" className="gap-2">
                  <Download size={18} />
                  Download the partner guide
                </Button>
              </div>

              {/* Free Consultation */}
              <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Tell us about your project!</h3>
                <p className="mb-6 opacity-90">
                  Not sure about who's the right partner for you project? Get a free of charge e-commerce consultation with one of our Trade 4 Me Advisor that will help to determine which agency fits the most to your projects needs.
                </p>
                <Button variant="heroOutline" size="lg" className="gap-2">
                  <Mail size={18} />
                  Get a free advise
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

export default FindAPartner;

