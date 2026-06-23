import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Home, Layers, ScanLine, MapPin, Trophy } from "lucide-react";

export const Route = createFileRoute("/app")({
  component: AppLayout,
});

type NavItem = { to: string; label: string; icon: typeof Home; exact?: boolean; primary?: boolean };
const NAV: NavItem[] = [
  { to: "/app", label: "Passport", icon: Home, exact: true },
  { to: "/app/cards", label: "Cards", icon: Layers },
  { to: "/app/scan", label: "Scan", icon: ScanLine, primary: true },
  { to: "/app/explore", label: "Explore", icon: MapPin },
  { to: "/app/achievements", label: "Trophies", icon: Trophy },
];

function AppLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen bg-background pb-24">
      <Outlet />
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-md items-end justify-between px-4 pb-4 pt-2">
          {NAV.map((n) => {
            const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
            const Icon = n.icon;
            if (n.primary) {
              return (
              <Link key={n.to} to={n.to as "/app/scan"} className="-mt-7">
                  <div className={`grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-4 ring-background transition ${active ? "scale-105" : ""}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </Link>
              );
            }
            return (
              <Link key={n.to} to={n.to as "/app"} className={`flex w-14 flex-col items-center gap-1 pt-2 text-[10px] font-semibold uppercase tracking-wider ${active ? "text-primary" : "text-muted-foreground"}`}>
                <Icon className="h-5 w-5" />
                {n.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}