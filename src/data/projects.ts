export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  location: string;
  description: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "villa-aurelia",
    title: "Villa Aurelia",
    category: "Private Residence",
    year: "2025",
    location: "Lake Como, IT",
    description:
      "A sprawling lakeside villa reimagined with warm oak, honed limestone and walls of glass that dissolve the line between interior and garden.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "hearth-loft",
    title: "The Hearth Loft",
    category: "Penthouse Renovation",
    year: "2024",
    location: "New York, US",
    description:
      "A former garment-district loft stripped back to brick and steel, then rebuilt around a sculptural central hearth.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "meridian-hq",
    title: "Meridian HQ",
    category: "Office Interior",
    year: "2024",
    location: "London, UK",
    description:
      "A workplace built for focus and gathering in equal measure — timber joinery, soft acoustics and light-filled break-out rooms.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "casa-lumen",
    title: "Casa Lumen",
    category: "Minimalist Residence",
    year: "2023",
    location: "Ibiza, ES",
    description:
      "A quiet, sun-washed house organised around a single courtyard, designed to hold light the way a bowl holds water.",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "nord-pavilion",
    title: "Nord Pavilion",
    category: "Boutique Hotel Lobby",
    year: "2023",
    location: "Copenhagen, DK",
    description:
      "An arrival sequence of blackened timber, brass and low firelight, built to slow guests down the moment they step inside.",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "the-atrium",
    title: "The Atrium",
    category: "Rooftop Lounge",
    year: "2022",
    location: "Milan, IT",
    description:
      "A rooftop conservatory of steel and glass, planted like a garden and lit like a stage for the city skyline beyond.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
  },
];
