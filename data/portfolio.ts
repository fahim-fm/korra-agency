export const CATEGORIES = ["All", "Photography", "Social Media", "Branding", "Ads", "Events"] as const;

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Photography: "Food, product, and brand photography that makes your business look world-class.",
  "Social Media": "Full page management, content creation, and community growth campaigns.",
  Branding: "Logo design, visual identity, and brand guidelines built from scratch.",
  Ads: "Data-driven Meta ad campaigns engineered to generate real revenue.",
  Events: "Professional event coverage, live photography, and memorable moments captured.",
};

export const CATEGORY_LOGOS: Record<string, string> = {
  Photography: "/assets/photo.png",
  "Social Media": "/assets/social.png",
  Branding: "/assets/branding.png",
  Ads: "/assets/ads.png",
  Events: "/assets/events.png",
};

export interface Project {
  id: number;
  image: string;
  title: string;
  client: string;
  category: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    image: "/assets/photo.png",
    title: "Restaurant Brand Shoot",
    client: "Local Food Brand",
    category: "Photography",
  },
  {
    id: 2,
    image: "/assets/photo.png",
    title: "Social Media Growth Campaign",
    client: "Retail Fashion Brand",
    category: "Social Media",
  },
  {
    id: 3,
    image: "/assets/photo.png",
    title: "Brand Identity Redesign",
    client: "F&B Startup",
    category: "Branding",
  },
  {
    id: 4,
    image: "/assets/photo.png",
    title: "Meta Ads — Lead Generation",
    client: "Real Estate Agency",
    category: "Ads",
  },
  {
    id: 5,
    image: "/portfolio/halal.jpg",
    title: "Product Photography",
    client: "Halal Brothers",
    category: "Photography",
  },
  {
    id: 6,
    image: "/portfolio/project-6.jpg",
    title: "Full Digital Presence",
    client: "Cafe Chain",
    category: "Social Media",
  },
  {
    id: 7,
    image: "/portfolio/project-7.jpg",
    title: "Conversion Ad Campaign",
    client: "E-Commerce Store",
    category: "Ads",
  },
  {
    id: 8,
    image: "/portfolio/project-8.jpg",
    title: "Restaurant Logo & Brand Kit",
    client: "Street Food Brand",
    category: "Branding",
  },
  {
    id: 9,
    image: "/portfolio/project-9.jpg",
    title: "Corporate Gala Coverage",
    client: "Tech Summit 2024",
    category: "Events",
  },
  {
    id: 10,
    image: "/portfolio/project-10.jpg",
    title: "Wedding Photography Package",
    client: "Premium Events Co.",
    category: "Events",
  },
];
