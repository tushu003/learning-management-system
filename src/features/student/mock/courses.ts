
export type Courses = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string; // path under /public/images or remote url
  accent?: string; // optional accent color (Tailwind class)
};

export const coursesres: Courses[] = [
  {
    id: "ai-mathematics",
    title: "Mathematics",
    description:"From basic arithmetic to advanced calculus.",
    image: "/feature/team1.png",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    id: "ai-science",
    title: "Science",
    description:"Physics, Chemistry, Biology & mORE",
    image: "/feature/team1.png",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    id: "ai-english",
    title: "English",
    description:"Literature, Writing & Communication",
    image: "/feature/team1.png",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    id: "ai-languages",
    title: "Languages",
    description:"Spanish, French, German & more",
    image: "/feature/team1.png",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    id: "ai-SocialStudies",
    title: "Social Studies",
    description:"History, Geography & Government",
    image: "/feature/team1.png",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    id: "ai-testing",
    title: "Test Prep",
    description:"SAT, ACT, AP & College Prep",
    image: "/feature/team1.png",
    accent: "from-purple-400 to-indigo-500",
  },

];
