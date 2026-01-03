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
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  builtBy: string;
  country: string;
  category: string;
  tags: string[];
  product: "Plus" | "Standard";
  description: string;
}

const CaseStudies = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const studiesPerPage = 9;

  const allCaseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Natura Selection – Beauty Retailer powered by Trade 4 Me",
      company: "Natura Selection",
      builtBy: "EMAGMA",
      country: "France",
      category: "Beauty",
      tags: ["B2B", "B2C"],
      product: "Plus",
      description: "Leading beauty retailer transformed their trading operations with Trade 4 Me, achieving greater agility and improved front-end and back-end performance.",
    },
    {
      id: 2,
      title: "Jagermeister – Premium Spirits Trading Platform",
      company: "Jagermeister",
      builtBy: "BitBag",
      country: "Germany",
      category: "Food",
      tags: ["B2C"],
      product: "Standard",
      description: "Premium spirits brand enhanced their trading capabilities with a modern, scalable platform.",
    },
    {
      id: 3,
      title: "Relais & Châteaux – Luxury Hospitality Trading",
      company: "Relais & Châteaux",
      builtBy: "WIDE",
      country: "France",
      category: "Travel",
      tags: ["B2B", "B2C"],
      product: "Plus",
      description: "Luxury hospitality group streamlined their investment operations with Trade 4 Me.",
    },
    {
      id: 4,
      title: "HBX – Fashion E-commerce Trading Platform",
      company: "HBX",
      builtBy: "AKAWAKA",
      country: "Global",
      category: "Fashion",
      tags: ["B2C", "Headless"],
      product: "Standard",
      description: "Fashion e-commerce platform optimized their trading strategy with Trade 4 Me's headless architecture.",
    },
    {
      id: 5,
      title: "Reiss – British Fashion Brand Digital Transformation",
      company: "Reiss",
      builtBy: "Monsieur Biz",
      country: "United Kingdom",
      category: "Fashion",
      tags: ["B2C", "Migrated from Magento"],
      product: "Plus",
      description: "British fashion brand accelerated their digital transformation with Trade 4 Me.",
    },
    {
      id: 6,
      title: "GWO – Educational Publishing Trading Platform",
      company: "GWO",
      builtBy: "sabat24",
      country: "Poland",
      category: "Educational",
      tags: ["B2B", "B2C"],
      product: "Standard",
      description: "Educational publishing company powered their trading operations with Trade 4 Me.",
    },
    {
      id: 7,
      title: "MotoByCAT – Motorcycle Transport Platform",
      company: "MotoByCAT",
      builtBy: "Synolia",
      country: "France",
      category: "Automotive",
      tags: ["B2B", "B2C", "Subscription"],
      product: "Plus",
      description: "Motorcycle transport company modernized their trading platform with Trade 4 Me.",
    },
    {
      id: 8,
      title: "Gruchy Combustibles – Heating Fuel Delivery",
      company: "Gruchy Combustibles",
      builtBy: "WEEBY",
      country: "France",
      category: "Logistics & Delivery",
      tags: ["B2B"],
      product: "Standard",
      description: "Heating fuel delivery company modernized their operations with Trade 4 Me.",
    },
    {
      id: 9,
      title: "Marseille Provence Airport – eCommerce Migration",
      company: "Marseille Provence Airport",
      builtBy: "ACSEO",
      country: "France",
      category: "Ticket Booking",
      tags: ["B2C", "Migrated from Magento"],
      product: "Plus",
      description: "Airport migrated from Magento 1 to Trade 4 Me for their eCommerce operations.",
    },
    {
      id: 10,
      title: "Tisséo Voyageurs – Public Transportation Platform",
      company: "Tisséo Voyageurs",
      builtBy: "EMAGMA",
      country: "France",
      category: "Transport",
      tags: ["B2C"],
      product: "Standard",
      description: "Public transportation company built their trading platform on Trade 4 Me.",
    },
  ];

  const countries = [
    "All Countries",
    "France",
    "Germany",
    "Poland",
    "United Kingdom",
    "Global",
    "USA",
  ];

  const categories = [
    "All Categories",
    "Beauty",
    "Food",
    "Travel",
    "Fashion",
    "Educational",
    "Automotive",
    "Logistics & Delivery",
    "Ticket Booking",
    "Transport",
  ];

  const tags = [
    "All Tags",
    "B2B",
    "B2C",
    "Headless",
    "Migrated from Magento",
    "Subscription",
  ];

  const products = ["All Products", "Plus", "Standard"];

  // Filter case studies
  const filteredStudies = allCaseStudies.filter((study) => {
    const countryMatch =
      selectedCountry === "all" ||
      selectedCountry === "All Countries" ||
      study.country === selectedCountry;

    const categoryMatch =
      selectedCategory === "all" ||
      selectedCategory === "All Categories" ||
      study.category === selectedCategory;

    const tagMatch =
      selectedTag === "all" ||
      selectedTag === "All Tags" ||
      study.tags.includes(selectedTag);

    const productMatch =
      selectedProduct === "all" ||
      selectedProduct === "All Products" ||
      study.product === selectedProduct;

    return countryMatch && categoryMatch && tagMatch && productMatch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredStudies.length / studiesPerPage);
  const startIndex = (currentPage - 1) * studiesPerPage;
  const endIndex = startIndex + studiesPerPage;
  const currentStudies = filteredStudies.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
                <li className="text-foreground">Case studies</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Case studies
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover how leading companies have transformed their trading operations with Trade 4 Me.
              </p>
            </div>
          </div>
        </section>

        {/* Company Logos */}
        <section className="py-8 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <p className="text-center text-muted-foreground mb-6">Companies that trusted Trade 4 Me</p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                {["Relais&Chateaux", "HBX", "Reiss", "Jagermeister", "Dr. Oetker"].map((brand, index) => (
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

        {/* Filter Section */}
        <section className="py-8 bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl">
              <h2 className="text-lg font-semibold text-foreground mb-6">FILTERS</h2>
              <div className="grid md:grid-cols-4 gap-4">
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
                    Category
                  </label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="choose" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category === "All Categories" ? "all" : category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tags
                  </label>
                  <Select value={selectedTag} onValueChange={setSelectedTag}>
                    <SelectTrigger>
                      <SelectValue placeholder="choose" />
                    </SelectTrigger>
                    <SelectContent>
                      {tags.map((tag) => (
                        <SelectItem key={tag} value={tag === "All Tags" ? "all" : tag}>
                          {tag}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Product
                  </label>
                  <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                    <SelectTrigger>
                      <SelectValue placeholder="choose" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem key={product} value={product === "All Products" ? "all" : product}>
                          {product}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Case studies ({filteredStudies.length})
              </h2>

              <div className="space-y-6">
                {currentStudies.map((study) => (
                  <div
                    key={study.id}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge variant="outline">{study.country}</Badge>
                          <Badge variant="outline">{study.category}</Badge>
                          {study.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                          <Badge variant="default">{study.product}</Badge>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {study.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          built by {study.builtBy}
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {study.description}
                        </p>
                        <Button variant="outline" size="sm" className="gap-2">
                          read case study
                          <ArrowRight size={16} />
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

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A new way to build custom trading platforms
              </h2>
              <Button variant="heroOutline" size="lg">
                Try Trade 4 Me
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;

