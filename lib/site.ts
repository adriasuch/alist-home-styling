export const site = {
  name: "A List Home Styling",
  tagline: "Curated Staging. Elevated Design.",
  description:
    "Boulder, Colorado home staging that helps listings sell faster and for more. Full and partial staging with warm, elevated design and approachable pricing.",
  url: "https://alisthomestyling.com",
  email: "hello@alisthomestyling.com", // placeholder, confirm before launch
  phone: "(303) 555-0100", // placeholder, confirm before launch
  team: [
    { name: "Adria", email: "adria@alisthomestyling.com" },
    { name: "Amanda", email: "amanda@alisthomestyling.com" },
  ],
  city: "Boulder",
  state: "CO",
  instagram: "https://instagram.com/alisthomestyling", // placeholder
  serviceAreas: [
    "Boulder",
    "Louisville",
    "Lafayette",
    "Superior",
    "Longmont",
    "Broomfield",
    "Erie",
    "Denver Metro",
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const packages = [
  {
    name: "Full Staging",
    slug: "full-staging",
    forWho: "Vacant listings that need the works",
    summary:
      "Furniture, art, rugs, and decor for every key room. We transform an empty house into the home buyers can already picture themselves living in.",
    includes: [
      "Design plan tailored to the listing and its buyers",
      "Furniture, art, lighting, and decor from our own inventory",
      "Every key living space styled, from entry to primary suite",
      "Delivery, full setup, and de-staging when it sells",
      "Two months included, simple monthly rate after",
    ],
    image: "/images/living-1.jpg",
  },
  {
    name: "Partial Staging",
    slug: "partial-staging",
    forWho: "Occupied homes that need a lift",
    summary:
      "We work with what you love and fill in the gaps. Fresh art, textiles, and key pieces layered into your existing furniture to make the whole home feel intentional.",
    includes: [
      "Room-by-room walkthrough of what stays, goes, or moves",
      "Curated accents, art, and statement pieces from our inventory",
      "Restyling of your existing furniture and layout",
      "Photo-ready finishing before your listing shoot",
      "Flexible scope, build on or take away as needed",
    ],
    image: "/images/detail-2.jpg",
  },
  {
    name: "Styling Consultation",
    slug: "styling-consultation",
    forWho: "Sellers who want a plan, not a project",
    summary:
      "A walkthrough with our eyes on every room, ending with a clear, prioritized action plan you can tackle yourself before listing.",
    includes: [
      "In-person walkthrough of the full property",
      "Honest, room-by-room recommendations",
      "Prioritized to-do list focused on buyer impact",
      "Guidance on paint, decluttering, and furniture placement",
      "Option to add staging pieces later if you want help",
    ],
    image: "/images/detail-1.jpg",
  },
] as const;
