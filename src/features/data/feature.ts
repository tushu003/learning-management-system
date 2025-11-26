export type Feature = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string; // path under /public/images or remote url
  accent?: string; // optional accent color (Tailwind class)
};

export const features: Feature[] = [
  {
    id: "ai-matching",
    title: "AI-Powered Matching",
    subtitle: undefined,
    description:
      "Our intelligent system pairs you with the perfect tutor based on your learning style and goals.",
    image: "/feature/team1.png",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    id: "flexible-scheduling",
    title: "Flexible Scheduling",
    description:
      "Book sessions that fit your schedule and start learning instantly with our on-demand tutoring platform.",
    image: "/feature/Container.png",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    id: "verified-excellence",
    title: "Verified Excellence",
    description:
      "All tutors undergo rigorous screening and continuous performance monitoring to ensure quality.",
    image: "/feature/Container (3).png",
    accent: "from-emerald-400 to-green-500",
  },
  {
    id: "unlimited-support",
    title: "Unlimited Support",
    description:
      "24/7 access to resources, practice materials, and academic support whenever you need it.",
    image: "/public/assets/feature/Container (4).png",
    accent: "from-orange-400 to-pink-400",
  },
];
