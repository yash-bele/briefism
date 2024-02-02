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
const { entertainment, health, lifestyle, technology } = data;
const {
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

    ...[...entertainment, ...entertainmentHistory].map((i) => ({
      url: `${baseUrl}/entertainment/${i.id}`,
    })),

    ...[...technology, ...technologyHistory].map((i) => ({
      url: `${baseUrl}/technology/${i.id}`,
    })),

    ...[...lifestyle, ...lifestyleHistory].map((i) => ({
      url: `${baseUrl}/lifestyle/${i.id}`,
    })),

    ...[...health, ...healthHistory].map((i) => ({
      url: `${baseUrl}/health/${i.id}`,
    })),
  ];
}
