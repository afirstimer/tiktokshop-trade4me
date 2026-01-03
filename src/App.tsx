import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Consulting from "./pages/Consulting";
import Training from "./pages/Training";
import TechnicalSupport from "./pages/TechnicalSupport";
import Blog from "./pages/Blog";
import Documentation from "./pages/Documentation";
import CaseStudies from "./pages/CaseStudies";
import Events from "./pages/Events";
import FindAPartner from "./pages/FindAPartner";
import About from "./pages/About";
import BecomeAPartner from "./pages/BecomeAPartner";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/training" element={<Training />} />
          <Route path="/technical-support" element={<TechnicalSupport />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/find-a-partner" element={<FindAPartner />} />
          <Route path="/about" element={<About />} />
          <Route path="/become-a-partner" element={<BecomeAPartner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
