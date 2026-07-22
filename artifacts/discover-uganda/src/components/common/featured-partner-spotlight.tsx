import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FeaturedPartner } from "@/data/featured-partners";

const REGION_COLORS: Record<string, string> = {
  C: "#2D6A4F",
  W: "#1B4F8A",
  N: "#E5A020",
  E: "#C0392B",
};

const ROTATE_INTERVAL = 6000;

interface Props {
  partners: FeaturedPartner[];
}

export function FeaturedPartnerSpotlight({ partners }: Props) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % partners.length);
    }, ROTATE_INTERVAL);
  };

  useEffect(() => {
    restart();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [partners.length]);

  if (!partners.length) return null;

  const partner = partners[idx];
  const regionColor = REGION_COLORS[partner.regionCode] ?? "hsl(var(--accent))";

  return (
    <section className="py-28 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section label */}
        <div className="flex items-center justify-between mb-16">
          <p
            className="text-muted-foreground uppercase"
            style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
          >
            Featured Partner
          </p>
          {/* Dot indicators */}
          {partners.length > 1 && (
            <div className="flex gap-2">
              {partners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIdx(i); restart(); }}
                  aria-label={`View partner ${i + 1}`}
                  style={{
                    width: i === idx ? 24 : 8,
                    height: 2,
                    background: i === idx ? "hsl(var(--foreground))" : "hsl(var(--border))",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: `width var(--du-duration-mid) var(--du-ease-page), background var(--du-duration-mid) var(--du-ease-page)`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Partner panel — editorial horizontal layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0"
          >
            {/* Left — text */}
            <div
              className="flex flex-col justify-between py-12 pr-0 lg:pr-20 border-b lg:border-b-0 lg:border-r border-border"
            >
              <div>
                {/* Category + region pill */}
                <div className="flex items-center gap-4 mb-8">
                  <span
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      background: regionColor,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="uppercase text-muted-foreground"
                    style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)" }}
                  >
                    {partner.region} · {partner.category}
                  </span>
                </div>

                <h3
                  className="font-serif font-black text-foreground mb-4"
                  style={{
                    fontSize: "var(--du-text-title)",
                    lineHeight: "var(--du-leading-title)",
                    letterSpacing: "var(--du-tracking-tight)",
                  }}
                >
                  {partner.name}
                </h3>

                <p
                  className="font-serif text-foreground mb-6"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", lineHeight: 1.55, fontStyle: "italic", opacity: 0.7 }}
                >
                  {partner.tagline}
                </p>

                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "var(--du-text-body)", lineHeight: "var(--du-leading-body)", maxWidth: "42ch" }}
                >
                  {partner.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 flex items-center gap-6">
                <a
                  href={partner.ctaUrl}
                  className="inline-block text-[11px] uppercase tracking-[0.14em] font-semibold px-8 py-4 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                  style={{ transition: `all var(--du-duration-fast) var(--du-ease-page)` }}
                >
                  {partner.ctaLabel}
                </a>
                <span
                  className="text-muted-foreground uppercase"
                  style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)" }}
                >
                  Scan the card to unlock
                </span>
              </div>
            </div>

            {/* Right — photo */}
            <div className="relative h-72 lg:h-auto lg:min-h-[420px] overflow-hidden">
              <img
                src={partner.image}
                alt={partner.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transition: "opacity var(--du-duration-slow) var(--du-ease-page)" }}
              />
              {/* Subtle warm vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(247,242,232,0.12) 0%, transparent 40%), linear-gradient(to top, rgba(44,26,14,0.35) 0%, transparent 50%)",
                }}
              />
              {/* "Sponsored" label — honest but minimal */}
              <div
                className="absolute top-4 right-4"
                style={{
                  background: "rgba(44,26,14,0.55)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  padding: "4px 10px",
                }}
              >
                <span
                  className="text-white/60 uppercase"
                  style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)" }}
                >
                  Sponsored
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
