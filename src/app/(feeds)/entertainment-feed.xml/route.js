import RSS from "rss";
import { entertainment } from "@/data/entertainment";
import { entertainmentHistory } from "@/history/entertainment";
const baseUrl = "https://www.briefism.com";

export async function GET() {
  const feed = new RSS({
    title: "Latest News, Entertainment, Technology and More | Briefism",
    description:
      "Stay informed with Briefism. Get the latest news in a nutshell, delivered with clarity and brevity.",
    generator: "RSS for Node and Next.js",
    site_url: `${baseUrl}`,
    feed_url: `${baseUrl}/entertainment-feed.xml`,
    managingEditor: "briefism@gmail.com",
    webMaster: "briefism@gmail.com",
    copyright: `Copyright ${new Date().getFullYear().toString()}, Briefism`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  [...entertainment, ...entertainmentHistory].map((i) => {
    feed.item({
      title: i.title,
      description: i.preArticle,
      url: `${baseUrl}/entertainment/${i.id}`,
      date: i.timestamp,
      enclosure: {
        url: `https://www.briefism.com/_next/image?url=${i.image}&w=1920&q=75`,
        type: "image/jpeg",
        size: 1668,
      },
      // author: "Yash Bele",
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
