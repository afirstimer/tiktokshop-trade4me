import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <span className="font-semibold bg-primary-foreground/20 px-2 py-0.5 rounded mr-2">NEW</span>
        Automated trading solution for every investor
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/trade4me_logo.png" 
              alt="Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-primary">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <NavigationMenuLink asChild>
                        <a href="#" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                          <div className="font-semibold text-foreground">Automated Trading</div>
                          <p className="text-sm text-muted-foreground">Smart trading robot 24/7</p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                          <div className="font-semibold text-foreground">Copy Trade</div>
                          <p className="text-sm text-muted-foreground">Copy trades from experts</p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                          <div className="font-semibold text-foreground">API Trading</div>
                          <p className="text-sm text-muted-foreground">Multi-exchange connectivity</p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/services" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      Services
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-primary">
                    Partners
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[300px]">
                      <NavigationMenuLink asChild>
                        <a href="#" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                          <div className="font-semibold text-foreground">Find a Partner</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                          <div className="font-semibold text-foreground">Become a Partner</div>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-primary">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[300px]">
                      <NavigationMenuLink asChild>
                        <a href="#" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                          <div className="font-semibold text-foreground">User Guide</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                          <div className="font-semibold text-foreground">API Documentation</div>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Globe size={16} />
              <span>en</span>
              <ChevronDown size={14} />
            </Button>
            <Button variant="outline">Download</Button>
            <Button variant="hero" size="lg">Get a live demo</Button>
            <Button variant="hero" size="lg">Try for Free</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#" className="block py-2 text-foreground hover:text-primary">Products</a>
            <Link to="/services" className="block py-2 text-foreground hover:text-primary">Services</Link>
            <a href="#" className="block py-2 text-foreground hover:text-primary">Partners</a>
            <a href="#" className="block py-2 text-foreground hover:text-primary">Resources</a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Globe size={16} />
                <span>Language: English</span>
              </Button>
              <Button variant="outline" className="w-full">Download</Button>
              <Button variant="hero" className="w-full">Get a live demo</Button>
              <Button variant="hero" className="w-full">Try for Free</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
