import RSS from "rss";
import { technology } from "@/data/technology";
import { technologyHistory } from "@/history/technology";
const baseUrl = "https://www.briefism.com";

export async function GET() {
  const feed = new RSS({
    title: "Latest News, Entertainment, Technology and More | Briefism",
    description:
      "Stay informed with Briefism. Get the latest news in a nutshell, delivered with clarity and brevity.",
    generator: "RSS for Node and Next.js",
    site_url: `${baseUrl}`,
    feed_url: `${baseUrl}/technology-feed.xml`,
    managingEditor: "briefism@gmail.com",
    webMaster: "briefism@gmail.com",
    copyright: `Copyright ${new Date().getFullYear().toString()}, Briefism`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  [...technology, ...technologyHistory].map((i) => {
    feed.item({
      title: i.title,
      description: i.preArticle,
      url: `${baseUrl}/technology/${i.id}`,
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
