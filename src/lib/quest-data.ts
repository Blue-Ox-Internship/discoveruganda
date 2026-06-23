import cards1 from "@/assets/cards-1.png.asset.json";
import cards2 from "@/assets/cards-2.png.asset.json";

export type Category = "language" | "culture" | "food" | "wildlife" | "destination" | "experience";
export type Region = "Central" | "Eastern" | "Western" | "Northern" | "Southwest";

export interface QuestCard {
  id: string;
  code: string;
  title: string;
  category: Category;
  region: Region;
  image: string;
  description: string;
  funFact: string;
  mission: string;
  reward: number;
  collected: boolean;
  completed: boolean;
  unlocks: string[];
}

// Re-use a couple of card photos from the showcase images is messy; use unsplash-ish via image gen would be heavy.
// Mock with a single shared backdrop per category for now.
const img = {
  dance: cards1.url,
  food: cards1.url,
  wildlife: cards1.url,
  destination: cards1.url,
  craft: cards2.url,
  bird: cards2.url,
  mountain: cards2.url,
  matooke: cards2.url,
};

export const CARDS: QuestCard[] = [
  {
    id: "kiganda-dance", code: "C-014", title: "Kiganda Dance", category: "culture", region: "Central",
    image: img.dance,
    description: "A traditional dance of the Baganda people, performed during celebrations, ceremonies and special events. Full of rhythm, storytelling and cultural expression.",
    funFact: "Dancers wear bark-cloth or beaded skirts and move their hips to the rhythm of the engalabi drum.",
    mission: "Watch a Kiganda dance performance or learn 2 dance moves in the app.",
    reward: 40, collected: true, completed: true,
    unlocks: ["Audio Guide", "Cultural Story", "Dance Challenge", "Related Experiences"],
  },
  {
    id: "rolex", code: "F-021", title: "Rolex", category: "food", region: "Central",
    image: img.food,
    description: "The famous Ugandan street food made of a rolled chapati with eggs and vegetables. Simple, tasty and loved by everyone.",
    funFact: "The name comes from 'rolled eggs' — nothing to do with the watch.",
    mission: "Try a Rolex from a local vendor and rate it in the app.",
    reward: 30, collected: true, completed: false,
    unlocks: ["Recipe Video", "Food Fun Facts", "Food Challenge", "Nearby Vendors"],
  },
  {
    id: "mountain-gorilla", code: "W-007", title: "Mountain Gorilla", category: "wildlife", region: "Southwest",
    image: img.wildlife,
    description: "Uganda is home to more than half of the world's remaining mountain gorillas. A rare and unforgettable encounter in their natural habitat.",
    funFact: "An adult silverback can weigh up to 220 kg and is remarkably gentle.",
    mission: "Visit a gorilla family or learn 3 facts about them in the app.",
    reward: 60, collected: true, completed: false,
    unlocks: ["Gorilla Facts", "Conservation Story", "Photo Challenge", "Nearby Experiences"],
  },
  {
    id: "source-of-the-nile", code: "D-005", title: "Source of the Nile", category: "destination", region: "Eastern",
    image: img.destination,
    description: "The Nile River begins its journey in Jinja, Uganda. It is the longest river in the world and a true natural wonder.",
    funFact: "John Hanning Speke identified the source at Lake Victoria in 1858.",
    mission: "Visit the Source of the Nile and take a photo.",
    reward: 50, collected: false, completed: false,
    unlocks: ["History Facts", "Video Experience", "Quiz Challenge", "Nearby Attractions"],
  },
  {
    id: "bark-cloth", code: "C-009", title: "Bark Cloth", category: "culture", region: "Central",
    image: img.craft,
    description: "Bark cloth is a traditional fabric made from the bark of the Mutuba tree. Hand-beaten, dyed and decorated with beautiful patterns used in ceremonies.",
    funFact: "UNESCO inscribed it as a Masterpiece of the Oral and Intangible Heritage of Humanity.",
    mission: "Watch a short video or read more about bark cloth in the app.",
    reward: 40, collected: true, completed: true,
    unlocks: ["Craft Video", "Cultural Story", "Fun Facts", "Craft Challenge"],
  },
  {
    id: "shoebill", code: "W-008", title: "Shoebill", category: "wildlife", region: "Central",
    image: img.bird,
    description: "The Shoebill is a rare bird found in swamps of Uganda. It has a massive shoe-shaped bill and is known for being calm but powerful.",
    funFact: "It stands up to 1.5 m tall and can stay motionless for hours waiting for fish.",
    mission: "Take a photo of a Shoebill or visit Mabamba Swamp.",
    reward: 50, collected: false, completed: false,
    unlocks: ["Bird Facts", "Conservation Info", "Photo Challenge", "Nearby Experiences"],
  },
  {
    id: "rwenzori-mountains", code: "D-006", title: "Rwenzori Mountains", category: "destination", region: "Western",
    image: img.mountain,
    description: "Also known as the 'Mountains of the Moon'. They have glaciers, unique wildlife and amazing hiking trails.",
    funFact: "Margherita Peak is the third highest in Africa at 5,109 m.",
    mission: "Plan an adventure or explore more about hiking in the app.",
    reward: 60, collected: false, completed: false,
    unlocks: ["Hiking Guide", "Trail Map", "Nature Facts", "Packing Challenge"],
  },
  {
    id: "matooke", code: "F-003", title: "Matooke", category: "food", region: "Central",
    image: img.matooke,
    description: "Matooke is a staple food made from steamed green bananas. It is usually served with meat, beans or groundnut sauce.",
    funFact: "It is steamed wrapped in banana leaves to lock in flavor.",
    mission: "Try Matooke at a local restaurant or from a homestay.",
    reward: 30, collected: true, completed: false,
    unlocks: ["Cooking Video", "Food Facts", "Food Challenge", "Best Places Nearby"],
  },
  {
    id: "oli-otya", code: "L-001", title: "Oli Otya", category: "language", region: "Central",
    image: img.dance,
    description: "A warm Luganda greeting meaning 'How are you?'. The friendliest first word you can learn in Uganda.",
    funFact: "Reply 'Gyendi' — 'I am well'.",
    mission: "Use the greeting with three locals during your visit.",
    reward: 20, collected: false, completed: false,
    unlocks: ["Audio Pronunciation", "Phrase Pack", "Conversation Quiz"],
  },
  {
    id: "mabira-canopy", code: "E-012", title: "Mabira Canopy Walk", category: "experience", region: "Central",
    image: img.destination,
    description: "Walk among the treetops of one of Uganda's oldest rainforests, home to red-tailed monkeys and 300+ bird species.",
    funFact: "The forest reserve covers around 306 km².",
    mission: "Complete the canopy walk and log your sighting list.",
    reward: 45, collected: false, completed: false,
    unlocks: ["Forest Guide", "Wildlife Checklist", "Photo Challenge"],
  },
];

