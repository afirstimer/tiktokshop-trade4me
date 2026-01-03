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
import { CalendarDays, MapPin, Clock, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  country: string;
  type: "Conference" | "Meetup" | "Workshop" | "Webinar" | "Hackathon" | "Barcamp" | "Fairs";
  description: string;
}

const Events = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 9;

  const allEvents: Event[] = [
    {
      id: 1,
      title: "Trade 4 Me Conference 🇫🇷",
      date: "17.10.2025",
      endDate: "17.10.2025",
      location: "Lyon, France",
      country: "France",
      type: "Conference",
      description: "The 4th edition of the biggest Trade 4 Me conference in France – don't miss any updates, follow us on social media!",
    },
    {
      id: 2,
      title: "Trade 4 Me Polish Community Meetup",
      date: "21.08.2025",
      endDate: "17.08.2025",
      location: "Opole",
      country: "Poland",
      type: "Meetup",
      description: "Join us for the summer edition of the Trade 4 Me meetup in Opole! Find out more in the details!",
    },
    {
      id: 3,
      title: "Trade 4 Me France Community Meetup 🇫🇷",
      date: "03.07.2025",
      endDate: "03.07.2025",
      location: "Lyon, France",
      country: "France",
      type: "Meetup",
      description: "For the first time, Trade 4 Me is meeting in a stadium! Explore the meetup page to find out what our partners have prepared!",
    },
    {
      id: 4,
      title: "Trade 4 Me Germany Meetup 🇩🇪",
      date: "26.06.2025",
      endDate: "26.06.2025",
      location: "Mannheim, Germany",
      country: "Germany",
      type: "Meetup",
      description: "Join us for a Trade 4 Me Meetup on June 26 in Mannheim, featuring talks from experts and community members!",
    },
    {
      id: 5,
      title: "Trade 4 Me Party 🇫🇷",
      date: "19.06.2025",
      endDate: "19.06.2025",
      location: "27 Rue d'Aubuisson, 31000 Toulouse",
      country: "France",
      type: "Conference",
      description: "Join the French Trade 4 Me community for a full-day event with expert talks, roundtable discussions, collaborative hackathon, and an afterparty.",
    },
    {
      id: 6,
      title: "Trade 4 Me Days",
      date: "22.05.2025",
      endDate: "23.05.2025",
      location: "Paris, France",
      country: "France",
      type: "Conference",
      description: "Trade 4 Me Days 2025 is returning to Paris on May 22-23. The event features conferences from trading experts on the first day, followed by workshops on the second day.",
    },
    {
      id: 7,
      title: "Trade 4 Me US Community Meetup 🗽🇺🇸",
      date: "25.04.2025",
      endDate: "25.04.2025",
      location: "New York, USA",
      country: "USA",
      type: "Meetup",
      description: "The first ever meetup across the ocean organized by our partners!",
    },
    {
      id: 8,
      title: "Trade 4 Me France Community Meetup 🇫🇷",
      date: "17.04.2025",
      endDate: "17.04.2025",
      location: "Montpellier, France",
      country: "France",
      type: "Meetup",
      description: "Trade 4 Me meetup is coming to Montpellier on April 17! Details in the event description.",
    },
    {
      id: 9,
      title: "Meet Trading Poland 🇵🇱",
      date: "14.04.2025",
      endDate: "14.04.2025",
      location: "Warsaw, Poland",
      country: "Poland",
      type: "Conference",
      description: "We're proud to be a contributor of Meet Trading Poland 2025 – you'll be able to meet us there. See you soon!",
    },
    {
      id: 10,
      title: "Payment Partner Developer Meetup 🇳🇱",
      date: "10.04.2025",
      endDate: "10.04.2025",
      location: "Amsterdam, Netherlands",
      country: "Netherlands",
      type: "Meetup",
      description: "Trade 4 Me will be part of the upcoming Developer Meetup in Amsterdam. Our experts will share their perspective on trading platform development.",
    },
  ];

  const countries = [
    "All Countries",
    "France",
    "Germany",
    "Poland",
    "USA",
    "Netherlands",
  ];

  const eventTypes = [
    "All Types",
    "Conference",
    "Meetup",
    "Workshop",
    "Webinar",
    "Hackathon",
    "Barcamp",
    "Fairs",
  ];

  // Filter events
  const filteredEvents = allEvents.filter((event) => {
    const countryMatch =
      selectedCountry === "all" ||
      selectedCountry === "All Countries" ||
      event.country === selectedCountry;

    const typeMatch =
      selectedType === "all" ||
      selectedType === "All Types" ||
      event.type === selectedType;

    return countryMatch && typeMatch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Conference":
        return "default";
      case "Meetup":
        return "secondary";
      case "Workshop":
        return "outline";
      default:
        return "outline";
    }
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
                <li className="text-foreground">Events</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Events
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Participate in the growing community of Trade 4 Me developers and merchants.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl">
              <h2 className="text-lg font-semibold text-foreground mb-6">FILTERS</h2>
              <div className="grid md:grid-cols-2 gap-4">
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
                    Event type
                  </label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="choose" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type === "All Types" ? "all" : type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Past events ({filteredEvents.length})
              </h2>

              <div className="space-y-6">
                {currentEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge variant={getEventTypeColor(event.type)}>
                            {event.type}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <CalendarDays size={16} />
                            <span>
                              {event.date}
                              {event.endDate && event.endDate !== event.date && ` - ${event.endDate}`}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm" className="gap-2">
                            <ExternalLink size={14} />
                            add to Google Calendar
                          </Button>
                          <Button variant="outline" size="sm">
                            details
                          </Button>
                        </div>
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
                Would you like to host an event or user group?
              </h2>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;

