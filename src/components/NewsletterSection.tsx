import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay Updated with Latest News
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to receive news about import-export regulations, customs procedures, and the latest updates.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Your email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12"
                required
              />
              <Button variant="hero" size="lg" type="submit">
                Subscribe
              </Button>
            </div>

            <div className="flex items-start gap-3 text-left">
              <Checkbox id="terms" className="mt-1" />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                By completing and submitting this form, you understand and agree that your use of Trade 4 Me website 
                is subject to{" "}
                <Link to="/terms" className="text-primary hover:underline">Terms of Use</Link> and{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
