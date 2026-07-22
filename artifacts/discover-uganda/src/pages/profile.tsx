import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/contexts/auth-context";
import { KitengeDivider } from "@/components/ui/kitenge-divider";

/* ── Badge definitions ── */

const BADGE_META: Record<string, { label: string; region?: string; color?: string }> = {
  firstJourney:      { label: "First Journey" },
  explorer:          { label: "Explorer" },
  collector:         { label: "Collector" },
  storyteller:       { label: "Storyteller" },
  centralTraveller:  { label: "Central Traveller",  region: "C", color: "#2D6A4F" },
  westernTraveller:  { label: "Western Traveller",  region: "W", color: "#1B4F8A" },
  northernTraveller: { label: "Northern Traveller", region: "N", color: "#E5A020" },
  easternTraveller:  { label: "Eastern Traveller",  region: "E", color: "#C0392B" },
  fullJourney:       { label: "Full Journey" },
  regionMaster:      { label: "Region Master" },
};

const feedbackSchema = z.object({
  body: z.string().min(10, "Please write at least 10 characters"),
});
type FeedbackData = z.infer<typeof feedbackSchema>;

interface ProfileData {
  user: { id: number; name: string; email: string };
  totalPoints: number;
  scanCount: number;
  achievements: Record<string, boolean>;
}

