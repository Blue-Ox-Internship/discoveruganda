import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CraneLogo } from "@/components/ui/crane-logo";
import { useAuth } from "@/contexts/auth-context";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const links = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/discover", label: "Discover Uganda" },
    { href: "/shop", label: "Shop" },
    { href: "/partners", label: "Partners" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" data-testid="nav-logo">
          <CraneLogo size={40} className="transition-opacity group-hover:opacity-85" />
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground">Discover Uganda</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-[13px] font-medium transition-colors hover:text-primary relative h-full flex items-center ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></span>
                )}
              </Link>
            )
          })}
          <Button asChild variant="default" className="rounded-full px-6" data-testid="nav-cta">
            <Link href="/shop">Buy the Game</Link>
          </Button>
          {user ? (
            <Link
              href="/profile"
              className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 hover:opacity-85 transition-opacity"
              title={user.name}
              data-testid="nav-user-avatar"
            >
              <span className="text-primary-foreground font-serif font-bold text-sm">
                {user.name[0].toUpperCase()}
              </span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-sign-in"
            >
              Sign In
            </Link>
          )}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="nav-mobile-toggle"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-4 shadow-lg flex flex-col gap-4">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-lg font-medium rounded-md ${
                location === link.href ? "bg-primary/10 text-primary border-l-2 border-primary" : "text-foreground hover:bg-muted"
              }`}
              data-testid={`nav-mobile-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="default" className="w-full mt-2" data-testid="nav-mobile-cta">
            <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Buy the Game</Link>
          </Button>
          {user ? (
            <div className="flex items-center justify-between px-4 py-3 border-t border-border mt-2">
              <Link
                href="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground"
              >
                {user.name}
              </Link>
              <button
                onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-lg font-medium rounded-md text-foreground hover:bg-muted"
              data-testid="nav-mobile-sign-in"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
