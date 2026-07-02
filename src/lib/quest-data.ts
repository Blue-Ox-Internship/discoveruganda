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

  // === vannyssah-a: Northern region cards ===
  {
    id: "kidepo-valley", code: "D-042", title: "Kidepo Valley", category: "destination", region: "Northern",
    image: img.mountain,
    description: "A breathtaking savannah park in the far northeast, home to cheetahs, lions, zebras and over 470 bird species. One of Africa's last true wildernesses.",
    funFact: "Kidepo's name comes from the Karamojong phrase 'to pick from' — a reference to the abundant wild fruit.",
    mission: "Visit Kidepo or watch a 3-min video about its wildlife in the app.",
    reward: 70, collected: false, completed: false,
    unlocks: ["Safari Guide", "Wildlife Checklist", "Photo Challenge", "Cultural Story"],
  },
  {
    id: "karamojong-dance", code: "C-031", title: "Karamojong Dance", category: "culture", region: "Northern",
    image: img.dance,
    description: "The Karamojong people of northeastern Uganda have a vibrant jumping dance performed during courtship, ceremonies and harvest celebrations.",
    funFact: "Warriors wear striking beaded headdresses and will often jump the highest during competitions.",
    mission: "Watch a Karamojong dance video and learn 2 cultural facts.",
    reward: 40, collected: false, completed: false,
    unlocks: ["Dance Video", "Cultural Story", "Fun Facts"],
  },
  {
    id: "akello", code: "L-004", title: "Akello", category: "language", region: "Northern",
    image: img.bird,
    description: "A warm greeting in the Acholi language meaning 'I am well, how are you?'. One of the most common greetings across northern Uganda.",
    funFact: "Acholi is a Western Nilotic language spoken by over 2 million people in Uganda.",
    mission: "Use 'Akello' with someone from northern Uganda or practice it in the app.",
    reward: 20, collected: false, completed: false,
    unlocks: ["Audio Pronunciation", "Phrase Pack", "Cultural Context"],
  },
  {
    id: "ziwa-rhino", code: "W-015", title: "Ziwa White Rhino", category: "wildlife", region: "Northern",
    image: img.wildlife,
    description: "Ziwa Rhino Sanctuary is the only place in Uganda where you can see rhinos in the wild. A critical conservation success story.",
    funFact: "Ziwa is home to over 30 southern white rhinos and is a key breeding site.",
    mission: "Take a rhino tracking walk or learn 3 facts about rhino conservation.",
    reward: 55, collected: false, completed: false,
    unlocks: ["Conservation Story", "Rhino Facts", "Photo Challenge", "Nearby Experiences"],
  },

  // === vannyssah-a: Eastern region expansion ===
  {
    id: "sipi-falls", code: "D-031", title: "Sipi Falls", category: "destination", region: "Eastern",
    image: img.mountain,
    description: "Three stunning waterfalls cascading down the slopes of Mount Elgon. A paradise for hikers, photographers and nature lovers.",
    funFact: "The falls drop a total of 100 m across three tiers — the highest is 85 m.",
    mission: "Hike to Sipi Falls or watch a drone video of the falls in the app.",
    reward: 50, collected: false, completed: false,
    unlocks: ["Hiking Guide", "Trail Map", "Photo Challenge", "Local Stories"],
  },
  {
    id: "imbalu", code: "C-028", title: "Imbalu", category: "culture", region: "Eastern",
    image: img.craft,
    description: "Imbalu is the traditional circumcision ceremony of the Bagisu people on the slopes of Mount Elgon. A rite of passage into manhood celebrated every even year.",
    funFact: "The ceremony happens only during even-numbered years and attracts thousands of spectators.",
    mission: "Learn 3 facts about Imbalu and watch a cultural documentary clip.",
    reward: 45, collected: false, completed: false,
    unlocks: ["Cultural Film", "Ceremony Guide", "Fun Facts", "Photo Essay"],
  },

  // === vannyssah-a: Western region expansion ===
  {
    id: "queen-elizabeth", code: "W-012", title: "Queen Elizabeth Park", category: "wildlife", region: "Western",
    image: img.wildlife,
    description: "Uganda's most visited national park, famous for tree-climbing lions, Kazinga Channel boat cruises and over 600 bird species.",
    funFact: "The tree-climbing lions of Ishasha are one of only two such populations in the world.",
    mission: "Visit the park or complete a virtual safari quiz in the app.",
    reward: 60, collected: false, completed: false,
    unlocks: ["Safari Guide", "Wildlife Facts", "Boat Cruise Video", "Birding Checklist"],
  },

  // === vannyssah-a: Southwest expansion ===
  {
    id: "lake-bunyonyi", code: "E-018", title: "Lake Bunyonyi", category: "experience", region: "Southwest",
    image: img.destination,
    description: "One of Africa's deepest lakes, with 29 islands, terraced hillsides and a peaceful atmosphere. A perfect place for canoeing and birdwatching.",
    funFact: "At 900 m deep, Bunyonyi is the second deepest lake in Africa.",
    mission: "Take a canoe ride or learn about the lake's legends in the app.",
    reward: 40, collected: false, completed: false,
    unlocks: ["Canoe Guide", "Birding List", "Local Legends", "Photo Challenge"],
  },
  {
    id: "tea-plantations", code: "E-020", title: "Tea Plantations", category: "experience", region: "Southwest",
    image: img.craft,
    description: "Rolling green tea estates stretch across the hills of southwestern Uganda. Visit a plantation, meet the farmers and taste fresh Ugandan tea.",
    funFact: "Uganda is Africa's second largest tea exporter after Kenya.",
    mission: "Tour a tea estate or watch a from-leaf-to-cup video in the app.",
    reward: 30, collected: false, completed: false,
    unlocks: ["Tea Tasting Guide", "Farmers Story", "Brewing Tips", "Sustainability Facts"],
  },

  // === vannyssah-a: Central expansion ===
  {
    id: "kasubi-tombs", code: "D-022", title: "Kasubi Tombs", category: "destination", region: "Central",
    image: img.dance,
    description: "A UNESCO World Heritage site, the Kasubi Tombs are the burial grounds of Buganda kings. An extraordinary example of traditional Ganda architecture built from organic materials.",
    funFact: "The main tomb building is 52 m in diameter and made entirely of reed, bark cloth and wood.",
    mission: "Visit the tombs or take a virtual tour in the app.",
    reward: 45, collected: false, completed: false,
    unlocks: ["History Guide", "Architecture Tour", "Cultural Story", "Photo Gallery"],
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
  { name: "Central",   cards: 8, tagline: "Kingdoms, drums and the Buganda heartland" },
  { name: "Eastern",   cards: 3, tagline: "The Nile, Mount Elgon and Sipi Falls" },
  { name: "Western",   cards: 2, tagline: "Rwenzori glaciers and crater lakes" },
  { name: "Southwest", cards: 3, tagline: "Gorillas, Bwindi and rolling tea hills" },
  { name: "Northern",  cards: 4, tagline: "Kidepo, savannah and Karamojong heritage" },
];

