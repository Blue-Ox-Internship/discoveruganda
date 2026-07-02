import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, ChevronRight, Globe, HelpCircle, LogOut, Settings, Share2, Trophy, User, Pencil } from "lucide-react";
import { toast } from "sonner";
import { PROFILE, CARDS } from "@/lib/quest-data";

export const Route = createFileRoute("/app/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Uganda Quest" },
      { name: "description", content: "Your explorer profile and settings." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const total = CARDS.length;
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState(() => {
    const saved = localStorage.getItem("uq_display_name");
    return saved || PROFILE.name;
  });
  const [nameInput, setNameInput] = useState(displayName);

  function handleSaveName() {
    const trimmed = nameInput.trim();
    if (!trimmed) return;
    setDisplayName(trimmed);
    localStorage.setItem("uq_display_name", trimmed);
    setEditing(false);
    toast.success("Name updated!");
  }

  function handleSignOut() {
    localStorage.removeItem("uq_explorer");
    toast("Signed out successfully");
    navigate({ to: "/" });
  }

  return (
    <div className="mx-auto max-w-md px-5 pt-6 pb-4">
      <header className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Profile</div>
          <h1 className="font-display text-3xl font-bold">You</h1>
        </div>
        <button onClick={() => toast("Settings page coming soon")} className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card">
          <Settings className="h-4 w-4" />
        </button>
      </header>

      <section className="mt-6 rounded-3xl border border-border bg-card p-6 text-center">
        <div className="relative mx-auto">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground">
            <span className="font-display text-2xl font-bold">{displayName.charAt(0)}</span>
          </div>
          {editing && (
            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-accent grid place-items-center">
              <Pencil className="h-3 w-3 text-foreground" />
            </div>
          )}
        </div>
        {editing ? (
          <div className="mt-4">
            <input
              autoFocus
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSaveName()}
              className="w-full rounded-xl border border-primary bg-background px-4 py-2 text-center font-display text-xl font-bold outline-none"
            />
            <div className="mt-2 flex justify-center gap-2">
              <button onClick={handleSaveName} className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">Save</button>
              <button onClick={() => { setEditing(false); setNameInput(displayName); }} className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold">Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-4 font-display text-xl font-bold">{displayName}</div>
            <div className="text-sm text-muted-foreground">{PROFILE.handle} · Explorer since {PROFILE.joined}</div>
          </>
        )}
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-5 text-left">
          {[
            ["Cards", `${PROFILE.cards}/${total}`],
            ["Missions", PROFILE.missions],
            ["Regions", `${PROFILE.regions}/5`],
          ].map(([l, v]) => (
            <div key={l}>
              <div className="font-display text-lg font-bold">{v}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
        <button onClick={() => toast("Share link copied to clipboard!")} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground">
          <Share2 className="h-4 w-4" /> Share my passport
        </button>
      </section>

      <section className="mt-6 space-y-2">
        <Row icon={Trophy} label="Achievements" to="/app/achievements" />
        <Row icon={User} label="Edit profile" onClick={() => setEditing(true)} />
        <Row icon={Bell} label="Notifications" onClick={() => toast("No new notifications", { description: "You're all caught up!" })} />
        <Row icon={Globe} label="Language" hint="English" />
        <Row icon={HelpCircle} label="Help & support" onClick={() => toast("Help center coming soon")} />
      </section>

      <button onClick={handleSignOut} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-destructive/40 py-3 text-sm font-semibold text-destructive">
        <LogOut className="h-4 w-4" /> Sign out
      </button>
    </div>
  );
}

function Row({ icon: Icon, label, hint, to, onClick }: { icon: typeof Bell; label: string; hint?: string; to?: string; onClick?: () => void }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-secondary text-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 text-sm font-medium">{label}</div>
      {hint && <div className="text-xs text-muted-foreground">{hint}</div>}
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </div>
  );
  if (to) return <Link to={to as "/app/achievements"}>{inner}</Link>;
  return <button onClick={onClick} className="block w-full text-left">{inner}</button>;
}