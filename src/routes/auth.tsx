import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Lock } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Uganda Quest" },
      { name: "description", content: "Sign in to your Uganda Quest digital passport." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-6 py-10">
        <Link to="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
          ← Back to home
        </Link>
        <div className="mt-12">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
            <span className="font-display text-xl font-bold">UQ</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight">
            Welcome, <span className="italic text-primary">explorer.</span>
          </h1>
          <p className="mt-3 text-sm text-foreground/70">
            Sign in to access your digital passport, scan cards and track your quest.
          </p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); navigate({ to: "/app" }); }}
          className="mt-10 space-y-4"
        >
          <Field icon={Mail} label="Email" type="email" placeholder="amara@email.com" />
          <Field icon={Lock} label="Password" type="password" placeholder="••••••••" />
          <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        </form>
        <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" /> OR <span className="h-px flex-1 bg-border" />
        </div>
        <button
          onClick={() => navigate({ to: "/app" })}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card py-3.5 text-sm font-semibold transition hover:bg-secondary"
        >
          Continue as guest explorer
        </button>
        <p className="mt-auto pt-10 text-center text-xs text-muted-foreground">
          New here? <span className="font-semibold text-foreground">Create an account</span> with the first card you scan.
        </p>
      </div>
    </main>
  );
}

function Field({ icon: Icon, label, ...rest }: { icon: typeof Mail; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-2 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 focus-within:border-primary">
        <Icon className="h-4 w-4 text-muted-foreground" />
        <input {...rest} className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
      </div>
    </label>
  );
}