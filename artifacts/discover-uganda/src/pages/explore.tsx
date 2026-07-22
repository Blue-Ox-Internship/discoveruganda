import { useState } from "react";
import { motion } from "framer-motion";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { KitengeDivider } from "@/components/ui/kitenge-divider";
import { FeaturedPartnerCard } from "@/components/common/featured-partner-card";
import { destinations } from "@/data/cards";
import { featuredPartners } from "@/data/featured-partners";
import type { RegionCode } from "@/data/cards";

const REGIONS: { code: RegionCode | "All"; label: string }[] = [
  { code: "All",  label: "All Regions" },
  { code: "C",    label: "Central" },
  { code: "W",    label: "Western" },
  { code: "N",    label: "Northern" },
  { code: "E",    label: "Eastern" },
];

const REGION_COLORS: Record<RegionCode, string> = {
  C: "#2D6A4F",
  W: "#1B4F8A",
  N: "#E5A020",
  E: "#C0392B",
};

export default function Explore() {
  const [activeRegion, setActiveRegion] = useState<RegionCode | "All">("All");

  const filtered = activeRegion === "All"
    ? destinations
    : destinations.filter((d) => d.regionCode === activeRegion);

  return (
    <div className="min-h-screen bg-background">

      {/* ── Editorial header ── */}
      <section className="pt-24 pb-20 border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div>
              <p
                className="text-muted-foreground uppercase mb-5"
                style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
              >
                132 cards · 4 regions · 1 extraordinary country
              </p>
              <h1
                className="font-serif font-black text-foreground"
                style={{
                  fontSize: "var(--du-text-title)",
                  lineHeight: "var(--du-leading-title)",
                  letterSpacing: "var(--du-tracking-tight)",
                  maxWidth: 480,
                }}
              >
                The Full Deck
              </h1>
            </div>

            {/* Region filter — sharp, no pills */}
            <div className="flex flex-wrap gap-0 border border-border self-end">
              {REGIONS.map(({ code, label }) => {
                const isActive = activeRegion === code;
                const regionColor = code !== "All" ? REGION_COLORS[code] : undefined;
                return (
                  <button
                    key={code}
                    onClick={() => setActiveRegion(code)}
                    style={{
                      padding: "10px 20px",
                      fontSize: "var(--du-text-micro)",
                      letterSpacing: "var(--du-tracking-label)",
                      textTransform: "uppercase",
                      fontFamily: "var(--du-font-body)",
                      fontWeight: isActive ? 600 : 400,
                      background: isActive ? (regionColor ?? "hsl(var(--foreground))") : "transparent",
                      color: isActive ? "#fff" : "hsl(var(--muted-foreground))",
                      border: "none",
                      borderRight: "1px solid hsl(var(--border))",
                      cursor: "pointer",
                      transition: `background var(--du-duration-fast) var(--du-ease-page), color var(--du-duration-fast) var(--du-ease-page)`,
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <KitengeDivider height={32} />

      {/* ── Card grid — museum spacing ── */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filtered.map((dest, idx) => {
              /* Inject the first featured partner at grid position 2 (only on "All" view) */
              const partnerSlot = activeRegion === "All" && idx === 2 && featuredPartners[0];

              return (
                <>
                  {partnerSlot && (
                    <motion.div
                      key="featured-partner-0"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.55, delay: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <FeaturedPartnerCard partner={partnerSlot} />
                    </motion.div>
                  )}
                  <motion.div
                    key={dest.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.55,
                      delay: (idx % 4) * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <InteractiveCard
                      frontImage={dest.frontImage}
                      illustration={dest.illustration}
                      title={dest.title}
                      region={dest.region}
                      regionCode={dest.regionCode}
                      fact={dest.fact}
                      highlights={dest.highlights}
                      description={dest.description}
                      cardType={dest.cardType}
                    />
                    {/* Card label below */}
                    <div className="mt-4 flex items-start justify-between gap-2">
                      <div>
                        <p
                          className="text-foreground font-medium"
                          style={{ fontSize: "var(--du-text-small)" }}
                        >
                          {dest.title}
                        </p>
                        <p
                          className="text-muted-foreground"
                          style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)", textTransform: "uppercase", marginTop: 3 }}
                        >
                          {dest.region} · {dest.cardType}
                        </p>
                      </div>
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          background: REGION_COLORS[dest.regionCode],
                          marginTop: 4,
                          flexShrink: 0,
                        }}
                      />
                    </div>
                  </motion.div>
                </>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="py-32 text-center">
              <p
                className="text-muted-foreground uppercase"
                style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
              >
                No cards yet for this region
              </p>
            </div>
          )}
        </div>
      </section>

      <KitengeDivider />

      {/* ── QR scan section — editorial, no phone mockup ── */}
      <section className="py-28 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <p
                className="text-muted-foreground uppercase mb-5"
                style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
              >
                Beyond the Card
              </p>
              <h2
                className="font-serif font-black text-foreground mb-8"
                style={{
                  fontSize: "var(--du-text-title)",
                  lineHeight: "var(--du-leading-title)",
                  letterSpacing: "var(--du-tracking-tight)",
                }}
              >
                Every scan is a<br />real booking.
              </h2>
              <p
                className="text-muted-foreground mb-6"
                style={{ fontSize: "var(--du-text-body)", lineHeight: "var(--du-leading-body)", maxWidth: 440 }}
              >
                Scan the QR code on any physical card and the card becomes a live portal — direct
                access to partner booking links, deep-dive cultural context, and exclusive travel
                offers.
              </p>
              <p
                className="text-muted-foreground"
                style={{ fontSize: "var(--du-text-body)", lineHeight: "var(--du-leading-body)", maxWidth: 440 }}
              >
                Every destination in this deck is a real place waiting for you in Uganda.
              </p>
            </div>

            {/* Minimal stat column */}
            <div className="flex flex-col gap-12 lg:pt-16">
              {[
                { stat: "132", label: "Cards in the deck" },
                { stat: "4",   label: "Regions of Uganda" },
                { stat: "50+", label: "Partner businesses" },
                { stat: "QR",  label: "Instant access via scan" },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="flex items-baseline gap-6"
                  style={{ borderBottom: "1px solid hsl(var(--border))", paddingBottom: "var(--du-space-md)" }}
                >
                  <span
                    className="font-serif font-black text-foreground"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1, letterSpacing: "var(--du-tracking-tight)", minWidth: "4rem" }}
                  >
                    {stat}
                  </span>
                  <span
                    className="text-muted-foreground uppercase"
                    style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
