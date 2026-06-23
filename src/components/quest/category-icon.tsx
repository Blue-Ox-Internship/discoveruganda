import { MessageCircle, Drum, UtensilsCrossed, PawPrint, Mountain, Compass } from "lucide-react";
import type { Category } from "@/lib/quest-data";

const MAP = {
  language: MessageCircle,
  culture: Drum,
  food: UtensilsCrossed,
  wildlife: PawPrint,
  destination: Mountain,
  experience: Compass,
} as const;

export function CategoryIcon({ category, className, style }: { category: Category; className?: string; style?: React.CSSProperties }) {
  const Icon = MAP[category];
  return <Icon className={className} style={style} />;
}