import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "Trade 4 Me Month: December 🎄",
      date: "17.12.2024",
    },
    {
      title: "Security Update: Version 2.0.1",
      date: "15.12.2024",
    },
    {
      title: "2024 Retrospective and a Glimpse into the Future 🔜",
      date: "09.12.2024",
    },
    {
      title: "Trade 4 Me Partner Program 🏆",
      date: "08.12.2024",
    },
    {
      title: "Trade 4 Me Month: November 🍂",
      date: "17.11.2024",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-0">
            Latest News
          </h2>
          <div className="flex gap-4">
            <Button variant="default">Blog</Button>
            <Button variant="outline">Events</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <a
              key={index}
              href="#"
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays size={16} />
                <span>{item.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
