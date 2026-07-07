import { useState } from "react";
import { motion } from "framer-motion";

interface InteractiveCardProps {
  frontImage: string;
  title: string;
  region: string;
  highlights: string[];
  description: string;
}

export function InteractiveCard({ frontImage, title, region, highlights, description }: InteractiveCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full aspect-[3/4] perspective-1000 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      data-testid={`card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-xl border-4 border-card"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={frontImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
            <span className="text-accent font-semibold tracking-wider uppercase text-xs mb-1">{region}</span>
            <h3 className="text-white font-serif text-2xl font-bold leading-tight">{title}</h3>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-xl border-4 border-primary bg-[#F9F6F0] p-6 flex flex-col"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)" 
          }}
        >
          <div className="border-b border-border pb-4 mb-4">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs mb-1 block">{region}</span>
            <h3 className="text-foreground font-serif text-2xl font-bold leading-tight">{title}</h3>
          </div>
          
          <div className="flex-grow">
            <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
              {description}
            </p>
            
            <h4 className="font-semibold text-sm mb-2">Highlights</h4>
            <ul className="space-y-1">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto pt-4 flex justify-between items-center">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Speak Uganda</span>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-serif font-bold text-xs">SU</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
