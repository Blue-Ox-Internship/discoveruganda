import type { FeaturedPartner } from "@/data/featured-partners";

const REGION_COLORS: Record<string, string> = {
  C: "#2D6A4F",
  W: "#1B4F8A",
  N: "#E5A020",
  E: "#C0392B",
};

const playfair: React.CSSProperties = { fontFamily: "'Playfair Display', serif" };

interface Props {
  partner: FeaturedPartner;
}

export function FeaturedPartnerCard({ partner }: Props) {
  const regionColor = REGION_COLORS[partner.regionCode] ?? "#8E9BAE";

  return (
    <div>
      {/* Card — same 3:4 ratio as game cards */}
      <div className="relative w-full aspect-[3/4] overflow-hidden" style={{ cursor: "default" }}>
        <img
          src={partner.image}
          alt={partner.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,8,3,0.70) 0%, rgba(15,8,3,0.30) 45%, rgba(15,8,3,0.70) 100%)",
          }}
        />

        {/* Featured Partner badge — top right */}
        <div className="absolute top-3 right-3 z-10">
          <div
            style={{
              background: "hsl(var(--accent))",
              padding: "4px 8px",
            }}
          >
            <span
              style={{
                fontSize: 7,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Featured
            </span>
          </div>
        </div>

        {/* Region badge — top left */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <div
            style={{
              width: 30,
              height: 30,
              background: regionColor,
              border: "1.5px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 700,
              color: "#fff",
              ...playfair,
            }}
          >
            {partner.regionCode}
          </div>
        </div>

        {/* Top text — category + name */}
        <div className="absolute inset-x-0 top-0 pt-10 px-4 text-center">
          <div style={{ fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: "#E8B84D", fontWeight: 600, marginBottom: 4 }}>
            Partner · {partner.category}
          </div>
          <h3 style={{ ...playfair, fontSize: 18, fontWeight: 900, color: "#fff", lineHeight: 1.1, textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
            {partner.name}
          </h3>
        </div>

        {/* Center — tagline */}
        <div className="absolute inset-x-4" style={{ top: "50%", transform: "translateY(-50%)" }}>
          <div
            style={{
              background: "rgba(15,8,3,0.55)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              padding: "12px 14px",
              border: "1px solid rgba(232,184,77,0.2)",
              textAlign: "center",
            }}
          >
            <div style={{ width: 24, height: 1.5, background: "#E8B84D", margin: "0 auto 8px", borderRadius: 1 }} />
            <p style={{ fontSize: 11, lineHeight: 1.65, color: "#fff", textShadow: "0 1px 6px rgba(0,0,0,0.7)", fontStyle: "italic" }}>
              {partner.tagline}
            </p>
            <div style={{ width: 24, height: 1.5, background: "#E8B84D", margin: "8px auto 0", borderRadius: 1 }} />
          </div>
        </div>

        {/* Bottom — CTA */}
        <div
          className="absolute inset-x-0 bottom-0 flex justify-center pb-4 pt-10"
          style={{
            background: "linear-gradient(to top, rgba(15,8,3,0.80) 0%, rgba(15,8,3,0.45) 55%, transparent 100%)",
          }}
        >
          <a
            href={partner.ctaUrl}
            style={{
              display: "inline-block",
              fontSize: 9,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#E8B84D",
              border: "1px solid rgba(232,184,77,0.5)",
              padding: "6px 16px",
              background: "rgba(15,8,3,0.4)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          >
            {partner.ctaLabel}
          </a>
        </div>
      </div>

      {/* Label below — matches game card label style */}
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <p className="text-foreground font-medium" style={{ fontSize: "var(--du-text-small)" }}>
            {partner.name}
          </p>
          <p
            className="text-muted-foreground"
            style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)", textTransform: "uppercase", marginTop: 3 }}
          >
            {partner.region} · Featured Partner
          </p>
        </div>
        <div style={{ width: 10, height: 10, background: regionColor, marginTop: 4, flexShrink: 0 }} />
      </div>
    </div>
  );
}
