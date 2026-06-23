import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-uganda.jpg";
import cards1 from "@/assets/cards-1.png.asset.json";
import cards2 from "@/assets/cards-2.png.asset.json";
import {
  MessageCircle, Drum, UtensilsCrossed, PawPrint, Mountain, Compass,
  QrCode, MapPin, Trophy, Camera, ScanLine, Sparkles, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uganda Quest — Explore. Learn. Earn." },
      { name: "description", content: "Collectible tourism cards and a digital passport that turn your trip through Uganda into an interactive cultural quest." },
      { property: "og:title", content: "Uganda Quest — Explore. Learn. Earn." },
      { property: "og:description", content: "Collectible tourism cards and a digital passport that turn your trip through Uganda into an interactive cultural quest." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const categories = [
  { icon: MessageCircle, name: "Language", desc: "Greetings and phrases. Scan to hear pronunciation.", count: "24 cards" },
  { icon: Drum, name: "Culture", desc: "Dances, kingdoms, crafts and living heritage.", count: "32 cards" },
  { icon: UtensilsCrossed, name: "Food", desc: "Rolex, matooke, luwombo — taste your way through.", count: "28 cards" },
  { icon: PawPrint, name: "Wildlife", desc: "Gorillas, shoebills, tree-climbing lions.", count: "22 cards" },
  { icon: Mountain, name: "Destinations", desc: "Source of the Nile, Bwindi, Rwenzori and more.", count: "30 cards" },
  { icon: Compass, name: "Experiences", desc: "Markets, performances, community tourism.", count: "20 cards" },
];

const steps = [
  { n: "01", icon: Sparkles, title: "Collect a deck", body: "Pick up Uganda Quest cards at airports, lodges, parks and partner stops across the country." },
  { n: "02", icon: ScanLine, title: "Scan the QR", body: "Each card unlocks audio, video, fun facts and a real-world mission inside the app." },
  { n: "03", icon: MapPin, title: "Complete missions", body: "Try the food, visit the place, learn the phrase. Earn Explorer Points for real engagement." },
  { n: "04", icon: Trophy, title: "Earn the title", body: "Unlock regional badges and the Pearl of Africa Master Explorer achievement." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Categories />
      <Showcase />
      <HowItWorks />
      <Passport />
      <CTA />
      <Footer />
    </main>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
        <span className="font-display text-lg font-bold leading-none">UQ</span>
      </div>
      <div className="leading-tight">
        <div className="font-display text-base font-bold tracking-tight">Uganda Quest</div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Explore · Learn · Earn</div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex">
          <a href="#cards" className="hover:text-foreground">The Cards</a>
          <a href="#how" className="hover:text-foreground">How it Works</a>
          <a href="#passport" className="hover:text-foreground">Digital Passport</a>
          <a href="#get" className="hover:text-foreground">Get a Deck</a>
        </nav>
        <Link to="/auth" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
          Open the app <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Misty hills of Uganda at sunrise" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-28">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> The Pearl of Africa, in your pocket
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            A travel game <br />
            played across <span className="italic text-primary">Uganda</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/75">
            Uganda Quest is a deck of beautifully designed cards — language, culture, food,
            wildlife and destinations — paired with a digital passport that turns your trip
            into missions, stories and rewards.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90">
              Get your deck <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-background">
              How it works
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-foreground/15 pt-6">
            {[
              { k: "150+", v: "Collectible cards" },
              { k: "6", v: "Categories" },
              { k: "4", v: "Regions of Uganda" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-bold text-primary">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative lg:col-span-5">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-accent/20 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-accent/40 bg-card shadow-2xl shadow-foreground/20">
            <img src={cards1.url} alt="Uganda Quest cards: Kiganda Dance, Rolex, Mountain Gorilla, Source of the Nile" className="block w-full" />
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-card/80 p-4 backdrop-blur">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
              <QrCode className="h-5 w-5" />
            </div>
            <div className="text-sm">
              <div className="font-semibold">Every card carries a QR</div>
              <div className="text-muted-foreground">Scan to unlock stories, audio and missions.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="cards" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">The Deck</span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Six categories. <span className="italic text-primary">One country.</span>
            </h2>
            <p className="mt-4 text-foreground/70">
              Each card is a doorway into a slice of Ugandan identity — and a real-world
              prompt to go experience it.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article key={c.name} className="group relative bg-card p-7 transition hover:bg-background">
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <c.icon className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.count}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{c.desc}</p>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary opacity-0 transition group-hover:opacity-100">
                View samples <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div className="uq-grain absolute inset-0 opacity-[0.06]" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Card Anatomy</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Built like a souvenir. <br />
            <span className="italic text-accent">Played like a game.</span>
          </h2>
          <p className="mt-5 max-w-md text-background/75">
            Premium printed cards with hand-illustrated borders inspired by Ugandan
            patterns. A front portrait, a back with mission, reward and a QR portal.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {[
              ["High-quality image", "Cinematic photograph of the subject"],
              ["Region & category", "Located on the front, color-coded"],
              ["Mission & reward", "A real-world prompt with Explorer Points"],
              ["Scan to unlock", "Audio, video, quizzes and nearby experiences"],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4 border-t border-background/15 pt-4">
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <div>
                  <div className="font-semibold">{t}</div>
                  <div className="text-background/65">{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-accent/15 blur-3xl" />
          <img src={cards2.url} alt="Bark Cloth, Shoebill, Rwenzori Mountains and Matooke cards" className="rounded-2xl border border-accent/30 shadow-2xl" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">How it works</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            From a card in your hand <br />
            <span className="italic text-primary">to a story you lived.</span>
          </h2>
        </div>
        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="relative flex flex-col rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-bold text-accent">{s.n}</span>
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Passport() {
  const features = [
    { icon: QrCode, t: "QR scanning", d: "Every card opens its own multimedia chapter." },
    { icon: MapPin, t: "GPS discovery", d: "New regions reveal hidden cards and local missions." },
    { icon: Camera, t: "Photo challenges", d: "Snap a shoebill or a Rolex stall to complete missions." },
    { icon: Trophy, t: "Badges & rewards", d: "From Wildlife Explorer to Pearl of Africa Master." },
  ];
  return (
    <section id="passport" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/15 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-foreground/15 bg-foreground p-3 shadow-2xl">
              <div className="rounded-[1.6rem] bg-background p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Digital Passport</div>
                    <div className="font-display text-xl font-bold">Amara · Explorer</div>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                    <span className="font-display text-sm font-bold">A</span>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl bg-primary p-4 text-primary-foreground">
                  <div className="text-xs uppercase tracking-wider opacity-80">Explorer Points</div>
                  <div className="font-display text-4xl font-bold">2,480</div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-primary-foreground/20">
                    <div className="h-full w-3/4 rounded-full bg-accent" />
                  </div>
                  <div className="mt-2 text-[11px] opacity-80">740 pts to Pearl of Africa Master</div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  {[["28", "Cards"], ["12", "Missions"], ["3", "Regions"]].map(([n, l]) => (
                    <div key={l} className="rounded-xl border border-border bg-secondary/60 py-3">
                      <div className="font-display text-lg font-bold">{n}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-accent/40 bg-accent/15 p-3">
                  <Trophy className="h-5 w-5 text-foreground" />
                  <div className="text-xs">
                    <div className="font-semibold">Central Uganda Explorer</div>
                    <div className="text-foreground/60">Unlocked yesterday</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">Digital companion</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Your trip, <span className="italic text-primary">recorded forever</span>.
          </h2>
          <p className="mt-5 max-w-lg text-foreground/70">
            The Uganda Quest app turns every scanned card and completed mission into
            a chapter of your journey — a passport you keep long after you fly home.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.t} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{f.t}</div>
                  <div className="text-sm text-foreground/65">{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="get" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="uq-pattern absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Get yours</span>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-6xl">
          Begin the quest <br />
          <span className="italic text-accent">across the Pearl of Africa.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-primary-foreground/80">
          Pre-order a Uganda Quest deck and get early access to the digital passport
          when it launches.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="flex-1 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-accent"
          />
          <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-foreground transition hover:brightness-105">
            Reserve a deck
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Logo />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Uganda Quest. Explore. Learn. Earn.
        </p>
      </div>
    </footer>
  );
}
