import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { KitengeDivider } from "@/components/ui/kitenge-divider";
import { FeaturedPartnerSpotlight } from "@/components/common/featured-partner-spotlight";
import { destinations } from "@/data/cards";
import { featuredPartners } from "@/data/featured-partners";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const DEAL_EASE = [0.34, 1.56, 0.64, 1] as const;

const cardRotations = [
  { rotate: "var(--du-rotate-a)", y: "var(--du-offset-y-a)", x: -12 },
  { rotate: "var(--du-rotate-b)", y: "0px",                  x: 6  },
  { rotate: "var(--du-rotate-c)", y: "var(--du-offset-y-b)", x: -6 },
  { rotate: "var(--du-rotate-d)", y: "var(--du-offset-y-c)", x: 10 },
];

export default function Home() {
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-col">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative -mt-20 h-screen min-h-[700px] flex flex-col overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-uganda.jpg"
            className="w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/ghypni82/video/upload/q_auto:low,w_1280/discover-uganda/mxqzy3ivqtpxr0vtynic.mp4"
              type="video/mp4"
            />
          </video>
          {/* Warm editorial overlay — gold at top, deep earth at bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(200,146,42,0.18) 0%, transparent 38%, rgba(44,26,14,0.72) 72%, rgba(44,26,14,0.90) 100%)",
            }}
          />
        </div>

        {/* Safe-zone spacer — guarantees content never overlaps the fixed navbar */}
        <div className="relative z-10 flex-grow" style={{ minHeight: "8rem" }} />

        {/* Hero content — left-aligned, anchored to bottom of frame */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-20 md:pb-28">
          <p
            className="text-white/60 uppercase mb-5"
            style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
          >
            The Pearl of Africa · Travel Like a Ugandan
          </p>

          <h1
            className="text-white font-serif font-black max-w-3xl mb-8"
            style={{
              fontSize: "var(--du-text-display)",
              lineHeight: "var(--du-leading-display)",
              letterSpacing: "var(--du-tracking-tight)",
            }}
          >
            Explore Uganda Before You Even Travel
          </h1>

          <p
            className="text-white/75 max-w-lg mb-12"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", lineHeight: 1.6 }}
          >
            A card game that sends you to the real Pearl of Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="inline-block text-[12px] uppercase tracking-[0.14em] font-semibold px-8 py-4 bg-white text-foreground hover:bg-background"
              style={{
                transition: `all var(--du-duration-fast) var(--du-ease-page)`,
                borderWidth: "var(--du-border-mid)",
              }}
              data-testid="hero-cta-buy"
            >
              Buy the Game
            </Link>
            <Link
              href="/partners"
              className="inline-block text-[12px] uppercase tracking-[0.14em] font-semibold px-8 py-4 border-2 border-white/70 text-white hover:bg-white/10"
              style={{ transition: `all var(--du-duration-fast) var(--du-ease-page)` }}
              data-testid="hero-cta-partner"
            >
              Become a Partner
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2 opacity-50">
          <span
            className="text-white uppercase"
            style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
          >
            Scroll
          </span>
          <div className="w-px h-10 bg-white/50" />
        </div>
      </section>

      <KitengeDivider />

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          {/* Vertical label */}
          <div className="flex gap-16 items-start">
            <div className="hidden lg:block">
              <span
                className="block uppercase text-muted-foreground"
                style={{
                  fontSize: "var(--du-text-micro)",
                  letterSpacing: "var(--du-tracking-micro)",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                The Journey
              </span>
            </div>

            <div className="flex-1">
              <h2
                className="font-serif font-black text-foreground mb-20"
                style={{
                  fontSize: "var(--du-text-title)",
                  lineHeight: "var(--du-leading-title)",
                  letterSpacing: "var(--du-tracking-tight)",
                }}
              >
                How It Works
              </h2>

              {/* Steps — staggered, asymmetric */}
              <div className="flex flex-col gap-0">
                {[
                  { step: "01", title: "Draw a Card", body: "Pull a destination, community, or experience card from the deck." },
                  { step: "02", title: "Scan & Discover", body: "Scan the QR code to unlock the real place, its story, and partner offers." },
                  { step: "03", title: "Travel & Experience", body: "Book directly through our partner network and go." },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-8 py-10 border-b border-border"
                    style={{ paddingLeft: idx === 1 ? "clamp(2rem, 8vw, 8rem)" : idx === 2 ? "clamp(1rem, 4vw, 4rem)" : 0 }}
                  >
                    <span
                      className="font-serif font-black text-muted-foreground/20 leading-none shrink-0"
                      style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
                    >
                      {item.step}
                    </span>
                    <div className="pt-3">
                      <h3
                        className="font-serif font-bold text-foreground mb-2"
                        style={{ fontSize: "var(--du-text-heading)", lineHeight: "var(--du-leading-title)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground" style={{ fontSize: "var(--du-text-body)" }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <KitengeDivider />

      {/* ── FEATURED DESTINATIONS ─────────────────────────────────────── */}
      <section className="py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section header — offset, not centered */}
          <div className="flex items-end justify-between mb-20 gap-8">
            <div>
              <p
                className="text-muted-foreground uppercase mb-4"
                style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
              >
                132 cards · 4 regions · 1 extraordinary country
              </p>
              <h2
                className="font-serif font-black text-foreground"
                style={{
                  fontSize: "var(--du-text-title)",
                  lineHeight: "var(--du-leading-title)",
                  letterSpacing: "var(--du-tracking-tight)",
                }}
              >
                Discover the<br />Destinations
              </h2>
            </div>
            <Link
              href="/explore"
              className="hidden md:flex items-center gap-3 text-[12px] uppercase tracking-[0.1em] font-semibold text-muted-foreground hover:text-foreground shrink-0 pb-1"
              style={{ transition: `color var(--du-duration-fast) var(--du-ease-page)` }}
              data-testid="destinations-view-all"
            >
              Full Deck <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Asymmetric card table-spread — face down; hover reveals front and elevates */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-0 md:flex-nowrap md:items-center perspective-[1200px]">
            {destinations.slice(0, 4).map((dest, idx) => {
              const rot = cardRotations[idx];
              const isHovered = hoveredCardIdx === idx;
              return (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 40, x: rot.x * 2 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.12,
                    ease: DEAL_EASE,
                  }}
                  style={{
                    transform: `rotate(${rot.rotate}) translateY(${rot.y})`,
                    zIndex: isHovered ? 10 : (idx % 2 === 0 ? 2 : 1),
                    marginLeft: idx > 0 ? "clamp(-30px, -4vw, -20px)" : 0,
                    transition: "z-index 0ms",
                  }}
                  className="shrink-0 w-[240px] md:w-[22vw] md:max-w-[280px]"
                  onMouseEnter={() => setHoveredCardIdx(idx)}
                  onMouseLeave={() => setHoveredCardIdx(null)}
                >
                  <InteractiveCard
                    frontImage={dest.frontImage}
                    title={dest.title}
                    region={dest.region}
                    regionCode={dest.regionCode}
                    fact={dest.fact}
                    highlights={dest.highlights}
                    description={dest.description}
                    cardType={dest.cardType}
                    defaultFlipped={true}
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 md:hidden text-center">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] font-semibold text-foreground border-b border-foreground pb-0.5"
            >
              Explore Full Deck <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <KitengeDivider />

      {/* ── VALUE PROPOSITION ─────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "hsl(var(--foreground))" }}>
        <div className="container mx-auto px-6 md:px-12">
          <p
            className="uppercase mb-16"
            style={{
              fontSize: "var(--du-text-micro)",
              letterSpacing: "var(--du-tracking-micro)",
              color: "hsl(var(--background) / 0.5)",
            }}
          >
            The Ecosystem
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t"
            style={{ borderColor: "hsl(var(--background) / 0.15)" }}>
            {[
              { stat: "132", label: "Cards in the deck", body: "Destinations, communities, experiences, tastes, journeys, and actions across all four regions." },
              { stat: "QR", label: "Instant access", body: "Scan any card to unlock the real place — its story, location, and partner booking link." },
              { stat: "50+", label: "Partner businesses", body: "Hotels, tour operators, and restaurants already in the game and waiting for your visit." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="py-14 px-8 border-b md:border-b-0 md:border-r"
                style={{ borderColor: "hsl(var(--background) / 0.15)" }}
              >
                <div
                  className="font-serif font-black mb-6"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    color: "hsl(var(--accent))",
                    lineHeight: 1,
                  }}
                >
                  {item.stat}
                </div>
                <div
                  className="font-serif font-bold mb-4"
                  style={{
                    fontSize: "var(--du-text-heading)",
                    color: "hsl(var(--background))",
                    lineHeight: "var(--du-leading-title)",
                  }}
                >
                  {item.label}
                </div>
                <p style={{ fontSize: "var(--du-text-small)", color: "hsl(var(--background) / 0.6)", lineHeight: "var(--du-leading-body)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <KitengeDivider />

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <p
            className="text-muted-foreground uppercase mb-20"
            style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
          >
            From the field
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
            {[
              {
                quote: "I played Discover Uganda at my hotel in Kampala and booked a gorilla trek through a card. Three weeks later I was in Bwindi.",
                name: "Sarah M.",
                origin: "London",
              },
              {
                quote: "We placed the game in every room and saw a 30% increase in restaurant bookings directly from QR scans.",
                name: "Hotel GM",
                origin: "Kampala Serena",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="border-l-2 pl-8 py-2"
                style={{ borderColor: "var(--color-accent)" }}
              >
                <p
                  className="font-serif text-foreground mb-8"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", lineHeight: 1.6 }}
                >
                  "{t.quote}"
                </p>
                <div>
                  <span
                    className="font-semibold text-foreground uppercase"
                    style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)" }}
                  >
                    {t.name}
                  </span>
                  <span
                    className="text-muted-foreground ml-3"
                    style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
                  >
                    · {t.origin}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PARTNER SPOTLIGHT ───────────────────────────────── */}
      {featuredPartners.length > 0 && (
        <FeaturedPartnerSpotlight partners={featuredPartners} />
      )}

      <KitengeDivider />

      {/* ── PARTNERS CTA ─────────────────────────────────────────────── */}
      <section className="py-28 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <p
                className="text-muted-foreground uppercase mb-6"
                style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
              >
                Join the Platform
              </p>
              <h2
                className="font-serif font-black text-foreground mb-8"
                style={{
                  fontSize: "var(--du-text-title)",
                  lineHeight: "var(--du-leading-title)",
                  letterSpacing: "var(--du-tracking-tight)",
                }}
              >
                Hotels, tour operators, restaurants — already in the game.
              </h2>
              <p
                className="text-muted-foreground mb-12"
                style={{ fontSize: "var(--du-text-body)", lineHeight: "var(--du-leading-body)", maxWidth: "38ch" }}
              >
                Put your brand directly into the hands of thousands of future travellers. Secure your placement in the next edition.
              </p>
              <Link
                href="/partners"
                className="inline-block text-[12px] uppercase tracking-[0.14em] font-semibold px-8 py-4 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                style={{ transition: `all var(--du-duration-fast) var(--du-ease-page)` }}
                data-testid="home-partner-btn"
              >
                Partner With Us
              </Link>
            </div>

            <div className="flex flex-col gap-0 border-t border-border">
              {[
                { label: "Luxury Lodges",  count: "15+" },
                { label: "Tour Operators", count: "20+" },
                { label: "Restaurants",    count: "12+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-6 border-b border-border"
                >
                  <span
                    className="font-serif font-bold text-foreground"
                    style={{ fontSize: "var(--du-text-heading)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="font-serif font-black"
                    style={{ fontSize: "var(--du-text-heading)", color: "var(--color-accent)" }}
                  >
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────────── */}
      <section
        className="py-20 border-t border-border"
        style={{ background: "hsl(var(--muted))" }}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-2xl">
          <h2
            className="font-serif font-bold text-foreground mb-3"
            style={{ fontSize: "var(--du-text-heading)", lineHeight: "var(--du-leading-title)" }}
          >
            New cards. New destinations.<br />New deals — in your inbox.
          </h2>
          <p className="text-muted-foreground mb-8" style={{ fontSize: "var(--du-text-small)" }}>
            No noise. Just what matters.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Your email address"
              className="h-13 text-base flex-1 border-2 border-border bg-background focus:border-foreground"
              style={{ transition: `border-color var(--du-duration-fast) var(--du-ease-page)` }}
            />
            <button
              type="submit"
              className="h-13 px-8 text-[12px] uppercase tracking-[0.14em] font-semibold border-2 border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground shrink-0"
              style={{ transition: `all var(--du-duration-fast) var(--du-ease-page)` }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
