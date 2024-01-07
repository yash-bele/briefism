import { data } from "@/data";
import { history } from "@/history";
const baseUrl = "https://www.briefism.com";
const navLinks = [
  "breaking",
  "entertainment",
  "health",
  "lifestyle",
  "technology",
];
const { breaking, entertainment, health, lifestyle, technology } = data;
const {
  breakingHistory,
  entertainmentHistory,
  healthHistory,
  lifestyleHistory,
  technologyHistory,
} = history;

export default function sitemap() {
  return [
    {
      url: baseUrl,
    },

    ...navLinks.map((i) => ({
      url: `${baseUrl}/${i}`,
    })),

    ...[...breaking, ...breakingHistory].map((i) => ({
      url: `${baseUrl}/breaking/${i.id}`,
    })),

    ...[...entertainment, ...entertainmentHistory].map((i) => ({
      url: `${baseUrl}/entertainment/${i.id}`,
    })),

    ...[...health, ...healthHistory].map((i) => ({
      url: `${baseUrl}/health/${i.id}`,
    })),

    ...[...lifestyle, ...lifestyleHistory].map((i) => ({
      url: `${baseUrl}/lifestyle/${i.id}`,
    })),

    ...[...technology, ...technologyHistory].map((i) => ({
      url: `${baseUrl}/technology/${i.id}`,
    })),
  ];
}
