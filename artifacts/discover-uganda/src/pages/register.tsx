import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/contexts/auth-context";
import { CraneLogo } from "@/components/ui/crane-logo";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof schema>;

const field: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid hsl(var(--border))",
  outline: "none",
  padding: "10px 0",
  fontSize: "var(--du-text-body)",
  fontFamily: "var(--du-font-body)",
  color: "hsl(var(--foreground))",
  transition: "border-color var(--du-duration-fast) var(--du-ease-page)",
};

export default function Register() {
  const { register: registerUser } = useAuth();
  const [, navigate] = useLocation();
  const [serverError, setServerError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      await registerUser(data.name, data.email, data.password);
      navigate("/profile");
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "Registration failed");
    }
  };

  return (
    <div className="flex min-h-screen" style={{ background: "hsl(var(--background))" }}>

      {/* ── LEFT PANEL — cinematic Uganda ── */}
      <div className="hidden lg:block relative" style={{ width: "55%" }}>
        <img
          src="/images/card-bwindi.jpg"
          alt="Bwindi Impenetrable Forest, Uganda"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(45,106,79,0.20) 0%, rgba(44,26,14,0.55) 60%, rgba(44,26,14,0.80) 100%)",
          }}
        />
        <div className="absolute bottom-14 left-12 right-12">
          <p
            className="text-white/50 uppercase mb-5"
            style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
          >
            The Pearl of Africa · Western Uganda
          </p>
          <h2
            className="text-white font-serif font-black"
            style={{ fontSize: "var(--du-text-title)", lineHeight: "var(--du-leading-title)", letterSpacing: "var(--du-tracking-tight)" }}
          >
            Half the world's mountain gorillas
            <br />call this forest home.
          </h2>
        </div>
      </div>

      {/* ── RIGHT PANEL — parchment form ── */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-8 py-20"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-full" style={{ maxWidth: 360 }}>

          <Link href="/" className="flex items-center gap-2.5 mb-16">
            <CraneLogo size={28} />
            <span
              className="font-serif font-bold text-foreground"
              style={{ fontSize: "var(--du-text-small)", letterSpacing: "-0.01em" }}
            >
              Discover Uganda
            </span>
          </Link>

          <p
            className="text-muted-foreground uppercase mb-3"
            style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
          >
            Create Account
          </p>

          <h1
            className="font-serif font-black text-foreground mb-12"
            style={{ fontSize: "var(--du-text-heading)", lineHeight: "var(--du-leading-title)", letterSpacing: "var(--du-tracking-tight)" }}
          >
            Join the<br />Expedition
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-muted-foreground uppercase mb-3"
                style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)" }}
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="How should we call you?"
                autoComplete="name"
                {...register("name")}
                style={{
                  ...field,
                  borderBottomColor: focusedField === "name"
                    ? "hsl(var(--foreground))"
                    : errors.name
                    ? "hsl(var(--destructive))"
                    : "hsl(var(--border))",
                }}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
              {errors.name && (
                <p className="mt-2 text-destructive" style={{ fontSize: "var(--du-text-micro)" }}>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-muted-foreground uppercase mb-3"
                style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)" }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                {...register("email")}
                style={{
                  ...field,
                  borderBottomColor: focusedField === "email"
                    ? "hsl(var(--foreground))"
                    : errors.email
                    ? "hsl(var(--destructive))"
                    : "hsl(var(--border))",
                }}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
              {errors.email && (
                <p className="mt-2 text-destructive" style={{ fontSize: "var(--du-text-micro)" }}>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-muted-foreground uppercase mb-3"
                style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-label)" }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Min. 8 characters"
                autoComplete="new-password"
                {...register("password")}
                style={{
                  ...field,
                  borderBottomColor: focusedField === "password"
                    ? "hsl(var(--foreground))"
                    : errors.password
                    ? "hsl(var(--destructive))"
                    : "hsl(var(--border))",
                }}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
              />
              {errors.password && (
                <p className="mt-2 text-destructive" style={{ fontSize: "var(--du-text-micro)" }}>
                  {errors.password.message}
                </p>
              )}
            </div>

            {serverError && (
              <p
                className="text-destructive border-l-2 border-destructive pl-3"
                style={{ fontSize: "var(--du-text-small)" }}
              >
                {serverError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-semibold uppercase text-background bg-foreground hover:bg-foreground/90 disabled:opacity-50"
              style={{
                padding: "14px 0",
                fontSize: "var(--du-text-micro)",
                letterSpacing: "var(--du-tracking-label)",
                fontFamily: "var(--du-font-body)",
                border: "none",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: `opacity var(--du-duration-fast) var(--du-ease-page)`,
              }}
            >
              {isSubmitting ? "Creating account…" : "Begin the Journey"}
            </button>
          </form>

          <div className="mt-10">
            <p className="text-muted-foreground" style={{ fontSize: "var(--du-text-small)" }}>
              Already exploring?{" "}
              <Link
                href="/login"
                className="text-foreground font-medium underline underline-offset-2"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-16" style={{ height: 1, background: "hsl(var(--border))", opacity: 0.5 }} />
          <p
            className="mt-4 text-muted-foreground/50 text-center uppercase"
            style={{ fontSize: "var(--du-text-micro)", letterSpacing: "var(--du-tracking-micro)" }}
          >
            Uganda's Tourism Card Game
          </p>
        </div>
      </div>
    </div>
  );
}
