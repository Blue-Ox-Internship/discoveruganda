import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const REGION_COLORS: Record<string, string> = {
  centralTraveller: "#2D6A4F",
  westernTraveller: "#1B4F8A",
  northernTraveller: "#E5A020",
  easternTraveller: "#C0392B",
};

const BADGE_LABELS: Record<string, string> = {
  firstJourney: "First Journey",
  explorer: "Explorer",
  collector: "Collector",
  centralTraveller: "Central Traveller",
  westernTraveller: "Western Traveller",
  northernTraveller: "Northern Traveller",
  easternTraveller: "Eastern Traveller",
  fullJourney: "Full Journey",
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

export default function Profile() {
  const { user, token, logout } = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

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

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-md">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Track Your Journey</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Create a free account to track every card you scan, earn achievement badges, and leave
            feedback to help improve the game.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/register">Create Account</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const earned = profile
    ? Object.entries(profile.achievements)
        .filter(([, v]) => v)
        .map(([k]) => k)
    : [];
  const locked = profile
    ? Object.entries(profile.achievements)
        .filter(([, v]) => !v)
        .map(([k]) => k)
    : [];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 border-b border-border bg-card">
        <div className="container mx-auto max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-primary-foreground font-serif font-bold text-2xl">
                {user.name[0].toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-foreground">{user.name}</h1>
              <p className="text-muted-foreground text-sm">{user.email}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign out
          </button>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-12">
        <Tabs defaultValue="overview">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-5 text-center">
                <div className="font-serif text-4xl font-bold text-primary mb-1">
                  {profile?.totalPoints ?? 0}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Points</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 text-center">
                <div className="font-serif text-4xl font-bold mb-1">{profile?.scanCount ?? 0}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Cards Scanned</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 text-center col-span-2 sm:col-span-1">
                <div className="font-serif text-4xl font-bold mb-1">{earned.length}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Badges Earned</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Scan cards from the physical game to earn points and unlock achievements. Points are
              awarded on first discovery — each card can only be scanned once.
            </p>
          </TabsContent>

          <TabsContent value="achievements">
            {!profile && <p className="text-muted-foreground text-sm">Loading achievements…</p>}
            {earned.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Earned
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {earned.map((key) => {
                    const color = REGION_COLORS[key];
                    return (
                      <div
                        key={key}
                        className="border rounded-xl p-4 text-center"
                        style={{
                          borderColor: color ?? "var(--color-border)",
                          background: color ? `${color}18` : undefined,
                        }}
                      >
                        <div className="text-2xl mb-2">✦</div>
                        <div className="text-sm font-semibold">{BADGE_LABELS[key] ?? key}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {locked.length > 0 && (
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Locked
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {locked.map((key) => (
                    <div
                      key={key}
                      className="border border-border rounded-xl p-4 text-center opacity-40"
                    >
                      <div className="text-2xl mb-2">○</div>
                      <div className="text-sm font-semibold">{BADGE_LABELS[key] ?? key}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="feedback">
            <div className="max-w-xl">
              <p className="text-muted-foreground mb-6">
                Your feedback goes directly to the team — it helps us improve the game, add new cards,
                and fix anything that feels off. It is never shown publicly.
              </p>
              {feedbackSent ? (
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
                  <p className="font-semibold text-foreground mb-1">Thanks for the feedback!</p>
                  <p className="text-sm text-muted-foreground">The team will review it.</p>
                  <Button variant="outline" className="mt-4" onClick={() => setFeedbackSent(false)}>
                    Send more
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onFeedback)} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="body">Your feedback</Label>
                    <Textarea
                      id="body"
                      rows={5}
                      placeholder="Tell us what you think about the game, a destination, or anything else…"
                      {...register("body")}
                    />
                    {errors.body && <p className="text-destructive text-sm">{errors.body.message}</p>}
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Send Feedback"}
                  </Button>
                </form>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
