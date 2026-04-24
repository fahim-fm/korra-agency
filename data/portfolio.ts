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
  Branding: "/assets/brand.png",
  Ads: "/assets/ads.png",
  Events: "/assets/event.png",
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
    image: "/portfolio/ads3.jpeg",
    title: "Food Photography",
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
    image: "/portfolio/ads.jpeg",
    title: "Ator Ad Campaign",
    client: "Local Shop",
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
     image: "/portfolio/halal.jpg",
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
    image: "/portfolio/baiust2.jpeg",
    title: "University Event",
    client: "Baiust 2025",
    category: "Events",
  },
  {
    id: 10,
    image: "/portfolio/school.jpeg",
    title: "School Event",
    client: "Carnival 2026",
    category: "Events",
  },
  {
    id: 11,
    image: "/portfolio/baiust.jpeg",
    title: "University Event",
    client: "Baiust 2025",
    category: "Events",
  },
   {
    id: 12,
    image: "/portfolio/nexter.jpeg",
    title: "Cumilla 15k Run",
    client: "NEXERA Foundation",
    category: "Events",
  },
   {
    id: 13,
    image: "/portfolio/E3.jpeg",
    title: "Edu. Miniver",
    client: "Gold Silver Homes Ltd.",
    category: "Events",
  },
   {
    id: 14,
    image: "/portfolio/e4.jpeg",
    title: "10 years of Excellence",
    client: "Corporate Event",
    category: "Events",
  },
   {
    id: 15,
    image: "/portfolio/ccn.jpeg",
    title: "Convocation Ceremony",
    client: "CCN University",
    category: "Events",
  },
 
];