/* ── Stamp badge component ── */
function Stamp({ label, color, earned }: { label: string; color?: string; earned: boolean }) {
  const bg = earned ? (color ?? "hsl(var(--foreground))") : "transparent";
  const textColor = earned ? "#fff" : "hsl(var(--muted-foreground))";
  const border = earned
    ? `2px solid ${color ?? "hsl(var(--foreground))"}`
    : "1.5px dashed hsl(var(--border))";

  return (
    <div
      style={{
        background: bg,
        border,
        padding: "10px 14px",
        opacity: earned ? 1 : 0.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        minWidth: 120,
        transition: "opacity var(--du-duration-mid) var(--du-ease-page)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--du-font-heading)",
          fontSize: "var(--du-text-micro)",
          color: textColor,
          fontWeight: 700,
          letterSpacing: "var(--du-tracking-label)",
          textTransform: "uppercase",
          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
      {earned && (
        <div style={{ width: 20, height: 1.5, background: "rgba(255,255,255,0.5)", marginTop: 2 }} />
      )}
    </div>
  );
}

/* ── Stat block ── */
function StatBlock({ value, label }: { value: number | string; label: string }) {
  return (
    <div
      className="flex flex-col"
      style={{ borderLeft: "2px solid hsl(var(--border))", paddingLeft: "var(--du-space-md)" }}
    >
      <span
        className="font-serif font-black text-foreground"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1, letterSpacing: "var(--du-tracking-tight)" }}
      >
        {value}
      </span>
      <span
        className="text-muted-foreground uppercase mt-2"
        style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)" }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── "Not logged in" state — card backs fanned ── */
function JourneyAwaits() {
  const angles = [-8, -3, 2, 7];
  const BACK_COLORS = ["#2C1810", "#0F2A4A", "#4A2800", "#2A3545"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-background">
      {/* Fanned card backs */}
      <div className="relative mb-20" style={{ height: 220, width: 320 }}>
        {angles.map((deg, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: 120,
              height: 168,
              left: "50%",
              top: "50%",
              marginLeft: -60,
              marginTop: -84,
              background: BACK_COLORS[i],
              transform: `rotate(${deg}deg)`,
              border: "1.5px solid rgba(232,184,77,0.3)",
              boxShadow: "4px 6px 20px rgba(44,26,14,0.18)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 6,
                border: "0.75px solid rgba(232,184,77,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--du-font-heading)",
                  fontSize: 9,
                  color: "rgba(232,184,77,0.6)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textAlign: "center",
                  lineHeight: 1.6,
                }}
              >
                Discover<br />Uganda
              </span>
            </div>
          </div>
        ))}
      </div>

      <p
        className="text-muted-foreground uppercase mb-4 text-center"
        style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
      >
        The Pearl of Africa
      </p>
      <h1
        className="font-serif font-black text-foreground text-center mb-6"
        style={{ fontSize: "var(--du-text-title)", lineHeight: "var(--du-leading-title)", letterSpacing: "var(--du-tracking-tight)", maxWidth: 420 }}
      >
        Your Journey Awaits
      </h1>
      <p
        className="text-muted-foreground text-center mb-12"
        style={{ fontSize: "var(--du-text-body)", lineHeight: "var(--du-leading-body)", maxWidth: 380 }}
      >
        Create a free account to track every card you discover, earn regional stamps, and leave
        notes from the field.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/register"
          className="inline-block text-[12px] uppercase tracking-[0.14em] font-semibold px-10 py-4 bg-foreground text-background hover:bg-foreground/90"
          style={{ transition: `opacity var(--du-duration-fast) var(--du-ease-page)` }}
        >
          Begin the Journey
        </Link>
        <Link
          href="/login"
          className="inline-block text-[12px] uppercase tracking-[0.14em] font-semibold px-10 py-4 border border-foreground/40 text-foreground hover:border-foreground"
          style={{ transition: `border-color var(--du-duration-fast) var(--du-ease-page)` }}
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

/* ── Main profile page ── */
export default function Profile() {
  const { user, token, logout } = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "achievements" | "notes">("overview");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackData>({ resolver: zodResolver(feedbackSchema) });

  useEffect(() => {
    if (!token) return;
    fetch("/api/profile", { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && setProfile(d));
  }, [token]);

  const onFeedback = async (data: FeedbackData) => {
    await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ targetType: "general", body: data.body }),
    });
    setFeedbackSent(true);
    reset();
  };

  if (!user) return <JourneyAwaits />;

  const earned = profile
    ? Object.entries(profile.achievements).filter(([, v]) => v).map(([k]) => k)
    : [];
  const locked = profile
    ? Object.entries(profile.achievements).filter(([, v]) => !v).map(([k]) => k)
    : [];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "achievements", label: "Achievements" },
    { id: "notes", label: "Field Notes" },
  ] as const;

  return (
    <div className="min-h-screen bg-background">

      {/* ── Header ── */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <p
                className="text-muted-foreground uppercase mb-6"
                style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
              >
                Traveller Profile
              </p>
              {/* Initial square — not rounded */}
              <div className="flex items-center gap-6 mb-0">
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: 72,
                    height: 72,
                    background: "hsl(var(--foreground))",
                    color: "hsl(var(--background))",
                    fontFamily: "var(--du-font-heading)",
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                    fontWeight: 900,
                  }}
                >
                  {user.name[0].toUpperCase()}
                </div>
                <div>
                  <h1
                    className="font-serif font-black text-foreground"
                    style={{ fontSize: "var(--du-text-heading)", lineHeight: 1.1, letterSpacing: "var(--du-tracking-tight)" }}
                  >
                    {user.name}
                  </h1>
                  <p
                    className="text-muted-foreground mt-1"
                    style={{ fontSize: "var(--du-text-small)" }}
                  >
                    {user.email}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={logout}
              className="text-muted-foreground hover:text-foreground uppercase self-start md:self-auto"
              style={{
                fontSize: "var(--du-text-micro)",
                letterSpacing: "var(--du-tracking-label)",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: `color var(--du-duration-fast) var(--du-ease-page)`,
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </section>

      <KitengeDivider height={32} />

      {/* ── Tabs ── */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative py-5 pr-10 text-left"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "var(--du-text-micro)",
                  letterSpacing: "var(--du-tracking-label)",
                  textTransform: "uppercase",
                  color: activeTab === tab.id ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                  fontFamily: "var(--du-font-body)",
                  fontWeight: activeTab === tab.id ? 600 : 400,
                  transition: `color var(--du-duration-fast) var(--du-ease-page)`,
                }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span
                    className="absolute bottom-0 left-0"
                    style={{ width: "calc(100% - 2.5rem)", height: 2, background: "hsl(var(--foreground))" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab content ── */}
      <div className="container mx-auto px-6 md:px-12 py-20">

        {/* Overview */}
        {activeTab === "overview" && (
          <div>
            <div className="flex flex-wrap gap-16 mb-20">
              <StatBlock value={profile?.totalPoints ?? 0} label="Points Earned" />
              <StatBlock value={profile?.scanCount ?? 0} label="Cards Discovered" />
              <StatBlock value={earned.length} label="Stamps Collected" />
            </div>
            <div
              className="border-l-2 border-border pl-8 max-w-xl"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              <p className="text-muted-foreground" style={{ fontSize: "var(--du-text-body)", lineHeight: "var(--du-leading-body)" }}>
                Scan physical cards from the game to earn points and collect regional stamps. Each
                card can only be discovered once — first scan earns double points.
              </p>
            </div>
          </div>
        )}

        {/* Achievements */}
        {activeTab === "achievements" && (
          <div>
            <p
              className="text-muted-foreground uppercase mb-12"
              style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
            >
              {earned.length} of {earned.length + locked.length} stamps collected
            </p>

            <div className="flex flex-wrap gap-3">
              {[...earned, ...locked].map((key) => {
                const meta = BADGE_META[key];
                if (!meta) return null;
                return (
                  <Stamp
                    key={key}
                    label={meta.label}
                    color={meta.color}
                    earned={earned.includes(key)}
                  />
                );
              })}
              {/* If no profile data yet, show skeleton stamps */}
              {!profile && Object.entries(BADGE_META).map(([key, meta]) => (
                <Stamp key={key} label={meta.label} color={meta.color} earned={false} />
              ))}
            </div>
          </div>
        )}

        {/* Field Notes (feedback) */}
        {activeTab === "notes" && (
          <div className="max-w-lg">
            <p
              className="text-muted-foreground uppercase mb-4"
              style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
            >
              Private notes
            </p>
            <h2
              className="font-serif font-black text-foreground mb-8"
              style={{ fontSize: "var(--du-text-heading)", lineHeight: "var(--du-leading-title)", letterSpacing: "var(--du-tracking-tight)" }}
            >
              Notes from the Field
            </h2>
            <p className="text-muted-foreground mb-12" style={{ fontSize: "var(--du-text-body)", lineHeight: "var(--du-leading-body)" }}>
              Share what you think about a card, a destination, or the game — these notes go
              directly to the team and help us improve.
            </p>

            {feedbackSent ? (
              <div
                className="border-l-2 pl-6"
                style={{ borderColor: "hsl(var(--accent))" }}
              >
                <p className="font-serif font-bold text-foreground mb-1" style={{ fontSize: "var(--du-text-body)" }}>
                  Notes received.
                </p>
                <p className="text-muted-foreground" style={{ fontSize: "var(--du-text-small)" }}>
                  Thank you — your field notes help build a better journey for everyone.
                </p>
                <button
                  onClick={() => setFeedbackSent(false)}
                  className="mt-6 uppercase text-foreground"
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)",
                    fontFamily: "var(--du-font-body)",
                  }}
                >
                  Add another note →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onFeedback)} className="flex flex-col gap-8">
                <div>
                  <label
                    htmlFor="body"
                    className="block text-muted-foreground uppercase mb-3"
                    style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)" }}
                  >
                    Your Notes
                  </label>
                  <textarea
                    id="body"
                    rows={5}
                    placeholder="What did you discover? What could be better?"
                    {...register("body")}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid hsl(var(--border))",
                      outline: "none",
                      padding: "8px 0",
                      fontSize: "var(--du-text-body)",
                      fontFamily: "var(--du-font-body)",
                      color: "hsl(var(--foreground))",
                      resize: "none",
                      lineHeight: "var(--du-leading-body)",
                    }}
                  />
                  {errors.body && (
                    <p className="mt-2 text-destructive" style={{ fontSize: "var(--du-text-micro)" }}>
                      {errors.body.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-semibold uppercase text-background bg-foreground hover:bg-foreground/90 disabled:opacity-50 self-start"
                  style={{
                    padding: "12px 36px",
                    fontSize: "var(--du-text-micro)",
                    letterSpacing: "var(--du-tracking-label)",
                    fontFamily: "var(--du-font-body)",
                    border: "none",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? "Sending…" : "Send Notes"}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
