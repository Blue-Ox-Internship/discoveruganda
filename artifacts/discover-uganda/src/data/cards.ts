export interface DestinationCard {
  id: string;
  title: string;
  region: string;
  frontImage: string;
  description: string;
  highlights: string[];
}

export const destinations: DestinationCard[] = [
  {
    id: "bwindi",
    title: "Bwindi Impenetrable Forest",
    region: "South Western Uganda",
    frontImage: "/images/card-bwindi.jpg",
    description: "A biologically diverse rainforest, renowned for its population of endangered mountain gorillas and ancient trees.",
    highlights: ["Gorilla Trekking", "UNESCO World Heritage Site", "Bird Watching", "Ancient Rainforest"]
  },
  {
    id: "murchison",
    title: "Murchison Falls",
    region: "North Western Uganda",
    frontImage: "/images/card-murchison.jpg",
    description: "Where the mighty Nile River explodes through a narrow gorge, creating the world's most powerful waterfall.",
    highlights: ["The Waterfall", "Game Drives", "Boat Cruises", "Abundant Wildlife"]
  },
  {
    id: "victoria",
    title: "Lake Victoria",
    region: "Central/Southern Uganda",
    frontImage: "/images/card-victoria.jpg",
    description: "The largest lake in Africa and chief reservoir of the Nile, dotted with beautiful islands and rich fishing grounds.",
    highlights: ["Ssese Islands", "Sunset Cruises", "Sport Fishing", "Relaxing Beaches"]
  },
  {
    id: "rwenzori",
    title: "Rwenzori Mountains",
    region: "Western Uganda",
    frontImage: "/images/card-rwenzori.jpg",
    description: "The legendary 'Mountains of the Moon', featuring snow-capped peaks, alpine valleys, and unique giant flora.",
    highlights: ["High Altitude Hiking", "Margherita Peak", "Unique Flora", "Glaciers on the Equator"]
  },
  {
    id: "jinja",
    title: "Jinja & Source of the Nile",
    region: "Eastern Uganda",
    frontImage: "/images/card-jinja.jpg",
    description: "The adventure capital of East Africa and the historic point where the world's longest river begins its journey.",
    highlights: ["White-Water Rafting", "Source of the Nile", "Bungee Jumping", "Kayaking"]
  },
  {
    id: "queen-elizabeth",
    title: "Queen Elizabeth NP",
    region: "Western Uganda",
    frontImage: "/images/card-queen-elizabeth.jpg",
    description: "Uganda's most popular savannah park, famous for tree-climbing lions, volcanic craters, and the Kazinga Channel.",
    highlights: ["Tree-Climbing Lions", "Kazinga Channel Safari", "Chimpanzee Tracking", "Crater Lakes"]
  },
  {
    id: "kampala",
    title: "Kampala",
    region: "Central Uganda",
    frontImage: "/images/card-kampala.jpg",
    description: "The vibrant, bustling capital city built on seven hills, offering a rich mix of culture, history, and street food.",
    highlights: ["Kasubi Tombs", "Rolex Street Food", "Ndere Centre", "Vibrant Nightlife"]
  },
  {
    id: "kidepo",
    title: "Kidepo Valley",
    region: "North Eastern Uganda",
    frontImage: "/images/card-kidepo.jpg",
    description: "A true, untouched wilderness offering spectacular landscapes and incredible wildlife in Uganda's most remote park.",
    highlights: ["Untouched Wilderness", "Cheetahs & Ostriches", "Karamojong Culture", "Narus Valley"]
  }
];
