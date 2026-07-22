import { Link } from "wouter";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { CraneLogo } from "@/components/ui/crane-logo";

/* ── Inline kitenge SVG as data URI for the background ── */
const KITENGE_BG_ID = "footer-kitenge-bg";

function KitengeBackground() {
  const base = "#1A0E06";
  const accent = "#C8922A";
  const secondary = "#8C5A1E";

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.18 }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={KITENGE_BG_ID}
          x="0" y="0"
          width="63" height="63"
          patternUnits="userSpaceOnUse"
        >
          <rect width="63" height="63" fill={base} />
          <polygon points="31.5,6 57,31.5 31.5,57 6,31.5" fill="none" stroke={accent} strokeWidth="1.5" />
          <polygon points="31.5,14 49,31.5 31.5,49 14,31.5" fill="none" stroke={secondary} strokeWidth="0.8" />
          <polygon points="31.5,21 42,31.5 31.5,42 21,31.5" fill={base} stroke={secondary} strokeWidth="0.4" />
          <circle cx="31.5" cy="31.5" r="5.5" fill={accent} opacity="0.7" />
          <circle cx="31.5" cy="31.5" r="2.5" fill={base} />
          <circle cx="31.5" cy="31.5" r="1.2" fill={secondary} />
          <circle cx="0"  cy="0"  r="9" fill="none" stroke={secondary} strokeWidth="0.8" opacity="0.5" />
          <circle cx="63" cy="0"  r="9" fill="none" stroke={secondary} strokeWidth="0.8" opacity="0.5" />
          <circle cx="0"  cy="63" r="9" fill="none" stroke={secondary} strokeWidth="0.8" opacity="0.5" />
          <circle cx="63" cy="63" r="9" fill="none" stroke={secondary} strokeWidth="0.8" opacity="0.5" />
          <ellipse cx="31.5" cy="3"    rx="3.5" ry="2" fill={secondary} opacity="0.4" />
          <ellipse cx="31.5" cy="60"   rx="3.5" ry="2" fill={secondary} opacity="0.4" />
          <ellipse cx="3"    cy="31.5" rx="2"   ry="3.5" fill={secondary} opacity="0.4" />
          <ellipse cx="60"   cy="31.5" rx="2"   ry="3.5" fill={secondary} opacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${KITENGE_BG_ID})`} />
    </svg>
  );
}

export function Footer() {
  const linkStyle: React.CSSProperties = {
    fontSize: "var(--du-text-small)",
    color: "rgba(247,242,232,0.55)",
    transition: "color var(--du-duration-fast) var(--du-ease-page)",
    display: "block",
    marginBottom: "0.85rem",
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "hsl(var(--foreground))" }}
    >
      {/* Kitenge SVG background */}
      <KitengeBackground />

      {/* Content */}
      <div className="relative z-10">

        {/* ── Top centrepiece — "Travel Like a Ugandan" ── */}
        <div
          className="text-center py-20 border-b"
          style={{ borderColor: "rgba(247,242,232,0.08)" }}
        >
          <p
            className="uppercase mb-4"
            style={{
              fontSize: "var(--du-text-micro)",
              letterSpacing: "var(--du-tracking-micro)",
              color: "rgba(200,146,42,0.7)",
            }}
          >
            The Pearl of Africa · Uganda's Tourism Card Game
          </p>
          <h2
            className="font-serif font-black"
            style={{
              fontSize: "var(--du-text-title)",
              lineHeight: "var(--du-leading-title)",
              letterSpacing: "var(--du-tracking-tight)",
              color: "hsl(var(--background))",
            }}
          >
            Travel Like a Ugandan.
          </h2>
        </div>

        {/* ── Main columns ── */}
        <div className="container mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 group mb-6 w-max" data-testid="footer-logo">
                <CraneLogo size={34} />
                <span
                  className="font-serif font-bold"
                  style={{ fontSize: "var(--du-text-body)", color: "hsl(var(--background))", letterSpacing: "-0.01em" }}
                >
                  Discover Uganda
                </span>
              </Link>
              <p style={{ fontSize: "var(--du-text-small)", color: "rgba(247,242,232,0.5)", lineHeight: "var(--du-leading-body)", maxWidth: 260 }}>
                Uganda's first interactive tourism card game. Play. Discover. Experience the Pearl of Africa.
              </p>
              <div className="flex gap-4 mt-6">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{ color: "rgba(247,242,232,0.4)", transition: "color var(--du-duration-fast) var(--du-ease-page)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(200,146,42,0.9)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,242,232,0.4)")}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3
                className="uppercase mb-6"
                style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)", color: "rgba(200,146,42,0.8)", fontWeight: 600 }}
              >
                Explore
              </h3>
              {[
                { href: "/explore",  label: "Explore Uganda" },
                { href: "/discover", label: "Discover Uganda" },
                { href: "/shop",     label: "Shop the Game" },
                { href: "/partners", label: "Partner With Us" },
                { href: "/about",    label: "Our Story" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(247,242,232,0.9)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,242,232,0.55)")}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Legal */}
            <div>
              <h3
                className="uppercase mb-6"
                style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)", color: "rgba(200,146,42,0.8)", fontWeight: 600 }}
              >
                Legal
              </h3>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
                <a
                  key={label}
                  href="#"
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(247,242,232,0.9)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,242,232,0.55)")}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Contact + newsletter */}
            <div>
              <h3
                className="uppercase mb-6"
                style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)", color: "rgba(200,146,42,0.8)", fontWeight: 600 }}
              >
                Contact
              </h3>
              {[
                "hello@discoveruganda.com",
                "+256 700 000 000",
                "Plot 12, Acacia Avenue, Kololo, Kampala",
              ].map((line) => (
                <p key={line} style={{ ...linkStyle, marginBottom: "0.6rem" }}>
                  {line}
                </p>
              ))}

              {/* Newsletter */}
              <div className="mt-8">
                <p
                  className="uppercase mb-3"
                  style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)", color: "rgba(200,146,42,0.8)", fontWeight: 600 }}
                >
                  New Cards in Your Inbox
                </p>
                <form
                  className="flex"
                  onSubmit={(e) => e.preventDefault()}
                  style={{ borderBottom: "1px solid rgba(247,242,232,0.2)" }}
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    data-testid="footer-newsletter-input"
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      padding: "10px 0",
                      fontSize: "var(--du-text-small)",
                      fontFamily: "var(--du-font-body)",
                      color: "hsl(var(--background))",
                    }}
                  />
                  <button
                    type="submit"
                    data-testid="footer-newsletter-submit"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "10px 0 10px 12px",
                      fontSize: "var(--du-text-micro)",
                      letterSpacing: "var(--du-tracking-label)",
                      textTransform: "uppercase",
                      color: "rgba(200,146,42,0.8)",
                      fontFamily: "var(--du-font-body)",
                      fontWeight: 600,
                    }}
                  >
                    Subscribe →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(247,242,232,0.08)" }}
        >
          <p style={{ fontSize: "var(--du-text-micro)", color: "rgba(247,242,232,0.3)", letterSpacing: "0.04em" }}>
            © {new Date().getFullYear()} Discover Uganda. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "var(--du-text-micro)",
              letterSpacing: "var(--du-tracking-label)",
              textTransform: "uppercase",
              color: "rgba(200,146,42,0.5)",
            }}
          >
            Made in Uganda
          </p>
        </div>
      </div>
    </footer>
  );
}
