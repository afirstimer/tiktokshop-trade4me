import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "New Import-Export Regulations Update 2025",
      date: "17.12.2024",
    },
    {
      title: "Guide to Exporting Agricultural Products to EU",
      date: "15.12.2024",
    },
    {
      title: "Changes in Import Tax Rates for Certain Products",
      date: "09.12.2024",
    },
    {
      title: "Tips for Fast Customs Procedure Processing",
      date: "08.12.2024",
    },
    {
      title: "Understanding Incoterms 2020 for Businesses",
      date: "17.11.2024",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-0">
            News & Knowledge
          </h2>
          <div className="flex gap-4">
            <Button variant="default" asChild>
              <Link to="/blog">Blog</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/events">Events</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Link
              key={index}
              to="/blog"
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays size={16} />
                <span>{item.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
