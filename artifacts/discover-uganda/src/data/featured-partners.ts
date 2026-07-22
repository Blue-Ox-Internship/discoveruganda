export type PartnerCategory = 'lodge' | 'operator' | 'restaurant' | 'experience';

export interface FeaturedPartner {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  region: string;
  regionCode: 'C' | 'W' | 'N' | 'E';
  ctaUrl: string;
  ctaLabel: string;
  category: PartnerCategory;
}

export const featuredPartners: FeaturedPartner[] = [
  {
    id: "bwindi-lodge",
    name: "Bwindi Forest Lodge",
    tagline: "Sleep steps from the gorillas.",
    description:
      "Eight luxury suites on the edge of the impenetrable forest. Every stay funds community conservation and puts you inside the world's most remarkable wildlife corridor.",
    image: "/images/card-bwindi.jpg",
    region: "Western",
    regionCode: "W",
    ctaUrl: "#",
    ctaLabel: "Book a Stay",
    category: "lodge",
  },
  {
    id: "nile-expeditions",
    name: "Nile Expeditions Uganda",
    tagline: "The source of the world's longest river — yours to explore.",
    description:
      "White-water rafting, kayaking, and guided boat cruises launching from Jinja. Family-run, locally staffed, and operating since 2009.",
    image: "/images/card-jinja.jpg",
    region: "Eastern",
    regionCode: "E",
    ctaUrl: "#",
    ctaLabel: "Book an Experience",
    category: "operator",
  },
  {
    id: "rooftop-kampala",
    name: "Rooftop at the Pearl",
    tagline: "Kampala from seven hills up.",
    description:
      "Contemporary Ugandan cuisine with an open-fire kitchen and panoramic city views. Scan your Kampala card for a 15% booking discount.",
    image: "/images/card-kampala.jpg",
    region: "Central",
    regionCode: "C",
    ctaUrl: "#",
    ctaLabel: "Reserve a Table",
    category: "restaurant",
  },
];
