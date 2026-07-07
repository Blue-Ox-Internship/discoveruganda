import { Link } from "wouter";
import { motion } from "framer-motion";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { destinations } from "@/data/cards";
import { Button } from "@/components/ui/button";
import { ArrowRight, Map, BookOpen, Plane, CreditCard, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-uganda.png" 
            alt="Uganda Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-5xl md:text-7xl font-serif font-bold max-w-4xl leading-tight mb-6"
          >
            Explore Uganda Before You Even Travel
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 text-xl md:text-2xl max-w-2xl mb-10"
          >
            Play. Discover. Experience Uganda. The interactive tourism card game that brings the Pearl of Africa to your hands.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center"
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8" data-testid="hero-cta-buy">
              <Link href="/shop">Buy the Game</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/30 text-lg h-14 px-8" data-testid="hero-cta-partner">
              <Link href="/partners">Become a Partner</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-card text-card-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-3">The Journey</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground">How Speak Uganda Works</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Map, title: "1. Play & Discover", desc: "Draw cards revealing real Ugandan destinations and activities." },
              { icon: BookOpen, title: "2. Learn", desc: "Flip the cards to learn fascinating facts and history." },
              { icon: Plane, title: "3. Visit Locations", desc: "Use the game as your travel bucket list for real life." },
              { icon: CreditCard, title: "4. Book Experiences", desc: "Scan QR codes on cards for exclusive partner discounts." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6">
                  <step.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-3">The Cards</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Discover the Destinations</h3>
              <p className="text-lg text-muted-foreground">Hover or tap the cards to flip them and learn more about Uganda's most iconic locations.</p>
            </div>
            <Button asChild variant="ghost" className="shrink-0" data-testid="destinations-view-all">
              <Link href="/explore" className="flex items-center gap-2">
                View All Cards <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 perspective-1000">
            {destinations.slice(0, 4).map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <InteractiveCard {...dest} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROP */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-accent font-bold uppercase tracking-wider text-sm mb-3">The Ecosystem</h2>
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">More Than Just a Game</h3>
                <p className="text-secondary-foreground/80 text-lg">
                  Speak Uganda is an innovative tourism platform designed to connect people with the real Pearl of Africa.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "For Tourists", desc: "Plan your trip, discover hidden gems, and get exclusive discounts." },
                  { title: "For Hotels & Lodges", desc: "Feature your property on specialized cards. Enter guest rooms as entertainment." },
                  { title: "For Tour Operators", desc: "Direct bookings from QR codes on destination and wildlife cards." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 mt-1">
                      <Star className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-secondary-foreground/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
              <img 
                src="/images/card-bwindi.png" 
                alt="Gorilla Trekking" 
                className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS PREVIEW */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Join the Platform</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Are you a Tourism Business?</h3>
          <p className="text-lg text-muted-foreground mb-10">
            Get your hotel, restaurant, or tour agency featured in the next edition of Speak Uganda. Put your brand directly into the hands of thousands of future travelers.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg" data-testid="home-partner-btn">
            <Link href="/partners">View Partnership Options</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