export const CATEGORY_META: Record<Category, { label: string; color: string; iconName: string }> = {
  language:    { label: "Language",    color: "#7a8b5a", iconName: "MessageCircle" },
  culture:     { label: "Culture",     color: "#3d4a2a", iconName: "Drum" },
  food:        { label: "Food",        color: "#b8722a", iconName: "UtensilsCrossed" },
  wildlife:    { label: "Wildlife",    color: "#5c4023", iconName: "PawPrint" },
  destination: { label: "Destination", color: "#446b6f", iconName: "Mountain" },
  experience:  { label: "Experience",  color: "#8a5a2b", iconName: "Compass" },
};

export const REGIONS: { name: Region; cards: number; tagline: string }[] = [
  { name: "Central",   cards: 4, tagline: "Kingdoms, drums and the Buganda heartland" },
  { name: "Eastern",   cards: 1, tagline: "The Nile, Mount Elgon and Sipi Falls" },
  { name: "Western",   cards: 1, tagline: "Rwenzori glaciers and crater lakes" },
  { name: "Southwest", cards: 1, tagline: "Gorillas, Bwindi and rolling tea hills" },
  { name: "Northern",  cards: 0, tagline: "Kidepo, savannah and Karamojong heritage" },
];

export const ACHIEVEMENTS = [
  { id: "central", title: "Central Uganda Explorer",  desc: "Collect 4 cards in Central Uganda", progress: 4, total: 4, unlocked: true },
  { id: "wildlife", title: "Wildlife Explorer",       desc: "Collect 6 wildlife cards",          progress: 2, total: 6, unlocked: false },
  { id: "cultural", title: "Cultural Explorer",       desc: "Complete 5 culture missions",       progress: 2, total: 5, unlocked: false },
  { id: "food",    title: "Food Explorer",            desc: "Try 8 Ugandan dishes",              progress: 2, total: 8, unlocked: false },
  { id: "pearl",   title: "Pearl of Africa Master",   desc: "Reach 5,000 Explorer Points",       progress: 2480, total: 5000, unlocked: false },
];

export const PROFILE = {
  name: "Amara Okello",
  handle: "@amara",
  joined: "June 2026",
  explorerPoints: 2480,
  knowledgePoints: 640,
  cards: CARDS.filter(c => c.collected).length,
  missions: CARDS.filter(c => c.completed).length,
  regions: 3,
};

export function getCard(id: string) {
  return CARDS.find(c => c.id === id);
}