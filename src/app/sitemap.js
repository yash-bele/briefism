import { breaking } from "@/data/breaking";
import { breakingHistory } from "@/history/breaking";
import { entertainment } from "@/data/entertainment";
import { entertainmentHistory } from "@/history/entertainment";
import { health } from "@/data/health";
import { healthHistory } from "@/history/health";
import { lifestyle } from "@/data/lifestyle";
import { lifestyleHistory } from "@/history/lifestyle";
import { technology } from "@/data/technology";
import { technologyHistory } from "@/history/technology";
export const navLinks = [
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
