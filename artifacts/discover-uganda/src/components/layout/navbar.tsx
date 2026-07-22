import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { CraneLogo } from "@/components/ui/crane-logo";
import { useAuth } from "@/contexts/auth-context";

export function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/explore", label: "Explore" },
    { href: "/discover", label: "Discover Uganda" },
    { href: "/shop", label: "Shop" },
    { href: "/partners", label: "Partners" },
    { href: "/about", label: "About" },
  ];

  const headerClass = scrolled
    ? "bg-background/96 backdrop-blur-sm border-b border-border/60 shadow-[var(--du-shadow-sm)]"
    : "bg-transparent";

  const logoColor = scrolled ? "text-foreground" : "text-white";
  const linkActive = scrolled ? "text-foreground" : "text-white";
  const linkIdle = scrolled
    ? "text-muted-foreground hover:text-foreground"
    : "text-white/70 hover:text-white";
  const activeLine = scrolled ? "bg-foreground" : "bg-white";
  const ctaClass = scrolled
    ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
    : "border-white/80 text-white hover:bg-white hover:text-foreground";
  const toggleColor = scrolled ? "text-foreground" : "text-white";

  return (
    <header
      className={`fixed top-0 z-50 w-full ${headerClass}`}
      style={{ transition: `background var(--du-duration-mid) var(--du-ease-page), border-color var(--du-duration-mid) var(--du-ease-page)` }}
    >
      <div className="container mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" data-testid="nav-logo">
          <CraneLogo
            size={34}
            className="transition-opacity group-hover:opacity-80"
          />
          <span
            className={`font-serif text-xl font-bold tracking-tight ${logoColor}`}
            style={{ transition: `color var(--du-duration-mid) var(--du-ease-page)` }}
          >
            Discover Uganda
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 h-full">
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[12px] font-medium uppercase tracking-[0.1em] relative h-full flex items-center ${isActive ? linkActive : linkIdle}`}
                style={{ transition: `color var(--du-duration-mid) var(--du-ease-page)` }}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
                {isActive && (
                  <span className={`absolute bottom-0 left-0 w-full ${activeLine}`} style={{ height: "1px" }} />
                )}
              </Link>
            );
          })}

          {/* Buy CTA — sharp bordered */}
          <Link
            href="/shop"
            className={`text-[11px] uppercase tracking-[0.14em] font-semibold px-5 py-2.5 border ${ctaClass}`}
            style={{ transition: `all var(--du-duration-fast) var(--du-ease-page)`, borderWidth: "var(--du-border-mid)" }}
            data-testid="nav-cta"
          >
            Buy the Game
          </Link>

          {/* Auth state */}
          {user ? (
            <Link
              href="/profile"
              className={`w-9 h-9 flex items-center justify-center border font-serif font-bold text-sm shrink-0 ${ctaClass}`}
              style={{ borderWidth: "var(--du-border-mid)", transition: `all var(--du-duration-fast) var(--du-ease-page)` }}
              title={user.name}
              data-testid="nav-user-avatar"
            >
              {user.name[0].toUpperCase()}
            </Link>
          ) : (
            <Link
              href="/login"
              className={`text-[11px] uppercase tracking-[0.1em] font-medium ${linkIdle}`}
              style={{ transition: `color var(--du-duration-mid) var(--du-ease-page)` }}
              data-testid="nav-sign-in"
            >
              Sign In
            </Link>
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 ${toggleColor}`}
          style={{ transition: `color var(--du-duration-mid) var(--du-ease-page)` }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-0.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3.5 text-[13px] uppercase tracking-[0.1em] font-medium border-l-2 ${
                location === link.href
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
              data-testid={`nav-mobile-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-5 pt-5 border-t border-border flex items-center gap-4">
            <Link
              href="/shop"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center text-[11px] uppercase tracking-[0.14em] font-semibold px-5 py-3 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
              style={{ transition: `all var(--du-duration-fast) var(--du-ease-page)` }}
              data-testid="nav-mobile-cta"
            >
              Buy the Game
            </Link>

            {user ? (
              <button
                onClick={() => { logout(); setMenuOpen(false); }}
                className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground"
                style={{ transition: `color var(--du-duration-fast) var(--du-ease-page)` }}
              >
                Sign out
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground"
                style={{ transition: `color var(--du-duration-fast) var(--du-ease-page)` }}
                data-testid="nav-mobile-sign-in"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