export const ACHIEVEMENTS = [
  { id: "central", title: "Central Uganda Explorer",  desc: "Collect 8 cards in Central Uganda", progress: 5, total: 8, unlocked: false },
  { id: "wildlife", title: "Wildlife Explorer",       desc: "Collect 6 wildlife cards",          progress: 2, total: 8, unlocked: false },
  { id: "cultural", title: "Cultural Explorer",       desc: "Complete 5 culture missions",       progress: 2, total: 6, unlocked: false },
  { id: "eastern", title: "Eastern Explorer",         desc: "Collect 3 cards in Eastern Uganda", progress: 0, total: 3, unlocked: false },
  { id: "northern", title: "Northern Pioneer",        desc: "Collect 4 cards in Northern Uganda",progress: 0, total: 4, unlocked: false },
  { id: "food",    title: "Food Explorer",            desc: "Try 8 Ugandan dishes",              progress: 2, total: 8, unlocked: false },
  { id: "pearl",   title: "Pearl of Africa Master",   desc: "Reach 5,000 Explorer Points",       progress: 2480, total: 5000, unlocked: false },
];

const collectedRegions = new Set(CARDS.filter(c => c.collected).map(c => c.region));

export const PROFILE = {
  name: "Amara Okello",
  handle: "@amara",
  joined: "June 2026",
  explorerPoints: 2480,
  knowledgePoints: 640,
  cards: CARDS.filter(c => c.collected).length,
  missions: CARDS.filter(c => c.completed).length,
  regions: collectedRegions.size,
};

export function getCard(id: string) {
  return CARDS.find(c => c.id === id);
}