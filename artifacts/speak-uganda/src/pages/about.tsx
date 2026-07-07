import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Speak Uganda wasn't born in a boardroom. It was born around a campfire in the heart of Murchison Falls, born out of a realization that traditional tourism marketing was missing something crucial: <span className="text-primary font-semibold">Play.</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary rounded-3xl transform -translate-x-4 -translate-y-4 -z-10" />
            <img 
              src="/images/card-rwenzori.png" 
              alt="Rwenzori Mountains" 
              className="w-full h-auto rounded-3xl shadow-xl aspect-[4/3] object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground">The Problem We Saw</h2>
            <p className="text-lg text-muted-foreground">
              Uganda is the Pearl of Africa. It has snow-capped mountains on the equator, the source of the world's longest river, and more biodiversity than almost anywhere else on earth.
            </p>
            <p className="text-lg text-muted-foreground">
              Yet, how do most people learn about it? Boring brochures. Static websites. Overpriced tour packages. The connection between the traveler and the destination felt transactional.
            </p>
            <p className="text-lg text-muted-foreground font-semibold text-primary">
              We wanted to change that. We wanted people to hold Uganda in their hands.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground">The Platform Vision</h2>
            <p className="text-lg text-muted-foreground">
              Speak Uganda is a physical card game, yes. But underneath the beautifully illustrated cards lies an innovative, tech-enabled marketing platform.
            </p>
            <p className="text-lg text-muted-foreground">
              By integrating QR codes, we turned a piece of cardboard into a booking engine. A player draws the 'Bwindi Forest' card, reads about gorilla trekking, scans the back, and is immediately connected to a local tour operator offering a discount.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-medium">Connecting tourists with local businesses</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-medium">Promoting domestic and international tourism</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-medium">Creating interactive educational tools</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
            <img 
              src="/images/card-kampala.png" 
              alt="Kampala City" 
              className="w-full h-auto rounded-3xl shadow-xl aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-sm"
        >
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">What's Next?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The card game is just phase one. We are currently developing the Speak Uganda mobile app, which will digitize the deck, introduce a national loyalty points system, and launch 'Speak Kenya' and 'Speak Rwanda' international editions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center pt-8 border-t border-border">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10k+</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Decks Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Business Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1M+</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">QR Scans</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
