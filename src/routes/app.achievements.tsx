import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, Trophy, Star, Target, Award, Sparkles } from "lucide-react";
import { ACHIEVEMENTS, PROFILE, CARDS } from "@/lib/quest-data";

export const Route = createFileRoute("/app/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Uganda Quest" },
      { name: "description", content: "Badges and rewards from your Uganda Quest journey." },
    ],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  const unlocked = ACHIEVEMENTS.filter((a) => a.unlocked).length;
  const totalEP = CARDS.reduce((sum, c) => sum + c.reward, 0);
  const earnedEP = CARDS.filter(c => c.completed).reduce((sum, c) => sum + c.reward, 0);
  const totalCards = CARDS.length;
  const collectedCards = CARDS.filter(c => c.collected).length;
  const completionPct = Math.round((earnedEP / totalEP) * 100);

  return (
    <div className="mx-auto max-w-md px-5 pt-6 pb-4">
      <header className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Trophies</div>
          <h1 className="font-display text-3xl font-bold">Achievements</h1>
        </div>
        <Link to="/app/profile" className="text-xs font-semibold uppercase tracking-wider text-primary">Profile</Link>
      </header>

      <section className="mt-5 rounded-3xl bg-foreground p-6 text-background">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider opacity-70">Badges unlocked</div>
            <div className="font-display text-4xl font-bold">{unlocked} / {ACHIEVEMENTS.length}</div>
          </div>
          <Trophy className="h-10 w-10 text-accent" />
        </div>
      </section>

      <section className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-border bg-card p-4 text-center">
          <Target className="mx-auto h-5 w-5 text-primary" />
          <div className="mt-1 font-display text-xl font-bold">{collectedCards}/{totalCards}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Cards</div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4 text-center">
          <Star className="mx-auto h-5 w-5 text-primary" />
          <div className="mt-1 font-display text-xl font-bold">{earnedEP}/{totalEP}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">EP Earned</div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4 text-center">
          <Award className="mx-auto h-5 w-5 text-primary" />
          <div className="mt-1 font-display text-xl font-bold">{completionPct}%</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Complete</div>
        </div>
      </section>

      <section className="mt-4 rounded-2xl border border-accent/40 bg-accent/10 p-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="h-3.5 w-3.5" /> Explorer progress
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-foreground/70">Overall completion</span>
          <span className="font-bold">{completionPct}%</span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-accent/20">
          <div className="h-full rounded-full bg-accent" style={{ width: `${completionPct}%` }} />
        </div>
      </section>

      <div className="mt-6 space-y-3">
        {ACHIEVEMENTS.map((a) => {
          const pct = Math.min(100, Math.round((a.progress / a.total) * 100));
          return (
            <div key={a.id} className={`rounded-2xl border p-4 ${a.unlocked ? "border-accent/50 bg-accent/10" : "border-border bg-card"}`}>
              <div className="flex items-start gap-4">
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${a.unlocked ? "bg-accent text-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {a.unlocked ? <Trophy className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
                </div>
                <div className="flex-1">
                  <div className="font-display text-base font-bold">{a.title}</div>
                  <div className="text-xs text-foreground/70">{a.desc}</div>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                      <div className={`h-full rounded-full ${a.unlocked ? "bg-accent" : "bg-primary"}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-[11px] font-semibold text-muted-foreground">{a.progress}/{a.total}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}