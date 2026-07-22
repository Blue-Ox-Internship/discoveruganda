import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AuthProvider } from "@/contexts/auth-context";

// Pages
import Home from "@/pages/home";
import Explore from "@/pages/explore";
import Shop from "@/pages/shop";
import Partners from "@/pages/partners";
import DiscoverUganda from "@/pages/discover-uganda";
import About from "@/pages/about";
import Login from "@/pages/login";
import Register from "@/pages/register";
import Profile from "@/pages/profile";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Spacer for fixed navbar — pages that want their hero under the navbar use -mt-20 */}
      <div className="h-20 shrink-0" />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      {/* Auth pages — full-screen, no navbar/footer */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      {/* All other pages use the shared Layout */}
      <Route>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/shop" component={Shop} />
            <Route path="/partners" component={Partners} />
            <Route path="/discover" component={DiscoverUganda} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
