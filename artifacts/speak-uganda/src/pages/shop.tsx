import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  imagePlaceholder: string; // Using colors or standard shapes as placeholders for products we didn't generate images for
  badge?: string;
}

const products: Product[] = [
  {
    id: "classic",
    name: "Speak Uganda Classic Edition",
    price: "$29.99",
    category: "Base Game",
    description: "The original deck. 100 beautifully illustrated cards covering the core destinations, wildlife, and culture of Uganda.",
    imagePlaceholder: "bg-primary/20",
    badge: "Best Seller"
  },
  {
    id: "wildlife-expansion",
    name: "Wildlife & Safari Expansion",
    price: "$14.99",
    category: "Expansion Pack",
    description: "Add 50 new cards focused entirely on the rich biodiversity, birds, and mammals of the Pearl of Africa.",
    imagePlaceholder: "bg-secondary/20"
  },
  {
    id: "culture-expansion",
    name: "Food & Culture Expansion",
    price: "$14.99",
    category: "Expansion Pack",
    description: "50 cards exploring traditional dishes, local languages, tribes, and cultural heritage sites.",
    imagePlaceholder: "bg-accent/20"
  },
  {
    id: "premium-bundle",
    name: "The Explorer's Bundle",
    price: "$49.99",
    category: "Gift Pack",
    description: "The Classic Edition plus both Wildlife and Culture expansions. Comes in a premium travel pouch.",
    imagePlaceholder: "bg-primary/10",
    badge: "Save 15%"
  },
  {
    id: "sleeves",
    name: "Premium Card Sleeves",
    price: "$9.99",
    category: "Accessories",
    description: "Protect your cards from the elements while traveling. Pack of 200 clear matte sleeves.",
    imagePlaceholder: "bg-muted"
  },
  {
    id: "guide-book",
    name: "Interactive QR Travel Guide",
    price: "$19.99",
    category: "Accessories",
    description: "A companion booklet with detailed itineraries linking all the card destinations into real road trips.",
    imagePlaceholder: "bg-secondary/10"
  }
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6"
          >
            Shop Speak Uganda
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Bring the adventure home. Perfect for game nights, travel planning, or as a unique gift.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
              data-testid={`product-${product.id}`}
            >
              <div className={`aspect-square w-full ${product.imagePlaceholder} relative flex items-center justify-center`}>
                <div className="text-muted-foreground font-serif font-bold text-xl opacity-50">Speak Uganda</div>
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">{product.category}</span>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-foreground">{product.price}</span>
                  <Button className="flex items-center gap-2" data-testid={`btn-add-to-cart-${product.id}`}>
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
