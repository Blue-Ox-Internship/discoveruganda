import { motion } from "framer-motion";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { destinations } from "@/data/cards";

export default function Explore() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Explore Uganda
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-secondary-foreground/80"
          >
            Hover or tap any card to flip it and discover the magic behind each destination. These are the actual cards you'll find in the Speak Uganda game.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {destinations.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <InteractiveCard {...dest} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
