import { data } from "@/data";
import { history } from "@/history";
const { breaking, entertainment, health, lifestyle, technology } = data;
const {
  breakingHistory,
  entertainmentHistory,
  healthHistory,
  lifestyleHistory,
  technologyHistory,
} = history;
const navLinks = [
  "breaking",
  "entertainment",
  "health",
  "lifestyle",
  "technology",
];

export default function sitemap() {
  return [
    {
      url: `https://www.briefism.com`,
    },

    ...navLinks.map((i) => ({
      url: `https://www.briefism.com/${i}`,
    })),

    ...[...breaking, ...breakingHistory].map((i) => ({
      url: `https://www.briefism.com/breaking/${i.id}`,
    })),

    ...[...entertainment, ...entertainmentHistory].map((i) => ({
      url: `https://www.briefism.com/entertainment/${i.id}`,
    })),

    ...[...health, ...healthHistory].map((i) => ({
      url: `https://www.briefism.com/health/${i.id}`,
    })),

    ...[...lifestyle, ...lifestyleHistory].map((i) => ({
      url: `https://www.briefism.com/lifestyle/${i.id}`,
    })),

    ...[...technology, ...technologyHistory].map((i) => ({
      url: `https://www.briefism.com/technology/${i.id}`,
    })),
  ];
}
