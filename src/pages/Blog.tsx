import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight, ExternalLink } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image?: string;
  link?: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock blog posts - in production, this would fetch from RSS or API
  useEffect(() => {
    // Simulate RSS fetch
    setTimeout(() => {
      setPosts([
        {
          id: "1",
          title: "Trade 4 Me Month: December 🎄",
          excerpt: "A comprehensive overview of all the exciting updates, community highlights, and new features released in December.",
          date: "17.12.2024",
          author: "Trade 4 Me Team",
          category: "Updates",
          readTime: "5 min read",
        },
        {
          id: "2",
          title: "Security Update: Version 2.0.1",
          excerpt: "Important security patches and improvements in the latest version of Trade 4 Me. All users are encouraged to update.",
          date: "15.12.2024",
          author: "Security Team",
          category: "Security",
          readTime: "3 min read",
        },
        {
          id: "3",
          title: "2024 Retrospective and a Glimpse into the Future 🔜",
          excerpt: "Looking back at an amazing year of growth, community contributions, and platform improvements. Plus, a sneak peek at what's coming in 2025.",
          date: "09.12.2024",
          author: "Trade 4 Me Team",
          category: "News",
          readTime: "8 min read",
        },
        {
          id: "4",
          title: "Trade 4 Me Partner Program 🏆",
          excerpt: "Learn about our new partner program and how agencies and developers can join our growing network of experts.",
          date: "08.12.2024",
          author: "Partnership Team",
          category: "Partners",
          readTime: "6 min read",
        },
        {
          id: "5",
          title: "Trade 4 Me Month: November 🍂",
          excerpt: "November highlights including new features, community spotlights, and upcoming events.",
          date: "17.11.2024",
          author: "Trade 4 Me Team",
          category: "Updates",
          readTime: "5 min read",
        },
        {
          id: "6",
          title: "Best Practices for Trading Platform Architecture",
          excerpt: "Expert tips and best practices for designing scalable and maintainable trading platform architectures.",
          date: "10.11.2024",
          author: "Engineering Team",
          category: "Technical",
          readTime: "10 min read",
        },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const categories = ["All", "Updates", "Security", "News", "Partners", "Technical"];

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
                <li className="text-foreground">Blog</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Blog
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay updated with the latest news, updates, tutorials, and insights from the Trade 4 Me team and community.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className={category === "All" ? "bg-primary text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading posts...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <CalendarDays size={14} />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="w-full justify-between group">
                        Read More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* RSS Feed Info */}
            <div className="max-w-4xl mx-auto mt-12 bg-secondary/30 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Subscribe to Our Blog
              </h3>
              <p className="text-muted-foreground mb-6">
                Get the latest posts delivered to your feed. RSS feed available for integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="gap-2">
                  <ExternalLink size={16} />
                  RSS Feed
                </Button>
                <Button variant="default" asChild>
                  <Link to="/contact">Subscribe via Email</Link>
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

export default Blog;

